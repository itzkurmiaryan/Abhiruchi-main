import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

/* ===== CLUB LOGOS ===== */
import panache from "../assets/panache.png";
import rockon from "../assets/rockon.png";
import itech from "../assets/itech.png";
import images from "../assets/images.png";
import stride from "../assets/stride.png";
import mfactor from "../assets/mfactor.png";
import responsible from "../assets/tri.png";

const clubLogos = [
  panache,
  rockon,
  itech,
  images,
  stride,
  mfactor,
  responsible
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_3eggz79",
        "template_mwc7olk",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      );

      setSent(true);
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      alert("Message failed ❌");
      console.error(error);
    } finally {
      setTimeout(() => setSending(false), 3500);
    }
  };

  return (
    <>
      {/* ================= LOADING SCREEN ================= */}
      <AnimatePresence>
        {sending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px] flex items-center justify-center">

              {/* ===== GLOWING CENTER RING ===== */}
              <motion.div
                className="absolute w-40 h-40 rounded-full border-4 border-gradient-to-r from-orange-400 via-red-500 to-pink-500 shadow-[0_0_40px_rgba(255,115,0,0.5)]"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 360, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* ===== CENTER TEXT ===== */}
              <motion.h3
                className="absolute text-white text-2xl font-bold tracking-widest"
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Sending…
              </motion.h3>

              {/* ===== BIG ORBITING CLUB LOGOS ===== */}
              {clubLogos.map((logo, i) => {
                const angle = (360 / clubLogos.length) * i;
                const radius = 160;
                const rad = (angle * Math.PI) / 180;

                return (
                  <motion.img
                    key={i}
                    src={logo}
                    alt={`Club ${i}`}
                    className="absolute w-20 sm:w-24 rounded-full border-2 border-white/20 shadow-lg"
                    style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                    animate={{
                      x: Math.cos(rad) * radius,
                      y: Math.sin(rad) * radius,
                      scale: [0.9, 1.2, 0.9],
                      rotate: [0, 25, -25, 0],
                      opacity: [0.6, 1, 0.6],
                      filter: [
                        "drop-shadow(0 0 10px #fff)",
                        "drop-shadow(0 0 25px #ff4500)",
                        "drop-shadow(0 0 10px #fff)"
                      ]
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#111827] to-black py-28 px-6 text-white"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-lg">
            <h3 className="text-3xl font-bold mb-10 text-orange-400">
              Contact Info
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <Mail className="text-orange-400" /> abhiruchi@invertisuniversity.ac.in
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-orange-400" /> +91 7524917394
              </div>
              <div className="flex gap-4 items-center">
                <MapPin className="text-orange-400" /> Invertis University, Bareilly
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {!sent ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-lg relative"
            >
              <h3 className="text-3xl font-bold mb-10 text-red-400">
                Send Message
              </h3>

              <div className="space-y-6">
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-black/40 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                />

                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-black/40 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                />

                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full bg-black/40 px-5 py-4 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                ></textarea>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 py-4 rounded-xl font-semibold hover:scale-105 transition"
                >
                  <Send size={18} /> Send Message
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 shadow-lg">
              <h2 className="text-4xl font-bold text-green-400 mb-4">Message Sent ✅</h2>
              <p className="text-gray-300">Team Abhiruchi will contact you soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
