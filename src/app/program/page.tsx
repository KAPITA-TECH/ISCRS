import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program | ISCRS",
  description: "Explore our programs here. Program content will be added soon.",
};

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#2e5e73] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Program</h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            explore our programs here
          </p>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-base lg:text-lg">program content will be added soon.</p>
        </div>
      </section>
    </main>
  );
}
