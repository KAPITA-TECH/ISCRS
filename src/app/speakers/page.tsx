import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Speakers | ISCRS",
	description: "Speakers page - content coming soon",
};

export default function SpeakersPage() {
	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-[#8ccbe5] to-[#b56c4d] pt-32 pb-20 lg:pt-40 lg:pb-28">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2e5e73] mb-4">
						Speakers
					</h1>
				</div>
			</section>

			{/* Placeholder Content */}
			<section className="py-16 lg:py-24 bg-white">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<p className="text-gray-500 text-base lg:text-lg">
						Speakers content will be added soon
					</p>
				</div>
			</section>
		</main>
	);
}
