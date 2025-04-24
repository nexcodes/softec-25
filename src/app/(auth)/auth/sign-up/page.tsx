"use client";

import { useState } from "react";
import Link from "next/link";
import { FaShieldAlt, FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

type SignupProps = {
  onClose: () => void;
  switchToLogin: () => void;
};

const Signup: React.FC<SignupProps> = ({ onClose, switchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    // Handle signup submission logic here
    console.log("Signup submitted:", formData);
  };

  return (
    <div className="bg-gray-900/60 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-gray-800">
      {/* Header with Logo */}
      <div className="py-4 px-8 bg-gray-900/80 flex flex-col items-center">
        <div className="flex items-center justify-center mb-2">


        </div>
        <h1 className="text-white text-lg font-medium">Create Your Account</h1>
        <p className="text-gray-400 text-sm mt-1 text-center">
          Join thousands making their communities safer
        </p>
      </div>

      {/* Form Container */}
      <div className="px-8 py-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-500" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name.."
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="signup-email" className="block text-gray-400 text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-500" />
              </div>
              <input
                type="email"
                id="signup-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="signup-password" className="block text-gray-400 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="signup-password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters</p>
          </div>

          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-gray-400 text-sm font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Create Account
          </button>

          {/* Social Signup */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
              >
                <FaGoogle />
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
              >
                <FaFacebook />
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
              >
                <FaTwitter />
              </button>
            </div>
          </div>
        </form>

        {/* Bottom Text */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-400">
            Already have an account?{" "}
            <button
              type="button"
              onClick={switchToLogin}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>

      {/* Terms and Privacy Policy */}
      <div className="px-8 py-4 bg-gray-900/80 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-xs">
          By signing up, you agree to our{" "}
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

export default Signup;