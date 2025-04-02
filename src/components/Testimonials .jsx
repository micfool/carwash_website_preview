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
      content: "I've tried many detailing services, but The Car Wash Cafe is in a league of its own. The team treats each vehicle with remarkable care and precision.",
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
    <section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Clean background to match the Services section style */}
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
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Hear what our clients have to say about our premium detailing services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
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
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;