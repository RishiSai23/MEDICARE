import React from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const AppointmentModal = ({
  doctor,
  open,
  onClose,
}: {
  doctor: any;
  open: boolean;
  onClose: () => void;
}) => {
  if (!doctor) return null; // ✅ Prevent rendering if doctor is null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white/90 dark:bg-gray-800 backdrop-blur-md">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-hospital-primary">
              {doctor.name}
            </h3>
            <Button variant="ghost" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {doctor.specialty}
          </p>
        </DialogHeader>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-28 h-28 rounded-full mx-auto object-cover border-2 border-hospital-accent"
          />
          <p>
            <strong>Experience:</strong> {doctor.experience}
          </p>
          <p>
            <strong>Education:</strong> {doctor.education}
          </p>
          <p>{doctor.description}</p>
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(Math.round(doctor.rating))].map((_, i) => (
              <span key={i}>★</span>
            ))}
            <span className="text-xs text-gray-600 dark:text-gray-400">
              ({doctor.rating})
            </span>
          </div>
          <p>
            <strong>Availability:</strong> {doctor.availability}
          </p>
          <p>
            <strong>Location:</strong> {doctor.location}
          </p>
          <Button className="w-full mt-4 bg-hospital-primary hover:bg-hospital-dark text-white">
            Book Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
