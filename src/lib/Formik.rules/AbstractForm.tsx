"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

// Validation schemas for each page
const page1Schema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  fullNameEnglish: Yup.string().required("Full name in English is required"),
  fullNameArabic: Yup.string().required("Full name in Arabic is required"),
  age: Yup.date()
    .required("Age is required")
    .max(new Date(), "Date cannot be in the future"),
  nationality: Yup.string().required("Nationality is required"),
  nationalityOther: Yup.string().when("nationality", {
    is: "Others",
    then: (schema) => schema.required("Please specify your nationality"),
    otherwise: (schema) => schema.notRequired(),
  }),
  cityOfResidence: Yup.string().required("City of residence is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9+\s()-]+$/, "Invalid phone number")
    .required("Phone number is required"),
  title: Yup.string()
    .max(250, "Title must be 250 characters or less")
    .required("Title is required"),
  subject: Yup.string()
    .max(250, "Subject must be 250 characters or less")
    .required("Subject is required"),
});

const page2Schema = Yup.object({
  professionalPhoto: Yup.mixed().required("Professional photo is required"),
  currentWorkplace: Yup.string().required("Current workplace is required"),
  jobTitle: Yup.string().required("Job title is required"),
  medicalDegreeDocument: Yup.mixed().required(
    "Medical degrees document is required"
  ),
  subspecialty: Yup.string(),
});

const page3Schema = Yup.object({
  abstractStatus: Yup.string().required("Abstract status is required"),
  membershipRequest: Yup.mixed().required(
    "Membership request file is required"
  ),
});

const iraqiGovernorates = [
  "Baghdad",
  "Basra",
  "Nineveh",
  "Erbil",
  "Sulaymaniyah",
  "Duhok",
  "Anbar",
  "Diyala",
  "Kirkuk",
  "Najaf",
  "Karbala",
  "Babil",
  "Wasit",
  "Saladin",
  "Maysan",
  "Dhi Qar",
  "Muthanna",
  "Qadisiyyah",
];

const jobTitles = [
  "Resident - Plain",
  "Resident - Board",
  "General Practitioner",
  "Specialist",
  "Consultant",
];

