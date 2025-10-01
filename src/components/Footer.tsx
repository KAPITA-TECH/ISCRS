import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#38738c] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ISCRS Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/ISCRS_Logo_page-0001-removebg-preview.png"
                alt="ISCRS Logo"
                width={200}
                height={100}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Iraqi Society of Cataract & Refractive Surgeons - Advancing
              surgical skills, innovation, and continuous education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#committee"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Committee
                </Link>
              </li>
              <li>
                <Link
                  href="#publications"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="#news"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* MOCAT Events */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              MOCAT Events
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#mocat1"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  MOCAT 1
                </Link>
              </li>
              <li>
                <Link
                  href="#mocat2"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  MOCAT 2
                </Link>
              </li>
              <li>
                <Link
                  href="#mocat3"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  MOCAT 3
                </Link>
              </li>
              <li>
                <Link
                  href="#mocat4"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  MOCAT 4
                </Link>
              </li>
              <li>
                <Link
                  href="#mocat5"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  MOCAT 5
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-[#38738c] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@mocatiscrs.org"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  info@mocatiscrs.org
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-[#38738c] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+9647700007770"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  +9647700007770
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-[#38738c] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white/80">Baghdad, Iraq</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="text-center text-white/70 text-sm">
            <p>
              &copy; 2024 Iraqi Society of Cataract & Refractive Surgeons. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
