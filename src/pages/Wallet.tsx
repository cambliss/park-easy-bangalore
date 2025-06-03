
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Wallet = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card className="parking-card">
          <CardHeader>
            <CardTitle>Wallet & Financial Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Wallet and financial management interface will be implemented here.
              This will include payment tracking, revenue analytics, and transaction history.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Wallet;
