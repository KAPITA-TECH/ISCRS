export interface Course {
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

export interface ScheduleData {
	[key: string]: {
		[timeSlot: string]: {
			general?: string;
			courses?: Course[];
		};
	};
}

export interface SearchFilters {
	search: string;
	type: string;
	track: string;
	location: string;
	date: string;
	time: string;
}
