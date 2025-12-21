import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#111827] to-black py-28 px-6 text-white"
    >

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-red-600/20 rounded-full blur-3xl"></div>


      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
            Let’s Connect
          </span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Got an idea, suggestion or collaboration in mind?  
          We’re just one message away.
        </p>
      </motion.div>


      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        

        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(255,115,0,0.15)]"
        >
          <h3 className="text-3xl font-bold mb-10 text-orange-400">
            Contact Info
          </h3>

          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <Mail className="w-7 h-7 text-orange-400" />
              <span className="text-gray-300">
                abhiruchi@invertisuniversity.ac.in
              </span>
            </div>

            <div className="flex items-center gap-5">
              <Phone className="w-7 h-7 text-orange-400" />
              <span className="text-gray-300">
                +91 7524917394
              </span>
            </div>

            <div className="flex items-center gap-5">
              <MapPin className="w-7 h-7 text-orange-400" />
              <span className="text-gray-300">
                Invertis University, Bareilly, UP
              </span>
            </div>
          </div>
        </motion.div>


        <motion.form
          initial={{ opacity: 0, y: 60, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          onSubmit={(e) => e.preventDefault()}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(255,0,0,0.15)]"
        >
          <h3 className="text-3xl font-bold mb-10 text-red-400">
            Send Message
          </h3>

          <div className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              required
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-orange-500/40 transition"
            >
              <Send className="w-5 h-5" /> Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
