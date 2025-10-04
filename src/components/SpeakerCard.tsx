import Image from "next/image";
import { Speaker } from "@/lib/data/speakers.data";

interface SpeakerCardProps {
  speaker: Speaker;
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 hover:-translate-y-2">
      {/* Pattern Background Overlay - Hidden by default, shown on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage: "url('/images/Pattern3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Top Pattern Overlay - Hidden by default, shown on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-cards)] transform rotate-45 scale-110"></div>
      </div>
      
      

      {/* Image Container with Modern Styling */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Name Badge */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
            <h3 className="text-lg font-bold text-[var(--color-cards)] truncate">
              {speaker.name}
            </h3>
            <div className="flex items-center mt-1">
              <svg className="w-3 h-3 text-[var(--color-secondary)] mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium text-[var(--color-secondary)]">
                {speaker.country}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 bg-white">
        {/* Content Pattern Overlay - Smaller like Dr. Nihal Shakankiry */}
        <div className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-8 transition-opacity duration-500">
          <div className="w-full h-full bg-gradient-to-tl from-[var(--color-primary)] to-[var(--color-secondary)] transform rotate-45 scale-110"></div>
        </div>
        {/* Name (visible on non-hover) */}
        <h3 className="text-xl font-bold text-[var(--color-cards)] mb-3 group-hover:hidden transition-opacity duration-300">
          {speaker.name}
        </h3>

        {/* Country (visible on non-hover) */}
        <div className="flex items-center mb-4 group-hover:hidden transition-opacity duration-300">
          <svg className="w-4 h-4 text-[var(--color-secondary)] mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-[var(--color-secondary)]">
            {speaker.country}
          </span>
        </div>

        {/* Affiliations */}
        <div className="mb-4">
          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            {speaker.affiliations}
          </p>
        </div>

        {/* Bio */}
        {speaker.bio && (
          <div className="border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              {speaker.bio}
            </p>
          </div>
        )}

        {/* Modern Decorative Elements */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
            <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></div>
            <div className="w-2 h-2 bg-[var(--color-cards)] rounded-full"></div>
          </div>
          
          {/* Modern Arrow Indicator */}
          <div className="flex items-center text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors duration-300">
            <span className="text-xs font-semibold mr-1">View Profile</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Modern Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--color-primary)]/20 transition-colors duration-500 pointer-events-none"></div>
    </div>
  );
}
