"use client";

import { useState } from "react";


interface Course {
	id: string;
	title: string;
	room: string;
	timeSlot: string;
	moderator: string;
	panelists: string[];
	sessions: {
		time: string;
		title: string;
		speaker: string;
	}[];
}



// Commented out schedule data - keeping for reference
/*
const scheduleData: ScheduleData = {
	day1: {
		"6:00 AM - 7:30 AM": { general: "Registration" },
		"7:30 AM - 8:30 AM": { general: "Day 1 Breakfast" },
		"9:30 AM - 10:30 AM": {
			courses: [
				{
					id: "cataract-360",
					title: "Cataract 360: Techniques Innovations and Trends",
					room: "Room 1 Main Hall",
					timeSlot: "9:30 AM - 10:30 AM",
					moderator: "Dr. Sarah Johnson",
					panelists: ["Dr. Michael Chen", "Dr. Emily Rodriguez"],
					sessions: [
						{
							time: "10:30 - 10:38",
							title: "A Persistent Acute Angle Closure Crisis",
							speaker: "Leon Au",
						},
						{
							time: "10:38 - 10:46",
							title: "Advanced OAG with Unhealthy Conjunctive: What to Do?",
							speaker: "Luis Pinto",
						},
						{ time: "10:46 - 10:54", title: "Discussion", speaker: "" },
						{
							time: "10:54 - 11:02",
							title:
								"Uncontrolled NVG Following CRVO with a Useful Vision. What is the Plan?",
							speaker: "Paul Singh",
						},
					],
				},
				{
					id: "cornea-refractive",
					title:
						"Cornea & Refractive: Answers to Common Questions in Our Practice",
					room: "Room 2",
					timeSlot: "9:30 AM - 10:30 AM",
					moderator: "Dr. Ahmed Hassan",
					panelists: ["Dr. Lisa Wang", "Dr. James Miller"],
					sessions: [
						{
							time: "9:30 - 9:38",
							title: "Advanced Corneal Techniques",
							speaker: "Dr. Ahmed Hassan",
						},
						{
							time: "9:38 - 9:46",
							title: "Refractive Surgery Updates",
							speaker: "Dr. Lisa Wang",
						},
						{ time: "9:46 - 9:54", title: "Q&A Session", speaker: "" },
					],
				},
				{
					id: "glaucoma-management",
					title: "Glaucoma: What Would you Do If You Were Me?",
					room: "Room 3",
					timeSlot: "9:30 AM - 10:30 AM",
					moderator: "Dr. Robert Kim",
					panelists: ["Dr. Maria Santos", "Dr. David Lee"],
					sessions: [
						{
							time: "9:30 - 9:38",
							title: "Complex Glaucoma Cases",
							speaker: "Dr. Robert Kim",
						},
						{
							time: "9:38 - 9:46",
							title: "Treatment Decision Making",
							speaker: "Dr. Maria Santos",
						},
						{
							time: "9:46 - 9:54",
							title: "Interactive Discussion",
							speaker: "",
						},
					],
				},
			],
		},
	},
	day2: {
		"8:00 AM - 9:00 AM": { general: "Day 2 Registration" },
		"9:00 AM - 10:00 AM": { general: "Opening Ceremony" },
	},
};
*/

const timeSlots = [
	"6:00 AM - 7:30 AM",
	"7:30 AM - 8:30 AM",
	"8:00 AM - 10:00 AM",
	"8:30 AM - 10:00 AM",
	"8:30 AM - 9:30 AM",
	"9:30 AM - 10:30 AM",
	"10:00 AM - 12:00 PM",
	"10:30 AM - 12:00 PM",
	"10:30 AM - 11:30 AM",
	"11:30 AM - 12:00 PM",
	"12:00 PM - 1:00 PM",
	"12:30 PM - 2:00 PM",
	"1:00 PM - 1:30 PM",
	"1:30 PM - 2:00 PM",
	"2:00 PM - 2:45 PM",
	"2:45 PM - 3:45 PM",
	"3:00 PM - 5:00 PM",
];

