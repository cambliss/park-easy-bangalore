
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ParkingSpots from "./pages/ParkingSpots";
import Users from "./pages/Users";
import Subscriptions from "./pages/Subscriptions";
import Insurance from "./pages/Insurance";
import Accessories from "./pages/Accessories";
import AdBanners from "./pages/AdBanners";
import Wallet from "./pages/Wallet";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/spots" element={<ParkingSpots />} />
          <Route path="/users" element={<Users />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/ad-banners" element={<AdBanners />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
