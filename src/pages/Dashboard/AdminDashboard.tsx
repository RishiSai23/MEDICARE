// ✅ Start of AdminDashboard.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabaseClient";
import {
  ActivitySquare,
  BarChart3,
  Bell,
  FileText,
  HardDriveDownload,
  LogOut,
  MessageSquare,
  Moon,
  PlusCircle,
  Search,
  Settings2,
  ShieldCheck,
  Stethoscope,
  Sun,
  UserCircle,
  UserCog,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const weeklyPatientData = [
    { day: "Mon", patients: 32 },
    { day: "Tue", patients: 45 },
    { day: "Wed", patients: 40 },
    { day: "Thu", patients: 60 },
    { day: "Fri", patients: 55 },
    { day: "Sat", patients: 48 },
    { day: "Sun", patients: 20 },
  ];

  const quickLinks = [
    { icon: <Users />, label: "Doctors", path: "/doctors" },
    {
      icon: <Stethoscope />,
      label: "Patients",
      path: "/dashboard/admin/patients",
    },
    {
      icon: <Settings2 />,
      label: "Settings",
      path: "/dashboard/admin/settings",
    },
    {
      icon: <PlusCircle />,
      label: "Manage Doctors",
      path: "/dashboard/admin/manage-doctors",
    },
    {
      icon: <UserCog />,
      label: "Manage Users",
      path: "/dashboard/admin/manage-users",
    },
    { icon: <FileText />, label: "Reports", path: "/dashboard/admin/reports" },
    {
      icon: <Bell />,
      label: "Notifications",
      path: "/dashboard/admin/notifications",
    },
  ];

  const textColor = darkMode ? "text-yellow-400" : "text-hospital-primary";

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode
          ? "bg-gray-900 text-yellow-400"
          : "bg-hospital-light text-hospital-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 animate-fade-in">
          <div>
            <h1 className={`text-4xl font-bold mb-2 ${textColor}`}>
              Admin Dashboard
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Welcome, {user?.name} - System Administrator
            </p>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => setDarkMode(!darkMode)} variant="outline">
              {darkMode ? <Sun /> : <Moon />}
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </div>

        {/* Search & Quick Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search doctors, patients, departments..."
              className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hospital-primary"
            />
          </div>
          <select className="px-4 py-2 border rounded text-sm" defaultValue="">
            <option value="">All Departments</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="pediatrics">Pediatrics</option>
          </select>
          <div className="flex flex-wrap gap-3">
            {quickLinks.map((link, idx) => (
              <Button
                key={idx}
                variant="outline"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
                onClick={() => navigate(link.path)}
              >
                {link.icon}
                {link.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Advanced Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="bg-gradient-to-r from-green-50 to-green-100">
            <CardHeader>
              <CardTitle className={textColor}>AI Diagnosis Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                Use predictive analysis to detect anomalies in patient vitals
                and generate early disease warnings.
              </p>
              <Button variant="outline" className="w-full">
                Launch AI Tool
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-indigo-50 to-indigo-100">
            <CardHeader>
              <CardTitle className={textColor}>Real-Time Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                Instant messaging between doctors, staff, and administration for
                better coordination.
              </p>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" /> Open Chat
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-sky-50 to-sky-100">
            <CardHeader>
              <CardTitle className={textColor}>Download Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                Export system logs, audit trails, and operational reports with
                one click.
              </p>
              <Button variant="outline" className="w-full">
                <HardDriveDownload className="mr-2 h-4 w-4" /> Export Data
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* The rest of your original Admin Dashboard remains unchanged */}

        {/* Stats */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mb-10">
          {[
            { icon: <UserCircle />, label: "Total Patients", value: "1,247" },
            { icon: <ShieldCheck />, label: "Active Doctors", value: "89" },
            {
              icon: <ActivitySquare />,
              label: "Appointments Today",
              value: "156",
            },
            { icon: <BarChart3 />, label: "System Uptime", value: "98.2%" },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardContent className="p-6 text-center">
                <div
                  className={`flex justify-center text-2xl mb-2 ${textColor}`}
                >
                  {item.icon}
                </div>
                <div className={`text-3xl font-bold mb-1 ${textColor}`}>
                  {item.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className={textColor}>Weekly Patient Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyPatientData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="patients"
                  stroke="#0d9488"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* System Management Panels */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardHeader>
              <CardTitle className={textColor}>System Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-hospital-primary text-white">
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
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/dashboard/admin/manage-doctors")}
              >
                Manage Doctors
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className={textColor}>Reports & Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-yellow-400 text-black">
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

          <Card>
            <CardHeader>
              <CardTitle className={textColor}>Emergency Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-red-600 text-white">
                System Alert
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-500 text-red-600"
              >
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

        {/* Security Status */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className={textColor}>System Security Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="bg-green-100 p-4 rounded">
                Security scan completed - No threats detected
              </li>
              <li className="bg-yellow-100 p-4 rounded">
                Last backup completed 2 hours ago
              </li>
              <li className="bg-blue-100 p-4 rounded">
                Firewall is active and updated
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle className={textColor}>Recent Activity Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-hospital-light dark:bg-gray-800 rounded">
                <div>
                  <p className="font-semibold">
                    New doctor registration: Dr. Amanda Foster
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    30 minutes ago
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Review
                </Button>
              </div>
              <div className="flex justify-between items-center p-4 bg-hospital-light dark:bg-gray-800 rounded">
                <div>
                  <p className="font-semibold">
                    System backup completed successfully
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2 hours ago
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View Log
                </Button>
              </div>
              <div className="flex justify-between items-center p-4 bg-hospital-light dark:bg-gray-800 rounded">
                <div>
                  <p className="font-semibold">
                    Security scan completed - No threats detected
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    4 hours ago
                  </p>
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
