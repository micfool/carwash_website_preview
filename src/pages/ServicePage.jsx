import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Shield, Star, Car, Clock, CheckCircle } from 'lucide-react';

const ServicePage = () => {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      icon: <Car className="w-12 h-12 text-blue-500" />,
      title: "Exterior Detailing",
      description: "Complete exterior cleaning using premium products for a mirror-like finish. Our process includes hand washing, clay bar treatment, paint decontamination, and premium wax application.",
      image: "https://cdn-ilckkpn.nitrocdn.com/slSXCZwLmnhvkSOppRRsconIrsVFILev/assets/images/optimized/rev-da87e36/apexautopros.com/wp-content/uploads/2025/03/DSC00123.jpg",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <Star className="w-12 h-12 text-purple-500" />,
      title: "Interior Detailing",
      description: "Deep cleaning of all interior surfaces, leaving your cabin fresh and pristine. We meticulously clean every corner, from air vents to seat crevices, ensuring a spotless interior.",
      image: "https://cavallistables.com/wp-content/uploads/2020/03/luxury-car-detailing-1200x675.jpg",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: <Shield className="w-12 h-12 text-teal-500" />,
      title: "Ceramic Coating",
      description: "Long-lasting protection against environmental contaminants and UV damage. Our ceramic coating creates a hydrophobic layer that repels water, dirt, and harmful elements.",
      image: "https://img.freepik.com/premium-photo/process-pouring-ceramic-liquid-from-bottle-sponge-apply-protective-nano-layer-car-detailing-service-worker-applies-ceramic-protective-liquid-sponge-closeup_255847-7833.jpg?semt=ais_hybrid",
      color: "from-teal-600 to-teal-400"
    },
    {
      icon: <Droplet className="w-12 h-12 text-red-500" />,
      title: "Paint Correction",
      description: "Professional removal of swirls, scratches and imperfections from your paint. Our multi-stage correction process restores your vehicle's finish to a showroom-quality shine.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq_i0TuQsClg-80K86dvhZAK5n4om_DiFfg&s",
      color: "from-red-600 to-red-400"
    },
    {
      icon: <Clock className="w-12 h-12 text-amber-500" />,
      title: "Express Services",
      description: "Quality detailing on a tight schedule with our efficient express packages. Get professional results when you're in a hurry with our streamlined detailing process.",
      image: "https://c4.wallpaperflare.com/wallpaper/463/1018/390/car-car-washes-wallpaper-preview.jpg",
      color: "from-amber-600 to-amber-400"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-emerald-500" />,
      title: "Maintenance Plans",
      description: "Regular care packages to keep your vehicle in showroom condition year-round. Our scheduled maintenance plans ensure your vehicle always looks its best with consistent care.",
      image: "https://wallpapers.com/images/hd/car-repair-1000-x-666-wallpaper-mm8kebd84e38p0em.jpg",
      color: "from-emerald-600 to-emerald-400"
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
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black z-10" />
          <img 
            src="https://4kwallpapers.com/images/wallpapers/rolls-royce-boat-tail-luxury-cars-2021-5k-8k-6016x3384-6702.jpg" 
            alt="Luxury car detailing" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Premium Auto <span className="text-blue-500">Detailing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Experience the ultimate transformation for your vehicle with our professional detailing services
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors"
            >
              Book Now
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
            <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Introduction */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Premium <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with meticulous attention to detail, 
            ensuring your vehicle receives the finest care possible.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              onClick={() => setActiveService(index)}
            >
              <div className={`h-48 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/30 p-4 rounded-full">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">
                  {service.description.substring(0, 100)}...
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Featured Service (Detailed View) */}
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`py-28 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-black'}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-center gap-4 mb-6">
                  {service.icon}
                  <h3 className="text-3xl md:text-4xl font-bold">{service.title}</h3>
                </div>
                <p className="text-xl text-gray-300 mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-500 mt-1" />
                      <span className="text-gray-300">
                        Premium feature {item} of our {service.title.toLowerCase()} service
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors"
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
                  <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} rounded-xl opacity-30 blur-lg`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-auto rounded-xl relative z-10"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/70 z-10" />
          <img src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mikebirdy-3729464.jpg&fm=jpg" alt="Luxury car" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-blue-500">Vehicle</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Schedule your appointment today and experience the difference professional detailing makes.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors"
              >
                Book Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white hover:bg-white/10 rounded-md text-white font-medium transition-colors"
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