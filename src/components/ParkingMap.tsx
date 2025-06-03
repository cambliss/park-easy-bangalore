
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ParkingSpot {
  id: string;
  lat: number;
  lng: number;
  title: string;
  status: 'available' | 'occupied' | 'rented';
  price: number;
}

const mockSpots: ParkingSpot[] = [
  { id: '1', lat: 12.9716, lng: 77.5946, title: 'MG Road Parking', status: 'available', price: 50 },
  { id: '2', lat: 12.9698, lng: 77.6501, title: 'Koramangala Spot', status: 'occupied', price: 40 },
  { id: '3', lat: 12.9279, lng: 77.6271, title: 'HSR Layout', status: 'rented', price: 60 },
  { id: '4', lat: 12.9352, lng: 77.6245, title: 'BTM Layout', status: 'available', price: 45 },
];

export function ParkingMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 12.9716, lng: 77.5946 },
        zoom: 13,
      });

      mapInstanceRef.current = map;

      mockSpots.forEach((spot) => {
        const marker = new window.google.maps.Marker({
          position: { lat: spot.lat, lng: spot.lng },
          map: map,
          title: spot.title,
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="${
                  spot.status === 'available' ? '#10B981' : 
                  spot.status === 'occupied' ? '#EF4444' : '#F59E0B'
                }" stroke="white" stroke-width="2"/>
              </svg>
            `)}`,
            scaledSize: new window.google.maps.Size(24, 24),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-semibold">${spot.title}</h3>
              <p class="text-sm text-gray-600">Status: ${spot.status}</p>
              <p class="text-sm text-gray-600">Price: ₹${spot.price}/hour</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    };

    if (window.google) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      (window as any).initMap = initMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Card className="parking-card">
      <CardHeader>
        <CardTitle>Parking Spots Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={mapRef} className="w-full h-96 rounded-lg" />
        <div className="mt-4 flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-parking-green rounded-full"></div>
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Occupied</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-parking-orange rounded-full"></div>
            <span className="text-sm text-gray-600">Rented</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
