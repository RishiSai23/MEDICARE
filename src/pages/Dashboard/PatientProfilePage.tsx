// src/pages/Dashboard/PatientProfilePage.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const mockPatients = [
  { id: 1, name: "John Doe", age: 34, gender: "Male", condition: "Diabetes", email: "john@example.com", address: "123 Main St, Cityville", phone: "9876543210" },
  { id: 2, name: "Jane Smith", age: 28, gender: "Female", condition: "Hypertension", email: "jane@example.com", address: "456 Elm St, Townsville", phone: "8765432109" },
  { id: 3, name: "Mark Johnson", age: 45, gender: "Male", condition: "Cardiac Arrest", email: "mark@example.com", address: "789 Oak St, Villageton", phone: "7654321098" },
  { id: 4, name: "Sara Lee", age: 37, gender: "Female", condition: "Diabetes", email: "sara@example.com", address: "321 Pine St, Hamletown", phone: "6543210987" },
];

const PatientProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const patient = mockPatients.find(p => p.id === Number(id));

  if (!patient) {
    return <div className="p-6 text-center text-red-500">Patient not found</div>;
  }

  return (
    <div className={`min-h-screen p-6 transition-colors ${theme === "dark" ? "bg-gray-900 text-yellow-400" : "bg-white text-black"}`}>
      <div className="flex justify-end mb-4 gap-2">
        <Button variant="outline" onClick={() => setTheme("light")}>Light Theme</Button>
        <Button variant="outline" onClick={() => setTheme("dark")}>Dark Theme</Button>
      </div>

      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{patient.name}'s Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div><strong>Age:</strong> {patient.age}</div>
          <div><strong>Gender:</strong> {patient.gender}</div>
          <div><strong>Condition:</strong> {patient.condition}</div>
          <div><strong>Email:</strong> {patient.email}</div>
          <div><strong>Phone:</strong> {patient.phone}</div>
          <div><strong>Address:</strong> {patient.address}</div>
          <Button variant="outline" className="mt-4" onClick={() => navigate("/dashboard/patients")}>Back to Patients</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientProfilePage;
