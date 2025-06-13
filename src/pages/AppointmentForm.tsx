import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const AppointmentForm = () => {
  const location = useLocation();
  const doctor = location.state?.doctor;

  return (
    <div className="min-h-screen bg-hospital-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-hospital-primary mb-6 text-center">
          Book Appointment {doctor && `with ${doctor.name}`}
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" required placeholder="Your full name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-hospital-accent focus:border-hospital-accent"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" required placeholder="you@example.com" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-hospital-accent focus:border-hospital-accent"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" required placeholder="+91 98765 43210" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-hospital-accent focus:border-hospital-accent"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Appointment Date</label>
            <input type="date" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-hospital-accent focus:border-hospital-accent"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message / Concern</label>
            <textarea placeholder="Briefly describe your issue..." rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-hospital-accent focus:border-hospital-accent"/>
          </div>

          <Button type="submit" className="w-full bg-hospital-primary hover:bg-hospital-dark text-white">
            Confirm Appointment
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
