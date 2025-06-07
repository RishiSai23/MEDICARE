import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hospital, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Appointments", path: "/appointments" },
    { name: "News", path: "/news" },
    { name: "Patient Dashboard", path: "/patient-dashboard" },
    { name: "Doctor Dashboard", path: "/doctor-dashboard" },
    { name: "Billing", path: "/billing" },
    { name: "Blog", path: "/blog" },
    { name: "Inventory", path: "/inventory" },
    { name: "Delivery", path: "/delivery" },
    { name: "Admin", path: "/admin" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-hospital-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Hospital className="h-8 w-8 text-hospital-accent" />
            <span className="text-xl font-bold">HospitalAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-hospital-secondary hover:text-hospital-primary ${
                  isActive(item.path)
                    ? "bg-hospital-accent text-hospital-primary"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="hidden lg:flex">
            <Button className="bg-hospital-accent hover:bg-yellow-500 text-hospital-primary font-semibold">
              Emergency
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-hospital-secondary hover:text-hospital-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-hospital-primary border-t border-hospital-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-hospital-accent text-hospital-primary"
                    : "text-white hover:bg-hospital-secondary hover:text-hospital-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-hospital-accent hover:bg-yellow-500 text-hospital-primary font-semibold">
                Emergency
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;