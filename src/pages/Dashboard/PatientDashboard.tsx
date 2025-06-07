import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const PatientDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-hospital-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-hospital-primary mb-4">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-xl text-gray-600">Your Patient Dashboard</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="text-hospital-primary">Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-hospital-accent bg-white rounded">
                  <p className="font-semibold">Dr. Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Cardiology - Dec 15, 2024 at 2:00 PM</p>
                </div>
                <div className="p-3 border-l-4 border-hospital-secondary bg-white rounded">
                  <p className="font-semibold">Dr. Michael Chen</p>
                  <p className="text-sm text-gray-600">Neurology - Dec 20, 2024 at 10:30 AM</p>
                </div>
              </div>
              <Button className="w-full mt-4 bg-hospital-primary hover:bg-hospital-dark text-white">
                Book New Appointment
              </Button>
            </CardContent>
          </Card>

          {/* Medical Records */}
          <Card>
            <CardHeader>
              <CardTitle className="text-hospital-primary">Recent Medical Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-hospital-light rounded">
                  <p className="font-semibold">Blood Test Results</p>
                  <p className="text-sm text-gray-600">Dec 10, 2024</p>
                </div>
                <div className="p-3 bg-hospital-light rounded">
                  <p className="font-semibold">X-Ray Report</p>
                  <p className="text-sm text-gray-600">Dec 5, 2024</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Records
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-hospital-primary">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-hospital-accent hover:bg-yellow-500 text-hospital-primary">
                Request Prescription Refill
              </Button>
              <Button variant="outline" className="w-full">
                Message Doctor
              </Button>
              <Button variant="outline" className="w-full">
                Pay Bills
              </Button>
              <Button variant="outline" className="w-full">
                Update Insurance Info
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Health Summary */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-hospital-primary">Health Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-hospital-light rounded">
                <div className="text-2xl font-bold text-hospital-primary">120/80</div>
                <div className="text-sm text-gray-600">Blood Pressure</div>
              </div>
              <div className="text-center p-4 bg-hospital-light rounded">
                <div className="text-2xl font-bold text-hospital-primary">72</div>
                <div className="text-sm text-gray-600">Heart Rate</div>
              </div>
              <div className="text-center p-4 bg-hospital-light rounded">
                <div className="text-2xl font-bold text-hospital-primary">98.6°F</div>
                <div className="text-sm text-gray-600">Temperature</div>
              </div>
              <div className="text-center p-4 bg-hospital-light rounded">
                <div className="text-2xl font-bold text-hospital-primary">A+</div>
                <div className="text-sm text-gray-600">Blood Type</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;