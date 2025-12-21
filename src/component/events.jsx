import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Events() {
  const [previewImage, setPreviewImage] = useState(null);
  const [activeClub, setActiveClub] = useState("All");

  /*
    👉 FUTURE UPDATE GUIDE:
    - Naye events add karne ke liye "events" array me object add karo
    - Har object ka structure:
      {
        name: "Event Name",
        club: "Club Name",
        date: "DD Month YYYY",
        images: ["/images/example1.jpg", "/images/example2.jpg"]
      }
    - Images ko replace karne ke liye:
      "/images/example1.jpg" → apni real image ka path
    - Clubs add karne ke liye:
      "clubs" array me naam add karna
  */
  const events = [
    {
      name: "IOT War",
      club: "I-Tech Club",
      date: "12 March 2024",
      images: ["/images/iot.jpg", "/images/iot.jpg", "/images/iot.jpg"],
    },
    {
      name: "Tech Expo",
      club: "I-Tech Club",
      date: "05 April 2024",
      images: ["/images/iot.jpg", "/images/iot.jpg"],
    },
    {
      name: "Cultural Night",
      club: "Rock On Club",
      date: "25 February 2024",
      images: ["/images/culture.jpg", "/images/culture.jpg", "/images/culture.jpg"],
    },
    {
      name: "Battle of Bands",
      club: "Rock On Club",
      date: "18 March 2024",
      images: ["/images/culture.jpg", "/images/culture.jpg"],
    },
    {
      name: "Sports Meet",
      club: "Stride Club",
      date: "10 January 2024",
      images: ["/images/stride.jpg", "/images/stride.jpg", "/images/stride.jpg"],
    },
    {
      name: "Marathon Run",
      club: "Stride Club",
      date: "22 February 2024",
      images: ["/images/stride.jpg", "/images/stride.jpg"],
    },
    {
      name: "Art Exhibition",
      club: "Panache Club",
      date: "15 March 2024",
      images: ["/images/art.jpg", "/images/art.jpg", "/images/art.jpg"],
    },
    {
      name: "Publication Drive",
      club: "Publication Club",
      date: "08 April 2024",
      images: ["/images/publication.jpg", "/images/publication.jpg"],
    },
    {
      name: "Social Awareness Rally",
      club: "Responsible Invertians",
      date: "02 February 2024",
      images: ["/images/iot.jpg", "/images/iot.jpg"],
    },
    {
      name: "M Factor Workshop",
      club: "M Factor",
      date: "30 March 2024",
      images: ["/images/mfactor.jpg", "/images/mfactor.jpg", "/images/mfactor.jpg"],
    },
  ];

  // ===== Club Filter List =====
  const clubs = [
    "All",
    "I-Tech Club",
    "Rock On Club",
    "Stride Club",
    "Panache Club",
    "Publication Club",
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
