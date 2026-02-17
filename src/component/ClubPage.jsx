import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

import rockonLogo from "../assets/rockon.png";
import panacheLogo from "../assets/panache.png";
import itechLogo from "../assets/itech.png";
import imagesLogo from "../assets/images.png";
import strideLogo from "../assets/stride.png";
<<<<<<< HEAD
=======

>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
import mfactorLogo from "../assets/mfactor.png";
import triLogo from "../assets/tri.png";
import profileImg from "../assets/profile.png";
import sp from "../assets/stride/p.png";
<<<<<<< HEAD
=======
import harshit from "../assets/stride/harshit.jpeg";
import parul from "../assets/stride/parul.jpeg";
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
import Riddhima from "../assets/images/1.jpg"; 
import Nitin from "../assets/images/2.jpg"; 
import Harshdeep from "../assets/images/3.jpg"; 
import Shagun from "../assets/images/4.jpg"; 
import Eshan from "../assets/images/5.jpg"; 
import Jessica from "../assets/images/6.jpg"; 
import Kavya from "../assets/images/7.jpg"; 
import Sukhman from "../assets/images/8.jpg"; 
import Yuvika from "../assets/images/a.jpg"; 
import Vishesh from "../assets/images/b.jpg"; 
import Khushi from "../assets/images/c.jpg"; 
import Shreya from "../assets/images/d.jpg"; 
import Vinayak from "../assets/images/e.jpg";  
<<<<<<< HEAD
=======
import divayansh from "../assets/rockon/divayansh.jpeg";
import saudamini from "../assets/rockon/saudamini.jpeg";
import Aarambh from "../assets/ri/arambh.jpeg";
import shreya from "../assets/ri/shreya.jpeg";
import somnath from "../assets/ri/somnath.jpeg";
import akshara from "../assets/panache/akshara.jpeg";
import harsh from "../assets/panache/harsh.jpeg";
import saloni from "../assets/panache/saloni.jpeg";
import sayan from "../assets/panache/sayan.jpeg";
import ananya from "../assets/mfactor/ananya.jpeg";
import dhruv from "../assets/mfactor/dhruv.jpeg";
import jayesh from "../assets/mfactor/jayesh.jpeg";
import tejas from "../assets/mfactor/tejas.jpeg";
import mitali from "../assets/itech/m.jpeg";
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18

/* ================== CLUBS DATA ================== */

