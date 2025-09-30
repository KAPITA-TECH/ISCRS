import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Socials */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/ISCRS_Logo_page-0001-removebg-preview.png" alt="ISCRS" width={96} height={96} />
              <div className="text-[#38738c] font-semibold text-lg">ISCRS</div>
            </div>
            <div className="text-sm text-gray-600 mb-4">Iraqi Society of Cataract and Refractive Surgery</div>
            <div className="flex items-center gap-4 text-sm">
              <Link href="#" className="text-[#38738c] hover:text-[#1d5875]">FB</Link>
              <Link href="#" className="text-[#38738c] hover:text-[#1d5875]">IG</Link>
              <Link href="#" className="text-[#38738c] hover:text-[#1d5875]">X</Link>
              <Link href="#" className="text-[#38738c] hover:text-[#1d5875]">YT</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[#38738c] font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="#" className="hover:text-[#1d5875]">About</Link></li>
              <li><Link href="#" className="hover:text-[#1d5875]">Program</Link></li>
              <li><Link href="#" className="hover:text-[#1d5875]">Speakers</Link></li>
              <li><Link href="#" className="hover:text-[#1d5875]">Registration</Link></li>
              <li><Link href="#" className="hover:text-[#1d5875]">Sponsorship</Link></li>
              <li><Link href="#" className="hover:text-[#1d5875]">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[#38738c] font-semibold mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Email: <a href="mailto:info@iscrs.org" className="text-[#38738c] hover:text-[#1d5875]">info@iscrs.org</a></li>
              <li>Phone: <a href="tel:+964000000000" className="text-[#38738c] hover:text-[#1d5875]">+964 000 000 000</a></li>
              <li>Address: Baghdad, Iraq</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500">© {new Date().getFullYear()} ISCRS. All rights reserved.</div>
          <div className="text-xs text-gray-500">Designed for Baghdad 2026</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
