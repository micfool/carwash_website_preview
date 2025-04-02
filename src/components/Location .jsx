import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Location = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      title: "Our Location",
      details: "1234 Luxury Avenue, Beverly Hills, CA 90210"
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "Working Hours",
      details: "Mon-Sat: 8AM - 7PM | Sunday: 9AM - 5PM"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "Email",
      details: "info@premiumcarwash.com"
    }
  ];

  return (
    <div className="relative bg-black py-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/70 z-10" />
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Car wash facility" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left side: location details */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">OUR <span className="text-blue-500">LOCATION</span></h2>
            <p className="text-gray-400 mb-8">
              Located in the heart of Beverly Hills, our state-of-the-art facility offers convenient access
              to premium car detailing services. We've designed our space to provide comfort and luxury
              while your vehicle receives the attention it deserves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side: map or image */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden h-full min-h-64 flex items-center justify-center">
              {/* Placeholder for map - in production replace with actual map component */}
              <div className="p-8 text-center">
                <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <p className="text-xl font-medium">Map Placeholder</p>
                <p className="text-gray-400 mt-2">Interactive map would be displayed here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Location;