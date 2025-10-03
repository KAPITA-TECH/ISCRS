import React from "react";

const ProgramHero = () => {
	return (
		<section className="bg-gradient-to-br from-[#2e5e73] to-[#1d5875] pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
			{/* Background Pattern */}
			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage: "url(/images/pattern.png)",
					backgroundRepeat: "repeat",
					backgroundSize: "100px 100px",
				}}
			/>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
					Conference Program
				</h1>
				<p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
					Explore our comprehensive schedule of events, sessions, and activities
				</p>
			</div>
		</section>
	);
};

export default ProgramHero;
