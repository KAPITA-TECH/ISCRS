import React from "react";
import Link from "next/link";

export default function AbstractSubmission() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#8ccbe5] to-[#b56c4d] text-[#2e5e73] py-30 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            ISRC Abstract Submission
          </h1>
          <p className="text-xl md:text-2xl text-[#2e5e73] max-w-3xl mx-auto leading-relaxed mb-8">
            Submit your abstract to be part of the ISRC.
          </p>
          <Link
            href="/abstract/submit"
            className="inline-block bg-gradient-to-r from-[#38738c] to-[#94573d] text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            Submit Your Abstract Here
          </Link>
        </div>
      </section>

      {/* Abstract Submission Rules Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-4xl font-bold text-[#38738c] mb-8 text-center">
            Welcome to MOCAT 5 2026 Call for Abstracts
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Welcome Section */}
            <div className="border-l-4 border-[#94573d] pl-6">
              <h3 className="text-2xl font-semibold text-[#38738c] mb-4">
                Welcome
              </h3>
              <p className="mb-4">
                Kindly click on the{" "}
                <span className="font-semibold">Submit Your Abstract Here</span>{" "}
                button to initiate your abstract submission process. Please note
                to review the guidelines as per your submission criteria and
                accept the terms and conditions accordingly.
              </p>
              <p className="mb-4">
                After submitting your abstract, within a few minutes, you will
                receive a confirmation email from{" "}
                <span className="font-semibold text-[#38738c]">
                  info@mocatiscrs.org
                </span>{" "}
                on your registered email address (check your SPAM folder in case
                it is misdirected).
              </p>
              <p className="font-semibold text-lg text-[#94573d]">
                We look forward to receiving your scientific abstracts!
              </p>
            </div>

            {/* Important Dates */}
            <div className="bg-gradient-to-r from-[#38738c]/5 to-[#94573d]/5 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-[#38738c] mb-4">
                Important Dates
              </h3>
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <span className="font-semibold">
                    Abstract Submission deadline:
                  </span>
                  <span className="text-[#94573d] font-bold">
                    15th Dec 2025, 18:00 ( Baghdad Time)
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <span className="font-semibold">
                    Scientific Committee Feedback:
                  </span>
                  <span className="text-[#94573d] font-bold">
                    30th December 2025, 23:59 ( Baghdad Time)
                  </span>
                </div>
              </div>
            </div>

            {/* Submission Guidelines */}
            <div className="border-l-4 border-[#38738c] pl-6">
              <h3 className="text-2xl font-semibold text-[#38738c] mb-4">
                Submission Guidelines to Follow
              </h3>
              <p className="mb-4 font-medium">
                Only abstracts submitted in English will be accepted and the
                format structure below must be followed:
              </p>
              <ul className="space-y-2 mb-4 list-disc list-inside">
                <li>Abstract Title (250 characters max)</li>
                <li>Methods (250 words max)</li>
                <li>Results (250 words max)</li>
                <li>Conclusions (250 words max)</li>
              </ul>
              <p className="text-red-600 font-semibold">
                There is a limit of 2 abstract submissions per candidate. More
                than 2 submissions per candidate will automatically be rejected.
              </p>
            </div>

            {/* Presentation Types */}
            <div className="space-y-6">
              {/* Oral Presentation */}
              <div className="bg-white border-2 border-[#38738c] rounded-xl p-6">
                <h4 className="text-xl font-semibold text-[#38738c] mb-3">
                  Oral Presentation Submissions
                </h4>
                <p>
                  Accepted Oral Presentation candidates will receive a
                  confirmation email along with the details for the registration
                  process based on whether they are Doctors or Medical
                  Residents. This will be followed by an email with the
                  guidelines of how to submit their presentation.
                </p>
              </div>

              {/* ePoster Submissions */}
              <div className="bg-white border-2 border-[#94573d] rounded-xl p-6">
                <h4 className="text-xl font-semibold text-[#94573d] mb-3">
                  ePoster Submissions
                </h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    If your abstract is accepted as an ePoster, you will receive
                    a confirmation email along with the steps of how to submit
                    your ePoster presentation.
                  </li>
                  <li>ePosters must be submitted in PDF format</li>
                </ul>
              </div>

              {/* Video Abstract */}
              <div className="bg-white border-2 border-[#38738c] rounded-xl p-6">
                <h4 className="text-xl font-semibold text-[#38738c] mb-3">
                  Video Abstract Submissions
                </h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Video abstract submissions must include a written abstract
                    in addition to the video file
                  </li>
                  <li>Must be in YouTube or Vimeo Link Format</li>
                  <li>
                    The opening frames of the video presentation must begin with
                    the exact title of the abstract and include the
                    authors&apos; names
                  </li>
                  <li>There must be only 1 subject per video presentation</li>
                  <li>
                    All videos must include either audio narration or background
                    music with text description on the video itself
                  </li>
                  <li>
                    Video presentations should not exceed more than 6 minutes
                  </li>
                  <li>
                    Minimum dimensions accepted: 1280×720 (720p); 1920×1080
                    (1080p) preferred
                  </li>
                  <li>
                    The written and spoken language in all digital videos must
                    be in English
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Rules */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#38738c] mb-4">
                Additional Important Rules
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  All abstracts MUST be submitted in the presenting
                  author&apos;s name
                </li>
                <li>
                  The results report must be sufficiently detailed to support
                  the conclusions. The Scientific Committee only accepts
                  abstracts that include completed findings or conclusions
                </li>
                <li>
                  An abstract cannot contain references or acknowledgments
                </li>
                <li>
                  Consideration should be taken when using acronyms or
                  abbreviations for the first time in order to spell them out
                  completely and place the acronym in parenthesis after the full
                  word(s). After that, the abbreviation can be used exclusively
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                For any further clarification, please contact{" "}
                <Link
                  href="mailto:info@mocatiscrs.org"
                  className="text-[#38738c] font-semibold hover:underline"
                >
                  info@mocatiscrs.org
                </Link>
              </p>
            </div>
          </div>

          {/* Navigate to Form Button */}
          <div className="text-center mt-10">
            <Link
              href="/abstract/submit"
              className="inline-block bg-gradient-to-r from-[#38738c] to-[#94573d] text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              Submit Your Abstract Here
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-center text-[#38738c] mb-16">
          MOCAT Abstract Awards 2026
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Award Card 1 */}
          <div className="group relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#38738c]/5 to-[#94573d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#38738c] to-[#94573d] rounded-bl-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#38738c] to-[#94573d] rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-[#38738c] mb-4">
                Top Abstracts Recognition
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#94573d] mr-2">✓</span>
                  <span>Certificate of Excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#94573d] mr-2">✓</span>
                  <span>Recognition on MOCAT website and social media </span>
                </li>

                <li className="flex items-start">
                  <span className="text-[#94573d] mr-2">✓</span>
                  <span>Complimentary registration for MOCAT 2027 </span>
                </li>

                <li className="flex items-start">
                  <span className="text-[#94573d] mr-2">✓</span>
                  <span>
                    {" "}
                    Invitation to present during the “MOCAT Best Papers” session
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Award Card 2 */}
          <div className="group relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#94573d]/5 to-[#38738c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#94573d] to-[#38738c] rounded-bl-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#94573d] to-[#38738c] rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🥇</span>
              </div>
              <h3 className="text-2xl font-bold text-[#94573d] mb-4">
                1st Place Winner
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#38738c] mr-2">✓</span>
                  <span>MOCAT Gold Abstract Award</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38738c] mr-2">✓</span>
                  <span>Trophy + framed certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38738c] mr-2">✓</span>
                  <span>
                    Complimentary registration for MOCAT 2027 (+1
                    ophthalmologist)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38738c] mr-2">✓</span>
                  <span>Hotel accommodation (1 night during MOCAT 2027)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38738c] mr-2">✓</span>
                  <span>Highlighted feature on social media</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Award Card 3 */}
          <div className="group relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#38738c]/5 to-[#94573d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#38738c] to-[#94573d] rounded-bl-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#38738c] to-[#94573d] rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🥈</span>
              </div>
              <h3 className="text-2xl font-bold text-[#38738c] mb-4">
                2nd Place Winner
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#94573d] mr-2">✓</span>
                  <span>MOCAT Silver Abstract Award</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#94573d] mr-2">✓</span>
                  <span>Trophy + framed certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#94573d] mr-2">✓</span>
                  <span>Complimentary registration for MOCAT 2027</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#94573d] mr-2">✓</span>
                  <span>Recognition on website</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Award Card 4 */}
          <div className="group relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#94573d]/5 to-[#38738c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#94573d] to-[#38738c] rounded-bl-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#94573d] to-[#38738c] rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🥉</span>
              </div>
              <h3 className="text-2xl font-bold text-[#94573d] mb-4">
                3rd Place Winner
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#38738c] mr-2">✓</span>
                  <span>MOCAT Bronze Abstract Award</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38738c] mr-2">✓</span>
                  <span>Trophy + certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38738c] mr-2">✓</span>
                  <span>Recognition on website</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
