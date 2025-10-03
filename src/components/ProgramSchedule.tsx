import React from "react";
import CourseCard from "./CourseCard";
import { Course, ScheduleData } from "../lib/types";

interface ProgramScheduleProps {
	activeDay: string;
	scheduleData: ScheduleData;
	handleCourseClick: (course: Course) => void;
}

const ProgramSchedule: React.FC<ProgramScheduleProps> = ({
	activeDay,
	scheduleData,
	handleCourseClick,
}) => {
	return (
		<section className="py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
				{Object.entries(scheduleData[activeDay] || {}).map(
					([timeSlot, scheduleItem]: [
						string,
						ScheduleData[string][string]
					]) => (
						<div
							key={timeSlot}
							className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
						>
							{/* Time Header */}
							<div className="bg-gradient-to-r from-[#2e5e73] via-[#38738c] to-[#2e5e73] px-6 py-4">
								<div className="flex items-center gap-3">
									<div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
									<h3 className="text-xl font-bold text-white tracking-wide">
										{timeSlot}
									</h3>
								</div>
							</div>

							{/* Content */}
							<div className="p-6">
								{scheduleItem?.general ? (
									<div className="text-center">
										<div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 px-8 py-4 rounded-xl shadow-sm">
											<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
											<span className="text-lg font-semibold text-emerald-800">
												{scheduleItem.general}
											</span>
										</div>
									</div>
								) : scheduleItem?.courses ? (
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
										{scheduleItem.courses.map((course: Course) => (
											<CourseCard
												key={course.id}
												course={course}
												handleCourseClick={handleCourseClick}
											/>
										))}
									</div>
								) : null}
							</div>
						</div>
					)
				)}

				{/* Empty State */}
				{Object.keys(scheduleData[activeDay] || {}).length === 0 && (
					<div className="text-center py-16">
						<div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
							<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-8 h-8 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								No Schedule Available
							</h3>
							<p className="text-gray-600">
								The program schedule for this day will be updated soon.
							</p>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default ProgramSchedule;
