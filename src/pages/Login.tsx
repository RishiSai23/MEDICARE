import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Sign up failed: " + error.message);
      return;
    }

    const userId = data.user?.id;

    const { error: insertError } = await supabase.from("users").insert([
      {
        id: userId,
        name,
        email,
        role,
      },
    ]);

    if (insertError) {
      alert("User registered but failed to save details: " + insertError.message);
      return;
    }

    navigate(`/dashboard/${role}`);
  };

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed: " + error.message);
      return;
    }

    const userId = data.user?.id;

    // Get role from users table
    const { data: userData, error: roleError } = await supabase
      .from("users")
      .select("role")
      .eq("id", userId)
      .single();

    if (roleError || !userData) {
      alert("Login success, but user role not found.");
      return;
    }

    navigate(`/dashboard/${userData.role}`);
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] w-full bg-gradient-to-r from-gray-100 to-blue-200 p-0">
      <div className="relative w-full h-full bg-white flex flex-col md:flex-row">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-20 space-y-6 flex flex-col justify-center">
          {isSignUp ? (
            <>
              <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
              <p className="text-sm text-gray-500">or use your email for registration</p>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="cashier">Cashier</option>
                <option value="admin">Admin</option>
              </select>
              <button
                onClick={handleSignUp}
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
              <p className="text-sm text-gray-500">or use your email and password</p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-sm text-right text-blue-600 hover:underline cursor-pointer">
                Forgot your password?
              </div>
              <button
                onClick={handleSignIn}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Right Toggle Panel */}
        <div className="w-full md:w-1/2 bg-gradient-to-tr from-blue-700 to-blue-500 text-white flex flex-col justify-center items-center text-center p-8 md:p-20 space-y-6">
          {isSignUp ? (
            <>
              <h2 className="text-3xl font-bold">Welcome Back!</h2>
              <p className="text-sm">Enter your details to access your account</p>
              <button
                onClick={() => setIsSignUp(false)}
                className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-700 transition"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold">Hello, Friend!</h2>
              <p className="text-sm">Register with your details to use all site features</p>
              <button
                onClick={() => setIsSignUp(true)}
                className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-700 transition"
              >
                Sign Up to enjoy the features!!
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
