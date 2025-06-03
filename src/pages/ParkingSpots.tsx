
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ParkingSpots = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card className="parking-card">
          <CardHeader>
            <CardTitle>Parking Spots Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Parking spots management interface will be implemented here.
              This will include adding new spots, editing existing ones, and managing availability.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ParkingSpots;
