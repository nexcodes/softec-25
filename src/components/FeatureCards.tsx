"use client";

import { motion } from "framer-motion";
import { FaLock, FaMapMarkerAlt, FaComments, FaGavel, FaUser, FaChartLine } from "react-icons/fa";

const features = [
  {
    title: "Anonymous Reporting",
    icon: <FaLock size={24} />,
    description: "Report incidents without revealing your identity, promoting safety and trust.",
    background: "/image2.jpg",
    color: "from-blue-500/80"
  },
  {
    title: "Geo Crime Mapping",
    icon: <FaMapMarkerAlt size={24} />,
    description: "Visualize reported issues on an interactive map to identify high-risk zones.",
    background: "/image3.jpg",
    color: "from-green-400/80"
  },
  {
    title: "Live Community Chat",
    icon: <FaComments size={24} />,
    description: "Stay updated and connected with your community through real-time discussions.",
    background: "/image4.jpg",
    color: "from-purple-400/80"
  },
  {
    title: "Book a Lawyer",
    icon: <FaGavel size={24} />,
    description: "Easily book verified lawyers for immediate legal support in your area.",
    background: "/image5.jpg",
    color: "from-red-400/80"
  },
  {
    title: "Available Communities",
    icon: <FaUser size={24} />,
    description: "Explore active communities in your area and connect with those making a difference.",
    background: "/image7.jpg",
    color: "from-yellow-400/80"
  },
  {
    title: "Crime Analytics",
    icon: <FaChartLine size={24} />,
    description: "Uncover crime trends with powerful data analytics and numerical insights.",
    background: "/image6.jpg",
    color: "from-blue-900/80"
  }
];

const FeatureCards = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Empowering Communities Through Technology
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative h-72 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(${feature.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 2 } }}
              />

              <motion.div
                className={`absolute inset-0 bg-gradient-to-t ${feature.color} to-black/90 opacity-80`}
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 0.8 }}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="absolute top-4 right-4 text-white z-10"
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.15, rotate: 3 }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
              >
                {feature.icon}
              </motion.div>

              <motion.div 
                className="absolute inset-0 flex flex-col justify-end p-6 z-10"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
              >
                <div className="relative">
                  <motion.h3 
                    className="text-lg font-semibold text-white mb-2"
                    initial={{ x: -15 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: index * 0.15 + 0.6, duration: 0.4 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.div 
                    className="h-1 bg-white w-0"
                    initial={{ width: 0 }}
                    whileInView={{ width: "25%" }}
                    transition={{ delay: index * 0.15 + 0.7, duration: 0.5 }}
                  />
                </div>

                <motion.p 
                  className="text-gray-100 mt-2 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.9 }}
                  transition={{ delay: index * 0.15 + 0.9, duration: 0.6 }}
                >
                  {feature.description}
                </motion.p>

                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 1.1, duration: 0.5 }}
                >
                  <motion.button
                    className="text-white text-xs border-b border-white/50 pb-1 hover:border-white transition-all"
                    whileHover={{ x: 4 }}
                  >
                    Learn more
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
