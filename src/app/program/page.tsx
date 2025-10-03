"use client";

import { useState } from "react";
import ProgramHero from "../../components/ProgramHero";
import ProgramFilters from "../../components/ProgramFilters";
import ProgramSchedule from "../../components/ProgramSchedule";
import SearchModal from "../../components/SearchModal";
import CourseDetailsModal from "../../components/CourseDetailsModal";
import { Course } from "../../lib/types";
import { scheduleData } from "../../lib/scheduleData";

export default function ProgramPage() {
	const [activeDay, setActiveDay] = useState("thursday");
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

	const handleCourseClick = (course: Course) => {
		setSelectedCourse(course);
	};

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
			<ProgramHero />
			<ProgramFilters
				activeDay={activeDay}
				setActiveDay={setActiveDay}
				categoryFilter={categoryFilter}
				setCategoryFilter={setCategoryFilter}
				setSearchOpen={setSearchOpen}
			/>
			<ProgramSchedule
				activeDay={activeDay}
				scheduleData={scheduleData}
				handleCourseClick={handleCourseClick}
			/>
			<SearchModal
				searchOpen={searchOpen}
				setSearchOpen={setSearchOpen}
				searchFilters={searchFilters}
				setSearchFilters={setSearchFilters}
				clearFilters={clearFilters}
			/>
			<CourseDetailsModal
				selectedCourse={selectedCourse}
				setSelectedCourse={setSelectedCourse}
			/>
		</main>
	);
}
