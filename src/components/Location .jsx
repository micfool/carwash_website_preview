import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Location = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-gray-700" />,
      title: "Our Location",
      details: "1/96 Hoxton Park Rd, Liverpool NSW 2170, Australia"
    },
    {
      icon: <Phone className="w-6 h-6 text-gray-700" />,
      title: "Phone Number",
      details: "(02) 9821 1102"
    },
    {
      icon: <Clock className="w-6 h-6 text-gray-700" />,
      title: "Working Hours",
      details: "Mon-Fri: 8AM - 5PM | Sat-Sun: 7AM - 5PM"
    },
    
    {
      icon: <Mail className="w-6 h-6 text-gray-700" />,
      title: "Email",
      details: "info@thecarwashcafe.com"
    }
  ];

  return (
    <div className="relative bg-gray-50 py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side: location details */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">OUR LOCATION</h2>
            <p className="text-gray-600 mb-8">
              Located in the heart of Beverly Hills, our state-of-the-art facility offers convenient access
              to premium car detailing services. We've designed our space to provide comfort and luxury
              while your vehicle receives the attention it deserves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side: map with iframe */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg overflow-hidden h-full shadow-sm border border-gray-200">
              {/* Google Maps iframe - replace URL with actual location */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7210.7589721702225!2d151.20357349495623!3d-33.86979336316926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae14e6fff121%3A0xfe7a7407a97636de!2sSaint%20Mary&#39;s%20Cathedral!5e0!3m2!1sen!2sau!4v1743756645513!5m2!1sen!2sau"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Car Wash Cafe Location"
                className="w-full h-full min-h-64"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Location;