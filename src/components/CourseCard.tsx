import React from "react";
import { Course } from "../lib/types";

interface CourseCardProps {
	course: Course;
	handleCourseClick: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
	course,
	handleCourseClick,
}) => {
	return (
		<div key={course.id} className="group">
			<button
				onClick={() => handleCourseClick(course)}
				className="w-full h-full text-left p-3 bg-gradient-to-br from-slate-50 via-white to-blue-50 hover:from-blue-50 hover:to-indigo-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg group-hover:scale-[1.02] transform"
			>
				{/* Course Header */}
				<div className="flex items-start justify-between mb-2">
					<div className="flex-1">
						<h4 className="font-bold text-gray-900 text-xs leading-tight group-hover:text-[#38738c] transition-colors duration-200 mb-0.5">
							{course.title}
						</h4>
						<div className="flex items-center gap-1 text-2xs text-gray-600">
							<svg
								className="w-2.5 h-2.5 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<span className="font-medium">{course.room}</span>
						</div>
					</div>
					<div className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
						<svg
							className="w-3.5 h-3.5 text-[#38738c]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</div>

				{/* Course Details */}
				<div className="space-y-1.5">
					<div className="flex items-center gap-1.5 text-2xs">
						<span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-3xs font-medium bg-blue-100 text-blue-800">
							Moderator
						</span>
						<span className="text-gray-700 font-medium">
							{course.moderator}
						</span>
					</div>

					<div className="flex items-start gap-1.5 text-2xs">
						<span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-3xs font-medium bg-green-100 text-green-800 whitespace-nowrap">
							Panelists
						</span>
						<div className="text-gray-700">
							{course.panelists
								.slice(0, 1)
								.map((panelist: string, index: number) => (
									<span key={index} className="block font-medium">
										{panelist}
									</span>
								))}
							{course.panelists.length > 1 && (
								<span className="text-3xs text-gray-500 italic">
									+{course.panelists.length - 1} more
								</span>
							)}
						</div>
					</div>

					<div className="pt-1.5 border-t border-gray-100">
						<div className="flex items-center justify-between text-2xs text-gray-500">
							<span>{course.sessions.length} sessions</span>
							<span className="bg-gray-100 px-1.5 py-0.5 rounded-full">
								Details
							</span>
						</div>
					</div>
				</div>
			</button>
		</div>
	);
};

export default CourseCard;
