import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "", course: "", branch: "", year: "", studentId: "", club: "", phone: "", email: "", skills: "", instagram: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const clubs = [
    "Panache – The Arts Club",
    "Rock On – The Cultural Club",
    "I-Tech – The Technical Club",
    "Images – The Publication Club",
    "Stride – The Sports Club",
    "M-Factor – The Management Club",
    "The Responsible Invertian – The Social Cause Club"
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // 🔹 Future: send to backend API
    // setFormData({name:"", course:"", branch:"", year:"", studentId:"", club:"", phone:"", email:"", skills:"", instagram:""});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100 p-6 overflow-hidden relative">
      
      {/* Background animated shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full opacity-40 blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full opacity-30 blur-3xl animate-spin-reverse"></div>

      <AnimatePresence>
        {!submitted ? (
          <motion.form 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -50 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            onSubmit={handleSubmit} 
            className="relative bg-white/90 backdrop-blur-lg border border-white/30 p-8 rounded-3xl shadow-2xl w-full max-w-lg flex flex-col gap-6"
          >
            <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-4">Join <span className="text-pink-500">Abhiruchi</span></h2>

            {/* Form Fields */}
            {[
              { name: "name", placeholder: "Full Name", type: "text" },
              { name: "course", placeholder: "Course", type: "text" },
              { name: "branch", placeholder: "Branch", type: "text" },
              { name: "year", placeholder: "Year", type: "text" },
              { name: "studentId", placeholder: "Student ID", type: "text" },
              { name: "skills", placeholder: "Skills You Have", type: "text" },
              { name: "instagram", placeholder: "Instagram ID", type: "text" },
              { name: "phone", placeholder: "Phone Number", type: "text" },
              { name: "email", placeholder: "Email", type: "email" },
            ].map((input, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <input
                  type={input.type}
                  name={input.name}
                  required
                  value={formData[input.name]}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 focus:border-purple-500 bg-transparent px-2 py-2 text-gray-800 placeholder-transparent outline-none transition-all duration-300"
                  placeholder={input.placeholder}
                />
                <label className="absolute left-2 -top-3 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-purple-500 peer-focus:text-sm">
                  {input.placeholder}
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 peer-focus:w-full"></div>
              </motion.div>
            ))}

            {/* Club select */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <select
                name="club"
                required
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-purple-500 bg-transparent px-2 py-2 text-gray-800 outline-none transition-all duration-300"
              >
                <option value="">Select Club</option>
                {clubs.map((c, i) => <option key={i} value={c}>{c}</option>)}
              </select>
            </motion.div>

            <motion.button
              type="submit"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              Submit
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/90 backdrop-blur-lg border border-white/30 p-8 rounded-3xl shadow-2xl w-full max-w-lg flex flex-col items-center justify-center text-center gap-4"
          >
            <h2 className="text-3xl font-extrabold text-purple-700">Thank You for Applying!</h2>
            <p className="text-gray-700 text-lg">
              Abhiruchi – The Hobby Club <br />
              Our team will contact you for interview call soon. 🎉
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 50s linear infinite; }

        @keyframes spin-reverse { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
        .animate-spin-reverse { animation: spin-reverse 60s linear infinite; }
      `}</style>
    </div>
  );
};

export default JoinUs;
