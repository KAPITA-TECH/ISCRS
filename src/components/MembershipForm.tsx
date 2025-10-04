"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  membershipInitialValues,
  formSteps,
  iraqiGovernorates,
  jobTitles,
  handleMembershipSubmit,
} from "@/lib/Formik.rules/Membership";

const MembershipForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === formSteps.length - 1;
  const currentStepData = formSteps[currentStep];

  const handleSubmit = async (
    values: typeof membershipInitialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    if (isLastStep) {
      // Final submission
      await handleMembershipSubmit(values);
      setSubmitting(false);
    } else {
      // Move to next step
      setCurrentStep(currentStep + 1);
      setSubmitting(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Helper function to render step fields
  const renderStepFields = (
    step: number,
    values: typeof membershipInitialValues,
    setFieldValue: (field: string, value: File | string | null) => void
  ) => {
    if (step === 0) {
      return (
        <>
          {/* Step 1: Personal Information */}
          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
              placeholder="Enter your email address"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Full Name in English */}
          <div>
            <label
              htmlFor="fullNameEnglish"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name in English *
            </label>
            <Field
              type="text"
              id="fullNameEnglish"
              name="fullNameEnglish"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
              placeholder="Enter your full name in English"
            />
            <ErrorMessage
              name="fullNameEnglish"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Full Name in Arabic */}
          <div>
            <label
              htmlFor="fullNameArabic"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your name in Arabic *
            </label>
            <Field
              type="text"
              id="fullNameArabic"
              name="fullNameArabic"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
              placeholder="اكتب اسمك بالعربية"
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
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Age *
            </label>
            <Field
              type="date"
              id="age"
              name="age"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
            />
            <ErrorMessage
              name="age"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nationality *
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <Field
                  type="radio"
                  id="nationality-iraqi"
                  name="nationality"
                  value="iraqi"
                  className="h-4 w-4 text-[#38738c] focus:ring-[#38738c] border-gray-300"
                />
                <label
                  htmlFor="nationality-iraqi"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Iraqi
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  type="radio"
                  id="nationality-others"
                  name="nationality"
                  value="others"
                  className="h-4 w-4 text-[#38738c] focus:ring-[#38738c] border-gray-300"
                />
                <label
                  htmlFor="nationality-others"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Others
                </label>
              </div>
              {values.nationality === "others" && (
                <Field
                  type="text"
                  name="nationalityOther"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent ml-6"
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
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              City of Residence *
            </label>
            <Field
              as="select"
              id="cityOfResidence"
              name="cityOfResidence"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
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
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number (WhatsApp) *
            </label>
            <Field
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
              placeholder="+964XXXXXXXXX"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </>
      );
    }

    if (step === 1) {
      return (
        <>
          {/* Step 2: Professional Information */}
          {/* Professional Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Professional Photo *
            </label>
            <div className="relative">
              <input
                type="file"
                id="professionalPhoto"
                name="professionalPhoto"
                accept="image/*"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0] || null;
                  setFieldValue("professionalPhoto", file);
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-between w-full h-12 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#38738c] transition-colors duration-200 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-[#38738c]"
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
                  <span className="text-[#38738c] font-medium">
                    {(values.professionalPhoto as unknown as File)?.name ||
                      "Add File"}
                  </span>
                </div>
                {values.professionalPhoto && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFieldValue("professionalPhoto", null);
                      // Reset the file input
                      const fileInput = document.getElementById(
                        "professionalPhoto"
                      ) as HTMLInputElement;
                      if (fileInput) fileInput.value = "";
                    }}
                    className="ml-2 p-1 hover:bg-red-100 rounded-full transition-colors duration-200"
                    title="Remove file"
                  >
                    <svg
                      className="w-4 h-4 text-red-500"
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
                )}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
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
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Current Workplace / Affiliation *
            </label>
            <Field
              type="text"
              id="currentWorkplace"
              name="currentWorkplace"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
              placeholder="Enter your current workplace or affiliation"
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
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Job Title *
            </label>
            <Field
              as="select"
              id="jobTitle"
              name="jobTitle"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
            >
              <option value="">Select a job title</option>
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

          {/* Medical Degrees */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Medical Degrees or Fellowships Proof Document *
            </label>
            <div className="relative">
              <input
                type="file"
                id="medicalDegrees"
                name="medicalDegrees"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0] || null;
                  setFieldValue("medicalDegrees", file);
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-between w-full h-12 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#38738c] transition-colors duration-200 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-[#38738c]"
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
                  <span className="text-[#38738c] font-medium">
                    {(values.medicalDegrees as unknown as File)?.name ||
                      "Add File"}
                  </span>
                </div>
                {values.medicalDegrees && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFieldValue("medicalDegrees", null);
                      // Reset the file input
                      const fileInput = document.getElementById(
                        "medicalDegrees"
                      ) as HTMLInputElement;
                      if (fileInput) fileInput.value = "";
                    }}
                    className="ml-2 p-1 hover:bg-red-100 rounded-full transition-colors duration-200"
                    title="Remove file"
                  >
                    <svg
                      className="w-4 h-4 text-red-500"
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
                )}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Upload 1 supported file. Max 10 MB.
            </p>
            <ErrorMessage
              name="medicalDegrees"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Subspecialty */}
          <div>
            <label
              htmlFor="subspecialty"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subspecialty (if applicable)
            </label>
            <Field
              type="text"
              id="subspecialty"
              name="subspecialty"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:border-transparent"
              placeholder="Enter your subspecialty if applicable"
            />
            <ErrorMessage
              name="subspecialty"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </>
      );
    }

    if (step === 2) {
      return (
        <>
          {/* Step 3: Membership Details */}
          {/* Membership Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Membership Status *
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <Field
                  type="radio"
                  id="membershipStatus-renewal"
                  name="membershipStatus"
                  value="renewal"
                  className="h-4 w-4 text-[#38738c] focus:ring-[#38738c] border-gray-300"
                />
                <label
                  htmlFor="membershipStatus-renewal"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Re-renewal
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  type="radio"
                  id="membershipStatus-firsttime"
                  name="membershipStatus"
                  value="firsttime"
                  className="h-4 w-4 text-[#38738c] focus:ring-[#38738c] border-gray-300"
                />
                <label
                  htmlFor="membershipStatus-firsttime"
                  className="ml-2 block text-sm text-gray-700"
                >
                  First time
                </label>
              </div>
            </div>
            <ErrorMessage
              name="membershipStatus"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Membership Request */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Membership request: Download, fill then upload *
            </label>

            {/* Membership Request Image */}
            <div className="mb-4 flex justify-center">
              <Image
                src="/images/Membership request.png"
                alt="Membership Request Form"
                width={600}
                height={400}
                className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                style={{ maxHeight: "400px" }}
              />
            </div>

            {/* File Upload */}
            <div className="relative">
              <input
                type="file"
                id="membershipRequest"
                name="membershipRequest"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0] || null;
                  setFieldValue("membershipRequest", file);
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-between w-full h-12 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#38738c] transition-colors duration-200 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-[#38738c]"
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
                  <span className="text-[#38738c] font-medium">
                    {(values.membershipRequest as unknown as File)?.name ||
                      "Add File"}
                  </span>
                </div>
                {values.membershipRequest && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFieldValue("membershipRequest", null);
                      // Reset the file input
                      const fileInput = document.getElementById(
                        "membershipRequest"
                      ) as HTMLInputElement;
                      if (fileInput) fileInput.value = "";
                    }}
                    className="ml-2 p-1 hover:bg-red-100 rounded-full transition-colors duration-200"
                    title="Remove file"
                  >
                    <svg
                      className="w-4 h-4 text-red-500"
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
                )}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Upload 1 supported file. Max 10 MB.
            </p>
            <ErrorMessage
              name="membershipRequest"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Form Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d5875] mb-2 text-center">
            ISCRS Membership Registration Form
          </h2>

          {/* Step Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {formSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      index <= currentStep
                        ? "bg-[#38738c] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < formSteps.length - 1 && (
                    <div
                      className={`w-16 h-1 ml-4 ${
                        index < currentStep ? "bg-[#38738c]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-[#1d5875]">
                {currentStepData.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentStepData.subtitle}
              </p>
            </div>
          </div>

          <Formik
            initialValues={membershipInitialValues}
            validationSchema={currentStepData.validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="space-y-6">
                {renderStepFields(currentStep, values, setFieldValue)}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 0 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors duration-200"
                    >
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 rounded-md font-medium text-white transition-colors duration-200 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#38738c] hover:bg-[#2d5a6b] focus:outline-none focus:ring-2 focus:ring-[#38738c] focus:ring-offset-2"
                    }`}
                  >
                    {isSubmitting
                      ? isLastStep
                        ? "Submitting..."
                        : "Processing..."
                      : isLastStep
                      ? "Submit Application"
                      : "Next"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm;
