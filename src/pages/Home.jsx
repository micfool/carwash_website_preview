import React from 'react';
import { motion } from 'framer-motion';
import { Car, Droplet, Shield, Clock, CheckCircle, Star } from 'lucide-react';

import Gallery from '../components/Gallery ';
import Services from '../components/Services ';
import Location from '../components/Location ';
import Testimonials from '../components/Testimonials ';

import BackImg from "../images/templatebackground.png"

const Home = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 relative">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Image with Light Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-white/70 z-10" />
          <img 
            src={BackImg}
            alt="Luxury car background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-20">
          <div className="max-w-5xl">
            <motion.div 
              className="flex flex-col mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Simplified heading */}
              <div className="overflow-hidden">
                <motion.h1 
                  className="text-4xl md:text-5xl xl:text-9xl font-bold"
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  DETAILING KARTEL
                </motion.h1>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl xl:text-2xl font-bold text-gray-900 max-w-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Professional detailing services for the most discerning clients
            </motion.p>
            
            <motion.button 
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.button>
          </div>
        </div>
      </div>
        {/* Services Section */}
        <Services />

      {/* Gallery */}
      <Gallery />
      
    

      {/* Location Section */}
      <Location />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;