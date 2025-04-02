import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white relative">
      {/* Top gradient separator */}
      <div className="h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">PREMIUM <span className="text-blue-500">CAR WASH</span></h3>
            <p className="text-gray-400 mb-6">
              Providing luxury detailing services to discerning clients since 2010. 
              We're committed to excellence in every detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Exterior Detailing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Interior Detailing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Ceramic Coating</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Paint Correction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Maintenance Plans</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                <span className="text-gray-400">info@premiumcarwash.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} Premium Car Wash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;