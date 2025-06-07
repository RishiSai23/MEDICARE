import { Hospital } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hospital-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Hospital className="h-8 w-8 text-hospital-accent" />
              <span className="text-xl font-bold">HospitalAI</span>
            </div>
            <p className="text-hospital-secondary leading-relaxed max-w-md">
              Advanced healthcare management system providing comprehensive medical services 
              with cutting-edge technology and compassionate patient care.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Emergency Contact</h4>
              <p className="text-hospital-accent text-xl font-bold">+1 (555) 911-HELP</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-hospital-secondary">
              <li><a href="/appointments" className="hover:text-hospital-accent transition-colors">Book Appointment</a></li>
              <li><a href="/patient-dashboard" className="hover:text-hospital-accent transition-colors">Patient Portal</a></li>
              <li><a href="/doctor-dashboard" className="hover:text-hospital-accent transition-colors">Doctor Portal</a></li>
              <li><a href="/billing" className="hover:text-hospital-accent transition-colors">Billing</a></li>
              <li><a href="/blog" className="hover:text-hospital-accent transition-colors">Health Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-hospital-secondary">
              <p>123 Medical Center Drive</p>
              <p>Healthcare City, HC 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@hospitalai.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-hospital-secondary/30 mt-8 pt-8 text-center text-hospital-secondary">
          <p>&copy; 2024 HospitalAI. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;