"use client";

import { useState } from "react";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!formData.firstName.trim()) {
			newErrors.firstName = "First name is required";
		}

		if (!formData.lastName.trim()) {
			newErrors.lastName = "Last name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (validateForm()) {
			// Simulate form submission
			console.log("Form submitted:", formData);
			setIsSubmitted(true);
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				subject: "",
				message: "",
			});

			// Reset success message after 5 seconds
			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header Section */}
			<div className="bg-gradient-to-r from-[#8ccbe5] to-[#b56c4d] py-16 px-4 pt-32">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2e5e73] mb-4">
						Contact Us
					</h1>
					<p className="text-lg md:text-xl text-[#2e5e73]">
						Get in Touch with ISCRS
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Left Column - Contact Form */}
					<div className="bg-white rounded-lg shadow-lg p-8">
						<h2 className="text-2xl font-bold text-[#38738c] mb-6">
							Send us a Message
						</h2>

						{isSubmitted && (
							<div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
								Thank you for your message! We&apos;ll get back to you soon.
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label
										htmlFor="firstName"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										First Name
									</label>
									<input
										type="text"
										id="firstName"
										name="firstName"
										value={formData.firstName}
										onChange={handleInputChange}
										className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all duration-200 ${
											errors.firstName ? "border-red-500" : "border-gray-300"
										}`}
										placeholder="Enter your first name"
									/>
									{errors.firstName && (
										<p className="mt-1 text-sm text-red-600">
											{errors.firstName}
										</p>
									)}
								</div>

								<div>
									<label
										htmlFor="lastName"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Last Name
									</label>
									<input
										type="text"
										id="lastName"
										name="lastName"
										value={formData.lastName}
										onChange={handleInputChange}
										className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all duration-200 ${
											errors.lastName ? "border-red-500" : "border-gray-300"
										}`}
										placeholder="Enter your last name"
									/>
									{errors.lastName && (
										<p className="mt-1 text-sm text-red-600">
											{errors.lastName}
										</p>
									)}
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all duration-200 ${
										errors.email ? "border-red-500" : "border-gray-300"
									}`}
									placeholder="Enter your email address"
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-600">{errors.email}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleInputChange}
									className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all duration-200 ${
										errors.subject ? "border-red-500" : "border-gray-300"
									}`}
									placeholder="Enter message subject"
								/>
								{errors.subject && (
									<p className="mt-1 text-sm text-red-600">{errors.subject}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={6}
									value={formData.message}
									onChange={handleInputChange}
									className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all duration-200 resize-none ${
										errors.message ? "border-red-500" : "border-gray-300"
									}`}
									placeholder="Enter your message"
								/>
								{errors.message && (
									<p className="mt-1 text-sm text-red-600">{errors.message}</p>
								)}
							</div>

							<button
								type="submit"
								className="w-full bg-[#38738c] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2d5a6b] transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
							>
								Send Message
							</button>
						</form>
					</div>

					{/* Right Column - Contact Information */}
					<div className="space-y-8">
						{/* Contact Information */}
						<div className="bg-white rounded-lg shadow-lg p-8">
							<h3 className="text-2xl font-bold text-[#38738c] mb-6">
								Contact Information
							</h3>

							<div className="space-y-4">
								<div className="flex items-center space-x-3">
									<div className="flex-shrink-0">
										<span className="text-2xl">📍</span>
									</div>
									<div>
										<p className="text-gray-700 font-medium">Address</p>
										<p className="text-gray-600">Baghdad, Iraq</p>
									</div>
								</div>

								<div className="flex items-center space-x-3">
									<div className="flex-shrink-0">
										<span className="text-2xl">📧</span>
									</div>
									<div>
										<p className="text-gray-700 font-medium">Email</p>
										<a
											href="mailto:info@mocatiscrs.org"
											className="text-[#38738c] hover:underline"
										>
											info@mocatiscrs.org
										</a>
									</div>
								</div>

								<div className="flex items-center space-x-3">
									<div className="flex-shrink-0">
										<span className="text-2xl">🌐</span>
									</div>
									<div>
										<p className="text-gray-700 font-medium">Website</p>
										<a
											href="https://www.mocatiscrs.org"
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#38738c] hover:underline"
										>
											www.mocatiscrs.org
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Office Hours */}
						<div className="bg-white rounded-lg shadow-lg p-8">
							<h3 className="text-2xl font-bold text-[#38738c] mb-6">
								Office Hours
							</h3>

							<div className="space-y-3">
								<div className="flex justify-between items-center py-2 border-b border-gray-200">
									<span className="font-medium text-gray-700">
										Sunday - Thursday
									</span>
									<span className="text-gray-600">9:00 AM - 5:00 PM</span>
								</div>
								<div className="flex justify-between items-center py-2">
									<span className="font-medium text-gray-700">
										Friday - Saturday
									</span>
									<span className="text-gray-600">Closed</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
