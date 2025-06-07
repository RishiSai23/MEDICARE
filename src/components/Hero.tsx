import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DoctorSlider from "./DoctorSlider";

const Hero = () => {
  const services = [
    {
      title: "Emergency Care",
      description: "24/7 emergency medical services with advanced trauma care",
      icon: "🚑"
    },
    {
      title: "Specialized Surgery",
      description: "State-of-the-art surgical procedures with expert surgeons",
      icon: "⚕️"
    },
    {
      title: "Diagnostic Imaging",
      description: "Advanced imaging technology for accurate diagnosis",
      icon: "🔬"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hospital-primary to-hospital-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Advanced Healthcare
                <span className="text-hospital-accent block">Management</span>
              </h1>
              <p className="text-xl text-hospital-secondary leading-relaxed">
                Comprehensive digital healthcare solutions for patients, doctors, and hospital administration. 
                Experience the future of medical care management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-hospital-accent hover:bg-yellow-500 text-hospital-primary font-semibold text-lg px-8 py-3"
                >
                  Book Appointment
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-hospital-secondary text-hospital-secondary hover:bg-hospital-secondary hover:text-hospital-primary text-lg px-8 py-3"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-hospital-light rounded-lg p-8 shadow-2xl">
                <div className="text-hospital-primary">
                  <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-hospital-accent">500+</div>
                      <div className="text-sm">Doctors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-hospital-accent">10K+</div>
                      <div className="text-sm">Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-hospital-accent">24/7</div>
                      <div className="text-sm">Emergency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-hospital-accent">50+</div>
                      <div className="text-sm">Departments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 bg-hospital-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hospital-primary mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Providing comprehensive healthcare services with cutting-edge technology and compassionate care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-hospital-secondary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-hospital-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-hospital-accent text-hospital-accent hover:bg-hospital-accent hover:text-white"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Slider Section */}
      <div id="doctors">
        <DoctorSlider />
      </div>
    </div>
  );
};

export default Hero;