"use client";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaShieldAlt, FaBars, FaTimes, FaSearch, FaUser, FaBell } from "react-icons/fa";

const Header = () => {
    const router = useRouter();
    const handleSignIn = () => {
        router.push('/auth/sign-in');
    };
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Communities", path: "/communities" },
    { name: "Report", path: "/report" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-gray-900/95 backdrop-blur-md py-2 shadow-lg" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
      
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className={`bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-2 transform transition-transform ${isScrolled ? "scale-90" : ""} group-hover:scale-105`}>
              <FaShieldAlt className="text-white text-xl" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-white text-xl transition-all ${
                isScrolled ? "text-lg" : "text-xl"
              }`}>
                Negheban<span className="text-blue-400">.pk</span>
              </span>
              <span className={`text-gray-400 text-xs transition-all ${
                isScrolled ? "opacity-0 h-0" : "opacity-100"
              }`}>
                Safety in Community
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="relative px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-colors group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 ">
            <button className="text-gray-300 hover:text-white transition-colors">
              <FaSearch />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors relative">
              <FaBell />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
              <FaUser className="mr-2" />
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-6 space-y-4">
          {/* Mobile Search */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="px-2 py-3 text-gray-300 hover:text-white border-b border-gray-800 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="pt-2 flex flex-col space-y-3">
            <button className="bg-gray-800 text-white px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-center">
              <FaBell className="mr-2" />
              Notifications 
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-center">
              <FaUser className="mr-2" />
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;