import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally submit the form data
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-gray-800" />,
      title: "Phone",
      details: "YOUR BUSINESS NUMBER HERE",
      color: "bg-gradient-to-r from-gray-200 to-white",
    },
    {
      icon: <Mail className="h-6 w-6 text-gray-800" />,
      title: "Email",
      details: "YOUR BUSINESS EMAIL HERE",
      color: "bg-gradient-to-r from-gray-200 to-white",
    },
    {
      icon: <MapPin className="h-6 w-6 text-gray-800" />,
      title: "Location",
      details: "YOUR BUSINESS ADDRESS HERE",
      color: "bg-gradient-to-r from-gray-200 to-white",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-white py-24 relative">
      {/* Use a div with background color as fallback instead of an image URL */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-white"
        style={{
          backgroundImage:
            "url('https://mrwallpaper.com/images/hd/mercedes-amg-4k-with-spooky-aesthetic-trees-tgyuwvai34kla4jm.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-300/30 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            GET IN <span className="text-gray-900">TOUCH</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question about our services? Looking to book an appointment?
            We're here to help you with all your premium car detailing needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side image and contact info */}
          <motion.div
            className="lg:col-span-1 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 relative overflow-hidden rounded-lg shadow-xl">
              <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-gray-200 to-white">
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/191/217/135/car-black-car-rolls-royce-phantom-vehicle-wallpaper-preview.jpg"
                  alt="Premium Car Detailing"
                  className="w-full object-cover h-full opacity-80 mix-blend-multiply"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-4xl font-bold text-white mb-2">
                YOUR BUSINESS NAME HERE
                </h3>
                <p className="text-gray-200 text-lg">
                  Experience the luxury your car deserves
                </p>
              </div>
            </div>

            {/* Contact info cards - Enhanced visual appeal */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-r from-gray-100/80 to-white/60 backdrop-blur-sm border-l-4 border-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Decorative element */}
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-gray-200/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex items-start">
                    <div
                      className={`${item.color} w-14 h-14 rounded-lg flex items-center justify-center shadow-md mr-4`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>

                  {/* Animated hover effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-700 to-gray-500 w-0 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Additional decorative element */}
            <div className="hidden lg:block mt-8 p-4 rounded-lg bg-gradient-to-r from-gray-200/50 to-white/50 backdrop-blur-sm border border-gray-300/50">
              <p className="text-gray-600 italic text-sm">
                "Our dedication to perfection makes us the leading choice for
                luxury vehicle detailing in Beverly Hills."
              </p>
              <div className="mt-2 flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-2">
                  <User className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-800 text-sm font-medium">
                  John Carmack, Founder
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-white/80 to-gray-100/60 backdrop-blur-sm border border-gray-300/50 rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center py-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  We'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <motion.div
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 ${
                        focused === "name" || formState.name
                          ? "text-gray-800 -translate-y-10 text-sm"
                          : ""
                      }`}
                      animate={{
                        y: focused === "name" || formState.name ? -20 : 0,
                      }}
                    >
                      <User className="h-5 w-5 inline mr-2" />
                      <span>Your Name</span>
                    </motion.div>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-white/80 border ${
                        focused === "name"
                          ? "border-gray-800"
                          : "border-gray-300"
                      } rounded-lg px-4 py-4 pt-6 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300`}
                      required
                    />
                  </div>

                  <div className="relative">
                    <motion.div
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 ${
                        focused === "email" || formState.email
                          ? "text-gray-800 -translate-y-10 text-sm"
                          : ""
                      }`}
                      animate={{
                        y: focused === "email" || formState.email ? -20 : 0,
                      }}
                    >
                      <Mail className="h-5 w-5 inline mr-2" />
                      <span>Your Email</span>
                    </motion.div>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-white/80 border ${
                        focused === "email"
                          ? "border-gray-800"
                          : "border-gray-300"
                      } rounded-lg px-4 py-4 pt-6 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300`}
                      required
                    />
                  </div>

                  <div className="relative md:col-span-2">
                    <motion.div
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 ${
                        focused === "phone" || formState.phone
                          ? "text-gray-800 -translate-y-10 text-sm"
                          : ""
                      }`}
                      animate={{
                        y: focused === "phone" || formState.phone ? -20 : 0,
                      }}
                    >
                      <Phone className="h-5 w-5 inline mr-2" />
                      <span>Phone Number</span>
                    </motion.div>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-white/80 border ${
                        focused === "phone"
                          ? "border-gray-800"
                          : "border-gray-300"
                      } rounded-lg px-4 py-4 pt-6 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300`}
                    />
                  </div>

                  <div className="relative md:col-span-2">
                    <motion.div
                      className={`absolute left-4 top-6 transform -translate-y-1/2 text-gray-500 transition-all duration-300 ${
                        focused === "message" || formState.message
                          ? "text-gray-800 -translate-y-10 text-sm"
                          : ""
                      }`}
                      animate={{
                        y: focused === "message" || formState.message ? -20 : 0,
                      }}
                    >
                      <MessageSquare className="h-5 w-5 inline mr-2" />
                      <span>Your Message</span>
                    </motion.div>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      rows="5"
                      className={`w-full bg-white/80 border ${
                        focused === "message"
                          ? "border-gray-800"
                          : "border-gray-300"
                      } rounded-lg px-4 py-4 pt-6 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300`}
                      required
                    />
                  </div>
                </div>

                {/* Submit button with animation */}
                <motion.button
                  type="submit"
                  className="mt-4 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-900 hover:to-gray-800 text-white py-4 px-8 rounded-lg font-medium flex items-center justify-center w-full md:w-auto relative overflow-hidden group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="relative z-10 flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </span>
                  <motion.div
                    className="absolute right-4 z-10"
                    animate={{
                      x: [0, 5, 0],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  ></motion.div>
                  {/* Button shine effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transform translate-x-full skew-x-15 group-hover:translate-x-0 transition-all duration-700"></div>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map section */}
        <motion.div
          className="mt-16 bg-white/60 backdrop-blur-sm border border-gray-300/50 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="aspect-w-16 aspect-h-9 w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4125.222752207306!2d150.90611719999998!3d-33.9276591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1294533e2f7615%3A0x53e3aee34ef98da6!2sCar%20Wash%20Cafe!5e0!3m2!1sen!2slk!4v1743577229341!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
