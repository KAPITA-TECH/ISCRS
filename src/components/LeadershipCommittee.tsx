import React from 'react';

interface LeaderCard {
  id: number;
  name: string;
  role: string;
  specialty: string;
  credentials: string;
  affiliations: string[];
}

const leaders: LeaderCard[] = [
  {
    id: 1,
    name: 'Dr. Husam Al-Najjar',
    role: 'President',
    specialty: 'Ophthalmologist',
    credentials: 'MBChB, FICO, JMC (Ophth), CABS (Ophth), MRCS, NeuroOphth (Cambridge)',
    affiliations: [
      'Ibn Al-Haitham Teaching Eye Hospital',
      'Ibn Sina Hospital',
    ],
  },
  {
    id: 2,
    name: 'Dr. Zainab Basim',
    role: 'Vice President',
    specialty: 'Ophthalmologist',
    credentials: 'MBChB, FICMS-Ophth, FICO',
    affiliations: [
      'Al-Khademia Teaching Eye Hospital',
      'Al-Ferdws Ophthalmic Center',
    ],
  },
  {
    id: 3,
    name: 'Dr. Essam Sabah Al Rubaye',
    role: 'Secretary',
    specialty: 'Ophthalmologist',
    credentials: 'MBChB, FICMS, CABS-Ophth, FRCS-Glasgow, MRCSEd, FICO',
    affiliations: [
      'Ibn Al-Haitham Teaching Eye Hospital',
      'IRIS Ophthalmic Center',
    ],
  },
];

const LeadershipCommittee: React.FC = () => {
  return (
    <>
      <div className="h-6 lg:h-8 bg-white"></div>

      <section className="pt-4 pb-16 lg:pt-6 lg:pb-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-24 lg:mb-32">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#38738c] uppercase tracking-wide">
              ISCRS LEADERSHIP COMMITTEE
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 lg:gap-10 max-w-7xl mx-auto">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="relative overflow-visible flex flex-col items-stretch"
              >
                {/* Triangle-shaped blue and brown lines - with rounded left/right edges */}
                <div
                  className="pointer-events-none absolute left-0 right-0 -top-9 h-12 z-10 overflow-hidden"
                  style={{ borderRadius: '24px 20px 60px 34px' }}
                >
                  {/* Blue main triangle - thin and wide */}
                  <div
                    className="absolute inset-0 bg-[#2e5e73] shadow-md"
                    style={{
                      clipPath: 'polygon(0 100%, 0 85%, 50% 15%, 100% 85%, 100% 100%)',
                    }}
                  />
                  {/* Brown accent line underneath - thin triangle */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-3 bg-[#7a4027]"
                    style={{
                      clipPath: 'polygon(0 100%, 0 70%, 50% 40%, 100% 70%, 100% 100%)',
                    }}
                  />
                </div>

                {/* Circular profile image with pattern image background */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-20 z-20">
                  <div className="w-36 h-36 mx-auto rounded-full relative overflow-hidden ring-2 ring-white">
                    {/* Pattern Image Background */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundImage: 'url(/images/pattern.png)',
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'center',
                        backgroundSize: '100px 100px'
                      }}
                    />
                    {/* Inner circle / photo placeholder with thin, more visible white border */}
                    <div className="absolute inset-6 rounded-full overflow-hidden  ring-2 ring-white flex items-center justify-center shadow-lg">
                      <div className="w-full h-full bg-gradient-to-br from-[#38738a] to-[#94573d] flex items-center justify-center">
                        <div className="text-white text-3xl font-bold">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fully rounded smooth card body - blends with arch */}
                <div
                  className="relative rounded-3xl rounded-t-3xl pt-20 pb-8 px-8 shadow-xl z-0 min-h-[440px] lg:min-h-[460px] flex flex-col"
                  style={{
                    background: 'linear-gradient(180deg, #e8f4f7 0%, #f6fafc 55%, #ffffff 95%)',
                  }}
                >

                  {/* Content */}
                  <div className="text-center mt-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#2e5e73]">
                      {leader.name}
                    </h3>
                    <p className="text-sm lg:text-base text-[#6b8793] mt-1 font-light">
                      {leader.role}
                    </p>
                  </div>

                  <div className="mt-6 space-y-4 text-left">
                    <div>
                      <div className="text-[#2e5e73] font-bold text-base lg:text-lg mb-2">Credentials</div>
                      <p className="text-sm lg:text-base text-[#4a5568] leading-relaxed">{leader.credentials}</p>
                    </div>

                    <div>
                      <div className="text-[#2e5e73] font-bold text-base lg:text-lg mb-2">Affiliations</div>
                      <ul className="space-y-1.5 text-sm lg:text-base text-[#4a5568]">
                        {leader.affiliations.map((a, idx) => (
                          <li key={idx} className="leading-relaxed">{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom pattern image - same size and visibility as image holder */}
                  <div
                    className="absolute bottom-6 left-0 right-0 h-6"
                    style={{
                      backgroundImage: 'url(/images/pattern.png)',
                      backgroundRepeat: 'repeat-x',
                      backgroundPosition: 'center',
                      backgroundSize: '100px 100px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <button className="bg-[#7a4027] text-white px-6 py-2 text-sm font-medium rounded-md hover:bg-[#6a3622] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              View Full Committee
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadershipCommittee;
