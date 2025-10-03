import React from "react";
import { SearchFilters } from "../lib/types";

interface SearchModalProps {
	searchOpen: boolean;
	setSearchOpen: (open: boolean) => void;
	searchFilters: SearchFilters;
	setSearchFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
	clearFilters: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
	searchOpen,
	setSearchOpen,
	searchFilters,
	setSearchFilters,
	clearFilters,
}) => {
	if (!searchOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
			<div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
				{/* Modal Header */}
				<div className="sticky top-0 bg-gradient-to-r from-[#2e5e73] to-[#38738c] text-white p-6 border-b border-white/20">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<svg
								className="w-6 h-6"
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
							<h2 className="text-xl font-bold">Search Agenda</h2>
						</div>
						<button
							onClick={() => setSearchOpen(false)}
							className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Modal Content */}
				<div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-200px)]">
					{/* Search Input */}
					<div className="space-y-2">
						<label className="block text-sm font-semibold text-gray-700">
							Search
						</label>
						<div className="relative">
							<input
								type="text"
								value={searchFilters.search}
								onChange={(e) =>
									setSearchFilters((prev: SearchFilters) => ({
										...prev,
										search: e.target.value,
									}))
								}
								className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#38738c] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
								placeholder="Search sessions, speakers, topics..."
							/>
							<svg
								className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
						</div>
					</div>

					{/* Filter Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<label className="block text-sm font-semibold text-gray-700">
								Type
							</label>
							<select
								value={searchFilters.type}
								onChange={(e) =>
									setSearchFilters((prev: SearchFilters) => ({
										...prev,
										type: e.target.value,
									}))
								}
								className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#38738c] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
							>
								<option value="all">All Types</option>
								<option value="heading">Heading</option>
								<option value="course">Course</option>
								<option value="session">Session</option>
							</select>
						</div>

						<div className="space-y-2">
							<label className="block text-sm font-semibold text-gray-700">
								Track
							</label>
							<select
								value={searchFilters.track}
								onChange={(e) =>
									setSearchFilters((prev: SearchFilters) => ({
										...prev,
										track: e.target.value,
									}))
								}
								className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#38738c] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
							>
								<option value="all">All Tracks</option>
								<option value="cataract">Cataract</option>
								<option value="glaucoma">Glaucoma</option>
								<option value="retina">Retina</option>
								<option value="cornea">Cornea</option>
							</select>
						</div>

						<div className="space-y-2">
							<label className="block text-sm font-semibold text-gray-700">
								Location
							</label>
							<select
								value={searchFilters.location}
								onChange={(e) =>
									setSearchFilters((prev: SearchFilters) => ({
										...prev,
										location: e.target.value,
									}))
								}
								className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#38738c] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
							>
								<option value="all">All Locations</option>
								<option value="room1">Room 1 Main Hall</option>
								<option value="room2">Room 2</option>
								<option value="room3">Room 3</option>
								<option value="room4">Room 4</option>
							</select>
						</div>

						<div className="space-y-2">
							<label className="block text-sm font-semibold text-gray-700">
								Date
							</label>
							<select
								value={searchFilters.date}
								onChange={(e) =>
									setSearchFilters((prev: SearchFilters) => ({
										...prev,
										date: e.target.value,
									}))
								}
								className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#38738c] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
							>
								<option value="all">All Days</option>
								<option value="thursday">Thursday, Dec 4</option>
								<option value="friday">Friday, Dec 5</option>
								<option value="saturday">Saturday, Dec 6</option>
							</select>
						</div>
					</div>

					<div className="space-y-2">
						<label className="block text-sm font-semibold text-gray-700">
							Time
						</label>
						<select
							value={searchFilters.time}
							onChange={(e) =>
								setSearchFilters((prev: SearchFilters) => ({
									...prev,
									time: e.target.value,
								}))
							}
							className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#38738c] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
						>
							<option value="all">All Times</option>
							<option value="morning">Morning Sessions</option>
							<option value="afternoon">Afternoon Sessions</option>
							<option value="evening">Evening Sessions</option>
						</select>
					</div>
				</div>

				{/* Modal Footer */}
				<div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6">
					<div className="flex gap-3">
						<button
							onClick={clearFilters}
							className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 font-semibold"
						>
							Clear Filters
						</button>
						<button
							onClick={() => setSearchOpen(false)}
							className="flex-1 px-6 py-3 bg-gradient-to-r from-[#38738c] to-[#2e5e73] text-white rounded-xl hover:from-[#2e5e73] hover:to-[#38738c] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
						>
							Apply Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchModal;
