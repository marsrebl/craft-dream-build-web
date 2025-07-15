
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";
import SuperAdminPanel from "@/components/SuperAdminPanel";
import AdminLogin from "@/components/AdminLogin";
import { useAdminPanel } from "@/hooks/useAdminPanel";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const {
    showAdminPanel,
    showSuperAdminPanel,
    showAdminLogin,
    currentLocation,
    isLoading,
    closeAdminPanel,
    closeSuperAdminPanel,
    handleLogin,
    closeLogin
  } = useAdminPanel();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:locationId" element={<LocationDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <AdminLogin
          onClose={closeLogin}
          onLogin={handleLogin}
          role={showAdminLogin}
          isLoading={isLoading}
        />
      )}

      {/* Admin Panels */}
      {showAdminPanel && currentLocation && (
        <AdminPanel 
          location={currentLocation} 
          onClose={closeAdminPanel}
        />
      )}
      
      {showSuperAdminPanel && (
        <SuperAdminPanel 
          onClose={closeSuperAdminPanel}
        />
      )}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
