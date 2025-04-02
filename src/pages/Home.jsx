import React from 'react';
import { motion } from 'framer-motion';
import { Car, Droplet, Shield, Clock, CheckCircle, Star } from 'lucide-react';
import Gallery from '../components/Gallery ';
import Services from '../components/Services ';
import Location from '../components/Location ';
import Testimonials from '../components/Testimonials ';

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40 z-10" />
          <img 
            src="https://wallpapers.com/images/hd/black-car-4k-8iilwvng2997orpp.jpg" 
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
              {/* Animated heading with words on separate lines */}
              <div className="overflow-hidden">
                <motion.h1 
                  className="text-5xl md:text-6xl xl:text-9xl font-bold mb-1"
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  THE
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  className="text-5xl md:text-6xl xl:text-8xl font-bold text-blue-500"
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  CAR WASH CAFE
                </motion.h1>
              </div>
              
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 max-w-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Professional detailing services for the most discerning clients
            </motion.p>
            
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg font-semibold transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </div>


      {/* Gallery */}
      <Gallery/>
          
        
        {/* Services Section */}
        <Services  />

        {/* Location Section */}
        <Location/>

        {/* Testimonials Section */}
        <Testimonials/>

    </div>
  );
};

export default Home;