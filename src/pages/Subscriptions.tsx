
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star, Users, Calendar, TrendingUp } from 'lucide-react';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
  premium?: boolean;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 5000,
    duration: 'month',
    features: [
      '1 Parking Spot',
      'Basic Support',
      'Mobile App Access',
      'Payment Gateway',
      'Basic Analytics'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    price: 15000,
    duration: 'month',
    features: [
      '3 Parking Spots',
      'Priority Support',
      'Mobile App Access',
      'Payment Gateway',
      'Advanced Analytics',
      'Spot Sharing Feature',
      'Insurance Discount'
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: 30000,
    duration: 'month',
    features: [
      'Unlimited Parking Spots',
      '24/7 Premium Support',
      'Mobile App Access',
      'Payment Gateway',
      'Advanced Analytics',
      'Spot Sharing Feature',
      'Full Insurance Coverage',
      'Priority Booking',
      'Custom Integration',
      'Dedicated Account Manager'
    ],
    premium: true
  }
];

const currentSubscriptions = [
  {
    id: 'SUB001',
    userEmail: 'john@example.com',
    plan: 'Standard Plan',
    amount: 15000,
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    status: 'active',
    autoRenewal: true
  },
  {
    id: 'SUB002',
    userEmail: 'jane@example.com',
    plan: 'Premium Plan',
    amount: 30000,
    startDate: '2024-01-10',
    endDate: '2024-02-10',
    status: 'active',
    autoRenewal: false
  },
  {
    id: 'SUB003',
    userEmail: 'mike@example.com',
    plan: 'Basic Plan',
    amount: 5000,
    startDate: '2023-12-20',
    endDate: '2024-01-20',
    status: 'expired',
    autoRenewal: true
  }
];

const Subscriptions = () => {
  const getStatusColor = (status: string) => {
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

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Subscription Management</h1>
            <p className="text-gray-600 mt-1">Manage subscription plans and customer subscriptions</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="parking-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-parking-blue" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Subscriptions</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="parking-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-parking-green" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="parking-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-parking-orange" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">₹45,000</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="parking-card">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Crown className="w-8 h-8 text-yellow-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Premium Users</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subscription Plans */}
        <Card className="parking-card">
          <CardHeader>
            <CardTitle>Subscription Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative p-6 rounded-lg border-2 ${
                    plan.premium
                      ? 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-orange-50'
                      : plan.popular
                      ? 'border-parking-blue bg-gradient-to-br from-blue-50 to-green-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-parking-blue text-white">
                      Most Popular
                    </Badge>
                  )}
                  {plan.premium && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white">
                      <Crown className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900">₹{plan.price.toLocaleString()}</span>
                      <span className="text-gray-600 ml-1">/{plan.duration}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-parking-green mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.premium
                        ? 'bg-yellow-500 hover:bg-yellow-600'
                        : plan.popular
                        ? 'bg-parking-blue hover:bg-parking-blue/90'
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    {plan.premium ? 'Get Premium' : plan.popular ? 'Choose Plan' : 'Get Started'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Subscriptions */}
        <Card className="parking-card">
          <CardHeader>
            <CardTitle>Current Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentSubscriptions.map((subscription) => (
                <div key={subscription.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-gray-900">#{subscription.id}</span>
                        <Badge className={getStatusColor(subscription.status)}>
                          {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                        </Badge>
                        {subscription.plan === 'Premium Plan' && (
                          <Crown className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{subscription.userEmail}</p>
                      <p className="text-xs text-gray-500">
                        {subscription.startDate} - {subscription.endDate}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{subscription.plan}</p>
                    <p className="text-sm text-gray-600">₹{subscription.amount.toLocaleString()}/month</p>
                    <p className="text-xs text-gray-500">
                      Auto-renewal: {subscription.autoRenewal ? 'On' : 'Off'}
                    </p>
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

export default Subscriptions;
