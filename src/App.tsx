import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// UI
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Layout
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

// Auth Context
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Pages
import MainPage from "./components/MainPage";
import Blog from "./pages/Blog";
import Chatbots from "./pages/Chatbots";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import DoctorDashboard from "./pages/Dashboard/DoctorDashboard";
import PatientDashboard from "./pages/Dashboard/PatientDashboard";
import Doctors from "./pages/Doctors"; // ✅ Doctors Page
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// ✅ New Appointment Form Page
import AppointmentForm from "./pages/AppointmentForm";

const queryClient = new QueryClient();

// ✅ Role-based redirect logic for /dashboard
const RoleBasedRedirect = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={`/dashboard/${user.role}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1">
              <Routes>
                {/* ✅ Landing Page */}
                <Route path="/" element={<MainPage />} />

                {/* ✅ Public Pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/chatbots" element={<Chatbots />} />
                <Route path="/doctors" element={<Doctors />} />

                {/* ✅ New Book Appointment Page */}
                <Route path="/appointment" element={<AppointmentForm />} />

                {/* ✅ Chatbots Subpages (Coming Soon) */}
                <Route
                  path="/chatbots/symptom-checker"
                  element={<div>Symptom Checker Coming Soon</div>}
                />
                <Route
                  path="/chatbots/mental-health"
                  element={<div>Mental Health Bot Coming Soon</div>}
                />
                <Route
                  path="/chatbots/recovery-tracker"
                  element={<div>Recovery Tracker Coming Soon</div>}
                />

                {/* ✅ Dashboard Role-Based Redirect */}
                <Route path="/dashboard" element={<RoleBasedRedirect />} />

                {/* ✅ Protected Role Dashboards */}
                <Route
                  path="/dashboard/patient"
                  element={
                    <PrivateRoute requiredRole="patient">
                      <PatientDashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/doctor"
                  element={
                    <PrivateRoute requiredRole="doctor">
                      <DoctorDashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/admin"
                  element={
                    <PrivateRoute requiredRole="admin">
                      <AdminDashboard />
                    </PrivateRoute>
                  }
                />

                {/* ✅ 404 Not Found */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
