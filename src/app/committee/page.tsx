import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Committee | Iraqi Society of Cataract & Refractive Surgeons",
	description:
		"Learn about the ISCRS committees and leadership structure guiding our scientific activities and professional development.",
};

export default function CommitteePage() {
	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-[#8ccbe5] to-[#b56c4d] pt-32 pb-20 lg:pt-40 lg:pb-28">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2e5e73] mb-4">
						Committee
					</h1>
					<p className="text-base sm:text-lg lg:text-xl text-[#2e5e73] max-w-3xl mx-auto">
						Leadership and expertise guiding our scientific mission
					</p>
				</div>
			</section>

			{/* Committee Overview Section */}
			<section className="py-16 lg:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2e5e73] mb-12 text-center">
						Our Committees
					</h2>

					<div className="bg-gray-100 rounded-2xl shadow-lg p-8 lg:p-12 max-w-4xl mx-auto border border-gray-300 mb-16">
						<p className="text-base lg:text-lg text-gray-600 leading-relaxed">
							Our committees are specialized groups within the Iraqi Society of
							Cataract and Refractive Surgeons responsible for guiding the
							societys activities in key areas such as education, research,
							membership, ethics, young ophthalmologists, sustainability, and
							scientific programs. Each committee is made up of experienced
							professionals who collaborate to shape the strategic direction and
							ensure high standards in their respective fields.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
