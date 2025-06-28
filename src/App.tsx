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
import MainPage from "./components/MainPage";
import AppointmentForm from "./pages/AppointmentForm";
import Blog from "./pages/Blog";
import Chatbots from "./pages/Chatbots";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import DoctorDashboard from "./pages/Dashboard/DoctorDashboard";
import PatientDashboard from "./pages/Dashboard/PatientDashboard";
import Doctors from "./pages/Doctors";
import DoctorsDetails from "./pages/DoctorsDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Initialize Query Client
const queryClient = new QueryClient();

// ✅ Role-Based Redirect Component
const RoleBasedRedirect = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={`/dashboard/${user.role}`} replace />;
};

// ✅ Layout Component
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {!isDashboard && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
};

// ✅ Main App Component
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <BrowserRouter>
            <AppLayout>
              <Routes>
                {/* Public Pages */}
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/chatbots" element={<Chatbots />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route
                  path="/doctors-details/:id"
                  element={<DoctorsDetails />}
                />
                <Route path="/appointment" element={<AppointmentForm />} />

                {/* Chatbot Sub-Pages */}
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

                {/* Dashboard Redirect */}
                <Route path="/dashboard" element={<RoleBasedRedirect />} />

                {/* Protected Dashboard Routes */}
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

                {/* Not Found */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppLayout>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <AuthProvider>
//           <BrowserRouter>
//             <AppLayout>
//               <Routes>
//                 <Route path="/" element={<div>✅ It Renders</div>} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </AppLayout>
//           </BrowserRouter>
//         </AuthProvider>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

export default App;