const clubsData = {
  rockon: {
    title: "Rock On",
    logo: rockonLogo,
    color: "#fb7185",
    tagline: "Feel the rhythm. Own the stage.",
    about:
      "Rock On Club is the cultural heartbeat of Abhiruchi. It nurtures talent in music, dance and stage performances.",
    team: [
      {
        role: "President",
        name: "Dipasha Saxena",
        course: "BBA",
        branch: " ",
        year: "3rd Year",
        photo: profileImg,
      },
      {
        role: "Vice President",
        name: "Sneha  Srivastav",
        course: "Btech",
        branch: "Cse",
        year: "3rd Year",
        photo: profileImg,
      },
      {
        role: "Secretary",
        name: "Saudamini Trivedi ",
        course: "BA LLB",
        branch: " ",
        year: "3rd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: saudamini,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Joint Secretary",
        name: "Akshima Kohli",
        course: "B.A LLB",
        branch: " ",
        year: "2nd Year",
        photo: profileImg,
      },
      {
        role: "Treasurer",
        name: "Divyansh Shakya",
        course: "B.SC",
        branch: "(Forensic Sc) ",
        year: "2nd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: divayansh,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },

    ],

    members: [
      { name: "Neha", course: "BA", branch: "Music", year: "2nd Year", photo: profileImg },
      { name: "Amit", course: "B.Tech", branch: "CSE", year: "1st Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
    ],
  },

  panache: {
    title: "Panache",
    logo: panacheLogo,
    color: "#a855f7",
    tagline: "Art beyond imagination.",
    about: "Panache focuses on art, painting and creative crafts.",
    team: [
      {
        role: "President",
        name: "Saloni Rajpoot",
        course: "B.A BED",
        branch: " ",
        year: "3rd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: saloni,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Vice President",
        name: "Sayan Biswas",
        course: "Btech",
        branch: "BioTech",
        year: "2nd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: sayan,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Secretary",
        name: "Akshara Rawat",
        course: "B.Com",
        branch: "Hons ",
        year: "2nd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: akshara,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Joint Secretary",
        name: "Harsh Pratap Singh ",
        course: "BCA",
        branch: " ",
        year: "2nd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: harsh,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Treasurer",
        name: "Shreya Gupta",
        course: "BCA",
        branch: " ",
        year: "2nd Year",
        photo: profileImg,
      },

    ],

    members: [
      { name: "Neha", course: "BA", branch: "Music", year: "2nd Year", photo: profileImg },
      { name: "Amit", course: "B.Tech", branch: "CSE", year: "1st Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
    ],
  },
  itech: {
    title: "I-Tech",
    logo: itechLogo,
    color: "#22d3ee",
    tagline: "Innovate. Build. Lead.",
    about: "I-Tech promotes coding, robotics, AI and innovation culture.",
    team: [
      {
        role: "President",
        name: "Kushal Saxena",
        course: "BTech",
        branch: "CSe ",
        year: "3rd Year",
        photo: profileImg,
      },
      {
        role: "Vice President",
        name: "Mitali Singh",
        course: "BCA",
        branch: "",
        year: "3rd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: mitali,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Secretary",
        name: "Deeksha Kshatriya",
        course: "BSc",
        branch: "BioTech ",
        year: "2nd Year",
        photo: profileImg,
      },
      {
        role: "Joint Secretary",
        name: "Naitik Kashyap ",
        course: "BCA",
        branch: " ",
        year: "2nd Year",
        photo: profileImg,
      },
      {
        role: "Treasurer",
        name: "Uttkarsh Vashisht",
        course: "BTech",
        branch: "Cse ",
        year: "3rd Year",
        photo: profileImg,
      },

    ],

    members: [
      { name: "Neha", course: "BA", branch: "Music", year: "2nd Year", photo: profileImg },
      { name: "Amit", course: "B.Tech", branch: "CSE", year: "1st Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
    ],
  },
  images: {
    title: "Images",
    logo: imagesLogo,
    color: "#fbbf24",
    tagline: "Stories that stay forever.",
    about: "Images handles media, content and documentation.",
    team: [
      {
        role: "President",
        name: "Yuvika Saxena",
        course: "BA",
        branch: "English(Hons) ",
        year: "2nd Year",
        photo: Yuvika,
      },
      {
        role: "Vice President",
        name: "Vishesh Arora",
        course: "B.A LLB",
        branch: "",
        year: "2nd Year",
        photo: Vishesh,
      },
      {
        role: "Secretary",
        name: "Khushi Saxena",
        course: "BTech",
        branch: "BioTech ",
        year: "3rd Year",
        photo: Khushi,
      },
      {
        role: "Joint Secretary",
        name: "Shreya Verma ",
        course: "BTech",
        branch: "AI ",
        year: "2nd Year",
        photo: Shreya,
      },
      {
        role: "Treasurer",
        name: "Vinayak Varshney",
        course: "BTech",
        branch: "Cse ",
        year: "2nd Year",
        photo: Vinayak,
      },

    ],

    members: [
      { name: "Nitin Patel", course: "BTech", branch: "CSE", year: "1st Year", photo: Nitin },
      { name: "Riddhima", course: "B.Tech", branch: "CSE", year: "1st Year", photo: Riddhima },
      { name: "Harshdeep Singh", course: "BBA", branch: "", year: "1st Year", photo: Harshdeep },
      { name: "SukhmanPreet Kaur", course: "BBA", branch: "", year: "1st Year", photo: Sukhman },
      { name: "Shagun Rai", course: "BA", branch: "Dance", year: "1st Year", photo: Shagun },
      { name: "Eshan Bhardwaj", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: Eshan },
      { name: "Jessica Gupta", course: "Btech", branch: "BioTech", year: "3rd Year", photo: Jessica },
      { name: "Kavya Wadhwa", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: Kavya },
    ],
  },
  stride: {
    title: "Stride",
    logo: strideLogo,
    color: "#34d399",
    tagline: "Strength. Speed. Spirit.",
    about: "Stride promotes sportsmanship and fitness.",
    team: [
      {
        role: "President",
        name: "Deepak Mehra",
        course: "MBA",
        branch: "",
        year: "2nd Year",
        photo: sp,
      },
      {
        role: "Vice President",
        name: "Harshit Pandey ",
        course: "BSC",
        branch: "ZBC",
        year: "3rd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: harshit,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },

      {
        role: "Joint Secretary",
        name: "Parul Sengar ",
        course: "BTech",
        branch: "BioTech ",
        year: "2nd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: parul,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Treasurer",
        name: "Shravani Gautam",
        course: "BBA",
        branch: " ",
        year: "2nd Year",
        photo: profileImg,
      },

    ],

    members: [
      { name: "Neha", course: "BA", branch: "Music", year: "2nd Year", photo: profileImg },
      { name: "Amit", course: "B.Tech", branch: "CSE", year: "1st Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
    ],
  },
  mfactor: {
    title: "M-Factor",
    logo: mfactorLogo,
    color: "#8b5cf6",
    tagline: "Lead with impact.",
    about: "M-Factor builds leadership and management skills.",
    team: [
      {
        role: "President",
        name: "Tejas Sharma",
        course: "BTech",
        branch: "BioTech ",
        year: "2nd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: tejas,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Vice President",
        name: "Aanya Gupta",
        course: "BTech",
        branch: "BioTech",
        year: "2nd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: ananya,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Secretary",
        name: "Shubhi Shukla",
        course: "BBA",
        branch: "",
        year: "2nd Year",
        photo: profileImg,
      },
      {
        role: "Joint Secretary",
        name: "Jayesh Kudesia ",
        course: "BSC",
        branch: "Forensic Sc ",
        year: "2nd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: jayesh,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Treasurer",
        name: "Dhruv Kumar",
        course: "BCA",
        branch: "",
        year: "3rd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: dhruv,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },

    ],

    members: [
      { name: "Neha", course: "BA", branch: "Music", year: "2nd Year", photo: profileImg },
      { name: "Amit", course: "B.Tech", branch: "CSE", year: "1st Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
    ],
  },
  tri: {
    title: "The Responsible Invertian",
    logo: triLogo,
    color: "#fb923c",
    tagline: "Serve beyond self.",
    about: "TRI focuses on social responsibility and welfare.",
    team: [
      {
        role: "President",
        name: "Aarambh Awasthi ",
        course: "BSC Hons ",
        branch: "Agriculture ",
        year: "2nd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: Aarambh,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Vice President",
        name: "Shrishti Gambhir",
        course: "BCOM",
        branch: "Hons",
        year: "2nd Year",
        photo: profileImg,
      },
      {
        role: "Secretary",
        name: "Shreya Rastogi",
        course: "BBA LLB",
        branch: "",
        year: "3rd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: shreya,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Joint Secretary",
        name: "Somnath Arora",
        course: "BBA",
        branch: " ",
        year: "2nd Year",
<<<<<<< HEAD
        photo: profileImg,
=======
        photo: somnath,
>>>>>>> 1d34f37d0d4f879d6915943afdbe90604b774a18
      },
      {
        role: "Treasurer",
        name: "Abhishek Singh",
        course: "BBA",
        branch: "",
        year: "2nd Year",
        photo: profileImg,
      },

    ],

    members: [
      { name: "Neha", course: "BA", branch: "Music", year: "2nd Year", photo: profileImg },
      { name: "Amit", course: "B.Tech", branch: "CSE", year: "1st Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
      { name: "Riya", course: "BA", branch: "Dance", year: "3rd Year", photo: profileImg },
      { name: "Kunal", course: "B.Com", branch: "Commerce", year: "2nd Year", photo: profileImg },
    ],
  },
};

/* ================== COMPONENT ================== */

export default function ClubPage() {
  const { clubName } = useParams();
  const club = clubsData[clubName];

  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!club) {
    return (
      <div className="text-center mt-40 text-xl text-white">
        Club not found
      </div>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden text-white noise-bg">
      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{
          background: `linear-gradient(120deg, ${club.color}, #000 60%)`,
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        {/* HERO */}
        <div className="text-center mb-36">
          <img src={club.logo} className="w-44 mx-auto mb-8" />
          <h1
            className="text-6xl md:text-7xl font-extrabold"
            style={{ color: club.color }}
          >
            {club.title}
          </h1>
          <p className="mt-4 text-xl text-gray-200">{club.tagline}</p>
        </div>

        {/* ABOUT */}
        <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-16 mb-36 border border-white/20">
          <h2 className="text-4xl font-bold mb-6">About the Club</h2>
          <p className="text-lg leading-loose">{club.about}</p>
        </div>

        {/* PRESIDENTIAL TEAM */}
        <h2 className="text-4xl font-bold mb-20 text-center">
          Presidential Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-36">
          {club.team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, rotateY: 8 }}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20"
            >
              <img
                src={member.photo}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
              <p className="text-sm mt-2">{member.course}</p>
              <p className="text-sm">{member.branch}</p>
              <p className="text-sm">{member.year}</p>
            </motion.div>
          ))}
        </div>

        {/* ACTIVE MEMBERS */}
        <h2 className="text-4xl font-bold mb-16 text-center">
          Active Members
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {club.members.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer bg-white/10 rounded-2xl p-6 text-center border border-white/20"
            >
              <img
                src={member.photo}
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm">{member.course}</p>
              <p className="text-sm">{member.branch}</p>
              <p className="text-sm">{member.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= PROFILE MODAL ================= */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-10 w-[90%] max-w-md text-center"
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white"
            >
              <X size={28} />
            </button>

            <img
              src={selectedMember.photo}
              className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-white/30"
            />

            <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
            {selectedMember.role && (
              <p className="text-sm text-gray-300 mt-1">
                {selectedMember.role}
              </p>
            )}

            <div className="mt-6 space-y-2 text-gray-200">
              <p>🎓 {selectedMember.course}</p>
              <p>📘 {selectedMember.branch}</p>
              <p>📅 {selectedMember.year}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
