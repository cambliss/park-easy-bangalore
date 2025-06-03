
import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Plus, ShoppingCart, Star } from 'lucide-react';

interface Accessory {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  inStock: boolean;
  seller: string;
}

const accessories: Accessory[] = [
  {
    id: 'ACC001',
    name: 'Car Phone Mount',
    category: 'Electronics',
    price: 899,
    originalPrice: 1299,
    rating: 4.5,
    reviews: 128,
    image: '/placeholder.svg',
    inStock: true,
    seller: 'AutoParts Pro'
  },
  {
    id: 'ACC002',
    name: 'Dash Camera HD',
    category: 'Electronics',
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    reviews: 89,
    image: '/placeholder.svg',
    inStock: true,
    seller: 'TechCar Solutions'
  },
  {
    id: 'ACC003',
    name: 'Car Seat Covers',
    category: 'Interior',
    price: 2499,
    rating: 4.2,
    reviews: 205,
    image: '/placeholder.svg',
    inStock: true,
    seller: 'ComfortDrive'
  },
  {
    id: 'ACC004',
    name: 'LED Headlights',
    category: 'Lighting',
    price: 3499,
    originalPrice: 4499,
    rating: 4.6,
    reviews: 156,
    image: '/placeholder.svg',
    inStock: false,
    seller: 'BrightAuto'
  },
  {
    id: 'ACC005',
    name: 'Car Air Freshener',
    category: 'Interior',
    price: 299,
    rating: 4.0,
    reviews: 342,
    image: '/placeholder.svg',
    inStock: true,
    seller: 'FreshCar'
  },
  {
    id: 'ACC006',
    name: 'Bike Phone Holder',
    category: 'Electronics',
    price: 599,
    originalPrice: 899,
    rating: 4.3,
    reviews: 76,
    image: '/placeholder.svg',
    inStock: true,
    seller: 'BikeGear Plus'
  }
];

const Accessories = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Car & Bike Accessories</h1>
            <p className="text-gray-600 mt-1">Browse and manage automotive accessories</p>
          </div>
          <Button className="bg-parking-blue hover:bg-parking-blue/90">
            <Plus className="w-4 h-4 mr-2" />
            Add New Product
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="parking-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search accessories..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Sort</Button>
            </div>
          </CardContent>
        </Card>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((accessory) => (
            <Card key={accessory.id} className="parking-card hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {accessory.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                      {Math.round(((accessory.originalPrice - accessory.price) / accessory.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                  {!accessory.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {accessory.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      {accessory.rating} ({accessory.reviews})
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1">{accessory.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">by {accessory.seller}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-900">₹{accessory.price}</span>
                      {accessory.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">₹{accessory.originalPrice}</span>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      disabled={!accessory.inStock}
                      className="bg-parking-green hover:bg-parking-green/90"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      {accessory.inStock ? 'Add to Cart' : 'Sold Out'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Accessories;
