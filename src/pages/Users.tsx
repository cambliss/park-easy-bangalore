
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Users = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card className="parking-card">
          <CardHeader>
            <CardTitle>User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              User management interface will be implemented here.
              This will include viewing user profiles, managing subscriptions, and user verification.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Users;
