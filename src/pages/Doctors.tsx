import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Moon, Star, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Doctors.css";

const Doctors = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    const specialties = ["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology"];
    const sampleDoctors = [
      {
        name: "Dr. Ayesha Siddiqui",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        experience: "15 years",
        education: "Harvard Medical School",
        description: "Specializes in interventional cardiology and heart disease prevention.",
        rating: 4.9,
        location: "Jaipur, India",
        availability: "Mon - Thu, 8 AM - 12 PM"
      },
      {
        name: "Dr. Arjun Patel",
        image: "https://randomuser.me/api/portraits/men/64.jpg",
        experience: "12 years",
        education: "Johns Hopkins University",
        description: "Expert in treating neurological disorders and brain injuries.",
        rating: 4.7,
        location: "Chennai, India",
        availability: "Mon - Fri, 10 AM - 4 PM"
      },
      {
        name: "Dr. Priya Menon",
        image: "https://randomuser.me/api/portraits/women/58.jpg",
        experience: "10 years",
        education: "Stanford Medical School",
        description: "Dedicated to providing comprehensive care for children and adolescents.",
        rating: 4.8,
        location: "Mumbai, India",
        availability: "Tue - Sat, 11 AM - 5 PM"
      },
      {
        name: "Dr. Karan Verma",
        image: "https://randomuser.me/api/portraits/men/61.jpg",
        experience: "18 years",
        education: "Mayo Clinic College",
        description: "Specializes in sports medicine and joint replacement surgery.",
        rating: 4.6,
        location: "Bangalore, India",
        availability: "Mon - Thu, 9 AM - 3 PM"
      },
      {
        name: "Dr. Sneha Rao",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        experience: "8 years",
        education: "UCLA Medical School",
        description: "Expert in skin cancer detection and cosmetic dermatology.",
        rating: 4.5,
        location: "Pune, India",
        availability: "Tue - Sat, 12 PM - 6 PM"
      },
      {
        name: "Dr. Rohan Mehra",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        experience: "11 years",
        education: "NYU School of Medicine",
        description: "Focused on heart failure and cardiac imaging.",
        rating: 4.6,
        location: "Kolkata, India",
        availability: "Wed - Sun, 3 PM - 9 PM"
      },
      {
        name: "Dr. Alisha Jain",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        experience: "9 years",
        education: "Yale School of Medicine",
        description: "Special interest in pediatric neurology.",
        rating: 4.7,
        location: "Surat, India",
        availability: "Tue - Sat, 10 AM - 4 PM"
      },
      {
        name: "Dr. Dev Shah",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        experience: "13 years",
        education: "Cleveland Clinic Lerner College",
        description: "Focused on orthopedic trauma and bone health.",
        rating: 4.6,
        location: "Jaipur, India",
        availability: "Mon - Thu, 8 AM - 12 PM"
      },
      {
        name: "Dr. Isha Kapoor",
        image: "https://randomuser.me/api/portraits/women/43.jpg",
        experience: "7 years",
        education: "Duke University School of Medicine",
        description: "Provides dermatological care for complex skin conditions.",
        rating: 4.5,
        location: "Kolkata, India",
        availability: "Wed - Sun, 3 PM - 9 PM"
      },
      {
        name: "Dr. Aman Bhatia",
        image: "https://randomuser.me/api/portraits/men/40.jpg",
        experience: "14 years",
        education: "Mount Sinai School of Medicine",
        description: "Specializes in pediatric development and behavioral health.",
        rating: 4.8,
        location: "Ahmedabad, India",
        availability: "Mon - Fri, 9 AM - 1 PM"
      },
      {
        name: "Dr. Meena Krishnan",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        experience: "16 years",
        education: "AIIMS Delhi",
        description: "Cardiology expert with a focus on preventive care.",
        rating: 4.8,
        location: "Delhi, India",
        availability: "Mon - Thu, 8 AM - 12 PM"
      },
      {
        name: "Dr. Ravi Shankar",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        experience: "14 years",
        education: "CMC Vellore",
        description: "Neurologist specializing in stroke and seizures.",
        rating: 4.6,
        location: "Bangalore, India",
        availability: "Tue - Fri, 9 AM - 1 PM"
      },
      {
        name: "Dr. Aarti Nair",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
        experience: "11 years",
        education: "JIPMER Puducherry",
        description: "Pediatrician with deep care for children’s health.",
        rating: 4.9,
        location: "Mumbai, India",
        availability: "Wed - Sat, 10 AM - 2 PM"
      },
      {
        name: "Dr. Vikram Desai",
        image: "https://randomuser.me/api/portraits/men/24.jpg",
        experience: "17 years",
        education: "KEM Hospital",
        description: "Orthopedic surgeon expert in bone and joint care.",
        rating: 4.7,
        location: "Chennai, India",
        availability: "Mon - Fri, 10 AM - 4 PM"
      },
      {
        name: "Dr. Kavita Rao",
        image: "https://randomuser.me/api/portraits/women/25.jpg",
        experience: "10 years",
        education: "NIMHANS",
        description: "Renowned dermatologist with specialization in skin therapy.",
        rating: 4.5,
        location: "Hyderabad, India",
        availability: "Tue - Sat, 12 PM - 5 PM"
      },
      {
        name: "Dr. Imran Sheikh",
        image: "https://randomuser.me/api/portraits/men/26.jpg",
        experience: "9 years",
        education: "PGI Chandigarh",
        description: "Advanced heart disease specialist.",
        rating: 4.7,
        location: "Ahmedabad, India",
        availability: "Wed - Sat, 9 AM - 1 PM"
      },
      {
        name: "Dr. Latha Suresh",
        image: "https://randomuser.me/api/portraits/women/27.jpg",
        experience: "13 years",
        education: "RGUHS Bangalore",
        description: "Neurosurgeon with deep skill in complex cases.",
        rating: 4.6,
        location: "Kochi, India",
        availability: "Mon - Thu, 10 AM - 3 PM"
      },
      {
        name: "Dr. Pranav Mishra",
        image: "https://randomuser.me/api/portraits/men/28.jpg",
        experience: "12 years",
        education: "Grant Medical College",
        description: "Pediatrician with child behavioral expertise.",
        rating: 4.8,
        location: "Indore, India",
        availability: "Tue - Fri, 11 AM - 5 PM"
      },
      {
        name: "Dr. Nisha Thakur",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
        experience: "10 years",
        education: "AFMC Pune",
        description: "Dermatology expert with cosmetic dermatology focus.",
        rating: 4.6,
        location: "Nagpur, India",
        availability: "Mon - Fri, 1 PM - 6 PM"
      },
      {
        name: "Dr. Anirudh Reddy",
        image: "https://randomuser.me/api/portraits/men/30.jpg",
        experience: "15 years",
        education: "Osmania Medical College",
        description: "Senior Orthopedic specialist with surgical experience.",
        rating: 4.9,
        location: "Vizag, India",
        availability: "Tue - Sat, 8 AM - 12 PM"
      }
    ];

    const extendedDoctors = specialties.flatMap((specialty, sIndex) =>
      Array.from({ length: 5 }).map((_, i) => ({
        id: sIndex * 10 + i + 1,
        name: `Dr. ${specialty} ${i + 1}`,
        specialty,
        ...sampleDoctors[(sIndex + i) % sampleDoctors.length],
      }))
    );

    setDoctors(extendedDoctors);
  };

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  const groupedDoctors = filteredDoctors.reduce((acc, doc) => {
    if (!acc[doc.specialty]) acc[doc.specialty] = [];
    acc[doc.specialty].push(doc);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className={`space-y-16 p-6 min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-yellow-400" : "bg-white text-hospital-primary"}`}>
      <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
        <Input
          placeholder="Search by doctor name or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 focus:border-blue-500 bg-white/80 backdrop-blur-sm shadow-lg"
        />
        <Button onClick={() => setDarkMode(!darkMode)} className="ml-4">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div>

      {Object.entries(groupedDoctors).map(([specialty, docs]) => (
        <div key={specialty} className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4 border-b pb-2 drop-shadow-md">
            {specialty}
          </h2>
          <div className="overflow-hidden relative">
            <div
              className="marquee-track flex gap-6 whitespace-nowrap"
              style={{ animationDuration: `${docs.length * 5}s` }}
            >
              {[...docs, ...docs].map((doctor, index) => (
                <Card
                  key={`${doctor.id}-${index}`}
                  className="w-[300px] bg-white/90 dark:bg-white/10 rounded-xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:-translate-y-1 cursor-pointer backdrop-blur-md"
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-hospital-accent shadow-md"
                      />
                      <h3 className="text-lg font-bold mt-2">
                        {doctor.name}
                      </h3>
                      <p className="text-sm">{doctor.specialty}</p>
                    </div>
                    <div className="text-sm space-y-1">
                      <p><strong>Experience:</strong> {doctor.experience}</p>
                      <p><strong>Education:</strong> {doctor.education}</p>
                      <p className="line-clamp-3">{doctor.description}</p>
                      <p><strong>Availability:</strong> {doctor.availability}</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500 mt-2">
                      {[...Array(Math.round(doctor.rating))].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500" />
                      ))}
                      <span className="text-xs">({doctor.rating})</span>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/appointment");
                        }}
                        className="w-full bg-hospital-primary hover:bg-hospital-dark text-white"
                      >
                        Book Appointment
                      </Button>
                      <Button
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDoctor(doctor);
                        }}
                        className="w-full border-hospital-accent text-hospital-accent hover:bg-hospital-accent hover:text-white"
                      >
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ))}

      <Dialog open={!!selectedDoctor} onOpenChange={() => setSelectedDoctor(null)}>
        {selectedDoctor && (
          <DialogContent className="max-w-md bg-white/90 dark:bg-gray-800 backdrop-blur-md">
            <DialogHeader>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">
                  {selectedDoctor.name}
                </h3>
                <Button variant="ghost" onClick={() => setSelectedDoctor(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm">{selectedDoctor.specialty}</p>
            </DialogHeader>
            <div className="space-y-2 text-sm">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-28 h-28 rounded-full mx-auto object-cover border-2 border-hospital-accent"
              />
              <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
              <p><strong>Education:</strong> {selectedDoctor.education}</p>
              <p>{selectedDoctor.description}</p>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(Math.round(selectedDoctor.rating))].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500" />
                ))}
                <span className="text-xs">({selectedDoctor.rating})</span>
              </div>
              <p><strong>Availability:</strong> {selectedDoctor.availability}</p>
              <p><strong>Location:</strong> {selectedDoctor.location}</p>
              <Button className="w-full mt-4 bg-hospital-primary hover:bg-hospital-dark text-white">
                Book Now
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default Doctors;
