import React from "react";
import { Course } from "../lib/types";

interface CourseDetailsModalProps {
	selectedCourse: Course | null;
	setSelectedCourse: (course: Course | null) => void;
}

const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({
	selectedCourse,
	setSelectedCourse,
}) => {
	if (!selectedCourse) return null;

	return (
		<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
			<div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
				{/* Modal Header */}
				<div className="sticky top-0 bg-gradient-to-r from-[#2e5e73] to-[#38738c] text-white p-8 overflow-hidden">
					<div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
					<div className="relative">
						<div className="flex items-start justify-between">
							<div className="flex-1">
								<h2 className="text-2xl font-bold mb-2 leading-tight">
									{selectedCourse.title}
								</h2>
								<div className="flex items-center gap-2 text-blue-100">
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
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<span className="font-medium">{selectedCourse.room}</span>
								</div>
							</div>
							<button
								onClick={() => setSelectedCourse(null)}
								className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200 ml-4"
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
				</div>

				{/* Modal Content */}
				<div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
					{/* Course Details Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
						<div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
							<h3 className="flex items-center gap-2 font-bold text-lg text-gray-900 mb-4">
								<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
								Moderator
							</h3>
							<p className="text-gray-800 font-medium text-lg">
								{selectedCourse.moderator}
							</p>
						</div>

						<div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
							<h3 className="flex items-center gap-2 font-bold text-lg text-gray-900 mb-4">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								Panelists
							</h3>
							<div className="space-y-2">
								{selectedCourse.panelists.map((panelist, index) => (
									<p key={index} className="text-gray-800 font-medium">
										{panelist}
									</p>
								))}
							</div>
						</div>
					</div>

					{/* Sessions */}
					<div className="space-y-4">
						<h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
							<div className="w-1 h-8 bg-gradient-to-b from-[#38738c] to-[#2e5e73] rounded-full"></div>
							Session Schedule
						</h3>

						<div className="space-y-4">
							{selectedCourse.sessions.map((session, index) => (
								<div
									key={index}
									className="group bg-gradient-to-br from-gray-50 to-slate-50 hover:from-blue-50 hover:to-indigo-50 border border-gray-200 hover:border-blue-300 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
								>
									<div className="flex items-start gap-4">
										{/* Time Badge */}
										<div className="flex-shrink-0">
											<span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-[#38738c] to-[#2e5e73] text-white shadow-sm">
												{session.time}
											</span>
										</div>

										{/* Content */}
										<div className="flex-1 min-w-0">
											<h4 className="font-bold text-gray-900 mb-2 text-lg leading-tight group-hover:text-[#38738c] transition-colors">
												{session.title}
											</h4>
											{session.speaker && (
												<div className="flex items-center gap-2 text-gray-600">
													<svg
														className="w-4 h-4 text-gray-400"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
														/>
													</svg>
													<span className="font-medium">{session.speaker}</span>
												</div>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Modal Footer */}
				<div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6">
					<button
						onClick={() => setSelectedCourse(null)}
						className="w-full px-6 py-3 bg-gradient-to-r from-[#38738c] to-[#2e5e73] text-white rounded-xl hover:from-[#2e5e73] hover:to-[#38738c] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
					>
						Close Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default CourseDetailsModal;
