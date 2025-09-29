import React from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
}

const cardData: Card[] = [
  {
    id: 1,
    title: "Our Mission",
    description: "We bring together leading experts and young ophthalmologists to advance education, research, and ethical practice in eye health. Through innovative programs, collaboration, and a commitment to sustainability, we strive to elevate standards of care and shape the future of eye health in Iraq."
  },
  {
    id: 2,
    title: "Our Vision", 
    description: "To be the trusted home and driving force for excellence in cataract, cornea, and refractive surgery—empowering Iraqi ophthalmologists with knowledge, innovation, and opportunities for growth that inspire progress locally and globally."
  },
  {
    id: 3,
    title: "Our History",
    description: "Born from a need to connect Iraqi ophthalmic surgeons with the latest advancements, quickly became a pioneer in promoting evidence-based practices, surgical innovation, and global education."
  }
];

const AboutISCRS = () => {
  return (
    <>
      {/* White space gap */}
      <div className="h-24 lg:h-32 bg-white"></div>
      
      <section className="pt-16 pb-16 lg:pt-20 lg:pb-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-medium text-[#38738c] mb-4">
              About ISCRS
            </h2>
            
            {/* Subtitle */}
            <h3 className="text-lg lg:text-xl font-light text-[#8f523c] uppercase tracking-wide mb-6">
              Advancing surgical skills, innovation, and continuous education in ophthalmology
            </h3>
            
            {/* Description */}
            <p className="text-sm lg:text-base font-light text-[#8f523c] tracking-wider" 
               style={{ fontVariant: 'small-caps' }}>
              advancing surgical skills, innovation, and continuous education in ophthalmology
            </p>
          </div>

          {/* White space between text and cards */}
          <div className="h-16 lg:h-20"></div>

          {/* Cards Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl w-full">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-gradient-to-br  from-omar  to-[#662f17] rounded-2xl  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-h-[320px] lg:min-h-[350px] flex flex-col"
              >
                {/* Card Title */}
                <h4 className="text-xl lg:text-2xl font-semibold text-white text-left pt-6 mb-4 px-8 lg:px-10">
                  {card.title}
                </h4>
                
                {/* Card Description */}
                <div className="flex-grow flex items-center">
                  <p className="text-white/90 leading-relaxed text-base lg:text-lg font-light px-8 lg:px-10 py-5 text-left">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutISCRS;
