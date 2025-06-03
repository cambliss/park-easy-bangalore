
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { MapPin, Users, Wallet, Calendar, Shield, ShoppingCart, Megaphone } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: MapPin },
  { name: 'Parking Spots', href: '/spots', icon: MapPin },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Subscriptions', href: '/subscriptions', icon: Calendar },
  { name: 'Insurance', href: '/insurance', icon: Shield },
  { name: 'Accessories', href: '/accessories', icon: ShoppingCart },
  { name: 'Ad Banners', href: '/ad-banners', icon: Megaphone },
  { name: 'Wallet', href: '/wallet', icon: Wallet },
];

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  return (
    <div className={cn("bg-white border-r border-gray-200 w-64 min-h-screen", className)}>
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-parking-blue to-parking-green rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">ParkSmart</h1>
        </div>
      </div>
      
      <nav className="px-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "bg-parking-blue text-white"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
