"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
	attendeeRegistrationValidationSchema,
	attendeeRegistrationInitialValues,
	medicalSpecialties,
	countries,
	handleAttendeeRegistrationSubmit,
} from "@/lib/Formik.rules/AttendeeRegistration";

const AttendeeRegistrationForm = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-[#8ccbe5] to-[#b56c4d] text-[#2e5e73] py-24 px-4 overflow-hidden">
				<div className="max-w-4xl mx-auto text-center relative z-10">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
						MOCAT 5 Registration
					</h1>
					<h2 className="text-2xl md:text-3xl font-light mb-6 text-[#2e5e73]">
						5th Mesopotamia Ophthalmology Conference for Advanced Techniques
					</h2>
					<p className="text-xl text-[#2e5e73]">
						January 22–23, 2026 | Mövenpick Hotel, Baghdad
					</p>
				</div>
			</section>

			{/* Registration Form Section */}
			<section className="max-w-4xl mx-auto px-4 py-16">
				<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
					<div className="text-center mb-8">
						<h2 className="text-3xl font-bold text-[#38738c] mb-2">
							Attendee Registration Form
						</h2>
						<p className="text-gray-600">
							Please fill out the form below to register for MOCAT 5
						</p>
					</div>

					{/* Important Notes */}
					<div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
						<h3 className="text-lg font-semibold text-blue-900 mb-4">
							Important Notes:
						</h3>
						<ul className="text-blue-800 space-y-2">
							<li>
								• Registration is mandatory for all attendees including
								speakers.
							</li>
							<li>• Seats are limited — early registration is advised.</li>
							<li>• A confirmation email will be sent after submission.</li>
							<li>
								• For inquiries, please contact: registration@glitteriq.com
							</li>
						</ul>
					</div>

					<Formik
						initialValues={attendeeRegistrationInitialValues}
						validationSchema={attendeeRegistrationValidationSchema}
						onSubmit={handleAttendeeRegistrationSubmit}
					>
						{({ isSubmitting }) => (
							<Form className="space-y-6">
								{/* Full Name */}
								<div>
									<label
										htmlFor="fullName"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Full Name *
									</label>
									<Field
										type="text"
										id="fullName"
										name="fullName"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-colors"
										placeholder="Enter your full name"
									/>
									<ErrorMessage
										name="fullName"
										component="div"
										className="text-red-500 text-sm mt-1"
									/>
								</div>

								{/* Specialty */}
								<div>
									<label
										htmlFor="specialty"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Specialty *
									</label>
									<Field
										as="select"
										id="specialty"
										name="specialty"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-colors"
									>
										<option value="">Select your specialty</option>
										{medicalSpecialties.map((specialty) => (
											<option key={specialty} value={specialty}>
												{specialty}
											</option>
										))}
									</Field>
									<ErrorMessage
										name="specialty"
										component="div"
										className="text-red-500 text-sm mt-1"
									/>
								</div>

								{/* Institution / Hospital / Affiliation */}
								<div>
									<label
										htmlFor="institution"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Institution / Hospital / Affiliation *
									</label>
									<Field
										type="text"
										id="institution"
										name="institution"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-colors"
										placeholder="Your institution or hospital"
									/>
									<ErrorMessage
										name="institution"
										component="div"
										className="text-red-500 text-sm mt-1"
									/>
								</div>

								{/* Country */}
								<div>
									<label
										htmlFor="country"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Country *
									</label>
									<Field
										as="select"
										id="country"
										name="country"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-colors"
									>
										<option value="">Select your country</option>
										{countries.map((country) => (
											<option key={country} value={country}>
												{country}
											</option>
										))}
									</Field>
									<ErrorMessage
										name="country"
										component="div"
										className="text-red-500 text-sm mt-1"
									/>
								</div>

								{/* City */}
								<div>
									<label
										htmlFor="city"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										City *
									</label>
									<Field
										type="text"
										id="city"
										name="city"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-colors"
										placeholder="Your city"
									/>
									<ErrorMessage
										name="city"
										component="div"
										className="text-red-500 text-sm mt-1"
									/>
								</div>

								{/* Email */}
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Email *
									</label>
									<Field
										type="email"
										id="email"
										name="email"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-colors"
										placeholder="your.email@example.com"
									/>
									<ErrorMessage
										name="email"
										component="div"
										className="text-red-500 text-sm mt-1"
									/>
								</div>

								{/* Mobile / WhatsApp */}
								<div>
									<label
										htmlFor="mobile"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Mobile / WhatsApp *
									</label>
									<Field
										type="tel"
										id="mobile"
										name="mobile"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-colors"
										placeholder="Your mobile number"
									/>
									<ErrorMessage
										name="mobile"
										component="div"
										className="text-red-500 text-sm mt-1"
									/>
								</div>

								{/* Confirmation Checkbox */}
								<div className="flex items-start space-x-3">
									<Field
										type="checkbox"
										id="confirmation"
										name="confirmation"
										className="h-4 w-4 text-[#38738c] focus:ring-[#38738c] border-gray-300 rounded mt-1"
									/>
									<label
										htmlFor="confirmation"
										className="text-sm text-gray-700 leading-relaxed"
									>
										I confirm that the above information is correct, and I agree
										to be contacted by the organizing committee regarding my
										participation. *
									</label>
								</div>
								<ErrorMessage
									name="confirmation"
									component="div"
									className="text-red-500 text-sm mt-1"
								/>

								{/* Submit Button */}
								<div className="text-center pt-6">
									<button
										type="submit"
										disabled={isSubmitting}
										className={`px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-200 ${
											isSubmitting
												? "bg-gray-400 cursor-not-allowed"
												: "bg-gradient-to-r from-[#38738c] to-[#94573d] hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:ring-offset-2"
										}`}
									>
										{isSubmitting ? "Submitting..." : "Submit Registration"}
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</section>
		</div>
	);
};

export default AttendeeRegistrationForm;
