import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Thompson",
      role: "Porsche 911 Owner",
      content: "The attention to detail is exceptional. My car looks better than when I first bought it. The ceramic coating has made maintenance so much easier.",
      rating: 5,
      image: "/api/placeholder/100/100" // Replace with actual client photo
    },
    {
      name: "Alexandra Williams",
      role: "Mercedes S-Class Owner",
      content: "I've tried many detailing services, but Premium Car Wash is in a league of its own. The team treats each vehicle with remarkable care and precision.",
      rating: 5,
      image: "/api/placeholder/100/100" // Replace with actual client photo
    },
    {
      name: "Robert Chen",
      role: "Tesla Model S Owner",
      content: "Their eco-friendly products and attention to the specific needs of electric vehicles impressed me. Outstanding service from start to finish.",
      rating: 5,
      image: "/api/placeholder/100/100" // Replace with actual client photo
    }
  ];

  return (
    <div className="bg-black py-24 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Luxury car background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">CLIENT <span className="text-blue-500">TESTIMONIALS</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about our premium detailing services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;