const rooms = ["Room 1 Main Hall", "Room 2", "Room 3", "Room 4"];

export default function ProgramPage() {
	const [activeDay, setActiveDay] = useState("day1");
	const [searchOpen, setSearchOpen] = useState(false);
	const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
	const [categoryFilter, setCategoryFilter] = useState("use browser");
	const [searchFilters, setSearchFilters] = useState({
		search: "",
		type: "all",
		track: "all",
		location: "all",
		date: "all",
		time: "all",
	});

	const days = [
		{ key: "day1", label: "Thursday, January 22, 2026" },
		{ key: "day2", label: "Friday, January 23, 2026" },
	];

	
	const clearFilters = () => {
		setSearchFilters({
			search: "",
			type: "all",
			track: "all",
			location: "all",
			date: "all",
			time: "all",
		});
	};

	return (
		<main className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-[#8ccbe5] to-[#b56c4d] pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2e5e73] mb-6 leading-tight">
						Conference Program
					</h1>
					<p className="text-xl sm:text-2xl text-[#2e5e73] max-w-3xl mx-auto leading-relaxed">
						Explore our comprehensive schedule of events, sessions, and
						activities
					</p>
				</div>
			</section>

			{/* Filters Section */}
			<section className="bg-white shadow-lg border-b">
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

			{/* Schedule Container */}
			<section className="py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-xl shadow-lg overflow-hidden">
						{/* Schedule Grid */}
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="bg-gradient-to-r from-[#2e5e73] to-[#38738c]">
										<th className="px-6 py-4 text-left text-sm font-semibold text-white min-w-[200px]">
											Time
										</th>
										{rooms.map((room) => (
											<th
												key={room}
												className="px-6 py-4 text-center text-sm font-semibold text-white min-w-[250px]"
											>
												{room}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{timeSlots.map((timeSlot, index) => {
										// Commented out schedule content - keeping table structure
										/*
										const scheduleItem = scheduleData[activeDay]?.[timeSlot];
										*/
										return (
											<tr
												key={timeSlot}
												className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
											>
												<td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-200">
													{timeSlot}
												</td>
												{/*
												{scheduleItem?.general ? (
													<td
														colSpan={rooms.length}
														className="px-6 py-4 text-center"
													>
														<div className="bg-gradient-to-r from-[#38738c] to-[#2e5e73] text-white px-4 py-3 rounded-lg font-medium shadow-md">
															{scheduleItem.general}
														</div>
													</td>
												) : scheduleItem?.courses ? (
													rooms.map((room, roomIndex) => {
														const course = scheduleItem.courses?.[roomIndex];
														return (
															<td
																key={room}
																className="px-4 py-4 border-r border-gray-200"
															>
																{course ? (
																	<button
																		onClick={() => handleCourseClick(course)}
																		className="w-full text-left p-4 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md group"
																	>
																		<div className="font-semibold text-sm text-gray-900 mb-2 group-hover:text-[#38738c] transition-colors">
																			{course.title}
																		</div>
																		<div className="text-xs text-gray-600">
																			{course.room}
																		</div>
																	</button>
																) : null}
															</td>
														);
													})
												) : (
												*/}
												{rooms.map((room) => (
													<td
														key={room}
														className="px-6 py-4 border-r border-gray-200"
													>
														{/* Empty cell - content commented out */}
													</td>
												))}
												{/*
												)}
												*/}
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>

			{/* Search Modal */}
			{searchOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
					<div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
						<div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
							<h2 className="text-xl font-bold text-gray-900">Search Agenda</h2>
							<button
								onClick={() => setSearchOpen(false)}
								className="p-2 hover:bg-gray-100 rounded-full transition-colors"
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

						<div className="p-6 space-y-4">
							{/* Search Input */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Search
								</label>
								<input
									type="text"
									value={searchFilters.search}
									onChange={(e) =>
										setSearchFilters((prev) => ({
											...prev,
											search: e.target.value,
										}))
									}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
									placeholder="Search sessions, speakers, topics..."
								/>
							</div>

							{/* Filter Grid */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Type
									</label>
									<select
										value={searchFilters.type}
										onChange={(e) =>
											setSearchFilters((prev) => ({
												...prev,
												type: e.target.value,
											}))
										}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
									>
										<option value="all">All</option>
										<option value="heading">Heading</option>
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Track
									</label>
									<select
										value={searchFilters.track}
										onChange={(e) =>
											setSearchFilters((prev) => ({
												...prev,
												track: e.target.value,
											}))
										}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
									>
										<option value="all">All</option>
										<option value="test">Test Option</option>
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Location
									</label>
									<select
										value={searchFilters.location}
										onChange={(e) =>
											setSearchFilters((prev) => ({
												...prev,
												location: e.target.value,
											}))
										}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
									>
										<option value="all">All</option>
										<option value="test">Test Option</option>
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Date
									</label>
									<select
										value={searchFilters.date}
										onChange={(e) =>
											setSearchFilters((prev) => ({
												...prev,
												date: e.target.value,
											}))
										}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
									>
										<option value="all">All</option>
										<option value="test">Test Option</option>
									</select>
								</div>

								<div className="md:col-span-2">
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Time
									</label>
									<select
										value={searchFilters.time}
										onChange={(e) =>
											setSearchFilters((prev) => ({
												...prev,
												time: e.target.value,
											}))
										}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
									>
										<option value="all">All</option>
										<option value="test">Test Option</option>
									</select>
								</div>
							</div>

							{/* Action Buttons */}
							<div className="flex gap-3 pt-4">
								<button
									onClick={clearFilters}
									className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
								>
									Clear
								</button>
								<button
									onClick={() => setSearchOpen(false)}
									className="flex-1 px-4 py-2 bg-[#38738c] text-white rounded-lg hover:bg-[#2d5a6b] transition-colors"
								>
									Apply
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Course Details Modal */}
			{selectedCourse && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
					<div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
						<div className="sticky top-0 bg-gradient-to-r from-[#2e5e73] to-[#38738c] text-white px-6 py-4 rounded-t-xl">
							<h2 className="text-2xl font-bold">{selectedCourse.title}</h2>
							<p className="text-blue-100 mt-1">{selectedCourse.room}</p>
						</div>

						<div className="p-6">
							{/* Course Details */}
							<div className="mb-6 p-4 bg-gray-50 rounded-lg">
								<h3 className="font-semibold text-lg text-gray-900 mb-3">
									Details
								</h3>
								<div className="space-y-2 text-sm">
									<p>
										<span className="font-medium">Moderator:</span>{" "}
										{selectedCourse.moderator}
									</p>
									<p>
										<span className="font-medium">Panelists:</span>{" "}
										{selectedCourse.panelists.join(" | ")}
									</p>
								</div>
							</div>

							{/* Sessions */}
							<div className="space-y-4">
								{selectedCourse.sessions.map((session, index) => (
									<div
										key={index}
										className="border-l-4 border-[#38738c] pl-4 py-2"
									>
										<div className="flex items-start justify-between mb-2">
											<span className="text-sm font-medium text-[#38738c] bg-blue-50 px-2 py-1 rounded">
												Time: {session.time}
											</span>
										</div>
										<h4 className="font-semibold text-gray-900 mb-1">
											{session.title}
										</h4>
										{session.speaker && (
											<p className="text-sm text-gray-600">
												Speaker: {session.speaker}
											</p>
										)}
									</div>
								))}
							</div>

							{/* Close Button */}
							<div className="mt-8 pt-6 border-t border-gray-200">
								<button
									onClick={() => setSelectedCourse(null)}
									className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
