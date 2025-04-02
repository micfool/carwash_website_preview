import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const GallerySection = () => {
  // Featured gallery images - limited selection for homepage
  const featuredImages = [
    {
      src: "https://c4.wallpaperflare.com/wallpaper/412/867/691/car-bmw-bmw-i8-cyan-wallpaper-preview.jpg",
      alt: "Luxury car detailing process",
      caption: "Premium Exterior Detailing"
    },
    {
      src: "https://images4.alphacoders.com/103/1034978.jpg",
      alt: "Interior cleaning process",
      caption: "Meticulous Interior Cleaning"
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/330/590/338/car-luxury-cars-interior-wallpaper-preview.jpg",
      alt: "Ceramic coating application",
      caption: "Professional Ceramic Coating"
    }
  ];

  // New thumbnail gallery images with different sources
  const thumbnailImages = [
    {
      src: "https://images4.alphacoders.com/103/1034978.jpg",
      alt: "Sports car detail closeup"
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/330/590/338/car-luxury-cars-interior-wallpaper-preview.jpg",
      alt: "Classic car restoration"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxtP9NcxkFVowWPWimHT5Yuhl8-ta02EOQQ&s",
      alt: "Premium wheel detailing"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XmaNj-7m3GcdIX39riu1I0yTY1rKd1NOTw&s",
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
    <div className="bg-black py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#3b82f6,transparent_70%)]" />
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">OUR</span> <span className="text-blue-500">GALLERY</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience our premium detailing process through our showcase. Every vehicle receives our signature attention to detail.
          </p>
        </motion.div>

        {/* Featured gallery slider */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="overflow-hidden rounded-2xl shadow-2xl relative">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 md:p-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-white">{featuredImages[currentIndex].caption}</p>
              </motion.div>
            </motion.div>

            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-blue-600 p-3 rounded-full text-white z-10 transition-colors duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-blue-600 p-3 rounded-full text-white z-10 transition-colors duration-300"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-3">
            {featuredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-10 bg-blue-500" : "w-3 bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Gallery thumbnails preview - 2x2 grid with different images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {thumbnailImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl aspect-square group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
              View Full Gallery
              <ExternalLink size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default GallerySection;