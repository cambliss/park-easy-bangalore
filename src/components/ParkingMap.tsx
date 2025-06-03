
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ParkingSpot {
  id: string;
  name: string;
  location: string;
  lat: number;
  lng: number;
  status: 'available' | 'occupied' | 'shared';
  price: number;
  type: 'subscription' | 'rental';
}

interface ParkingMapProps {
  spots: ParkingSpot[];
}

export function ParkingMap({ spots }: ParkingMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const [apiKey, setApiKey] = useState<string>('');
  const [isApiKeySet, setIsApiKeySet] = useState(false);

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    // Center on Bangalore
    const bangaloreCenter = { lat: 12.9716, lng: 77.5946 };

    mapInstanceRef.current = new google.maps.Map(mapRef.current, {
      zoom: 12,
      center: bangaloreCenter,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // Add markers for each parking spot
    spots.forEach(spot => {
      const marker = new google.maps.Marker({
        position: { lat: spot.lat, lng: spot.lng },
        map: mapInstanceRef.current,
        title: spot.name,
        icon: getMarkerIcon(spot.status)
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold;">${spot.name}</h3>
            <p style="margin: 0 0 4px 0; color: #666; font-size: 14px;">${spot.location}</p>
            <p style="margin: 0 0 4px 0; font-size: 14px;">
              <span style="color: ${getStatusColor(spot.status)}; font-weight: bold;">
                ${getStatusText(spot.status)}
              </span>
            </p>
            <p style="margin: 0; font-weight: bold; color: #333;">
              ₹${spot.price}${spot.type === 'subscription' ? '/month' : '/hour'}
            </p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstanceRef.current, marker);
      });

      markersRef.current.push(marker);
    });
  };

  const getMarkerIcon = (status: string) => {
    const color = status === 'available' ? '#00CC66' : 
                 status === 'shared' ? '#FF9933' : '#0066CC';
    
    return {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: color,
      fillOpacity: 0.8,
      strokeColor: '#ffffff',
      strokeWeight: 2,
      scale: 8
    };
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return '#00CC66';
      case 'shared': return '#FF9933';
      case 'occupied': return '#0066CC';
      default: return '#666666';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available';
      case 'shared': return 'Shared';
      case 'occupied': return 'Occupied';
      default: return 'Unknown';
    }
  };

  const loadGoogleMapsScript = () => {
    if (window.google || !apiKey) return;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initializeMap;
    document.head.appendChild(script);
  };

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      setIsApiKeySet(true);
      localStorage.setItem('googleMapsApiKey', apiKey);
      loadGoogleMapsScript();
    }
  };

  useEffect(() => {
    const savedApiKey = localStorage.getItem('googleMapsApiKey');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setIsApiKeySet(true);
      loadGoogleMapsScript();
    }
  }, []);

  useEffect(() => {
    if (window.google && mapInstanceRef.current) {
      initializeMap();
    }
  }, [spots]);

  if (!isApiKeySet) {
    return (
      <Card className="w-full h-full flex items-center justify-center">
        <CardContent className="text-center p-8">
          <h3 className="text-lg font-semibold mb-4">Google Maps API Key Required</h3>
          <p className="text-gray-600 mb-4">
            Please enter your Google Maps API key to display the parking spots map.
          </p>
          <div className="flex space-x-2 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Enter Google Maps API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleApiKeySubmit}>
              Load Map
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Get your API key from the{' '}
            <a 
              href="https://console.cloud.google.com/google/maps-apis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-parking-blue hover:underline"
            >
              Google Cloud Console
            </a>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full h-full relative">
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      
      {/* Legend */}
      <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md">
        <h4 className="font-semibold text-sm mb-2">Status Legend</h4>
        <div className="space-y-1">
          <div className="flex items-center text-xs">
            <div className="w-3 h-3 rounded-full bg-parking-green mr-2"></div>
            Available
          </div>
          <div className="flex items-center text-xs">
            <div className="w-3 h-3 rounded-full bg-parking-orange mr-2"></div>
            Shared
          </div>
          <div className="flex items-center text-xs">
            <div className="w-3 h-3 rounded-full bg-parking-blue mr-2"></div>
            Occupied
          </div>
        </div>
      </div>
    </div>
  );
}
