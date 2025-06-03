
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Activity {
  id: string;
  user: string;
  action: string;
  time: string;
  type: 'booking' | 'payment' | 'rental';
}

const activities: Activity[] = [
  {
    id: '1',
    user: 'Rajesh Kumar',
    action: 'Booked parking spot #A12',
    time: '2 minutes ago',
    type: 'booking'
  },
  {
    id: '2',
    user: 'Priya Sharma',
    action: 'Shared parking spot for rent',
    time: '15 minutes ago',
    type: 'rental'
  },
  {
    id: '3',
    user: 'Amit Patel',
    action: 'Payment successful - ₹599',
    time: '1 hour ago',
    type: 'payment'
  },
  {
    id: '4',
    user: 'Sneha Reddy',
    action: 'Subscription renewed',
    time: '2 hours ago',
    type: 'payment'
  }
];

export function RecentActivity() {
  const getActivityColor = (type: Activity['type']) => {
    switch (type) {
      case 'booking':
        return 'text-parking-blue';
      case 'payment':
        return 'text-parking-green';
      case 'rental':
        return 'text-parking-orange';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card className="parking-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {activity.user}
                </p>
                <p className={`text-sm ${getActivityColor(activity.type)}`}>
                  {activity.action}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
