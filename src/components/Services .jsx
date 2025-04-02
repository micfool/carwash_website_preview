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
      icon: <TbSpray className="w-10 h-10 text-gray-700" />,
      title: "Premium Wash",
      description:
        "Thorough exterior cleaning with high-quality products for a spotless shine.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-gray-700" />,
      title: "Interior Refresh",
      description:
        "Deep cleaning of all cabin surfaces, leaving your interior fresh and sanitized.",
    },
    {
      icon: <Shield className="w-10 h-10 text-gray-700" />,
      title: "Protective Coating",
      description:
        "Advanced wax and sealants that guard against environmental damage.",
    },
    {
      icon: <Droplet className="w-10 h-10 text-gray-700" />,
      title: "Paint Enhancement",
      description:
        "Professional treatment to restore gloss and remove minor scratches.",
    },
    {
      icon: <Clock className="w-10 h-10 text-gray-700" />,
      title: "Express Services",
      description:
        "Quick but thorough cleaning options when you're on a tight schedule.",
    },
    {
      icon: <Wind className="w-10 h-10 text-gray-700" />,
      title: "Membership Plans",
      description:
        "Regular wash packages to keep your vehicle immaculate throughout the year.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      {/* Clean white background instead of image */}
      <div className="absolute inset-0 z-0 bg-white">
        <div className="absolute inset-0 bg-gray-100/50 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            OUR SERVICES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
              className="bg-white p-8 rounded-lg border border-gray-100 hover:border-gray-300 transition-all duration-300 shadow-sm"
            >
              <div className="mb-6 rounded-full bg-gray-100 p-4 w-16 h-16 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;