"use client";

import { useState } from "react";
import Link from "next/link";
import { FaShieldAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

type LoginProps = {
  onClose: () => void;
  switchToSignup: () => void;
};

const Login: React.FC<LoginProps> = ({ onClose, switchToSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login submission logic here
    console.log("Login submitted:", formData);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 max-w-md w-full mx-auto">
      {/* Header with Logo */}
      <div className="py-4 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center">
        <div className="flex items-center justify-center mb-1">
          
          
        </div>
        <h1 className="text-white text-xl font-semibold mt-2">Welcome Back</h1>
        <p className="text-gray-300 text-sm mt-2 text-center">
          Sign in to continue to your secure community
        </p>
      </div>

      {/* Form Container */}
      <div className="px-10 py-8 bg-gradient-to-b from-gray-900/90 to-gray-800/90">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaEnvelope className="text-blue-400 group-focus-within:text-blue-300 transition-colors" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-800/80 text-white border border-gray-700 rounded-xl py-3.5 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-inner transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-gray-300 text-sm font-medium">
                Password
              </label>
              <Link href="/forgot-password" className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                Forgot Password?
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaLock className="text-blue-400 group-focus-within:text-blue-300 transition-colors" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-gray-800/80 text-white border border-gray-700 rounded-xl py-3.5 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-inner transition-all"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-400 transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-3.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5"
          >
            Sign In
          </button>

          {/* Social Login */}
          <div className="mt-7">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-xl bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-md"
              >
                <FaGoogle className="text-lg" />
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-xl bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-md"
              >
                <FaFacebook className="text-lg" />
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-xl bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-md"
              >
                <FaTwitter className="text-lg" />
              </button>
            </div>
          </div>
        </form>

        {/* Bottom Text */}
        <div className="mt-7 text-center">
          <p className="text-gray-300">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={switchToSignup}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>

      {/* Terms and Privacy Policy */}
      <div className="px-8 py-4 bg-gray-900 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-xs">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-blue-400 hover:text-blue-300">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;