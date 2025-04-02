import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/servicepage" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg py-2" : "bg-black/50 py-4 "
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <span
              className={`text-2xl font-bold  ${
                scrolled
                  ? "text-white"
                  : " text-blue-800"
              }`}
            >
              TheCarWash<span className={` ${
                scrolled
                  ? "text-blue-600"
                  : " text-white"
              }`}>CAFE</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10 ">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                <a
                  href={link.href}
                  className={`text-gray-200 text-2xl  hover:text-blue-600 transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled ? "text-white" : ""
                  }`}
                >
                  {link.title}
                </a>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-blue-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 bg-gray-900/90 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="py-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <a
                    href={link.href}
                    className="block px-6 py-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {link.title}
                  </a>
                </motion.div>
              ))}
              <div className="px-4 py-3">
                <motion.button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  Call Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;
