import { Course, ScheduleData } from "./types";

export const scheduleData: ScheduleData = {
	thursday: {
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
		"10:30 AM - 11:30 AM": { general: "Coffee Break" },
		"11:30 AM - 12:30 PM": {
			courses: [
				{
					id: "retina-updates",
					title: "Retina Updates: Latest Advances in Treatment",
					room: "Room 1 Main Hall",
					timeSlot: "11:30 AM - 12:30 PM",
					moderator: "Dr. Jennifer Martinez",
					panelists: ["Dr. Carlos Rodriguez", "Dr. Aisha Patel"],
					sessions: [
						{
							time: "11:30 - 11:38",
							title: "AMD Treatment Innovations",
							speaker: "Dr. Jennifer Martinez",
						},
						{
							time: "11:38 - 11:46",
							title: "Diabetic Retinopathy Management",
							speaker: "Dr. Carlos Rodriguez",
						},
						{ time: "11:46 - 11:54", title: "Panel Discussion", speaker: "" },
					],
				},
			],
		},
	},
	friday: {
		"8:00 AM - 9:00 AM": { general: "Day 2 Registration" },
		"9:00 AM - 10:00 AM": { general: "Opening Ceremony" },
		"10:00 AM - 11:00 AM": {
			courses: [
				{
					id: "surgical-techniques",
					title: "Advanced Surgical Techniques Workshop",
					room: "Room 1 Main Hall",
					timeSlot: "10:00 AM - 11:00 AM",
					moderator: "Dr. Michael Thompson",
					panelists: ["Dr. Sarah Kim", "Dr. David Wilson"],
					sessions: [
						{
							time: "10:00 - 10:20",
							title: "Microsurgical Innovations",
							speaker: "Dr. Michael Thompson",
						},
						{
							time: "10:20 - 10:40",
							title: "Hands-on Demonstration",
							speaker: "Dr. Sarah Kim",
						},
						{ time: "10:40 - 11:00", title: "Q&A Session", speaker: "" },
					],
				},
			],
		},
	},
};
