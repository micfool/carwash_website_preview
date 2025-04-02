import React, { useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  // Sample gallery images with varied dimensions
  const images = [
    {
      src: "https://picture.lk/files/preview/1280x717/11722434733jr0zep6ag3ejrux9lnjpz1n3h4cn7bzjdiebbhp0ulltrdawcdkpoziilanb8sdjrckphomou90suq0yi92r7lckaw3dlfwcfap6.jpg",
      alt: "Luxury car detailing process",
      caption: "Premium Exterior Detailing",
      size: "large", // large image
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxtP9NcxkFVowWPWimHT5Yuhl8-ta02EOQQ&s",
      alt: "Interior cleaning process",
      caption: "Meticulous Interior Cleaning",
      size: "tall", // tall image
    },
    {
      src: "https://www.pixground.com/wp-content/uploads/2023/08/Bugatti-Chiron-Profilee-4K-Wallpaper-1081x608.jpg",
      alt: "Ceramic coating application",
      caption: "Professional Ceramic Coating",
      size: "small", // small image
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XmaNj-7m3GcdIX39riu1I0yTY1rKd1NOTw&s",
      alt: "Final inspection",
      caption: "Final Quality Inspection",
      size: "wide", // wide image
    },
    {
      src: "https://wallpapers.com/images/hd/4k-yellow-luxury-car-in-desert-711h9vj28bzygq1e.jpg",
      alt: "Paint correction process",
      caption: "Paint Correction",
      size: "small", // small image
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/412/867/691/car-bmw-bmw-i8-cyan-wallpaper-preview.jpg",
      alt: "Engine detailing",
      caption: "Engine Bay Detailing",
      size: "tall", // tall image
    },
    {
      src: "https://images4.alphacoders.com/103/1034978.jpg",
      alt: "Wheel and tire detailing",
      caption: "Wheel & Tire Treatment",
      size: "large", // large image
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/330/590/338/car-luxury-cars-interior-wallpaper-preview.jpg",
      alt: "Full vehicle protection",
      caption: "Complete Protection Package",
      size: "wide", // wide image
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // Function to determine grid classes based on image size
  const getGridClasses = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "tall":
        return "col-span-1 row-span-2";
      case "wide":
        return "col-span-2 row-span-1";
      case "small":
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div className="bg-black py-24 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black to-black/90 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            OUR <span className="text-blue-500">GALLERY</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience our premium detailing process through our gallery. Every
            vehicle receives our signature attention to detail.
          </p>
        </motion.div>

        {/* Modern Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`${getGridClasses(
                image.size
              )} relative overflow-hidden rounded-lg group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image)}
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-lg">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-4xl max-h-full">
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <p className="text-white text-xl font-medium">
                {selectedImage.caption}
              </p>
            </div>
            <button
              className="absolute top-4 right-4 text-white bg-blue-600 rounded-full p-2 hover:bg-blue-700 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
