import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DoctorsDetails() {
  const { id } = useParams(); // ✅ Get doctor ID from URL
  const [doctor, setDoctor] = useState<any>(null); // Single doctor
  const [doctors, setDoctors] = useState<any[]>([]); // All doctors
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");

  // ✅ Fetch data on load
  useEffect(() => {
    if (id) {
      fetchDoctorById(id);
    } else {
      fetchDoctors();
    }
  }, [id]);

  // ✅ Fetch all doctors
  const fetchDoctors = async () => {
    const { data, error } = await supabase
      .from("doctors")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setDoctors(data);
    }
    setLoading(false);
  };

  // ✅ Fetch single doctor by ID
  const fetchDoctorById = async (doctorId: string) => {
    const { data, error } = await supabase
      .from("doctors")
      .select("*")
      .eq("id", doctorId)
      .single();

    if (!error && data) {
      setDoctor(data);
    }
    setLoading(false);
  };

  // ✅ Add new doctor
  const handleAddDoctor = async () => {
    if (!name || !specialty) return;

    const { error } = await supabase.from("doctors").insert([
      {
        name,
        specialty,
      },
    ]);

    if (!error) {
      setName("");
      setSpecialty("");
      fetchDoctors();
    }
  };

  if (loading) {
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  }

  // ✅ View single doctor if ID is present
  if (id && doctor) {
    return (
      <div className="max-w-2xl mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>Doctor Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <strong>Name:</strong> {doctor.name}
            </div>
            <div>
              <strong>Specialty:</strong> {doctor.specialty}
            </div>
            <div>
              <strong>Created At:</strong>{" "}
              {new Date(doctor.created_at).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ✅ Show full list and add form if not viewing a specific doctor
  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* Add New Doctor */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Add New Doctor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          />
          <Button onClick={handleAddDoctor}>Add Doctor</Button>
        </CardContent>
      </Card>

      {/* All Doctors */}
      <Card>
        <CardHeader>
          <CardTitle>All Doctors</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {doctors.map((doc) => (
              <li
                key={doc.id}
                className="p-3 border border-gray-200 rounded flex justify-between"
              >
                <span>{doc.name}</span>
                <span className="text-gray-500">{doc.specialty}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
