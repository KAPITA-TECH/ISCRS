import React from 'react';

interface StatCard {
  id: number;
  number: string;
  title: string;
}

const statsData: StatCard[] = [
  {
    id: 1,
    number: "100",
    title: "Scientific Activities"
  },
  {
    id: 2,
    number: "28",
    title: "Courses & Wet-labs"
  },
  {
    id: 3,
    number: "500+",
    title: "Active Members"
  },
  {
    id: 4,
    number: "5",
    title: "MOCAT Events"
  }
];

const ExcellenceInOphthalmology = () => {
  return (
    <>
      {/* White space gap */}
      <div className="h-6 lg:h-8 bg-white"></div>
      
      <section className="pt-4 pb-16 lg:pt-6 lg:pb-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#38738c] uppercase tracking-wide">
              Excellence in Ophthalmology
            </h2>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {statsData.map((stat) => (
              <div
                key={stat.id}
                     className="bg-gradient-to-r from-[#2e5e73] to-[#113547] rounded-lg px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-[140px] flex flex-col justify-between"
              >
                {/* Main Content */}
                <div className="flex items-center gap-3 mb-6 pt-4">
                  {/* Circular Icon Placeholder - Fully White */}
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    {/* Icon placeholder - fully white circle */}
                  </div>
                  
                  {/* Number and Title */}
                  <div className="flex flex-col">
                    <span className="text-xl lg:text-2xl font-bold text-white leading-none mb-2">
                      {stat.number}
                    </span>
                    <h3 className="text-white font-medium text-xs lg:text-sm opacity-80">
                      {stat.title}
                    </h3>
                  </div>
                </div>

                {/* Patterned Horizontal Divider */}
                <div className="mt-auto -mx-6 mb-2">
                  <div 
                    className="h-3 w-full bg-white"
                    style={{
                      backgroundImage: `
                        linear-gradient(45deg, #38738a 25%, transparent 25%), 
                        linear-gradient(-45deg, #38738a 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, #94573d 75%), 
                        linear-gradient(-45deg, transparent 75%, #94573d 75%)
                      `,
                      backgroundSize: '12px 12px',
                      backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExcellenceInOphthalmology;
