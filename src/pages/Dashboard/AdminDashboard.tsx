import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-hospital-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with Logout */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-hospital-primary mb-2">Admin Dashboard</h1>
            <p className="text-xl text-gray-600">
              Welcome, {user?.name} - System Administrator
            </p>
          </div>
          <Button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Logout
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-hospital-primary mb-2">1,247</div>
              <div className="text-sm text-gray-600">Total Patients</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-hospital-accent mb-2">89</div>
              <div className="text-sm text-gray-600">Active Doctors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-hospital-secondary mb-2">156</div>
              <div className="text-sm text-gray-600">Today's Appointments</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-hospital-primary mb-2">98.2%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </CardContent>
          </Card>
        </div>

        {/* Management, Reports & Actions */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* System Management */}
          <Card>
            <CardHeader>
              <CardTitle className="text-hospital-primary">System Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-hospital-primary hover:bg-hospital-dark text-white">
                User Management
              </Button>
              <Button variant="outline" className="w-full">
                Department Settings
              </Button>
              <Button variant="outline" className="w-full">
                System Configuration
              </Button>
              <Button variant="outline" className="w-full">
                Security Settings
              </Button>
            </CardContent>
          </Card>

          {/* Reports & Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-hospital-primary">Reports & Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-hospital-accent hover:bg-yellow-500 text-hospital-primary">
                Generate Monthly Report
              </Button>
              <Button variant="outline" className="w-full">
                Financial Dashboard
              </Button>
              <Button variant="outline" className="w-full">
                Performance Metrics
              </Button>
              <Button variant="outline" className="w-full">
                Audit Logs
              </Button>
            </CardContent>
          </Card>

          {/* Emergency Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-hospital-primary">Emergency Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                System Alert
              </Button>
              <Button variant="outline" className="w-full border-red-500 text-red-600">
                Emergency Shutdown
              </Button>
              <Button variant="outline" className="w-full">
                Backup System
              </Button>
              <Button variant="outline" className="w-full">
                Maintenance Mode
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-hospital-primary">Recent System Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-hospital-light rounded">
                <div>
                  <p className="font-semibold">New doctor registration: Dr. Amanda Foster</p>
                  <p className="text-sm text-gray-600">30 minutes ago</p>
                </div>
                <Button variant="outline" size="sm">
                  Review
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-hospital-light rounded">
                <div>
                  <p className="font-semibold">System backup completed successfully</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
                <Button variant="outline" size="sm">
                  View Log
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-hospital-light rounded">
                <div>
                  <p className="font-semibold">Security scan completed - No threats detected</p>
                  <p className="text-sm text-gray-600">4 hours ago</p>
                </div>
                <Button variant="outline" size="sm">
                  Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
