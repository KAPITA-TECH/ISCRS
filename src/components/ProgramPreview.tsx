"use client";

import { useState } from "react";

const ProgramPreview = () => {
  const [activeDay, setActiveDay] = useState("day1");

  const day1Sessions = [
    {
      time: "08:30",
      sessionTitle: "Opening Ceremony & Welcome",
      speakerName: "Dr. Ahmed Al-Mansouri",
      category: "General",
    },
    {
      time: "09:00",
      sessionTitle: "Advanced Cataract Surgery",
      speakerName: "Prof. Michael Mrochen",
      category: "Cataract",
    },
    {
      time: "10:30",
      sessionTitle: "Refractive Surgery Innovations",
      speakerName: "Dr. Farida Lafdjah",
      category: "Refractive",
    },
    {
      time: "12:00",
      sessionTitle: "Lunch Break & Networking",
      speakerName: "All Participants",
      category: "Break",
    },
  ];

  const day2Sessions = [
    {
      time: "08:30",
      sessionTitle: "Retinal Surgery Advances",
      speakerName: "Dr. Tareq Katamish",
      category: "Retina",
    },
    {
      time: "10:00",
      sessionTitle: "Corneal Transplantation",
      speakerName: "Prof. Sarah Johnson",
      category: "Cornea",
    },
    {
      time: "11:30",
      sessionTitle: "Pediatric Ophthalmology",
      speakerName: "Dr. Ahmed Hassan",
      category: "Pediatric",
    },
    {
      time: "13:00",
      sessionTitle: "Closing Ceremony",
      speakerName: "Prof. Maria Rodriguez",
      category: "General",
    },
  ];

  const currentSessions = activeDay === "day1" ? day1Sessions : day2Sessions;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#38738c] tracking-wide">
            PROGRAM PREVIEW
          </h2>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveDay("day1")}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                activeDay === "day1"
                  ? "bg-[#38738c]"
                  : "bg-[#38738c]/60 hover:bg-[#38738c]/80"
              }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setActiveDay("day2")}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                activeDay === "day2"
                  ? "bg-gradient-to-r from-[#94573d] to-[#b86b4a]"
                  : "bg-[#94573d]/60 hover:bg-gradient-to-r hover:from-[#94573d]/80 hover:to-[#b86b4a]/80"
              }`}
            >
              Day 2
            </button>
          </div>
        </div>

        {/* Schedule List */}
        <div className="flex flex-col items-center space-y-3">
          {currentSessions.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#4a8ba8] to-[#38738c] rounded-lg p-4 flex items-center justify-between shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:from-[#5a9bb8] hover:to-[#4a8ba8] transition-all duration-500 ease-in-out w-full max-w-3xl group"
            >
              {/* Time - Left */}
              <div className="text-white font-semibold text-base min-w-[70px] flex-shrink-0 group-hover:text-white/90 transition-colors duration-300">
                {item.time}
              </div>

              {/* Session Info - Center */}
              <div className="flex-1 px-4 text-center">
                <div className="text-white font-medium text-sm mb-1 group-hover:text-white/90 transition-colors duration-300">
                  {item.sessionTitle}
                </div>
                <div className="text-white/90 text-xs group-hover:text-white/80 transition-colors duration-300">
                  {item.speakerName}
                </div>
              </div>

              {/* Category Tag - Right */}
              <div className="flex-shrink-0">
                <span className="bg-white text-[#38738c] px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-white/90 group-hover:text-[#4a8ba8] transition-all duration-300 shadow-md group-hover:shadow-lg">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramPreview;
