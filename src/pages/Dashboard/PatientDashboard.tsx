// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { useAuth } from "@/contexts/AuthContext";

// import { supabase } from "@/lib/supabaseClient";
// import {
//   ActivitySquare,
//   BarChart3,
//   LogOut,
//   Search,
//   Settings2,
//   ShieldCheck,
//   Stethoscope,
//   UserCircle,
//   Users,
// } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// const PatientDashboard = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     navigate("/login");
//   };
//   return (
//     <div className="min-h-screen bg-hospital-light">
//       <div className="absolute top-4 right-4 flex items-center space-x-2">
//         <Button
//           onClick={handleLogout}
//           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 flex items-center"
//         >
//           <LogOut className="mr-2 h-4 w-4" />
//           Logout
//         </Button>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-hospital-primary mb-4">
//             Welcome back, {user?.name}!
//           </h1>
//           <p className="text-xl text-gray-600">Your Patient Dashboard</p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-6">
//           {/* Appointments */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-hospital-primary">
//                 Upcoming Appointments
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 <div className="p-3 border-l-4 border-hospital-accent bg-white rounded">
//                   <p className="font-semibold">Dr. Sarah Johnson</p>
//                   <p className="text-sm text-gray-600">
//                     Cardiology - Dec 15, 2024 at 2:00 PM
//                   </p>
//                 </div>
//                 <div className="p-3 border-l-4 border-hospital-secondary bg-white rounded">
//                   <p className="font-semibold">Dr. Michael Chen</p>
//                   <p className="text-sm text-gray-600">
//                     Neurology - Dec 20, 2024 at 10:30 AM
//                   </p>
//                 </div>
//               </div>
//               <Button className="w-full mt-4 bg-hospital-primary hover:bg-hospital-dark text-white">
//                 Book New Appointment
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Medical Records */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-hospital-primary">
//                 Recent Medical Records
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 <div className="p-3 bg-hospital-light rounded">
//                   <p className="font-semibold">Blood Test Results</p>
//                   <p className="text-sm text-gray-600">Dec 10, 2024</p>
//                 </div>
//                 <div className="p-3 bg-hospital-light rounded">
//                   <p className="font-semibold">X-Ray Report</p>
//                   <p className="text-sm text-gray-600">Dec 5, 2024</p>
//                 </div>
//               </div>
//               <Button variant="outline" className="w-full mt-4">
//                 View All Records
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Quick Actions */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-hospital-primary">
//                 Quick Actions
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               <Button className="w-full bg-hospital-accent hover:bg-yellow-500 text-hospital-primary">
//                 Request Prescription Refill
//               </Button>
//               <Button variant="outline" className="w-full">
//                 Message Doctor
//               </Button>
//               <Button variant="outline" className="w-full">
//                 Pay Bills
//               </Button>
//               <Button variant="outline" className="w-full">
//                 Update Insurance Info
//               </Button>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Health Summary */}
//         <Card className="mt-6">
//           <CardHeader>
//             <CardTitle className="text-hospital-primary">
//               Health Summary
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid md:grid-cols-4 gap-4">
//               <div className="text-center p-4 bg-hospital-light rounded">
//                 <div className="text-2xl font-bold text-hospital-primary">
//                   120/80
//                 </div>
//                 <div className="text-sm text-gray-600">Blood Pressure</div>
//               </div>
//               <div className="text-center p-4 bg-hospital-light rounded">
//                 <div className="text-2xl font-bold text-hospital-primary">
//                   72
//                 </div>
//                 <div className="text-sm text-gray-600">Heart Rate</div>
//               </div>
//               <div className="text-center p-4 bg-hospital-light rounded">
//                 <div className="text-2xl font-bold text-hospital-primary">
//                   98.6°F
//                 </div>
//                 <div className="text-sm text-gray-600">Temperature</div>
//               </div>
//               <div className="text-center p-4 bg-hospital-light rounded">
//                 <div className="text-2xl font-bold text-hospital-primary">
//                   A+
//                 </div>
//                 <div className="text-sm text-gray-600">Blood Type</div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabaseClient";
import {
  LogOut,
  MessageSquare,
  CalendarPlus,
  FileText,
  ShieldCheck,
  Wallet,
  UserCircle,
  FileClock,
  ActivitySquare,
  BarChart3,
  Lightbulb,
  Pill,
  Video,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Phone,
  Calendar,
  Heart,
  Activity,
  Thermometer,
  Droplets,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const mockVitalsData = [
  { date: "Jun 1", heartRate: 72, bloodPressure: 120, temperature: 98.6 },
  { date: "Jun 5", heartRate: 76, bloodPressure: 118, temperature: 98.4 },
  { date: "Jun 10", heartRate: 68, bloodPressure: 122, temperature: 98.7 },
  { date: "Jun 15", heartRate: 74, bloodPressure: 119, temperature: 98.5 },
  { date: "Jun 20", heartRate: 70, bloodPressure: 121, temperature: 98.6 },
  { date: "Jun 25", heartRate: 73, bloodPressure: 117, temperature: 98.3 },
];

const mockWeightData = [
  { month: "Jan", weight: 165 },
  { month: "Feb", weight: 163 },
  { month: "Mar", weight: 161 },
  { month: "Apr", weight: 160 },
  { month: "May", weight: 158 },
  { month: "Jun", weight: 157 },
];

const healthTips = [
  {
    title: "Stay Hydrated",
    content:
      "Drink at least 8 glasses of water daily to maintain optimal health. Proper hydration supports kidney function, regulates body temperature, and helps transport nutrients throughout your body.",
    icon: <Droplets className="h-5 w-5 text-blue-500" />,
    category: "Nutrition",
  },
  {
    title: "Regular Exercise",
    content:
      "Aim for 30 minutes of moderate exercise daily. This can include walking, swimming, or cycling. Regular physical activity strengthens your heart, improves circulation, and boosts mental health.",
    icon: <Heart className="h-5 w-5 text-red-500" />,
    category: "Fitness",
  },
  {
    title: "Quality Sleep",
    content:
      "Get 7-9 hours of quality sleep each night. Good sleep is essential for immune function, mental clarity, and physical recovery. Maintain a consistent sleep schedule for best results.",
    icon: <Clock className="h-5 w-5 text-purple-500" />,
    category: "Wellness",
  },
  {
    title: "Balanced Diet",
    content:
      "Include plenty of fruits, vegetables, whole grains, and lean proteins in your diet. A balanced diet provides essential nutrients and helps maintain a healthy weight.",
    icon: <Activity className="h-5 w-5 text-green-500" />,
    category: "Nutrition",
  },
];

const mockMedications = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    time: "8:00 AM",
    taken: true,
    nextDue: "Tomorrow 8:00 AM",
    condition: "Blood Pressure",
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    time: "8:00 AM, 8:00 PM",
    taken: false,
    nextDue: "Today 8:00 PM",
    condition: "Diabetes",
  },
  {
    id: 3,
    name: "Vitamin D3",
    dosage: "1000 IU",
    frequency: "Once daily",
    time: "Morning",
    taken: true,
    nextDue: "Tomorrow Morning",
    condition: "Supplement",
  },
  {
    id: 4,
    name: "Omega-3",
    dosage: "1200mg",
    frequency: "Once daily",
    time: "With dinner",
    taken: false,
    nextDue: "Tonight with dinner",
    condition: "Heart Health",
  },
];

