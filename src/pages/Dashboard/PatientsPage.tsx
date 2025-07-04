// src/pages/Dashboard/PatientsPage.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, Eye, UserPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const mockPatients = [
  { id: 1, name: "John Doe", age: 34, gender: "Male", condition: "Diabetes", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: 2, name: "Jane Smith", age: 28, gender: "Female", condition: "Hypertension", image: "https://randomuser.me/api/portraits/women/21.jpg" },
  { id: 3, name: "Mark Johnson", age: 45, gender: "Male", condition: "Cardiac Arrest", image: "https://randomuser.me/api/portraits/men/31.jpg" },
  { id: 4, name: "Sara Lee", age: 37, gender: "Female", condition: "Diabetes", image: "https://randomuser.me/api/portraits/women/41.jpg" },
];

const genderStats = [
  { name: "Male", value: 2 },
  { name: "Female", value: 2 },
];

const conditionStats = [
  { name: "Diabetes", value: 2 },
  { name: "Hypertension", value: 1 },
  { name: "Cardiac Arrest", value: 1 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const PatientsPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("name");

  const filteredPatients = mockPatients
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

  const downloadReport = () => {
    const report = filteredPatients.map(p => `${p.name}, ${p.age}, ${p.gender}, ${p.condition}`).join("\n");
    const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "patient-report.txt";
    link.click();
  };

  const handleViewProfile = (id: number) => {
    navigate(`/dashboard/patient-profile/${id}`, { state: { from: "/dashboard/patients" } });
  };

  return (
    <div className="min-h-screen p-6 bg-hospital-light dark:bg-gray-900 text-black dark:text-yellow-400 transition-colors">
      <Card className="shadow-xl border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl flex justify-between items-center">
            Patients Directory
            <Button variant="outline" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" /> Add Patient
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <Input
              placeholder="Search patient by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2"
            />
            <div className="flex gap-2">
              <select
                className="px-4 py-2 border rounded text-sm dark:bg-gray-800 dark:text-yellow-400 dark:border-gray-600"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="age">Sort by Age</option>
              </select>
              <Button onClick={downloadReport} variant="outline">
                <Download className="mr-2 h-4 w-4" /> Download Report
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPatients.map((patient) => (
              <Card key={patient.id} className="p-4 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition border border-gray-200 dark:border-gray-700">
                <img
                  src={patient.image}
                  alt={patient.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-hospital-primary shadow-md"
                />
                <h3 className="text-xl font-semibold text-center text-blue-700 dark:text-yellow-400">{patient.name}</h3>
                <div className="text-sm text-center space-y-1 mt-2">
                  <p>Age: {patient.age}</p>
                  <p>Gender: {patient.gender}</p>
                  <p>Condition: {patient.condition}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 flex items-center justify-center gap-2"
                  onClick={() => handleViewProfile(patient.id)}
                >
                  <Eye className="h-4 w-4" /> View Full Profile
                </Button>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Gender Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={genderStats}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {genderStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Condition Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={conditionStats}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {conditionStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-10 bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Recent Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="bg-green-100 dark:bg-green-900 p-4 rounded">John Doe - Appointment with Dr. Smith on 1st July at 10:00 AM</li>
                <li className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded">Jane Smith - Appointment with Dr. Lee on 2nd July at 2:30 PM</li>
                <li className="bg-blue-100 dark:bg-blue-900 p-4 rounded">Mark Johnson - Follow-up scheduled on 5th July at 11:15 AM</li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientsPage;
