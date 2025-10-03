import React from "react";

interface ProgramFiltersProps {
	activeDay: string;
	setActiveDay: (day: string) => void;
	categoryFilter: string;
	setCategoryFilter: (filter: string) => void;
	setSearchOpen: (open: boolean) => void;
}

const ProgramFilters: React.FC<ProgramFiltersProps> = ({
	activeDay,
	setActiveDay,
	categoryFilter,
	setCategoryFilter,
	setSearchOpen,
}) => {
	const days = [
		{ key: "thursday", label: "Thursday, December 4, 2025" },
		{ key: "friday", label: "Friday, December 5, 2025" },
	];

	return (
		<section className="bg-white shadow-lg sticky top-0 z-40 border-b">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
					{/* Category Filter */}
					<div className="flex items-center gap-4">
						<label className="text-sm font-medium text-gray-700">
							Filter by:
						</label>
						<select
							value={categoryFilter}
							onChange={(e) => setCategoryFilter(e.target.value)}
							className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent bg-white"
						>
							<option value="use browser">Use Browser</option>
							<option value="events time">Events Time</option>
						</select>
					</div>

					{/* Search Button */}
					<button
						onClick={() => setSearchOpen(true)}
						className="flex items-center gap-2 px-6 py-2 bg-[#38738c] text-white rounded-lg hover:bg-[#2d5a6b] transition-colors duration-200 shadow-md hover:shadow-lg"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						Search Agenda
					</button>
				</div>

				{/* Day Tabs */}
				<div className="mt-6 border-b border-gray-200">
					<nav className="flex space-x-8">
						{days.map((day) => (
							<button
								key={day.key}
								onClick={() => setActiveDay(day.key)}
								className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
									activeDay === day.key
										? "border-[#38738c] text-[#38738c]"
										: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
								}`}
							>
								{day.label}
							</button>
						))}
					</nav>
				</div>
			</div>
		</section>
	);
};

export default ProgramFilters;
