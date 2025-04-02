import React, { useState } from "react";
import { motion } from "framer-motion";

import Img1 from "../images/others/1.jpg"
import Img2 from "../images/others/2.jpg"
import Img3 from "../images/others/3.jpg"
import Img4 from "../images/others/4.jpg"
import Img5 from "../images/others/5.jpg"
import Img6 from "../images/others/6.jpg"
import Img7 from "../images/others/7.jpg"
import Img8 from "../images/others/8.jpg"



const Gallery = () => {
  // Sample gallery images with varied dimensions
  const images = [
    {
      src: Img1,
      alt: "Luxury car detailing process",
      caption: "Premium Exterior Detailing",
      size: "large", // large image
    },
    {
      src: Img2,
      alt: "Interior cleaning process",
      caption: "Meticulous Interior Cleaning",
      size: "tall", // tall image
    },
    {
      src: Img3,
      alt: "Ceramic coating application",
      caption: "Professional Ceramic Coating",
      size: "small", // small image
    },
    {
      src: Img4,
      alt: "Final inspection",
      caption: "Final Quality Inspection",
      size: "wide", // wide image
    },
    {
      src: Img5,
      alt: "Paint correction process",
      caption: "Paint Correction",
      size: "small", // small image
    },
    {
      src: Img6,
      alt: "Engine detailing",
      caption: "Engine Bay Detailing",
      size: "tall", // tall image
    },
    {
      src: Img7,
      alt: "Wheel and tire detailing",
      caption: "Wheel & Tire Treatment",
      size: "large", // large image
    },
    {
      src: Img8,
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
    <div className="bg-white py-24 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white to-white/90 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            OUR <span className="text-gray-900">GALLERY</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our premium detailing services through our gallery. Every
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
              )} relative overflow-hidden rounded-lg group cursor-pointer shadow-md`}
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          className="fixed inset-0 bg-gray-900/90 z-50 flex items-center justify-center p-4"
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
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
              <p className="text-white text-xl font-medium">
                {selectedImage.caption}
              </p>
            </div>
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors"
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