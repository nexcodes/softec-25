"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Security Engineer",
    bio: "Specializes in penetration testing and vulnerability assessment with 7+ years of experience in cybersecurity.",
    image: "/api/placeholder/300/300",
    socials: {
      linkedin: "https://linkedin.com/in/alexrivera",
      github: "https://github.com/alexrivera",
      twitter: "https://twitter.com/alexrivera"
    }
  },
  {
    id: 2,
    name: "Samira Khan",
    role: "Full Stack Developer",
    bio: "Expert in secure web application development with a focus on authentication systems and data protection.",
    image: "/api/placeholder/300/300",
    socials: {
      linkedin: "https://linkedin.com/in/samirakhan",
      github: "https://github.com/samirakhan",
      twitter: "https://twitter.com/samirakhan"
    }
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "UI/UX Designer",
    bio: "Creates secure and intuitive user interfaces with 5+ years of experience in design for security applications.",
    image: "/api/placeholder/300/300",
    socials: {
      linkedin: "https://linkedin.com/in/marcuschen",
      github: "https://github.com/marcuschen",
      twitter: "https://twitter.com/marcuschen"
    }
  }
];

const TeamMemberCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Blue accent line at top */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-blue-400" />
      
      <div className="p-6">
        <div className="flex flex-col items-center">
          {/* Profile image */}
          <div className="relative w-32 h-32 mb-4">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 opacity-70"
              animate={{ 
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <img
              src={member.image}
              alt={member.name}
              className="relative z-10 rounded-full w-full h-full object-cover border-2 border-gray-800"
            />
          </div>
          
          {/* Name and role */}
          <h3 className="text-xl font-bold text-white mt-2">{member.name}</h3>
          <div className="text-blue-400 font-medium mb-3">{member.role}</div>
          
          {/* Bio */}
          <p className="text-gray-300 text-center mb-6">{member.bio}</p>
          
          {/* Social links */}
          <div className="flex space-x-4 mt-2">
            <a href={member.socials.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href={member.socials.github} className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={member.socials.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Content container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-lg p-2.5 shadow-lg shadow-blue-500/20">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <div className="ml-3">
              <span className="font-bold text-white text-2xl tracking-tight">
                negheban<span className="text-blue-400">.pk</span>
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Meet The Cache Crew
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We're a team of security specialists dedicated to building the most secure community platform. 
            With our combined expertise, we're creating a safer digital environment for everyone.
          </motion.p>
        </div>
        
        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
        
        {/* Team values section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-blue-400 font-semibold text-lg mb-2">Security First</h3>
              <p className="text-gray-300">We prioritize security in every decision and line of code we write.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-blue-400 font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-gray-300">We continuously push boundaries to create cutting-edge security solutions.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-blue-400 font-semibold text-lg mb-2">Transparency</h3>
              <p className="text-gray-300">We believe in clear communication and open processes in everything we do.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Contact CTA */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Want to Work With Us?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about security to join our team.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="mt-20 text-center text-gray-500 text-sm">
        <p>© 2025 negheban.pk - Secure Community Platform</p>
      </div>
    </div>
  );
}