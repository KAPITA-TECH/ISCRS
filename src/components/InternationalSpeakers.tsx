'use client';

import React, { useState } from 'react';

interface Speaker {
  id: number;
  name: string;
  country: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Prof. Michael Mrochen",
    country: "Switzerland"
  },
  {
    id: 2,
    name: "Dr. Farida Lafdjah",
    country: "France"
  },
  {
    id: 3,
    name: "Dr. Tareq Katamish",
    country: "Egypt"
  },
  {
    id: 4,
    name: "Prof. Sarah Johnson",
    country: "United States"
  },
  {
    id: 5,
    name: "Dr. Ahmed Hassan",
    country: "Jordan"
  },
  {
    id: 6,
    name: "Prof. Maria Rodriguez",
    country: "Spain"
  }
];

const InternationalSpeakers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const speakersPerSlide = 3;
  const totalSlides = Math.ceil(speakers.length / speakersPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSpeakers = () => {
    const startIndex = currentSlide * speakersPerSlide;
    return speakers.slice(startIndex, startIndex + speakersPerSlide);
  };

  return (
    <>
      {/* White space gap */}
      <div className="h-6 lg:h-8 bg-white"></div>
      
      <section className="pt-4 pb-16 lg:pt-6 lg:pb-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="flex justify-center w-full">
            <h2 className="text-3xl lg:text-4xl font-medium text-[#38738a] text-center">
              INTERNATIONAL SPEAKERS
            </h2>
          </div>

          {/* White space between title and speakers */}
          <div className="h-16 lg:h-20"></div>

        {/* Speakers Carousel */}
        <div className="relative w-full">
          {/* Speakers Grid */}
          <div className="flex justify-center">
            <div className="relative max-w-5xl mx-auto">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                aria-label="Previous speakers"
              >
                <svg className="w-6 h-6 text-[#38738a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                aria-label="Next speakers"
              >
                <svg className="w-6 h-6 text-[#38738a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
              {getCurrentSpeakers().map((speaker) => (
              <div key={speaker.id} className="text-center group">
                {/* Speaker Image with Patterned Background */}
                <div className="relative mb-8">
                  {/* Patterned Background Circle */}
                  <div className="w-64 h-64 mx-auto rounded-full relative overflow-hidden">
                    {/* Geometric Pattern Background */}
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundImage: `
                          linear-gradient(45deg, #38738a 25%, transparent 25%), 
                          linear-gradient(-45deg, #38738a 25%, transparent 25%), 
                          linear-gradient(45deg, transparent 75%, #94573d 75%), 
                          linear-gradient(-45deg, transparent 75%, #94573d 75%)
                        `,
                        backgroundSize: '20px 20px',
                        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                      }}
                    />
                    
                    {/* Speaker Photo Placeholder */}
                    <div className="absolute inset-8 rounded-full overflow-hidden bg-white flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-br from-[#38738a] to-[#94573d] flex items-center justify-center">
                        <div className="text-white text-6xl font-bold">
                          {speaker.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Speaker Name */}
                <h3 className="text-2xl font-bold text-[#38738a] mb-3 group-hover:text-[#1d5875] transition-colors duration-200">
                  {speaker.name}
                </h3>

                {/* Country */}
                <p className="text-lg text-[#38738a] font-medium opacity-80">
                  {speaker.country}
                </p>
              </div>
              ))}
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-[#38738a] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default InternationalSpeakers;
