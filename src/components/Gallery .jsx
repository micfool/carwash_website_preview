import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';


import Img1 from "../images/others/1.jpg"
import Img2 from "../images/others/2.jpg"
import Img3 from "../images/others/3.jpg"
import Img4 from "../images/others/4.jpg"
import Img6 from "../images/others/6.jpg"
import Img7 from "../images/others/7.jpg"
import Img8 from "../images/others/8.jpg"

const GallerySection = () => {
  // Featured gallery images - limited selection for homepage
  const featuredImages = [
    {
      src: Img1,
      alt: "Luxury car detailing process",
      caption: "Premium Exterior Detailing"
    },
    {
      src: Img7,
      alt: "Interior cleaning process",
      caption: "Meticulous Interior Cleaning"
    },
    {
      src: Img8,
      alt: "Ceramic coating application",
      caption: "Professional Ceramic Coating"
    }
  ];

  // New thumbnail gallery images with different sources
  const thumbnailImages = [
    {
      src: Img2,
      alt: "Sports car detail closeup"
    },
    {
      src: Img3,
      alt: "Classic car restoration"
    },
    {
      src: Img4,
      alt: "Premium wheel detailing"
    },
    {
      src: Img6,
      alt: "Headlight restoration"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredImages.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slider every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-20 relative">
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            OUR GALLERY
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our premium detailing process through our showcase. Every vehicle receives our signature attention to detail.
          </p>
        </motion.div>

        {/* Featured gallery slider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="overflow-hidden rounded-lg shadow-md relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[16/9]"
            >
              <img 
                src={featuredImages[currentIndex].src} 
                alt={featuredImages[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-xl font-medium text-white">{featuredImages[currentIndex].caption}</p>
              </motion.div>
            </motion.div>

            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-gray-800 z-10 transition-colors duration-300 shadow-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-gray-800 z-10 transition-colors duration-300 shadow-sm"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {featuredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-gray-800" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Gallery thumbnails preview - 2x2 grid with different images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {thumbnailImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-md shadow-sm aspect-square group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="/gallery" className="group">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md flex items-center gap-2 font-medium transition-all duration-300 shadow-sm">
              View Full Gallery
              <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default GallerySection;