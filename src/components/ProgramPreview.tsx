"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScheduleItem {
  id: number;
  time: string;
  sessionTitle: string;
  speakerName: string;
  tag: string;
}

const day1Schedule: ScheduleItem[] = [
  {
    id: 1,
    time: "08:30",
    sessionTitle: "Session title goes here",
    speakerName: "Speaker Name",
    tag: "Cataract",
  },
  {
    id: 2,
    time: "08:40",
    sessionTitle: "Session title goes here",
    speakerName: "Speaker Name",
    tag: "Cataract",
  },
  {
    id: 3,
    time: "08:50",
    sessionTitle: "Session title goes here",
    speakerName: "Speaker Name",
    tag: "Cataract",
  },
  {
    id: 4,
    time: "08:60",
    sessionTitle: "Session title goes here",
    speakerName: "Speaker Name",
    tag: "Cataract",
  },
];

const day2Schedule: ScheduleItem[] = [
  {
    id: 1,
    time: "09:00",
    sessionTitle: "Advanced Techniques Session",
    speakerName: "Dr. Sarah Johnson",
    tag: "Cataract",
  },
  {
    id: 2,
    time: "09:30",
    sessionTitle: "Innovation in Surgery",
    speakerName: "Prof. Michael Chen",
    tag: "Cataract",
  },
  {
    id: 3,
    time: "10:00",
    sessionTitle: "Case Studies Review",
    speakerName: "Dr. Maria Rodriguez",
    tag: "Cataract",
  },
  {
    id: 4,
    time: "10:30",
    sessionTitle: "Future Perspectives",
    speakerName: "Prof. Ahmed Hassan",
    tag: "Cataract",
  },
];

const ProgramPreview = () => {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const currentSchedule = activeDay === 1 ? day1Schedule : day2Schedule;

  return (
    <>
      {/* White space gap */}
      <div className="h-6 lg:h-8 bg-white"></div>

      <section className="pt-4 pb-16 lg:pt-6 lg:pb-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="flex justify-center w-full mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-[#38738a] text-center">
              PROGRAM PREVIEW
            </h2>
          </div>

          {/* Day Toggle Buttons */}
          <div className="flex justify-center mb-6 lg:mb-8">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveDay(1)}
                className={`px-6 py-3 font-medium text-sm transition-all duration-300 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 ${
                  activeDay === 1
                    ? "bg-gradient-to-r from-[#38738a] to-[#2d5f6f] text-white shadow-[#38738a]/30"
                    : "bg-gradient-to-r from-[#94573d] to-[#7a4832] text-white hover:from-[#7a4832] hover:to-[#633c29] shadow-[#94573d]/30"
                }`}
              >
                Day 1
              </button>
              <button
                onClick={() => setActiveDay(2)}
                className={`px-6 py-3 font-medium text-sm transition-all duration-300 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 ${
                  activeDay === 2
                    ? "bg-gradient-to-r from-[#38738a] to-[#2d5f6f] text-white shadow-[#38738a]/30"
                    : "bg-gradient-to-r from-[#94573d] to-[#7a4832] text-white hover:from-[#7a4832] hover:to-[#633c29] shadow-[#94573d]/30"
                }`}
              >
                Day 2
              </button>
            </div>
          </div>

          {/* Schedule List */}
          <div className="max-w-2xl mx-auto space-y-4">
            {currentSchedule.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-r from-[#2d5f6f] via-[#38738a] to-[#1e4d5b] rounded-2xl p-4 lg:p-5 flex items-center justify-between text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/10 relative overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, #2d5f6f 0%, #38738a 50%, #1e4d5b 100%)`,
                  boxShadow: `
                    0 20px 40px rgba(56,115,138,0.3),
                    inset 0 1px 0 rgba(255,255,255,0.2),
                    inset 0 -1px 0 rgba(0,0,0,0.1)
                  `,
                }}
              >
                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-pulse"></div>
                {/* Left: Time */}
                <div className="flex-shrink-0 w-14 relative z-10">
                  <span className="text-base font-bold drop-shadow-sm">
                    {item.time}
                  </span>
                </div>

                {/* Center: Session Info */}
                <div className="flex-1 mx-3 text-center relative z-10">
                  <div className="text-sm font-medium mb-1 drop-shadow-sm">
                    {item.sessionTitle}
                  </div>
                  <div className="text-xs opacity-90 drop-shadow-sm">
                    {item.speakerName}
                  </div>
                </div>

                {/* Right: Tag */}
                <div className="flex-shrink-0 relative z-10">
                  <span className="bg-white text-[#38738a] px-3 py-1 rounded-full text-xs font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Program Button */}
          <div className="flex justify-center mt-8 lg:mt-12">
            <Link href="/program">
              <button
                className="bg-gradient-to-r from-[#38738a] to-[#2d5f6f] text-white px-10 py-4 lg:px-12 lg:py-5 rounded-3xl font-bold text-sm lg:text-base hover:from-[#2d5f6f] hover:to-[#1e4d5b] transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[0_20px_40px_rgba(56,115,138,0.4)] border border-white/10 relative overflow-hidden group"
                style={{
                  boxShadow: `
                    0 15px 30px rgba(56,115,138,0.3),
                    inset 0 1px 0 rgba(255,255,255,0.2),
                    inset 0 -1px 0 rgba(0,0,0,0.1)
                  `,
                }}
              >
                <span className="relative z-10 drop-shadow-sm">
                  View Full Program
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramPreview;
