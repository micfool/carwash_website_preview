import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white relative">
      {/* Top gradient separator to match the clean design */}
      <div className="h-1 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">YOUR BUSINESS <span className="text-gray-400">NAME HERE</span></h3>
            <p className="text-gray-400 mb-6">
              Providing premium detailing services to discerning clients since 2015. 
              We're committed to excellence in every detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/servicepage" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="/servicepage" className="text-gray-400 hover:text-white transition-colors">Interior Refresh</a></li>
              <li><a href="/servicepage" className="text-gray-400 hover:text-white transition-colors">Protective Coating</a></li>
              <li><a href="/servicepage" className="text-gray-400 hover:text-white transition-colors">Premium Wash</a></li>
              <li><a href="/servicepage" className="text-gray-400 hover:text-white transition-colors">Paint Enhancement</a></li>
              <li><a href="/servicepage" className="text-gray-400 hover:text-white transition-colors">Express Services</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-gray-500 mr-3 mt-1" />
                <span className="text-gray-400">YOUR EMAIL HERE</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-gray-500 mr-3 mt-1" />
                <span className="text-gray-400">YOUR NUMBER HERE</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1" />
                <span className="text-gray-400">YOUR ADDRESS HERE</span>
              </li>
              <li className="mt-6">
                <button className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300">
                  Call Now
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} YOUR BUSINESS NAME HERE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;