
import { DashboardLayout } from '@/components/DashboardLayout';
import { StatsCard } from '@/components/StatsCard';
import { RecentActivity } from '@/components/RecentActivity';
import { ParkingSpotMap } from '@/components/ParkingSpotMap';
import { MapPin, Users, Wallet, Calendar } from 'lucide-react';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Parking Spots"
            value="1,247"
            change="+12% from last month"
            icon={MapPin}
            color="blue"
          />
          <StatsCard
            title="Active Users"
            value="3,892"
            change="+8% from last month"
            icon={Users}
            color="green"
          />
          <StatsCard
            title="Monthly Revenue"
            value="₹2,45,000"
            change="+18% from last month"
            icon={Wallet}
            color="orange"
          />
          <StatsCard
            title="Active Subscriptions"
            value="2,156"
            change="+5% from last month"
            icon={Calendar}
            color="gray"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <ParkingSpotMap />
          </div>
          <div className="space-y-6">
            <RecentActivity />
            
            {/* Quick Actions */}
            <div className="parking-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <MapPin className="w-6 h-6 text-parking-blue mb-2" />
                  <div className="font-medium text-gray-900">Add Parking Spot</div>
                  <div className="text-sm text-gray-600">Create new spot</div>
                </button>
                <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Users className="w-6 h-6 text-parking-green mb-2" />
                  <div className="font-medium text-gray-900">Manage Users</div>
                  <div className="text-sm text-gray-600">View all users</div>
                </button>
                <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar className="w-6 h-6 text-parking-orange mb-2" />
                  <div className="font-medium text-gray-900">Subscriptions</div>
                  <div className="text-sm text-gray-600">Manage plans</div>
                </button>
                <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Wallet className="w-6 h-6 text-parking-gray mb-2" />
                  <div className="font-medium text-gray-900">Financial Reports</div>
                  <div className="text-sm text-gray-600">View analytics</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Chart Placeholder */}
        <div className="parking-card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Analytics</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Analytics chart will be implemented here</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
