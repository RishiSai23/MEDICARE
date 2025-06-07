import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DoctorSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      experience: "15 years"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      experience: "12 years"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1594824047254-97d4ac487891?w=300&h=300&fit=crop&crop=face",
      experience: "10 years"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
      experience: "18 years"
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialty: "Dermatology",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=300&fit=crop&crop=face",
      experience: "8 years"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleDoctors = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % doctors.length;
      visible.push(doctors[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-hospital-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hospital-primary mb-4">Meet Our Expert Doctors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of experienced healthcare professionals is dedicated to providing you with the best medical care
          </p>
        </div>
        
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {getVisibleDoctors().map((doctor, index) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-hospital-primary mb-2">{doctor.name}</h3>
                  <p className="text-hospital-accent font-semibold mb-1">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.experience} experience</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-hospital-accent text-hospital-accent hover:bg-hospital-accent hover:text-white"
                  >
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* View All Doctors button */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-hospital-accent hover:bg-yellow-500 text-hospital-primary font-semibold"
            >
              View All Doctors
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSlider;