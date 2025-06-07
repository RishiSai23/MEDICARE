import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const DoctorDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-hospital-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-hospital-primary mb-4">
            Good morning, Dr. {user?.name}!
          </h1>
          <p className="text-xl text-gray-600">Your Doctor Dashboard</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="text-hospital-primary">Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-hospital-accent bg-white rounded">
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm text-gray-600">10:00 AM - Follow-up consultation</p>
                </div>
                <div className="p-3 border-l-4 border-hospital-secondary bg-white rounded">
                  <p className="font-semibold">Maria Garcia</p>
                  <p className="text-sm text-gray-600">11:30 AM - Initial examination</p>
                </div>
                <div className="p-3 border-l-4 border-hospital-primary bg-white rounded">
                  <p className="font-semibold">Robert Johnson</p>
                  <p className="text-sm text-gray-600">2:00 PM - Surgery consultation</p>
                </div>
              </div>
              <Button className="w-full mt-4 bg-hospital-primary hover:bg-hospital-dark text-white">
                View Full Schedule
              </Button>
            </CardContent>
          </Card>

          {/* Patient Queue */}
          <Card>
            <CardHeader>
              <CardTitle className="text-hospital-primary">Patient Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-hospital-light rounded">
                  <div>
                    <p className="font-semibold">Emma Wilson</p>
                    <p className="text-sm text-gray-600">Waiting - 15 mins</p>
                  </div>
                  <Button size="sm" className="bg-hospital-accent hover:bg-yellow-500 text-hospital-primary">
                    Call In
                  </Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-hospital-light rounded">
                  <div>
                    <p className="font-semibold">David Brown</p>
                    <p className="text-sm text-gray-600">Next - 5 mins</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Prepare
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Manage Queue
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
                Add Medical Note
              </Button>
              <Button variant="outline" className="w-full">
                Prescribe Medication
              </Button>
              <Button variant="outline" className="w-full">
                Order Lab Tests
              </Button>
              <Button variant="outline" className="w-full">
                Schedule Surgery
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-hospital-primary">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-hospital-light rounded">
                <div>
                  <p className="font-semibold">Updated treatment plan for Sarah Connor</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-hospital-light rounded">
                <div>
                  <p className="font-semibold">Completed surgery for Mark Thompson</p>
                  <p className="text-sm text-gray-600">Yesterday, 3:30 PM</p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-hospital-light rounded">
                <div>
                  <p className="font-semibold">Reviewed lab results for Lisa Davis</p>
                  <p className="text-sm text-gray-600">Yesterday, 1:15 PM</p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;