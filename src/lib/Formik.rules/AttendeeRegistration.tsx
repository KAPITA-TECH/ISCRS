import * as Yup from "yup";

// Validation schema for attendee registration form
export const attendeeRegistrationValidationSchema = Yup.object({
	fullName: Yup.string()
		.min(2, "Name must be at least 2 characters")
		.required("Full name is required"),
	specialty: Yup.string().required("Specialty is required"),
	institution: Yup.string()
		.min(2, "Institution must be at least 2 characters")
		.required("Institution/Affiliation is required"),
	country: Yup.string()
		.min(2, "Country must be at least 2 characters")
		.required("Country is required"),
	city: Yup.string()
		.min(2, "City must be at least 2 characters")
		.required("City is required"),
	email: Yup.string()
		.email("Invalid email format")
		.required("Email is required"),
	mobile: Yup.string()
		.matches(/^\+?\d{10,15}$/, "Please enter a valid mobile number")
		.required("Mobile/WhatsApp number is required"),
	confirmation: Yup.boolean()
		.isTrue(
			"You must confirm that the information is correct and agree to be contacted"
		)
		.required("Confirmation is required"),
});

// Initial values for the form
export const attendeeRegistrationInitialValues = {
	fullName: "",
	specialty: "",
	institution: "",
	country: "",
	city: "",
	email: "",
	mobile: "",
	confirmation: false,
};

// Medical specialties
export const medicalSpecialties = [
	"Ophthalmology",
	"General Medicine",
	"Surgery",
	"Pediatrics",
	"Internal Medicine",
	"Obstetrics & Gynecology",
	"Dermatology",
	"Neurology",
	"Cardiology",
	"Orthopedics",
	"Radiology",
	"Anesthesiology",
	"Psychiatry",
	"Emergency Medicine",
	"Pathology",
	"Other",
];

// Countries list (common countries for medical conferences)
export const countries = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"Argentina",
	"Australia",
	"Austria",
	"Bahrain",
	"Bangladesh",
	"Belgium",
	"Brazil",
	"Bulgaria",
	"Canada",
	"Chile",
	"China",
	"Colombia",
	"Croatia",
	"Czech Republic",
	"Denmark",
	"Egypt",
	"Finland",
	"France",
	"Germany",
	"Greece",
	"Hungary",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Italy",
	"Japan",
	"Jordan",
	"Kenya",
	"Kuwait",
	"Lebanon",
	"Libya",
	"Malaysia",
	"Mexico",
	"Morocco",
	"Netherlands",
	"New Zealand",
	"Nigeria",
	"Norway",
	"Oman",
	"Pakistan",
	"Palestine",
	"Philippines",
	"Poland",
	"Portugal",
	"Qatar",
	"Romania",
	"Russia",
	"Saudi Arabia",
	"Singapore",
	"South Africa",
	"South Korea",
	"Spain",
	"Sweden",
	"Switzerland",
	"Syria",
	"Thailand",
	"Tunisia",
	"Turkey",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"United States",
	"Venezuela",
	"Vietnam",
	"Yemen",
];

// Form submission handler
export const handleAttendeeRegistrationSubmit = (
	values: typeof attendeeRegistrationInitialValues
) => {
	console.log("Attendee registration form submitted:", values);
	// Handle form submission here - send to API, etc.
	return new Promise((resolve) => {
		setTimeout(() => {
			alert(
				"Registration submitted successfully! A confirmation email will be sent to you."
			);
			resolve(values);
		}, 1000);
	});
};
