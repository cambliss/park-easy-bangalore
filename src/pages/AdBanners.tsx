
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Eye, Edit, Trash2, TrendingUp, DollarSign } from 'lucide-react';

interface AdBanner {
  id: string;
  title: string;
  advertiser: string;
  position: 'header' | 'sidebar' | 'footer' | 'popup';
  status: 'active' | 'paused' | 'expired';
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  clicks: number;
  impressions: number;
  revenue: number;
}

const adBanners: AdBanner[] = [
  {
    id: 'AD001',
    title: 'Premium Car Insurance',
    advertiser: 'InsuranceMax',
    position: 'header',
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    budget: 50000,
    spent: 32000,
    clicks: 1250,
    impressions: 45000,
    revenue: 8000
  },
  {
    id: 'AD002',
    title: 'Best Car Accessories',
    advertiser: 'AutoParts Pro',
    position: 'sidebar',
    status: 'active',
    startDate: '2024-02-01',
    endDate: '2024-04-30',
    budget: 30000,
    spent: 18000,
    clicks: 890,
    impressions: 28000,
    revenue: 4500
  },
  {
    id: 'AD003',
    title: 'Bike Maintenance Service',
    advertiser: 'BikeService Hub',
    position: 'footer',
    status: 'paused',
    startDate: '2024-01-15',
    endDate: '2024-03-15',
    budget: 20000,
    spent: 15000,
    clicks: 650,
    impressions: 22000,
    revenue: 3000
  }
];

const AdBanners = () => {
  const getStatusColor = (status: AdBanner['status']) => {
    switch (status) {
      case 'active':
        return 'bg-parking-green text-white';
      case 'paused':
        return 'bg-parking-orange text-white';
      case 'expired':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getPositionColor = (position: AdBanner['position']) => {
    switch (position) {
      case 'header':
        return 'bg-blue-100 text-blue-800';
      case 'sidebar':
        return 'bg-green-100 text-green-800';
      case 'footer':
        return 'bg-purple-100 text-purple-800';
      case 'popup':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const totalRevenue = adBanners.reduce((sum, ad) => sum + ad.revenue, 0);
  const activeAds = adBanners.filter(ad => ad.status === 'active').length;
  const totalClicks = adBanners.reduce((sum, ad) => sum + ad.clicks, 0);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Ad Banner Management</h1>
            <p className="text-gray-600 mt-1">Manage advertisements and track revenue</p>
          </div>
          <Button className="bg-parking-blue hover:bg-parking-blue/90">
            <Plus className="w-4 h-4 mr-2" />
            Create New Campaign
          </Button>
        </div>

        {/* Revenue Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="parking-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="w-8 h-8 text-parking-green" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="parking-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-parking-blue" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                  <p className="text-2xl font-bold text-gray-900">{activeAds}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="parking-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Eye className="w-8 h-8 text-parking-orange" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Clicks</p>
                  <p className="text-2xl font-bold text-gray-900">{totalClicks.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="parking-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-parking-gray" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg CTR</p>
                  <p className="text-2xl font-bold text-gray-900">2.8%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ad Campaigns List */}
        <Card className="parking-card">
          <CardHeader>
            <CardTitle>Active Ad Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {adBanners.map((ad) => (
                <div key={ad.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="font-semibold text-gray-900">#{ad.id}</span>
                      <Badge className={getStatusColor(ad.status)}>
                        {ad.status.charAt(0).toUpperCase() + ad.status.slice(1)}
                      </Badge>
                      <Badge className={getPositionColor(ad.position)}>
                        {ad.position.charAt(0).toUpperCase() + ad.position.slice(1)}
                      </Badge>
                    </div>
                    <h3 className="font-medium text-gray-900">{ad.title}</h3>
                    <p className="text-sm text-gray-600">by {ad.advertiser}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {ad.startDate} - {ad.endDate}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center mx-8">
                    <div>
                      <p className="text-sm text-gray-600">Revenue</p>
                      <p className="font-semibold text-parking-green">₹{ad.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Clicks</p>
                      <p className="font-semibold text-gray-900">{ad.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Budget</p>
                      <p className="font-semibold text-gray-900">₹{ad.budget.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Spent</p>
                      <p className="font-semibold text-parking-orange">₹{ad.spent.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
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

export default AdBanners;
