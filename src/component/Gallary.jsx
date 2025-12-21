import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  /*
    👉 FUTURE UPDATE GUIDE:
    - Naye gallery items add karne ke liye galleryItems array me object add karo
    - images array me real image paths daal dena
    - Abhi dummy images use ho rahi hain
  */
  const galleryItems = [
    {
      title: "Art Exhibition",
      caption: "Creative expressions by Panache members.",
      images: ["/images/art.jpg", "/images/art.jpg", "/images/art.jpg"], // 👉 Add more images here
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Cultural Night",
      caption: "Vibrant performances by Rock On club.",
      images: ["/images/culture.jpg", "/images/culture.jpg", "/images/culture.jpg"],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "IOT War",
      caption: "Innovative projects by I-Tech club.",
      images: ["/images/iot.jpg", "/images/iot.jpg", "/images/iot.jpg"],
      gradient: "from-sky-500 to-blue-600",
    },
    {
      title: "Sports Meet",
      caption: "Energy & enthusiasm by Stride club.",
      images: ["/images/stride.jpg", "/images/stride.jpg", "/images/stride.jpg"],
      gradient: "from-emerald-500 to-green-600",
    },
    {
      title: "Publication Drive",
      caption: "Students expressing thoughts in words.",
      images: ["/images/publication.jpg", "/images/publication.jpg"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Social Awareness",
      caption: "Programs by Responsible Invertians.",
      images: ["/images/iot.jpg", "/images/iot.jpg"], // Dummy image
      gradient: "from-red-500 to-pink-600",
    },
  ];

  // ⚠️ Sliding gallery – DO NOT CHANGE
  const slidingImages = [
    "/images/art.jpg",
    "/images/culture.jpg",
    "/images/iot.jpg",
    "/images/stride.jpg",
    "/images/publication.jpg",
    "/images/iot.jpg",
  ];

  return (
    <section id="gallery" className="bg-slate-950 text-white py-20 overflow-hidden">

      {/* ===== Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold">
          Abhiruchi <span className="text-amber-400">Gallery</span>
        </h2>
        <p className="text-white/70 mt-3">
          Moments • Creativity • Culture • Energy
        </p>
      </motion.div>

      {/* ===== Sliding Images ===== */}
      <div className="relative mb-24 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...slidingImages, ...slidingImages].map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setActiveItem({ image: img })}
              className="w-72 h-44 rounded-2xl object-cover opacity-80 cursor-pointer hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>

      {/* ===== Cards ===== */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.05 }}
            onClick={() => setActiveItem(item)}
            className={`relative cursor-pointer h-56 rounded-3xl p-6
              bg-gradient-to-br ${item.gradient}
              shadow-2xl overflow-hidden`}
          >
            <img
              src={item.images[0]}
              className="absolute inset-0 w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-white/80 text-sm mt-2">{item.caption}</p>
              <span className="inline-block mt-4 text-sm underline">
                View Memories →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== Modal (Cards + Sliding Images) ===== */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveItem(null);
              setPreviewImage(null);
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-slate-900 rounded-3xl p-6 max-w-4xl w-full"
            >
              {/* Card modal */}
              {activeItem.images && (
                <>
                  <h3 className="text-3xl font-bold mb-2">
                    {activeItem.title}
                  </h3>
                  <p className="text-white/70 mb-6">{activeItem.caption}</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeItem.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        onClick={() => setPreviewImage(img)}
                        className="rounded-xl w-full h-44 object-cover cursor-pointer hover:scale-105 transition"
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Sliding image modal */}
              {activeItem.image && (
                <img
                  src={activeItem.image}
                  className="rounded-2xl w-full max-h-[80vh] object-contain"
                />
              )}

              <button
                onClick={() => {
                  setActiveItem(null);
                  setPreviewImage(null);
                }}
                className="mt-6 text-amber-400 hover:underline block mx-auto"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Single Image Preview ===== */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center px-6"
            onClick={() => setPreviewImage(null)}
          >
            <img
              src={previewImage}
              className="max-h-[90vh] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
