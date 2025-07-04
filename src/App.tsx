import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// UI Components
import { Toaster as Sonner } from "./components/ui/sonner";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";

// Layout Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

// Auth Context
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Pages
import MentalHealthBot from "@/pages/Chatbots/MentalHealthBot";
import RecoveryTracker from "@/pages/Chatbots/RecoveryTracker";
import SymptomChecker from "@/pages/Chatbots/SymptomChecker";
import PatientProfilePage from "@/pages/Dashboard/PatientProfilePage";
import PatientsPage from "@/pages/Dashboard/PatientsPage";
import MainPage from "./components/MainPage";
import AppointmentForm from "./pages/AppointmentForm";
import Blog from "./pages/Blog";
import Chatbots from "./pages/Chatbots";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import DoctorDashboard from "./pages/Dashboard/DoctorDashboard";
import ManageDoctors from "./pages/Dashboard/ManageDoctors";
import PatientDashboard from "./pages/Dashboard/PatientDashboard";

import SettingsPage from "./pages/Dashboard/SettingsPage";
import Doctors from "./pages/Doctors";
import DoctorsDetails from "./pages/DoctorsDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
// Chatbot Pages


const queryClient = new QueryClient();

const RoleBasedRedirect = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={`/dashboard/${user.role}`} replace />;
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className={`min-h-screen flex flex-col ${isDashboard ? "bg-gray-900 text-yellow-400" : "bg-white text-blue-800"}`}>
      {!isDashboard && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/chatbots" element={<Chatbots />} />
              <Route path="/chatbots/mental-health" element={<MentalHealthBot />} />
              <Route path="/chatbots/recovery-tracker" element={<RecoveryTracker />} />
              <Route path="/chatbots/symptom-checker" element={<SymptomChecker />} />

              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors-details/:id" element={<DoctorsDetails />} />
              <Route path="/appointment" element={<AppointmentForm />} />
              <Route path="/chatbots/symptom-checker" element={<SymptomChecker />} />
              <Route path="/chatbots/mental-health" element={<MentalHealthBot />} />
              <Route path="/chatbots/recovery-tracker" element={<RecoveryTracker />} />

              {/* ✅ Dashboard Role-Based Redirect */}
              <Route path="/dashboard" element={<RoleBasedRedirect />} />

              {/* ✅ Protected Dashboards */}
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
              <Route
  path="/dashboard/admin/settings"
  element={
    <PrivateRoute requiredRole="admin">
      <SettingsPage />
    </PrivateRoute>
  }
/>
<Route path="/dashboard/admin/patients" element={<PatientsPage />} />
<Route path="/dashboard/patient-profile/:id" element={<PatientProfilePage />} />



              
              <Route path="/dashboard/admin/manage-doctors" element={<ManageDoctors />} />
              <Route
  path="/dashboard/ManageDoctors"
  element={<Navigate to="/dashboard/admin/manage-doctors" replace />}
/>



              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