const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    availability: "Available now",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "General Practice",
    availability: "Available in 15 min",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatologist",
    availability: "Available at 3:00 PM",
    image:
      "https://images.unsplash.com/photo-1594824792696-89fa4284d9e2?w=100&h=100&fit=crop&crop=face",
    rating: 4.9,
  },
];

const PatientDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(null);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [medications, setMedications] = useState(mockMedications);
  const [selectedChart, setSelectedChart] = useState("heartRate");

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const openComingSoon = (title) => {
    alert(`${title} feature coming soon!`);
  };

  const toggleMedication = (id) => {
    setMedications((prev) =>
      prev.map((med) => (med.id === id ? { ...med, taken: !med.taken } : med))
    );
  };

  const nextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % healthTips.length);
  };

  const prevTip = () => {
    setCurrentTipIndex(
      (prev) => (prev - 1 + healthTips.length) % healthTips.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <LogOut className="h-4 w-4" /> Logout
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
              Welcome back, {user?.name || "Patient"}!
            </h1>
            <p className="text-lg text-gray-600">Your Health Dashboard</p>
          </div>
          <Button
            onClick={() => setOpenModal("profile")}
            variant="outline"
            className="flex items-center gap-2"
          >
            <UserCircle className="h-4 w-4" /> View Profile
          </Button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setOpenModal("healthTips")}
          >
            <CardContent className="p-4 text-center">
              <div className="bg-blue-100 rounded-full p-3 w-fit mx-auto mb-2">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-sm">Health Tips</h3>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setOpenModal("medications")}
          >
            <CardContent className="p-4 text-center">
              <div className="bg-green-100 rounded-full p-3 w-fit mx-auto mb-2">
                <Pill className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-sm">Medications</h3>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setOpenModal("teleConsult")}
          >
            <CardContent className="p-4 text-center">
              <div className="bg-purple-100 rounded-full p-3 w-fit mx-auto mb-2">
                <Video className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-sm">TeleConsult</h3>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setOpenModal("healthTrends")}
          >
            <CardContent className="p-4 text-center">
              <div className="bg-orange-100 rounded-full p-3 w-fit mx-auto mb-2">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-sm">Health Trends</h3>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow opacity-60"
            onClick={() => openComingSoon("Lab Reports")}
          >
            <CardContent className="p-4 text-center">
              <div className="bg-gray-100 rounded-full p-3 w-fit mx-auto mb-2">
                <FileText className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-sm">Lab Reports</h3>
              <Badge variant="secondary" className="mt-1 text-xs">
                Coming Soon
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Quick Actions */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-gray-900">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                onClick={() => openComingSoon("Prescription Refill")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Request Prescription Refill
              </Button>
              <Button
                onClick={() => setOpenModal("message")}
                variant="outline"
                className="w-full"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Message Doctor
              </Button>
              <Button
                onClick={() => setOpenModal("appointments")}
                variant="outline"
                className="w-full"
              >
                <CalendarPlus className="h-4 w-4 mr-2" />
                View Appointments
              </Button>
              <Button
                onClick={() => setOpenModal("visits")}
                variant="outline"
                className="w-full"
              >
                <FileClock className="h-4 w-4 mr-2" />
                Previous Visits
              </Button>
            </CardContent>
          </Card>

          {/* Appointments */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-gray-900">
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                  <p className="font-semibold text-gray-900">
                    Dr. Sarah Johnson
                  </p>
                  <p className="text-sm text-gray-600">
                    Cardiology - Dec 15, 2024 at 2:00 PM
                  </p>
                  <Badge variant="outline" className="mt-1">
                    Confirmed
                  </Badge>
                </div>
                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                  <p className="font-semibold text-gray-900">
                    Dr. Michael Chen
                  </p>
                  <p className="text-sm text-gray-600">
                    Neurology - Dec 20, 2024 at 10:30 AM
                  </p>
                  <Badge variant="outline" className="mt-1">
                    Confirmed
                  </Badge>
                </div>
              </div>
              <Button className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Book New Appointment
              </Button>
            </CardContent>
          </Card>

          {/* Health Summary */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-gray-900">Health Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center bg-red-50 p-3 rounded-lg border">
                  <Heart className="h-5 w-5 text-red-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">120/80</div>
                  <div className="text-xs text-gray-600">Blood Pressure</div>
                  <div className="text-xs text-green-600">Normal</div>
                </div>
                <div className="text-center bg-blue-50 p-3 rounded-lg border">
                  <Activity className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">72</div>
                  <div className="text-xs text-gray-600">Heart Rate (BPM)</div>
                  <div className="text-xs text-green-600">Normal</div>
                </div>
                <div className="text-center bg-orange-50 p-3 rounded-lg border">
                  <Thermometer className="h-5 w-5 text-orange-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">98.6°F</div>
                  <div className="text-xs text-gray-600">Temperature</div>
                  <div className="text-xs text-green-600">Normal</div>
                </div>
                <div className="text-center bg-purple-50 p-3 rounded-lg border">
                  <Droplets className="h-5 w-5 text-purple-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">A+</div>
                  <div className="text-xs text-gray-600">Blood Type</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Heart Rate Chart */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-gray-900">
              Recent Heart Rate Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={mockVitalsData}>
                <XAxis dataKey="date" />
                <YAxis domain={[60, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="heartRate"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Health Tips Modal */}
        <Dialog
          open={openModal === "healthTips"}
          onOpenChange={() => setOpenModal(null)}
        >
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                Daily Health Tips
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full">
                    {healthTips[currentTipIndex].icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {healthTips[currentTipIndex].title}
                      </h3>
                      <Badge variant="secondary">
                        {healthTips[currentTipIndex].category}
                      </Badge>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {healthTips[currentTipIndex].content}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Button variant="outline" onClick={prevTip} size="sm">
                  Previous
                </Button>
                <span className="text-sm text-gray-500">
                  {currentTipIndex + 1} of {healthTips.length}
                </span>
                <Button variant="outline" onClick={nextTip} size="sm">
                  Next
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Medications Modal */}
        <Dialog
          open={openModal === "medications"}
          onOpenChange={() => setOpenModal(null)}
        >
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-green-600" />
                Medication Reminders
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {medications.map((med) => (
                <div key={med.id} className="p-4 border rounded-lg bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-full ${
                          med.taken ? "bg-green-100" : "bg-orange-100"
                        }`}
                      >
                        <Pill
                          className={`h-4 w-4 ${
                            med.taken ? "text-green-600" : "text-orange-600"
                          }`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {med.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {med.dosage} - {med.frequency}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Taken</span>
                      <Switch
                        checked={med.taken}
                        onCheckedChange={() => toggleMedication(med.id)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Time:</span>
                      <p className="font-medium">{med.time}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Next Due:</span>
                      <p className="font-medium">{med.nextDue}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Condition:</span>
                      <Badge variant="outline" className="mt-1">
                        {med.condition}
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    {med.taken ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-orange-600" />
                    )}
                    <span
                      className={`text-sm ${
                        med.taken ? "text-green-600" : "text-orange-600"
                      }`}
                    >
                      {med.taken ? "Completed" : "Pending"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* TeleConsultation Modal */}
        <Dialog
          open={openModal === "teleConsult"}
          onOpenChange={() => setOpenModal(null)}
        >
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-purple-600" />
                TeleConsultation
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockDoctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className="p-4 border rounded-lg bg-white hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {doctor.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {doctor.specialty}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm text-gray-600">
                            {doctor.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                          doctor.availability === "Available now"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            doctor.availability === "Available now"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        />
                        {doctor.availability}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                        size="sm"
                      >
                        <Video className="h-4 w-4 mr-2" />
                        Start Video Call
                      </Button>
                      <Button variant="outline" className="w-full" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Voice Call
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Quick Consultation
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Connect with an available general practitioner for immediate
                  assistance.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Video className="h-4 w-4 mr-2" />
                  Connect Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Health Trends Modal */}
        <Dialog
          open={openModal === "healthTrends"}
          onOpenChange={() => setOpenModal(null)}
        >
          <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-orange-600" />
                Health Trend Analysis
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={
                    selectedChart === "heartRate" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedChart("heartRate")}
                >
                  Heart Rate
                </Button>
                <Button
                  variant={
                    selectedChart === "bloodPressure" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedChart("bloodPressure")}
                >
                  Blood Pressure
                </Button>
                <Button
                  variant={
                    selectedChart === "temperature" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedChart("temperature")}
                >
                  Temperature
                </Button>
                <Button
                  variant={selectedChart === "weight" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedChart("weight")}
                >
                  Weight
                </Button>
              </div>

              <div className="bg-white p-4 border rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">
                  {selectedChart === "heartRate" && "Heart Rate Trend (BPM)"}
                  {selectedChart === "bloodPressure" &&
                    "Blood Pressure Trend (mmHg)"}
                  {selectedChart === "temperature" &&
                    "Body Temperature Trend (°F)"}
                  {selectedChart === "weight" && "Weight Trend (lbs)"}
                </h4>
                <ResponsiveContainer width="100%" height={300}>
                  {selectedChart === "weight" ? (
                    <BarChart data={mockWeightData}>
                      <XAxis dataKey="month" />
                      <YAxis domain={[150, 170]} />
                      <Tooltip />
                      <Bar dataKey="weight" fill="#8884d8" />
                    </BarChart>
                  ) : (
                    <AreaChart data={mockVitalsData}>
                      <XAxis dataKey="date" />
                      <YAxis
                        domain={
                          selectedChart === "heartRate"
                            ? [60, 100]
                            : selectedChart === "bloodPressure"
                            ? [110, 130]
                            : [98, 99]
                        }
                      />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey={selectedChart}
                        stroke={
                          selectedChart === "heartRate"
                            ? "#ef4444"
                            : selectedChart === "bloodPressure"
                            ? "#3b82f6"
                            : "#f59e0b"
                        }
                        fill={
                          selectedChart === "heartRate"
                            ? "#fecaca"
                            : selectedChart === "bloodPressure"
                            ? "#dbeafe"
                            : "#fed7aa"
                        }
                      />
                    </AreaChart>
                  )}
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <TrendingUp className="h-5 w-5 text-green-600 mb-2" />
                  <h5 className="font-semibold text-gray-900">Trending Up</h5>
                  <p className="text-sm text-gray-600">
                    Overall health metrics show positive improvement
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <ActivitySquare className="h-5 w-5 text-blue-600 mb-2" />
                  <h5 className="font-semibold text-gray-900">Stable Range</h5>
                  <p className="text-sm text-gray-600">
                    Most vitals within normal parameters
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <ShieldCheck className="h-5 w-5 text-purple-600 mb-2" />
                  <h5 className="font-semibold text-gray-900">Good Progress</h5>
                  <p className="text-sm text-gray-600">
                    Keep up the healthy lifestyle habits
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Existing Modals */}
        <Dialog
          open={openModal === "message"}
          onOpenChange={() => setOpenModal(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Message Your Doctor
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <textarea
                className="w-full border rounded-lg p-3 min-h-[120px] resize-none"
                placeholder="Type your message here..."
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog
          open={openModal === "appointments"}
          onOpenChange={() => setOpenModal(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CalendarPlus className="h-5 w-5" />
                Upcoming Appointments
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Dr. Smith - Orthopedic</span>
                </div>
                <p className="text-sm text-gray-600">
                  Jan 12, 2025 at 10:00 AM
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-orange-600" />
                  <span className="font-medium">Dr. Lee - ENT</span>
                </div>
                <p className="text-sm text-gray-600">Feb 2, 2025 at 2:30 PM</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog
          open={openModal === "visits"}
          onOpenChange={() => setOpenModal(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <FileClock className="h-5 w-5" />
                Past Visits
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="font-medium">General Checkup</span>
                </div>
                <p className="text-sm text-gray-600">Dec 1, 2024 - Completed</p>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Dental Cleaning</span>
                </div>
                <p className="text-sm text-gray-600">
                  Nov 15, 2024 - Completed
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <XCircle className="h-4 w-4 text-red-600" />
                  <span className="font-medium">Follow-up Visit</span>
                </div>
                <p className="text-sm text-gray-600">
                  Oct 20, 2024 - Cancelled
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog
          open={openModal === "profile"}
          onOpenChange={() => setOpenModal(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <UserCircle className="h-5 w-5" />
                Patient Profile
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={
                  user?.photoURL ||
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                }
                alt="Patient"
                className="w-20 h-20 rounded-full border object-cover mx-auto sm:mx-0"
              />
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-gray-500">Name:</span>
                  <p className="font-medium">{user?.name || "John Doe"}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Email:</span>
                  <p className="font-medium">
                    {user?.email || "john.doe@example.com"}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Age:</span>
                  <p className="font-medium">{user?.age || 20}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Gender:</span>
                  <p className="font-medium">{user?.gender || "Male"}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PatientDashboard;
