"use client";

import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

// Single-page validation schema
const formSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9+\s()-]+$/, "Invalid mobile number")
    .required("Mobile number is required"),
  placeOfWork: Yup.string().required("Place of work is required"),
  country: Yup.string().required("Country is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subspecialties: Yup.string().required("Subspecialties is required"),
  otherSubspecialty: Yup.string().when("subspecialties", {
    is: "Other",
    then: (schema) => schema.required("Please specify your subspecialty"),
    otherwise: (schema) => schema.notRequired(),
  }),
  abstractTitle: Yup.string()
    .max(250, "Abstract title must be 250 characters or less")
    .required("Abstract title is required"),
  abstract: Yup.string()
    .min(50, "Abstract must be at least 50 characters")
    .required("Abstract is required"),
});

const subspecialties = [
  "Cataract Surgery",
  "Refractive Surgery",
  "Cornea and External Disease",
  "Glaucoma",
  "Retina and Vitreous",
  "Uveitis",
  "Oculoplastics and Orbit",
  "Neuro-Ophthalmology",
  "Pediatric Ophthalmology and Strabismus",
  "Ocular Oncology",
  "Anterior Segment",
  "Posterior Segment",
  "Medical Retina",
  "Surgical Retina",
  "Ocular Surface and External Disease",
  "Ophthalmic Pathology",
  "Low Vision and Rehabilitation",
  "Comprehensive Ophthalmology",
  "Other",
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export default function AbstractForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmittedBefore, setHasSubmittedBefore] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Check if user has submitted before (from localStorage)
  useEffect(() => {
    const submittedEmails = JSON.parse(
      localStorage.getItem("submittedAbstracts") || "[]"
    );
    if (submittedEmails.length > 0) {
      setHasSubmittedBefore(true);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCountryDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFormSubmit = async (values: any) => {
    console.log("Form submission started", values);
    setIsLoading(true);

    // Simulate delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Check if this email has already submitted
    const submittedEmails = JSON.parse(
      localStorage.getItem("submittedAbstracts") || "[]"
    );

    if (submittedEmails.includes(values.email)) {
      console.log("Duplicate submission detected");
      setIsDuplicate(true);
      setIsLoading(false);
      return;
    }

    // Simulate API call (replace with actual submission logic)
    try {
      // TODO: Replace with actual API endpoint
      // await fetch('/api/submit-abstract', {
      //   method: 'POST',
      //   body: JSON.stringify(values)
      // });

      // Store the email to prevent duplicate submissions
      submittedEmails.push(values.email);
      localStorage.setItem(
        "submittedAbstracts",
        JSON.stringify(submittedEmails)
      );

      console.log("Form submitted successfully");
      setIsSubmitted(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your abstract. Please try again.");
      setIsLoading(false);
    }
  };

  // If duplicate submission detected, show warning message
  if (isDuplicate) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 text-center">
            <div className="mb-6">
              <svg
                className="w-20 h-20 text-yellow-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#38738c] mb-4">
              Already Submitted
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              This email has already been used to submit an abstract.
            </p>
            <p className="text-gray-600 mb-8">
              You cannot submit again with the same account or email. If you
              believe this is an error, please contact us at{" "}
              <a
                href="mailto:info@mocatiscrs.org"
                className="text-[#38738c] font-semibold hover:underline"
              >
                info@mocatiscrs.org
              </a>
            </p>
            <Link
              href="/abstract"
              className="inline-block bg-gradient-to-r from-[#38738c] to-[#94573d] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Back to Abstract Information
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // If form is submitted, show success message
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 text-center">
            <div className="mb-6">
              <svg
                className="w-20 h-20 text-green-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#38738c] mb-4">
              Submission Successful!
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Your submission has been received and is under review.
            </p>
            <Link
              href="/abstract"
              className="inline-block bg-gradient-to-r from-[#38738c] to-[#94573d] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Back to Abstract Information
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              {/* Animated Clock/Spinner */}
              <svg
                className="animate-spin w-24 h-24 text-[#38738c]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {/* Clock hands overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-[#94573d]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#38738c] mb-2">
              Submitting Your Abstract...
            </h3>
            <p className="text-gray-600">
              Please wait while we process your submission
            </p>
          </div>
        </div>
      )}

      {/* Back to Abstract Info Button */}
      <div className="max-w-4xl mx-auto px-4 mb-8 mt-8">
        <Link
          href="/abstract"
          className="inline-flex items-center text-[#38738c] hover:text-[#94573d] font-semibold transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Abstract Information
        </Link>
      </div>

      {/* Single-Page Form Section */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-4xl font-bold text-center text-[#38738c] mb-8">
            MOCAT Abstract Submission Form
          </h2>

          <Formik
            initialValues={{
              fullName: "",
              mobileNumber: "",
              placeOfWork: "",
              country: "",
              email: "",
              subspecialties: "",
              otherSubspecialty: "",
              abstractTitle: "",
              abstract: "",
            }}
            validationSchema={formSchema}
            onSubmit={handleFormSubmit}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ values, errors, submitCount, setFieldValue }) => {
              const filteredCountries = countries.filter((country) =>
                country.toLowerCase().includes(countrySearch.toLowerCase())
              );

              return (
                <Form className="space-y-6">
                  {/* Show validation errors at top ONLY after a failed submit attempt */}
                  {submitCount > 0 && Object.keys(errors).length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="text-red-800 font-semibold mb-2">
                        Please fix the following errors before submitting:
                      </h4>
                      <ul className="text-red-700 text-sm space-y-1 list-disc list-inside">
                        {Object.entries(errors).map(([field, error]) => (
                          <li key={field}>
                            <strong>
                              {field.replace(/([A-Z])/g, " $1").trim()}:
                            </strong>{" "}
                            {String(error)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="tel"
                      name="mobileNumber"
                      id="mobileNumber"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="+964 XXX XXX XXXX"
                    />
                    <ErrorMessage
                      name="mobileNumber"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Place of Work */}
                  <div>
                    <label
                      htmlFor="placeOfWork"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Place of Work <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="text"
                      name="placeOfWork"
                      id="placeOfWork"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="Enter your workplace"
                    />
                    <ErrorMessage
                      name="placeOfWork"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Country - Searchable Dropdown */}
                  <div ref={countryDropdownRef}>
                    <label
                      htmlFor="country"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Country <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={values.country || countrySearch}
                        onChange={(e) => {
                          setCountrySearch(e.target.value);
                          setShowCountryDropdown(true);
                          if (!e.target.value) {
                            setFieldValue("country", "");
                          }
                        }}
                        onFocus={() => setShowCountryDropdown(true)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                        placeholder="Search for your country..."
                      />
                      {showCountryDropdown && filteredCountries.length > 0 && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {filteredCountries.map((country) => (
                            <div
                              key={country}
                              onClick={() => {
                                setFieldValue("country", country);
                                setCountrySearch(country);
                                setShowCountryDropdown(false);
                              }}
                              className="px-4 py-2 hover:bg-[#38738c] hover:text-white cursor-pointer transition-colors"
                            >
                              {country}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Subspecialties */}
                  <div>
                    <label
                      htmlFor="subspecialties"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subspecialties <span className="text-red-500">*</span>
                    </label>
                    <Field
                      as="select"
                      name="subspecialties"
                      id="subspecialties"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                    >
                      <option value="">Select a subspecialty</option>
                      {subspecialties.map((subspecialty) => (
                        <option key={subspecialty} value={subspecialty}>
                          {subspecialty}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="subspecialties"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Other Subspecialty - Only show when "Other" is selected */}
                  {values.subspecialties === "Other" && (
                    <div>
                      <label
                        htmlFor="otherSubspecialty"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Please specify your subspecialty{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="text"
                        name="otherSubspecialty"
                        id="otherSubspecialty"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                        placeholder="Enter your subspecialty"
                      />
                      <ErrorMessage
                        name="otherSubspecialty"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  )}

                  {/* Abstract Title */}
                  <div>
                    <label
                      htmlFor="abstractTitle"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Abstract Title <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="text"
                      name="abstractTitle"
                      id="abstractTitle"
                      maxLength={250}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="Enter abstract title (max 250 characters)"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <ErrorMessage
                        name="abstractTitle"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                      <span className="text-xs text-gray-500">
                        {values.abstractTitle?.length || 0}/250
                      </span>
                    </div>
                  </div>

                  {/* Abstract */}
                  <div>
                    <label
                      htmlFor="abstract"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Abstract <span className="text-red-500">*</span>
                    </label>
                    <Field
                      as="textarea"
                      name="abstract"
                      id="abstract"
                      rows={8}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="Enter your abstract (minimum 50 characters)..."
                    />
                    <div className="flex justify-between items-center mt-1">
                      <ErrorMessage
                        name="abstract"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                      <span className="text-xs text-gray-500">
                        {values.abstract?.length || 0} characters
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6">
                    <button
                      type="submit"
                      disabled={isLoading}
                      onClick={() => console.log("Submit button clicked")}
                      className="bg-gradient-to-r from-[#38738c] to-[#94573d] text-white px-12 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Submit Abstract"
                      )}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
    </div>
  );
}
