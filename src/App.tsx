import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Chatbots from "./pages/Chatbots";
import Doctors from "./pages/Doctors";
import PatientDashboard from "./pages/Dashboard/PatientDashboard";
import DoctorDashboard from "./pages/Dashboard/DoctorDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Role-based redirect component
const RoleBasedRedirect = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return <Navigate to={`/dashboard/${user.role}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/chatbots" element={<Chatbots />} />
                <Route path="/doctors" element={<Doctors />} />
                
                {/* Dashboard Routes - Protected */}
                <Route 
                  path="/dashboard" 
                  element={<RoleBasedRedirect />} 
                />
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
                
                {/* Chatbot sub-routes */}
                <Route path="/chatbots/symptom-checker" element={<div>Symptom Checker Coming Soon</div>} />
                <Route path="/chatbots/mental-health" element={<div>Mental Health Bot Coming Soon</div>} />
                <Route path="/chatbots/recovery-tracker" element={<div>Recovery Tracker Coming Soon</div>} />
                
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
