import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Events() {
  const [previewImage, setPreviewImage] = useState(null);
  const [activeClub, setActiveClub] = useState("All");

  const events = [
    {
      name: "Shark Tank Invertis – Season 2",
      club: "M Factor Club",
      date: "06 November 2025",
      description:
        "Shark Tank Invertis Season 2 proved to be a landmark initiative in fostering innovation and entrepreneurial thinking at Invertis University. The event featured the signing of an MOU with the Indian Industries Association (IIA) in the presence of Mr. Dinesh Goyal (National President, IIA) and Mr. Syrish Raghuyal (Director, Positech International Pvt. Ltd.), marking a major step toward strengthening industry–academia collaboration. Students showcased innovative and strategically designed business ideas, demonstrating strong presentation skills, problem-solving abilities, and entrepreneurial confidence. Their pitches impressed the judges, reflecting the growing culture of creativity and startup mindset on campus. The winners were felicitated with cash prizes, making the event both motivating and impactful for budding entrepreneurs. Shark Tank Invertis Season 2 successfully blended learning, industry exposure, and recognition, inspiring students to pursue their entrepreneurial aspirations with confidence. The University expresses gratitude to Hon’ble Chancellor Dr. Umesh Gautam and Executive Director Mr. Parth Gautam for their continued encouragement and support in nurturing the spirit of innovation at Invertis University.",
      highlights: [
        "50+ Participants",
        "20 Innovative Pitches",
        "Cash Prize Distribution",
      ],
      images: ["/event/mfactor/shark/shark5.webp","/event/mfactor/shark/shark1.webp", "/event/mfactor/shark/shark2.webp", "/event/mfactor/shark/shark3.webp", "/event/mfactor/shark/shark4.webp"],
    },
    {
      name: "Smart India Hackathon Grand Final",
      club: "I-Tech Club",
      date: "13 December 2025",
      description:
        "Students of the Department of Engineering & Technology, Invertis University, Bareilly, achieved a remarkable milestone by winning the Smart India Hackathon (SIH) Grand Final, securing a cash prize of ₹1.5 lakh. The national-level competition was held at IIT-BHU, Varanasi, with participation from leading IITs, NITs, and universities across the country. The winning team “Gandharvas” impressed the jury with their innovative project “AquaSENSE”, an advanced smart device designed to assess water quality with high precision. The solution is capable of identifying whether water is clean or polluted, detecting plastic particles, algae, and other impurities, and presenting real-time data through internet-based technology for effective decision-making.",
      highlights: [
        "1000+ Projects Displayed",
        "Interactive Booths",
        "Live Demonstrations",
      ],
      images: ["/event/itech/sih/sih1.webp", "/event/itech/sih/sih2.webp", "/event/itech/sih/sih3.webp", "/event/itech/sih/sih4.webp"],
    },
   
    {
      name: "Dharmakshetra",
      club: "Images Club",
      date: "",
      images: ["/event/images/1.jpg", "/event/images/2.jpg", "/event/images/3.jpg", "/event/images/4.jpg"],
    },
    {
      name: "Convocation 2026",
      club: "Responsible Invertians",
      date: "02 February 2024",
      description:
        "The 12th Convocation Ceremony of Invertis University, held on 17th January 2026, celebrated academic excellence and achievement. The ceremony was graced by Dr. Umesh Gautam, Chancellor, and Mr. Parth Gautam, Pro-Chancellor, whose inspiring addresses motivated students to uphold discipline and values. Degrees were awarded to the 2024–25 batch, including Gold, Silver, and Bronze Medalists, with over 1800 students graduating. Eminent personalities Ms. Sushmita Sen, Mr. Navjot Singh Sidhu, Mr. Sanjay Mishra, and Mr. Tapas Das were conferred Honorary Doctorates, inspiring graduates toward confident and purposeful futures.",
        highlights: [
          "500+ Graduates Honored",
          "Keynote Speeches",
          "Cultural Performances",
        ],
      images: ["/event/ri/convocation.webp"],
    },
   

  ];

  // ===== Club Filter List =====
  const clubs = [
    "All",
    "I-Tech Club",
    "Rock On Club",
    "Stride Club",
    "Panache Club",
    "Images Club",
    "Responsible Invertians",
    "M Factor",
  ];

  // ===== Filter Events =====
  const filteredEvents = activeClub === "All"
    ? events
    : events.filter((e) => e.club === activeClub);

  return (
    <>
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white min-h-screen py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10">
          College{" "}
          <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
            Events
          </span>
        </h1>

        {/* ===== CLUB FILTER BUTTONS ===== */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {clubs.map((club) => (
            <button
              key={club}
              onClick={() => setActiveClub(club)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                ${activeClub === club
                  ? "bg-gradient-to-r from-amber-400 to-pink-500 text-black shadow-lg"
                  : "bg-white/10 hover:bg-white/20"
                }`}
            >
              {club}
            </button>
          ))}
        </div>

        {/* ===== EVENTS LIST ===== */}
        <div className="max-w-7xl mx-auto space-y-28">
          {filteredEvents.map((event, index) => (
            <EventRow
              key={index}
              event={event}
              onImageClick={setPreviewImage}
            />
          ))}
        </div>
      </section>

      {/* ===== FULLSCREEN IMAGE PREVIEW ===== */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setPreviewImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setPreviewImage(null)}
          >
            <X size={36} />
          </button>

          <img
            src={previewImage}
            className="max-h-[90vh] rounded-3xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}

/* ================= EVENT ROW COMPONENT ================= */
function EventRow({ event, onImageClick }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });

  return (
    <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-amber-500/20 transition-all duration-500">

      {/* ===== EVENT HEADER ===== */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">{event.name}</h2>

          {/* DATE BADGE */}
          <span className="px-4 py-1 rounded-full text-sm
                           bg-gradient-to-r from-amber-400 to-pink-500 text-black">
            {event.date}
          </span>
        </div>

        <p className="text-amber-400 mt-2">{event.club}</p>

        {/* Description */}
        <p className="text-gray-300 mt-4 max-w-3xl leading-relaxed">
          {event.description}
        </p>

        {/* Highlights */}
        {event.highlights && (
          <div className="flex flex-wrap gap-3 mt-4">
            {event.highlights.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/10 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-500 mt-4 rounded-full" />
      </div>

      {/* ===== SLIDER ===== */}
      <div className="relative group">
        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                     bg-black/60 backdrop-blur-lg p-3 rounded-full
                     opacity-0 group-hover:opacity-100 scale-90
                     hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft size={28} />
        </button>

        {/* IMAGES */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-scroll scrollbar-hide px-10 pb-4"
        >
          {event.images.map((img, i) => (
            <div
              key={i}
              onClick={() => onImageClick(img)}
              className="relative flex-shrink-0 w-80 h-48 rounded-3xl overflow-hidden
                         cursor-pointer group/img"
            >
              <img
                src={img}
                className="w-full h-full object-cover
                           group-hover/img:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition" />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                     bg-black/60 backdrop-blur-lg p-3 rounded-full
                     opacity-0 group-hover:opacity-100 scale-90
                     hover:scale-110 transition-all duration-300"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
