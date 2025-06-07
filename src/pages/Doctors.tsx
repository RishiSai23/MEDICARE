import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      experience: "15 years",
      education: "Harvard Medical School",
      description: "Specializes in interventional cardiology and heart disease prevention."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      experience: "12 years",
      education: "Johns Hopkins University",
      description: "Expert in treating neurological disorders and brain injuries."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1594824047254-97d4ac487891?w=300&h=300&fit=crop&crop=face",
      experience: "10 years",
      education: "Stanford Medical School",
      description: "Dedicated to providing comprehensive care for children and adolescents."
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
      experience: "18 years",
      education: "Mayo Clinic College",
      description: "Specializes in sports medicine and joint replacement surgery."
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialty: "Dermatology",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=300&fit=crop&crop=face",
      experience: "8 years",
      education: "UCLA Medical School",
      description: "Expert in skin cancer detection and cosmetic dermatology."
    },
    {
      id: 6,
      name: "Dr. Robert Kumar",
      specialty: "Emergency Medicine",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      experience: "14 years",
      education: "University of Pennsylvania",
      description: "Board-certified in emergency medicine and trauma care."
    }
  ];

  return (
    <div className="min-h-screen bg-hospital-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-hospital-primary mb-4">Our Medical Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of healthcare professionals committed to providing exceptional medical care 
            with expertise, compassion, and the latest medical technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-hospital-primary mb-1">{doctor.name}</h3>
                  <p className="text-hospital-accent font-semibold mb-1">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm">{doctor.experience} experience</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-hospital-primary text-sm">Education:</h4>
                    <p className="text-gray-600 text-sm">{doctor.education}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-hospital-primary text-sm">About:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{doctor.description}</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <Button className="w-full bg-hospital-primary hover:bg-hospital-dark text-white">
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
          <h2 className="text-3xl font-bold text-hospital-primary mb-4">Ready to Schedule an Appointment?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our medical team is here to provide you with the best healthcare experience. 
            Contact us today to book your appointment with one of our specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-hospital-accent hover:bg-yellow-500 text-hospital-primary font-semibold">
              Book Online
            </Button>
            <Button 
              size="lg" 
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