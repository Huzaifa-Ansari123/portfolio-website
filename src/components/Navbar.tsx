// components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="./public/logo.png" className="text-xl font-bold">
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Link href="/#home" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/#about" className="hover:text-gray-400">
              About
            </Link>
            {/* <Link href="/services" className="hover:text-gray-400">
              Services
            </Link> */}
            <Link href="/#projects" className="hover:text-gray-400">
              Projects
            </Link>
            {/* <Link href="/#contact" className="hover:text-gray-400">
              Contact
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
