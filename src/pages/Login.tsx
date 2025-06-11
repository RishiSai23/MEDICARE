import React, { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] w-full bg-gradient-to-r from-gray-100 to-blue-200 p-0">
      <div className="relative w-full h-full bg-white flex flex-col md:flex-row">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-20 space-y-6 flex flex-col justify-center">
          {isSignUp ? (
            <>
              <h2 className="text-3xl font-bold text-gray-900">
                Create Account
              </h2>
              <p className="text-sm text-gray-500">
                or use your email for registration
              </p>
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
              <p className="text-sm text-gray-500">
                or use your email and password
              </p>
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-sm text-right text-blue-600 hover:underline cursor-pointer">
                Forgot your password?
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
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
              <p className="text-sm">
                Enter your details to access your account
              </p>
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
              <p className="text-sm">
                Register with your details to use all site features
              </p>
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
