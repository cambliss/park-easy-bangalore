
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ParkingMap } from '@/components/ParkingMap';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Plus } from 'lucide-react';

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

const parkingSpots: ParkingSpot[] = [
  {
    id: 'A12',
    name: 'Koramangala Block 4 - Spot A12',
    location: 'Koramangala Block 4, Bengaluru',
    lat: 12.9352,
    lng: 77.6245,
    status: 'occupied',
    price: 599,
    type: 'subscription'
  },
  {
    id: 'B05',
    name: 'Indiranagar Metro - Spot B05',
    location: 'Indiranagar Metro Station, Bengaluru',
    lat: 12.9784,
    lng: 77.6408,
    status: 'available',
    price: 699,
    type: 'subscription'
  },
  {
    id: 'C08',
    name: 'Brigade Road - Spot C08',
    location: 'Brigade Road, Bengaluru',
    lat: 12.9716,
    lng: 77.6099,
    status: 'shared',
    price: 50,
    type: 'rental'
  },
  {
    id: 'D15',
    name: 'Whitefield Tech Park - Spot D15',
    location: 'Whitefield, Bengaluru',
    lat: 12.9698,
    lng: 77.7500,
    status: 'available',
    price: 799,
    type: 'subscription'
  },
  {
    id: 'E22',
    name: 'JP Nagar Mall - Spot E22',
    location: 'JP Nagar, Bengaluru',
    lat: 12.9082,
    lng: 77.5833,
    status: 'occupied',
    price: 30,
    type: 'rental'
  }
];

const ParkingSpots = () => {
  const getStatusColor = (status: ParkingSpot['status']) => {
    switch (status) {
      case 'available':
        return 'bg-parking-green text-white';
      case 'occupied':
        return 'bg-parking-blue text-white';
      case 'shared':
        return 'bg-parking-orange text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusText = (status: ParkingSpot['status']) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'occupied':
        return 'Occupied';
      case 'shared':
        return 'Shared';
      default:
        return 'Unknown';
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Parking Spots Management</h1>
            <p className="text-gray-600 mt-1">Manage parking locations and availability</p>
          </div>
          <Button className="bg-parking-blue hover:bg-parking-blue/90">
            <Plus className="w-4 h-4 mr-2" />
            Add New Spot
          </Button>
        </div>

        {/* Map Section */}
        <Card className="parking-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-parking-blue" />
              Parking Spots Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 rounded-lg overflow-hidden">
              <ParkingMap spots={parkingSpots} />
            </div>
          </CardContent>
        </Card>

        {/* Spots List */}
        <Card className="parking-card">
          <CardHeader>
            <CardTitle>All Parking Spots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {parkingSpots.map((spot) => (
                <div key={spot.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-gray-900">#{spot.id}</span>
                      <Badge className={getStatusColor(spot.status)}>
                        {getStatusText(spot.status)}
                      </Badge>
                      <Badge variant="outline">
                        {spot.type === 'subscription' ? 'Monthly' : 'Hourly'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{spot.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      ₹{spot.price}{spot.type === 'subscription' ? '/month' : '/hour'}
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ParkingSpots;
