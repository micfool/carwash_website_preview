import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Shield, Star, Car, Clock, CheckCircle, Wind, Sparkles } from 'lucide-react';
import { TbSpray } from "react-icons/tb";

import serviceBack from "../images/serviceback.jpg"

const ServicePage = () => {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      icon: <TbSpray className="w-12 h-12 text-gray-700" />,
      title: "Premium Wash",
      description: "Thorough exterior cleaning with high-quality products for a spotless shine. Our process includes hand washing, foam application, gentle mitt cleaning, and premium wax for lasting protection.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrcpcQDZxHC8vNGEPc8pGkV1zku5epYp2LJA&s",
      color: "from-gray-700 to-gray-500"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-gray-700" />,
      title: "Interior Refresh",
      description: "Deep cleaning of all cabin surfaces, leaving your interior fresh and sanitized. We meticulously clean every corner, from air vents to seat crevices, ensuring a spotless interior.",
      image: "https://cdn.shopify.com/s/files/1/0742/8938/1681/files/Car_Interior_Restoration.png?v=1738762710",
      color: "from-gray-700 to-gray-500"
    },
    {
      icon: <Shield className="w-12 h-12 text-gray-700" />,
      title: "Protective Coating",
      description: "Advanced wax and sealants that guard against environmental damage. Our protective treatments create a hydrophobic layer that repels water, dirt, and harmful elements.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidlEjVtxM_t_FolZzbqtQ-r3yiVazCu5m2w&s",
      color: "from-gray-700 to-gray-500"
    },
    {
      icon: <Droplet className="w-12 h-12 text-gray-700" />,
      title: "Paint Enhancement",
      description: "Professional treatment to restore gloss and remove minor scratches. Our multi-stage correction process restores your vehicle's finish to a showroom-quality shine.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSu_4CmSH7zYI0Bq7WimYW80r-fqtvz5dSA&s",
      color: "from-gray-700 to-gray-500"
    },
    {
      icon: <Clock className="w-12 h-12 text-gray-700" />,
      title: "Express Services",
      description: "Quick but thorough cleaning options when you're on a tight schedule. Get professional results when you're in a hurry with our streamlined detailing process.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPMruigfDLhIdpQ4AOQ-1aZsOS9lcB_eNKQ&s",
      color: "from-gray-700 to-gray-500"
    },
    {
      icon: <Wind className="w-12 h-12 text-gray-700" />,
      title: "Membership Plans",
      description: "Regular care packages to keep your vehicle immaculate throughout the year. Our scheduled maintenance plans ensure your vehicle always looks its best with consistent care.",
      image: "https://assets.goaaa.com/image/upload/w_iw,h_ih,c_fit,q_auto:best,f_auto/v1713486910/infographic_all_cars_transparent_closer.png",
      color: "from-gray-700 to-gray-500"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-white/30 z-10" />
          <img 
            src={serviceBack} 
            alt="Luxury car detailing" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-5xl"
          >
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
                  OUR SERVICES
                </motion.h1>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl xl:text-2xl font-bold text-gray-900 max-w-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Professional detailing tailored for discerning clients
            </motion.p>
            
            <motion.button 
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             CALL NOW
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Introduction */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <h2 className="text-4xl font-bold mb-6">
            Premium <span className="text-gray-600">Car Care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with meticulous attention to detail, 
            ensuring your vehicle receives the finest care possible.
          </p>
        </motion.div>

        {/* Service Cards */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
              className="bg-white p-8 rounded-lg border border-gray-100 hover:border-gray-300 transition-all duration-300 shadow-sm"
              onClick={() => setActiveService(index)}
            >
              <div className="mb-6 rounded-full bg-gray-100 p-4 w-16 h-16 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">
                {service.description.substring(0, 100)}...
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-4 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div> */}
      </div>

      {/* Featured Service (Detailed View) */}
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`py-28 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-xl text-gray-600 mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-gray-700 mt-1" />
                      <span className="text-gray-600">
                        Premium feature {item} of our {service.title.toLowerCase()} service
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-md text-white font-medium transition-colors"
                >
                  Book This Service
                </motion.button>
              </motion.div>
              
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl opacity-50 blur-lg"></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-auto rounded-lg relative z-10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Call to Action */}
      <div className="relative py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-white/70 z-10" />
          <img src="/api/placeholder/1920/1080" alt="Luxury car" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for the <span className="text-gray-700">Premium Experience</span>?
            </h2>
            <p className="text-xl text-gray-800 mb-10">
              Schedule your appointment today and discover what makes The Car Wash Cafe different.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-800 hover:bg-gray-100 rounded-md text-gray-800 font-medium transition-colors duration-300"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;