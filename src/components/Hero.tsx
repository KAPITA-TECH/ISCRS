import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden pt-20"
      style={{ minHeight: "150vh" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        {/* Vector Image */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/vector.svg"
            alt="Vector Icon"
            width={800}
            height={400}
            className="h-32 lg:h-40 w-auto"
            priority
          />
        </div>

        {/* MOCAT Full Format Image */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/MOCAT Full Format.svg"
            alt="MOCAT Full Format"
            width={600}
            height={200}
            className="h-12 lg:h-16 w-auto"
            priority
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#37718a] mb-6 leading-tight">
          BAGHDAD WELCOMES
          <br />
          GLOBAL OPHTHALMOLOGY
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-[#a3715d] mb-8 max-w-3xl mx-auto leading-relaxed">
          Join us for the fifth of MOCAT, bringing together leading
          ophthalmologists, surgeons, and eye care professionals from Iraq and
          the region
        </p>

        {/* Event Date and Location */}
        <div className="text-lg sm:text-xl lg:text-2xl text-[#1d5875] font-semibold mb-8">
          Jan 22-23, 2026 - Mövenpick Hotel, Baghdad
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-16">
          <Link
            href="/attendee-registration"
            className="bg-[#7a4027] text-white px-6 py-2 text-sm font-medium rounded-md hover:bg-[#6a3622] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Register
          </Link>
          <button className="bg-[#7a4027] text-white px-6 py-2 text-sm font-medium rounded-md hover:bg-[#6a3622] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
