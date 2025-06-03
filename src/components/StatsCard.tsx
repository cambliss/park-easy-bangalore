
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  color?: 'blue' | 'green' | 'orange' | 'gray';
}

export function StatsCard({ title, value, change, icon: Icon, color = 'blue' }: StatsCardProps) {
  const colorClasses = {
    blue: 'text-parking-blue bg-parking-blue-light',
    green: 'text-parking-green bg-parking-green-light',
    orange: 'text-parking-orange bg-parking-orange-light',
    gray: 'text-parking-gray bg-parking-gray-light'
  };

  return (
    <Card className="parking-card animate-slide-in">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
            {change && (
              <p className="text-sm text-parking-green mt-1">{change}</p>
            )}
          </div>
          <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
