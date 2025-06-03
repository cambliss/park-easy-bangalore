
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Subscriptions = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card className="parking-card">
          <CardHeader>
            <CardTitle>Subscription Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Subscription management interface will be implemented here.
              This will include creating plans, managing renewals, and tracking subscription analytics.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Subscriptions;
