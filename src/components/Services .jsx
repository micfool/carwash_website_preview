import React from "react";
import { motion } from "framer-motion";
import {
  Droplet,
  Shield,
  Star,
  Car,
  Clock,
  CheckCircle,
  Wind,
  Sparkles,
} from "lucide-react";
import { TbSpray } from "react-icons/tb";

const Services = () => {
  const services = [
    {
      icon: <TbSpray className="w-12 h-12 text-sky-400" />,
      title: "Premium Wash",
      description:
        "Thorough exterior cleaning with high-quality products for a spotless shine.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-sky-400" />,
      title: "Interior Refresh",
      description:
        "Deep cleaning of all cabin surfaces, leaving your interior fresh and sanitized.",
    },
    {
      icon: <Shield className="w-12 h-12 text-sky-400" />,
      title: "Protective Coating",
      description:
        "Advanced wax and sealants that guard against environmental damage.",
    },
    {
      icon: <Droplet className="w-12 h-12 text-sky-400" />,
      title: "Paint Enhancement",
      description:
        "Professional treatment to restore gloss and remove minor scratches.",
    },
    {
      icon: <Clock className="w-12 h-12 text-sky-400" />,
      title: "Express Services",
      description:
        "Quick but thorough cleaning options when you're on a tight schedule.",
    },
    {
      icon: <Wind className="w-12 h-12 text-sky-400" />,
      title: "Membership Plans",
      description:
        "Regular wash packages to keep your vehicle immaculate throughout the year.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with water-like effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img
          src="https://www.pixground.com/ferrari-812-competizione-tailor-4k-wallpaper/?download-img=4k"
          alt="Car wash background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated water bubble effects */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-sky-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
            OUR SERVICES
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Experience premium car wash services designed to rejuvenate and
            protect your vehicle's appearance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 },
              }}
              className="backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/10 hover:border-sky-400/30 transition-all duration-300"
            >
              <div className="mb-6 rounded-full bg-gradient-to-br from-sky-400/20 to-blue-500/20 p-4 w-20 h-20 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
