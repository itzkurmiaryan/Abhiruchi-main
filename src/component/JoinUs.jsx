import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser"; // ✅ EmailJS modern import

/* ===== CLUB LOGOS ===== */
import panache from "../assets/panache.png";
import rockon from "../assets/rockon.png";
import itech from "../assets/itech.png";
import images from "../assets/images.png";
import stride from "../assets/stride.png";
import mfactor from "../assets/mfactor.png";
import responsible from "../assets/tri.png";

/* ===== CLUB DATA ===== */
// Add email of club president here for notification
const clubsData = [
  { name: "Panache – The Arts Club", logo: panache, email: "panache@gmail.com" },
  { name: "Rock On – The Cultural Club", logo: rockon, email: "rockon@gmail.com" },
  { name: "I-Tech – The Technical Club", logo: itech, email: "itech@gmail.com" },
  { name: "Images – The Publication Club", logo: images, email: "images@gmail.com" },
  { name: "Stride – The Sports Club", logo: stride, email: "stride@gmail.com" },
  { name: "M-Factor – The Management Club", logo: mfactor, email: "mfactor@gmail.com" },
  { name: "The Responsible Invertian – The Social Cause Club", logo: responsible, email: "responsible@gmail.com" }
];



const JoinUs = () => {
  // 🔹 Form state
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    branch: "",
    year: "",
    studentId: "",
    club: "",
    phone: "",
    email: "",
    skills: "",
    instagram: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedClub = clubsData.find(c => c.name === formData.club);
  const otherClubs = clubsData.filter(c => c.name !== formData.club);

  // 🔹 Handle form input changes
  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // 🔹 Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    // 🔹 Send email using EmailJS
    if (selectedClub) {
      const templateParams = {
        to_email: selectedClub.email,
        student_name: formData.name,
        student_course: formData.course,
        student_branch: formData.branch,
        student_year: formData.year,
        student_id: formData.studentId,
        student_phone: formData.phone,
        student_email: formData.email,
        student_skills: formData.skills,
        student_instagram: formData.instagram,
        club_name: selectedClub.name
      };

      emailjs.send(
        "service_maakix5",
        "template_trfcjfd",
        templateParams
      )

        .then(
          (response) => {
            console.log("Email sent!", response.status, response.text);
          },
          (error) => {
            console.error("Email error:", error);
          }
        );
    }

    // 🔹 Simulate loading animation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100 px-4 py-10 relative overflow-hidden">

      {/* ================= LOADING SCREEN ================= */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px]">

              {/* ===== CENTER SELECTED CLUB ===== */}
              {selectedClub && (
                <motion.img
                  src={selectedClub.logo}
                  alt={selectedClub.name}
                  className="absolute left-1/2 top-1/2 w-28 sm:w-36 z-20"
                  style={{ transform: "translate(-50%, -50%)" }}
                  animate={{
                    scale: [1, 1.12, 1],
                    rotate: [0, 2, -2, 0],
                    filter: [
                      "drop-shadow(0 0 10px #ec4899)",
                      "drop-shadow(0 0 30px #ec4899)",
                      "drop-shadow(0 0 10px #ec4899)"
                    ]
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}

              {/* ===== OTHER CLUBS : BREAK / PULSE EFFECT ===== */}
              {otherClubs.map((club, i) => {
                const angle = (360 / otherClubs.length) * i;
                const radius = 150;
                const rad = (angle * Math.PI) / 180;

                return (
                  <motion.img
                    key={i}
                    src={club.logo}
                    alt={club.name}
                    className="absolute w-14 sm:w-16"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      filter: "drop-shadow(0 0 14px rgba(255,255,255,0.7))"
                    }}
                    animate={{
                      x: Math.cos(rad) * radius,
                      y: Math.sin(rad) * radius,
                      rotate: [0, 20, -20, 0],
                      scale: [1, 0.8, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15
                    }}
                  />
                );
              })}

              {/* ===== TEXT ===== */}
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="absolute -bottom-16 w-full text-center text-white tracking-widest font-semibold"
              >
                Submitting Application…
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= FORM / SUCCESS ================= */}
      <AnimatePresence>
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg flex flex-col gap-4 z-10"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-purple-700">
              Join <span className="text-pink-500">Abhiruchi</span>
            </h2>

            {/* ===== INPUT FIELDS ===== */}
            {[
              "name",
              "course",
              "branch",
              "year",
              "studentId",
              "skills",
              "instagram",
              "phone",
              "email"
            ].map((field, i) => (
              <input
                key={i}
                required
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field.toUpperCase()}
                value={formData[field]}
                onChange={handleChange}
                className="border-b-2 border-gray-300 focus:border-pink-500 outline-none py-2 bg-transparent"
              />
            ))}

            {/* ===== CLUB SELECT ===== */}
            <select
              name="club"
              required
              onChange={handleChange}
              className="border-b-2 border-gray-300 focus:border-pink-500 outline-none py-2 bg-transparent"
            >
              <option value="">Select Club</option>
              {clubsData.map((c, i) => (
                <option key={i}>{c.name}</option>
              ))}
            </select>

            {/* ===== SUBMIT BUTTON ===== */}
            <button
              type="submit"
              className="mt-3 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:scale-105 transition"
            >
              Submit
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-3xl shadow-2xl text-center"
          >
            {/* Show club logo on success */}
            {selectedClub && (
              <img
                src={selectedClub.logo}
                alt={selectedClub.name}
                className="w-24 mx-auto mb-4"
              />
            )}
            <h2 className="text-3xl font-extrabold text-purple-700">
              Application Submitted!
            </h2>
            <p className="mt-3 text-gray-700">
              Welcome to <b>{selectedClub?.name}</b> 🎉 <br />
              Team Abhiruchi will contact you soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JoinUs;
