
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Car, Bike, Plus, Eye } from 'lucide-react';

interface InsurancePolicy {
  id: string;
  type: 'car' | 'bike';
  provider: string;
  plan: string;
  coverage: string;
  premium: number;
  duration: string;
  status: 'active' | 'expired' | 'pending';
}

const insurancePolicies: InsurancePolicy[] = [
  {
    id: 'INS001',
    type: 'car',
    provider: 'HDFC ERGO',
    plan: 'Comprehensive Coverage',
    coverage: '₹5,00,000',
    premium: 12000,
    duration: '12 months',
    status: 'active'
  },
  {
    id: 'INS002',
    type: 'bike',
    provider: 'Bajaj Allianz',
    plan: 'Third Party Insurance',
    coverage: '₹1,00,000',
    premium: 2500,
    duration: '12 months',
    status: 'active'
  },
  {
    id: 'INS003',
    type: 'car',
    provider: 'ICICI Lombard',
    plan: 'Zero Depreciation',
    coverage: '₹8,00,000',
    premium: 18000,
    duration: '12 months',
    status: 'expired'
  }
];

const Insurance = () => {
  const getStatusColor = (status: InsurancePolicy['status']) => {
    switch (status) {
      case 'active':
        return 'bg-parking-green text-white';
      case 'expired':
        return 'bg-red-500 text-white';
      case 'pending':
        return 'bg-parking-orange text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getTypeIcon = (type: InsurancePolicy['type']) => {
    return type === 'car' ? Car : Bike;
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Insurance Management</h1>
            <p className="text-gray-600 mt-1">Manage car and bike insurance policies</p>
          </div>
          <Button className="bg-parking-blue hover:bg-parking-blue/90">
            <Plus className="w-4 h-4 mr-2" />
            Add New Policy
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="parking-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-parking-green" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Policies</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="parking-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Car className="w-8 h-8 text-parking-blue" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Car Insurance</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="parking-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Bike className="w-8 h-8 text-parking-orange" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Bike Insurance</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insurance Policies List */}
        <Card className="parking-card">
          <CardHeader>
            <CardTitle>Insurance Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insurancePolicies.map((policy) => {
                const TypeIcon = getTypeIcon(policy.type);
                return (
                  <div key={policy.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <TypeIcon className="w-6 h-6 text-parking-blue" />
                      <div>
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-gray-900">#{policy.id}</span>
                          <Badge className={getStatusColor(policy.status)}>
                            {policy.status.charAt(0).toUpperCase() + policy.status.slice(1)}
                          </Badge>
                          <Badge variant="outline">
                            {policy.type.charAt(0).toUpperCase() + policy.type.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{policy.provider} - {policy.plan}</p>
                        <p className="text-xs text-gray-500">Coverage: {policy.coverage} | Duration: {policy.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{policy.premium}/year</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Insurance;
