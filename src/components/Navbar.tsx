import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Users, Calendar, ImageIcon, MapPin, UserPlus, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "../../public/images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Users },
    { name: "About", path: "/about", icon: Users },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "Gallery", path: "/gallery", icon: ImageIcon },
    { name: "Locations", path: "/locations", icon: MapPin },
    { name: "Register", path: "/register", icon: UserPlus },
    { name: "Contact", path: "/contact", icon: LogIn },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
     <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-all duration-500 ease-in-out hover:shadow-lg">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 transition-all duration-300 ease-in-out">

          {/*Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            {/* Logo image */}
            <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Nepal Agrawal Samaj</h1>
              <p className="text-xs text-muted-foreground">Community United</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md",
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-all duration-200",
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;