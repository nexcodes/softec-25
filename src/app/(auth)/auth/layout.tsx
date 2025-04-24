"use client";

import { FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md relative">
        {/* Logo Section */}
        <Link href="/" className="flex items-center justify-center mb-8 group">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-2 transform transition-transform group-hover:scale-110">
            <FaShieldAlt className="text-white text-2xl" />
          </div>
          <div className="ml-2">
            <span className="font-bold text-white text-2xl">
              Nigheban<span className="text-blue-400">.pk</span>
            </span>
          </div>
        </Link>

        {/* Auth Forms Container */}
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 shadow-2xl">
          {children}
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <span className="mx-2">•</span>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="mx-2">•</span>
          <Link href="/help" className="hover:text-white transition-colors">
            Help Center
          </Link>
        </div>
      </div>
    </div>
  );
}