// src/pages/Patients/PatientProfile.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";

const PatientProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen p-6 bg-background text-foreground">
      <Card>
        <CardHeader>
          <CardTitle>Patient Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Patient ID: {id}</p>
          {/* Replace this mock content with real data from Supabase */}
          <p className="mt-2">Name: John Doe</p>
          <p>Age: 34</p>
          <p>Gender: Male</p>
          <p>Condition: Diabetes</p>
          <p>Appointments: 4</p>
          <p>Last Visit: 2025-06-27</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientProfile;
