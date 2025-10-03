import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sponsorship | Iraqi Society of Cataract & Refractive Surgeons",
	description:
		"Partner with ISCRS through sponsorship opportunities and support the advancement of ophthalmic education and research.",
};

export default function SponsorshipPage() {
	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-[#2e5e73] pt-32 pb-20 lg:pt-40 lg:pb-28">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
						Sponsorship
					</h1>
					<p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
						Partner with us to advance ophthalmic education and research
					</p>
				</div>
			</section>

			{/* Why Partner With Us Section */}
			<section className="py-16 lg:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2e5e73] mb-12 text-center">
						Why Partner With ISCRS?
					</h2>

					<div className="bg-gray-100 rounded-2xl shadow-lg p-8 lg:p-12 max-w-4xl mx-auto border border-gray-300 mb-16">
						<p className="text-base lg:text-lg text-gray-600 leading-relaxed">
							Join us in advancing the field of ophthalmology by supporting
							cutting-edge research, innovative education programs, and
							professional development initiatives that benefit practitioners
							and patients across Iraq and the broader region.
						</p>
					</div>

					{/* Benefits Grid */}
					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
						<div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-200">
							<div className="text-[#2e5e73] mb-4">
								<svg
									className="w-12 h-12"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-[#2e5e73] mb-4">
								Global Visibility
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Showcase your brand to leading ophthalmologists and healthcare
								professionals from across the region and international
								community.
							</p>
						</div>

						<div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-200">
							<div className="text-[#2e5e73] mb-4">
								<svg
									className="w-12 h-12"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-[#2e5e73] mb-4">
								Professional Network
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Connect with key opinion leaders, researchers, and
								decision-makers in the ophthalmic surgery field.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Sponsorship Packages Section */}
			<section className="py-16 lg:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2e5e73] mb-12 text-center">
						Sponsorship Packages
					</h2>

					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Platinum Package */}
						<div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-yellow-400 hover:shadow-xl transition-shadow duration-300">
							<div className="text-center mb-6">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
									<svg
										className="w-8 h-8 text-yellow-600"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-[#2e5e73] mb-2">
									Platinum
								</h3>
								<p className="text-gray-600">Premium Partnership</p>
							</div>
							<ul className="space-y-3 text-sm text-gray-600">
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Prime exhibition space
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Speaking opportunities
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Logo prominence
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Workshop hosting
								</li>
							</ul>
						</div>

						{/* Gold Package */}
						<div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-300 hover:shadow-xl transition-shadow duration-300">
							<div className="text-center mb-6">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
									<svg
										className="w-8 h-8 text-gray-600"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-[#2e5e73] mb-2">Gold</h3>
								<p className="text-gray-600">Strategic Partnership</p>
							</div>
							<ul className="space-y-3 text-sm text-gray-600">
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Exhibition booth
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Marketing materials
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Brand visibility
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Networking access
								</li>
							</ul>
						</div>

						{/* Silver Package */}
						<div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-300 hover:shadow-xl transition-shadow duration-300">
							<div className="text-center mb-6">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
									<svg
										className="w-8 h-8 text-orange-600"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-[#2e5e73] mb-2">
									Silver
								</h3>
								<p className="text-gray-600">Supporting Partnership</p>
							</div>
							<ul className="space-y-3 text-sm text-gray-600">
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Logo placement
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Program recognition
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Website listing
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Digital materials
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 lg:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2e5e73] mb-8">
						Interested in Sponsoring?
					</h2>
					<p className="text-base lg:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
						Contact our sponsorship team to discuss partnership opportunities
						and create a customized package that meets your organization
						goals.
					</p>
				</div>
			</section>
		</main>
	);
}
