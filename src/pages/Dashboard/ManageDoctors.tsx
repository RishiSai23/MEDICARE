import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

const ManageDoctors = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  const handleAddDoctor = async () => {
    setStatus("");

    if (!name || !email || !specialization || !education || !experience || !description || !imageFile) {
      setStatus("Please fill in all fields including profile picture.");
      return;
    }

    try {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `doctors/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("doctor-images")
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("doctor-images")
        .getPublicUrl(filePath);

      const imageUrl = publicUrlData?.publicUrl;

      const { error: insertError } = await supabase.from("doctors").insert([
        {
          name,
          email,
          specialization, // ✅ matches your new table column name
          education,
          experience,
          description,
          image: imageUrl,
        },
      ]);

      if (insertError) throw insertError;

      setStatus("Doctor added successfully!");
      setName("");
      setEmail("");
      setSpecialization("");
      setEducation("");
      setExperience("");
      setDescription("");
      setImageFile(null);
    } catch (err: any) {
      console.error(err.message);
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Doctor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Doctor Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input type="email" placeholder="Doctor Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
          <Input placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} />
          <Input placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
          <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
          <Button onClick={handleAddDoctor}>Add Doctor</Button>
          {status && <p className="text-sm text-red-600">{status}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageDoctors;
