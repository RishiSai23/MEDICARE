import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added

const Doctors = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate programmatically

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      experience: "15 years",
      education: "Harvard Medical School",
      description:
        "Specializes in interventional cardiology and heart disease prevention.",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      experience: "12 years",
      education: "Johns Hopkins University",
      description:
        "Expert in treating neurological disorders and brain injuries.",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image:
        "https://mortensondental.com/wp-content/uploads/2021/02/Emily_Powell.jpg",
      experience: "10 years",
      education: "Stanford Medical School",
      description:
        "Dedicated to providing comprehensive care for children and adolescents.",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
      experience: "18 years",
      education: "Mayo Clinic College",
      description:
        "Specializes in sports medicine and joint replacement surgery.",
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialty: "Dermatology",
      image:
        "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=300&fit=crop&crop=face",
      experience: "8 years",
      education: "UCLA Medical School",
      description:
        "Expert in skin cancer detection and cosmetic dermatology.",
    },
    {
      id: 6,
      name: "Dr. Robert Kumar",
      specialty: "Emergency Medicine",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      experience: "14 years",
      education: "University of Pennsylvania",
      description:
        "Board-certified in emergency medicine and trauma care.",
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [doctors.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * 320,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const filteredDoctors = filter
    ? doctors.filter((doc) => doc.specialty === filter)
    : doctors;

  return (
    <div className="min-h-screen bg-hospital-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-hospital-primary mb-4">
            Our Medical Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of healthcare professionals committed to
            providing exceptional medical care with expertise, compassion, and
            the latest medical technologies.
          </p>
        </div>

        {/* Specialty Filter Dropdown */}
        <div className="mb-8 text-center">
          <label className="text-hospital-primary font-semibold mr-2">
            Filter by Specialty:
          </label>
          <select
            className="px-4 py-2 rounded-md border border-hospital-secondary text-hospital-primary"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All</option>
            {[...new Set(doctors.map((doc) => doc.specialty))].map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        {/* Auto-Scrolling Doctor Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-6 py-4 px-1 scroll-smooth scrollbar-hide"
        >
          {filteredDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="min-w-[300px] max-w-xs flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-28 h-28 rounded-full mx-auto object-cover shadow-md mb-3 border-2 border-hospital-accent"
                  />
                  <h3 className="text-lg font-bold text-hospital-primary mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-hospital-accent font-medium">
                    {doctor.specialty}
                  </p>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    <strong>Experience:</strong> {doctor.experience}
                  </p>
                  <p>
                    <strong>Education:</strong> {doctor.education}
                  </p>
                  <p>{doctor.description}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <Button
                    onClick={() => navigate("/appointment")}
                    className="w-full bg-hospital-primary hover:bg-hospital-dark text-white"
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-hospital-accent text-hospital-accent hover:bg-hospital-accent hover:text-white"
                  >
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-hospital-primary mb-4">
            Ready to Schedule an Appointment?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our medical team is here to provide you with the best healthcare
            experience. Contact us today to book your appointment with one of
            our specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/appointment")}
              className="bg-hospital-accent hover:bg-yellow-500 text-hospital-primary font-semibold"
            >
              Book Online
            </Button>
            <Button
              variant="outline"
              className="border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
