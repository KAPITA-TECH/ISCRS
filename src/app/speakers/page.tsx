import type { Metadata } from "next";
import { speakers } from "@/lib/data/speakers.data";
import SpeakerCard from "@/components/SpeakerCard";

export const metadata: Metadata = {
	title: "Speakers | ISCRS",
	description: "Meet our distinguished speakers and experts in ophthalmology and retinal surgery",
};

export default function SpeakersPage() {
	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section 
				className="pt-32 pb-20 lg:pt-40 lg:pb-28"
				style={{
					background: "linear-gradient(135deg, var(--color-cards) 0%, var(--color-primary) 100%)",
				}}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
						Distinguished Speakers
					</h1>
					<p className="text-lg text-white/90 max-w-3xl mx-auto">
						Meet our world-renowned experts in ophthalmology and retinal surgery
					</p>
				</div>
			</section>

			{/* Speakers Grid */}
			<section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
				{/* Background Pattern */}
				<div 
					className="absolute inset-0 opacity-5"
					style={{
						backgroundImage: "url('/images/Pattern3.png')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat"
					}}
				/>
				
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					{/* Section Header */}
					<div className="text-center mb-20">
						<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl mb-6 mx-auto">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-cards)] mb-6">
							Our Expert Speakers
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Leading professionals from around the world sharing their expertise and insights in ophthalmology and retinal surgery
						</p>
					</div>

					{/* Speakers Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
						{speakers.map((speaker, index) => (
							<SpeakerCard key={index} speaker={{...speaker, id: index + 1}} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