export default function AbstractForm() {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    fullNameEnglish: "",
    fullNameArabic: "",
    age: "",
    nationality: "",
    nationalityOther: "",
    cityOfResidence: "",
    phoneNumber: "",
    title: "",
    subject: "",
    professionalPhoto: null,
    currentWorkplace: "",
    jobTitle: "",
    medicalDegreeDocument: null,
    subspecialty: "",
    abstractStatus: "",
    membershipRequest: null,
  });

  const [uploadedFileName, setUploadedFileName] = useState<string>("");

  const handlePage1Submit = (values: Partial<typeof formData>) => {
    setFormData({ ...formData, ...values });
    setCurrentPage(1);
  };

  const handlePage2Submit = (values: Partial<typeof formData>) => {
    setFormData({ ...formData, ...values });
    setCurrentPage(2);
  };

  const handlePage3Submit = (values: Partial<typeof formData>) => {
    setFormData({ ...formData, ...values });
    // Redirect to Google Form or submit endpoint
    window.location.href = "YOUR_GOOGLE_FORM_LINK_HERE";
  };

  const handleBack = () => {
    if (currentPage === 2) {
      setCurrentPage(1);
    } else if (currentPage === 1) {
      setCurrentPage(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
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

      {/* Multi-Step Form Section */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-4xl font-bold text-center text-[#38738c] mb-8">
            ISCRS Abstract Registration Form
          </h2>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center space-x-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  currentPage === 0
                    ? "bg-[#38738c] text-white scale-110"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                1
              </div>
              <div
                className={`w-20 h-1 transition-all ${
                  currentPage >= 1 ? "bg-[#38738c]" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  currentPage === 1
                    ? "bg-[#38738c] text-white scale-110"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                2
              </div>
              <div
                className={`w-20 h-1 transition-all ${
                  currentPage === 2 ? "bg-[#38738c]" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  currentPage === 2
                    ? "bg-[#38738c] text-white scale-110"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                3
              </div>
            </div>
          </div>

          {/* Page 1 Form */}
          {currentPage === 0 && (
            <Formik
              initialValues={{
                email: formData.email,
                fullNameEnglish: formData.fullNameEnglish,
                fullNameArabic: formData.fullNameArabic,
                age: formData.age,
                nationality: formData.nationality,
                nationalityOther: formData.nationalityOther,
                cityOfResidence: formData.cityOfResidence,
                phoneNumber: formData.phoneNumber,
                title: formData.title,
                subject: formData.subject,
              }}
              validationSchema={page1Schema}
              onSubmit={handlePage1Submit}
            >
              {({ values }) => (
                <Form className="space-y-6">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address
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

                  {/* Full Name English */}
                  <div>
                    <label
                      htmlFor="fullNameEnglish"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name in English
                    </label>
                    <Field
                      type="text"
                      name="fullNameEnglish"
                      id="fullNameEnglish"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                    <ErrorMessage
                      name="fullNameEnglish"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Full Name Arabic */}
                  <div>
                    <label
                      htmlFor="fullNameArabic"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Name in Arabic
                    </label>
                    <Field
                      type="text"
                      name="fullNameArabic"
                      id="fullNameArabic"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="اسمك بالعربي"
                      dir="rtl"
                    />
                    <ErrorMessage
                      name="fullNameArabic"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label
                      htmlFor="age"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Age (Date of Birth)
                    </label>
                    <Field
                      type="date"
                      name="age"
                      id="age"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                    />
                    <ErrorMessage
                      name="age"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Nationality */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nationality
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <Field
                          type="radio"
                          name="nationality"
                          value="Iraqi"
                          className="w-4 h-4 text-[#38738c] focus:ring-[#38738c]"
                        />
                        <span className="text-gray-700">Iraqi</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <Field
                          type="radio"
                          name="nationality"
                          value="Others"
                          className="w-4 h-4 text-[#38738c] focus:ring-[#38738c]"
                        />
                        <span className="text-gray-700">Others</span>
                      </label>
                      {values.nationality === "Others" && (
                        <Field
                          type="text"
                          name="nationalityOther"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all mt-2"
                          placeholder="Please specify your nationality"
                        />
                      )}
                    </div>
                    <ErrorMessage
                      name="nationality"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                    <ErrorMessage
                      name="nationalityOther"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* City of Residence */}
                  <div>
                    <label
                      htmlFor="cityOfResidence"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      City of Residence
                    </label>
                    <Field
                      as="select"
                      name="cityOfResidence"
                      id="cityOfResidence"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                    >
                      <option value="">Select a governorate</option>
                      {iraqiGovernorates.map((governorate) => (
                        <option key={governorate} value={governorate}>
                          {governorate}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="cityOfResidence"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number (WhatsApp)
                    </label>
                    <Field
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="+964 XXX XXX XXXX"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Title
                    </label>
                    <Field
                      type="text"
                      name="title"
                      id="title"
                      maxLength={250}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="Enter abstract title (max 250 characters)"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                      <span className="text-xs text-gray-500">
                        {values.title?.length || 0}/250
                      </span>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <Field
                      type="text"
                      name="subject"
                      id="subject"
                      maxLength={250}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="Enter abstract subject (max 250 characters)"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                      <span className="text-xs text-gray-500">
                        {values.subject?.length || 0}/250
                      </span>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-end pt-6">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#38738c] to-[#94573d] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      Next →
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}

          {/* Page 2 Form */}
          {currentPage === 1 && (
            <Formik
              initialValues={{
                professionalPhoto: formData.professionalPhoto,
                currentWorkplace: formData.currentWorkplace,
                jobTitle: formData.jobTitle,
                medicalDegreeDocument: formData.medicalDegreeDocument,
                subspecialty: formData.subspecialty,
              }}
              validationSchema={page2Schema}
              onSubmit={handlePage2Submit}
            >
              {({ setFieldValue }) => (
                <Form className="space-y-6">
                  {/* Professional Photo */}
                  <div>
                    <label
                      htmlFor="professionalPhoto"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Professional Photo
                    </label>
                    <input
                      type="file"
                      name="professionalPhoto"
                      id="professionalPhoto"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.currentTarget.files?.[0];
                        if (file && file.size <= 10 * 1024 * 1024) {
                          setFieldValue("professionalPhoto", file);
                        } else {
                          alert("File size must be less than 10 MB");
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Upload 1 supported file. Max 10 MB.
                    </p>
                    <ErrorMessage
                      name="professionalPhoto"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Current Workplace */}
                  <div>
                    <label
                      htmlFor="currentWorkplace"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Current Workplace / Affiliation
                    </label>
                    <Field
                      type="text"
                      name="currentWorkplace"
                      id="currentWorkplace"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="Your current workplace"
                    />
                    <ErrorMessage
                      name="currentWorkplace"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Job Title */}
                  <div>
                    <label
                      htmlFor="jobTitle"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Job Title
                    </label>
                    <Field
                      as="select"
                      name="jobTitle"
                      id="jobTitle"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                    >
                      <option value="">Select your job title</option>
                      {jobTitles.map((title) => (
                        <option key={title} value={title}>
                          {title}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="jobTitle"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Medical Degree Document */}
                  <div>
                    <label
                      htmlFor="medicalDegreeDocument"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Medical Degrees or Fellowships Proof Document
                    </label>
                    <input
                      type="file"
                      name="medicalDegreeDocument"
                      id="medicalDegreeDocument"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={(event) => {
                        const file = event.currentTarget.files?.[0];
                        if (file && file.size <= 10 * 1024 * 1024) {
                          setFieldValue("medicalDegreeDocument", file);
                        } else {
                          alert("File size must be less than 10 MB");
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Upload 1 supported file. Max 10 MB.
                    </p>
                    <ErrorMessage
                      name="medicalDegreeDocument"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Subspecialty */}
                  <div>
                    <label
                      htmlFor="subspecialty"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subspecialty (if applicable)
                    </label>
                    <Field
                      type="text"
                      name="subspecialty"
                      id="subspecialty"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                      placeholder="Your subspecialty"
                    />
                    <ErrorMessage
                      name="subspecialty"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-300"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#38738c] to-[#94573d] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      Next →
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}

          {/* Page 3 Form */}
          {currentPage === 2 && (
            <Formik
              initialValues={{
                abstractStatus: formData.abstractStatus,
                membershipRequest: formData.membershipRequest,
              }}
              validationSchema={page3Schema}
              onSubmit={handlePage3Submit}
            >
              {({ setFieldValue }) => (
                <Form className="space-y-6">
                  {/* Abstract Status */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Abstract Status
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <Field
                          type="radio"
                          name="abstractStatus"
                          value="First time"
                          className="w-4 h-4 text-[#38738c] focus:ring-[#38738c]"
                        />
                        <span className="text-gray-700">First time</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <Field
                          type="radio"
                          name="abstractStatus"
                          value="Re-newel"
                          className="w-4 h-4 text-[#38738c] focus:ring-[#38738c]"
                        />
                        <span className="text-gray-700">Re-newel</span>
                      </label>
                    </div>
                    <ErrorMessage
                      name="abstractStatus"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Membership Request */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Membership Request Form
                    </label>
                    <p className="text-sm text-gray-600 mb-4">
                      Download, fill then upload
                    </p>

                    {/* File Upload Section */}
                    <div className="relative">
                      {!uploadedFileName ? (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <input
                            type="file"
                            name="membershipRequest"
                            id="membershipRequest"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            onChange={(event) => {
                              const file = event.currentTarget.files?.[0];
                              if (file && file.size <= 10 * 1024 * 1024) {
                                setFieldValue("membershipRequest", file);
                                setUploadedFileName(file.name);
                              } else {
                                alert("File size must be less than 10 MB");
                              }
                            }}
                            className="hidden"
                          />
                          <label
                            htmlFor="membershipRequest"
                            className="cursor-pointer inline-block"
                          >
                            <div className="flex flex-col items-center">
                              <svg
                                className="w-12 h-12 text-gray-400 mb-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <span className="text-[#38738c] font-semibold hover:text-[#94573d] transition-colors">
                                Click to upload file
                              </span>
                              <span className="text-xs text-gray-500 mt-2">
                                Upload 1 supported file. Max 10 MB.
                              </span>
                            </div>
                          </label>
                        </div>
                      ) : (
                        <div className="border-2 border-[#38738c] rounded-lg p-4 bg-[#38738c]/5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <svg
                                className="w-8 h-8 text-[#38738c]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              <div>
                                <p className="text-sm font-semibold text-gray-700">
                                  {uploadedFileName}
                                </p>
                                <p className="text-xs text-gray-500">
                                  File uploaded successfully
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setFieldValue("membershipRequest", null);
                                setUploadedFileName("");
                              }}
                              className="text-red-500 hover:text-red-700 transition-colors"
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
                      )}
                    </div>
                    <ErrorMessage
                      name="membershipRequest"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-300"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#38738c] to-[#94573d] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      Submit Abstract
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </section>
    </div>
  );
}
