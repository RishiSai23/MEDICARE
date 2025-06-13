import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ChevronDown, Hospital, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    {
      name: "Chatbots",
      path: "/chatbots",
      dropdown: [
        { name: "Symptom Checker", path: "/chatbots/symptom-checker" },
        { name: "Mental Health Bot", path: "/chatbots/mental-health" },
        { name: "Recovery Tracker", path: "/chatbots/recovery-tracker" },
      ],
    },
    { name: "Doctors", path: "/doctors" },
    { name: "Login", path: "/login" },
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
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      className="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-hospital-secondary hover:text-hospital-primary text-white"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {dropdownOpen && (
                      <div
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-hospital-light hover:text-hospital-primary transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-hospital-secondary hover:text-hospital-primary ${
                      isActive(item.path)
                        ? "bg-hospital-accent text-hospital-primary"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-hospital-secondary">Welcome, {user.name}</span>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="border-hospital-secondary text-hospital-secondary hover:bg-hospital-secondary hover:text-hospital-primary"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button className="bg-hospital-accent hover:bg-yellow-500 text-hospital-primary font-semibold">
                Emergency
              </Button>
            )}
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
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <div className="px-3 py-2 text-base font-medium text-white">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-hospital-secondary hover:bg-hospital-secondary hover:text-hospital-primary rounded-md transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
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
                )}
              </div>
            ))}

            {user ? (
              <div className="pt-2 space-y-2">
                <div className="px-3 py-2 text-sm text-hospital-secondary">
                  Welcome, {user.name}
                </div>
                <Button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full bg-hospital-secondary hover:bg-hospital-light text-hospital-primary font-semibold"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="pt-2">
                <Button className="w-full bg-hospital-accent hover:bg-yellow-500 text-hospital-primary font-semibold">
                  Emergency
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
