"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

// Validation schema for accepted submission follow-up form
const acceptedSubmissionSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  text: Yup.string()
    .required("Text field is required")
    .min(50, "Please provide at least 50 characters"),
  subject: Yup.string()
    .required("Subject is required")
    .max(250, "Subject must be 250 characters or less"),
  pdfFile: Yup.mixed()
    .required("PDF file is required")
    .test(
      "fileType",
      "Only PDF files are allowed",
      (value: any) => !value || (value && value.type === "application/pdf")
    )
    .test(
      "fileSize",
      "File size must be less than 10 MB",
      (value: any) => !value || (value && value.size <= 10 * 1024 * 1024)
    ),
});

export default function AcceptedSubmissionPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");

  const handleFormSubmit = async (values: any) => {
    setIsLoading(true);

    try {
      // TODO: Replace with actual API endpoint
      // const formData = new FormData();
      // formData.append('email', values.email);
      // formData.append('text', values.text);
      // formData.append('subject', values.subject);
      // formData.append('pdfFile', values.pdfFile);
      //
      // await fetch('/api/submit-accepted-abstract', {
      //   method: 'POST',
      //   body: formData
      // });

      // For now, just simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your form. Please try again.");
      setIsLoading(false);
    }
  };

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
              Your presentation materials have been submitted successfully.
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
              Submitting Your Presentation...
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

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-center text-[#38738c] mb-4">
              Accepted Abstract Submission
            </h2>
            <p className="text-center text-gray-600">
              Congratulations! Your abstract has been accepted. Please submit
              your presentation materials below.
            </p>
          </div>

          <Formik
            initialValues={{
              email: "",
              text: "",
              subject: "",
              pdfFile: null,
            }}
            validationSchema={acceptedSubmissionSchema}
            onSubmit={handleFormSubmit}
          >
            {({ setFieldValue, values }) => (
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
                    placeholder="Enter subject (max 250 characters)"
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

                {/* Text Field */}
                <div>
                  <label
                    htmlFor="text"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Presentation Details
                  </label>
                  <Field
                    as="textarea"
                    name="text"
                    id="text"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38738c] focus:border-transparent transition-all"
                    placeholder="Enter your presentation details..."
                  />
                  <ErrorMessage
                    name="text"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* PDF Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Presentation PDF
                  </label>
                  <div className="relative">
                    {!uploadedFileName ? (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          name="pdfFile"
                          id="pdfFile"
                          accept=".pdf"
                          onChange={(event) => {
                            const file = event.currentTarget.files?.[0];
                            if (file) {
                              if (file.type !== "application/pdf") {
                                alert("Only PDF files are allowed");
                                return;
                              }
                              if (file.size > 10 * 1024 * 1024) {
                                alert("File size must be less than 10 MB");
                                return;
                              }
                              setFieldValue("pdfFile", file);
                              setUploadedFileName(file.name);
                            }
                          }}
                          className="hidden"
                        />
                        <label
                          htmlFor="pdfFile"
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
                              Click to upload PDF
                            </span>
                            <span className="text-xs text-gray-500 mt-2">
                              PDF files only. Max 10 MB.
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
                              setFieldValue("pdfFile", null);
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
                    name="pdfFile"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-[#38738c] to-[#94573d] text-white px-12 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Submitting..." : "Submit Presentation"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
}
