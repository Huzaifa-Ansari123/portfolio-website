// components/Hero.js

import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hello, I'm</h1>
        <h2 className="text-5xl md:text-7xl font-bold mt-2">M.Huzaifa Ansari</h2>
        <p className="text-xl md:text-2xl mt-4">Web Developer</p>
        <div className="flex justify-center mt-8 space-x-4">
          <Link legacyBehavior href="https://www.linkedin.com/in/your-linkedin">
            <a target="_blank" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin fa-2x"></i> {/* LinkedIn Icon */}
            </a>
          </Link>
          <Link legacyBehavior href="https://github.com/your-github">
            <a target="_blank" className="text-gray-400 hover:text-white">
              <i className="fab fa-github fa-2x"></i> {/* GitHub Icon */}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
