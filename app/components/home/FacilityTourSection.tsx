"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

type Space = {
  title: string;
  image: string;
};

const spaces = [
  { title: "Reception", image: "/facility/facility1.jpg" },
  { title: "Patient Room", image: "/facility/facility2.jpg" },
  { title: "Operating Room", image: "/facility/facility3.jpg" },
  { title: "Laboratory", image: "/facility/facility4.jpg" },
  { title: "Waiting Area", image: "/facility/facility5.jpg" },
  { title: "Imaging Center", image: "/facility/facility6.jpg" }
];

export function FacilityTourSection() {
  const [selectedImage, setSelectedImage] = useState<Space | null>(null);

  return (
    <section id="facility-tour" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFE8E8] text-[#FF6B6B] px-4 py-2 rounded-full text-sm font-medium mb-4">OUR FACILITY</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2A2A2A] mb-4">Tour Our Modern Facility</h2>
          <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">Experience our state-of-the-art medical facility designed for your comfort and care.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((item, index) => (
            <motion.div 
              layoutId={item.image} // Syncs the thumbnail to the popup
              key={index} 
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white text-lg font-semibold">{item.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smooth Popup Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <button 
                className="absolute -top-12 right-0 text-white text-4xl font-light hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white text-center mt-6 text-2xl font-serif"
              >
                {selectedImage.title}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}