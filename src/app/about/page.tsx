import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ISCRS | Iraqi Society of Cataract & Refractive Surgeons",
  description: "Learn about the Iraqi Society of Cataract & Refractive Surgeons (ISCRS), our history, vision, and the MOCAT conference series founded by Dr. Osamah Alhasani.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8ccbe5] to-[#b56c4d] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2e5e73] mb-4">
            About ISCRS
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#2e5e73] max-w-3xl mx-auto">
            Iraqi Society of Cataract & Refractive Surgeons
          </p>
        </div>
      </section>

      {/* MOCAT Founder Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2e5e73] mb-12 text-center">
            MOCAT Founder
          </h2>

          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto border border-gray-300">
            {/* Placeholder for Image */}
            <div className="flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40 bg-gray-300 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <svg
                className="w-16 h-16 lg:w-20 lg:h-20 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl lg:text-2xl font-bold text-[#2e5e73] mb-2">
                Dr. Osamah Alhasani
              </h3>
              <p className="text-lg lg:text-xl font-semibold text-[#94563b] mb-4">
                Founder of MOCAT Conference Series
              </p>
              <p className="text-sm lg:text-base text-gray-500 leading-relaxed">
                Visionary leader who established the Mesopotamia Ophthalmology Conference
                for Advanced Techniques (MOCAT), creating a premier platform for advancing
                ophthalmic surgery education and fostering international collaboration in
                Iraq and the broader region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About ISCRS Section */}
      <section className="pt-12 lg:pt-16 pb-10 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2e5e73] mb-8 text-left max-w-4xl mx-auto">
            About ISCRS
          </h2>

          <p className="text-base lg:text-lg text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            We are specialized groups within the Cataract and Refractive Surgeons
            responsible for guiding the society&apos;s activities in key areas such as
            education, research, membership, ethics, young ophthalmologists,
            sustainability, and scientific programs. Each committee is made up of
            experienced professionals who collaborate to shape the strategic direction
            and ensure high standards in their respective fields.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Scientific Activities Card */}
            <div className="rounded-2xl shadow-lg px-5 lg:px-6 py-8 lg:py-10 text-left border" style={{ backgroundColor: "var(--color-activity-card)", borderColor: "var(--color-activity-border)" }}>
              <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: "var(--color-activity-text)" }}>
                100
              </div>
              <h3 className="text-base lg:text-lg font-bold mb-2" style={{ color: "var(--color-activity-text)" }}>
                Scientific Activities
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Advancing surgical skills, innovation, and continuous education
              </p>
            </div>

            {/* Courses & Wet-labs Card */}
            <div className="rounded-2xl shadow-lg px-5 lg:px-6 py-8 lg:py-10 text-left border" style={{ backgroundColor: "var(--color-courses-card)", borderColor: "var(--color-courses-border)" }}>
              <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: "var(--color-courses-text)" }}>
                28
              </div>
              <h3 className="text-base lg:text-lg font-bold mb-2" style={{ color: "var(--color-courses-text)" }}>
                Courses & Wet-labs
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Delivering high-quality hands-on wet labs, surgical training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="pt-8 lg:pt-10 pb-10 lg:pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2e5e73] mb-8 text-left max-w-4xl mx-auto">
            Our History
          </h2>

          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 lg:p-12 max-w-4xl mx-auto border border-gray-300">
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Born from a need to connect Iraqi ophthalmic surgeons with the latest
              advancements, quickly became a pioneer in promoting evidence-based
              practices, surgical innovation, and global education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="pt-8 lg:pt-10 pb-16 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2e5e73] mb-8 text-left max-w-4xl mx-auto">
            Our Vision
          </h2>

          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 lg:p-12 max-w-4xl mx-auto border border-gray-300">
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
              To be the leading community and trusted source for science, education and
              professional development in the fields of cataract and refractive surgery.
            </p>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Serve as an independent platform that disseminates the latest scientific
              findings and clinical knowledge, promotes research, and provides educational
              resources. This mission supports its members in their professional development
              and in delivering optimal eye care.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
