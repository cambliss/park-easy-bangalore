
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ParkingSpot {
  id: string;
  location: string;
  status: 'available' | 'occupied' | 'shared';
  price: number;
}

const spots: ParkingSpot[] = [
  { id: 'A12', location: 'Koramangala Block 4', status: 'occupied', price: 599 },
  { id: 'B05', location: 'Indiranagar Metro', status: 'available', price: 699 },
  { id: 'C08', location: 'Brigade Road', status: 'shared', price: 899 },
  { id: 'D15', location: 'Whitefield Tech Park', status: 'available', price: 799 },
  { id: 'E22', location: 'JP Nagar Mall', status: 'occupied', price: 649 },
];

export function ParkingSpotMap() {
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
    <Card className="parking-card">
      <CardHeader>
        <CardTitle>Parking Spots Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {spots.map((spot) => (
            <div key={spot.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-900">#{spot.id}</span>
                  <Badge className={getStatusColor(spot.status)}>
                    {getStatusText(spot.status)}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">{spot.location}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">₹{spot.price}/month</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
