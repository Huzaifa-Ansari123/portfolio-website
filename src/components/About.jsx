// components/About.js

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-800 text-white py-12 px-4 md:px-8">
      <h3 className="text-3xl font-bold text-center mb-8">About Me</h3>
      <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
        <div className="relative w-full  md:w-1/3 rounded-lg shadow-lg h-160">
        {/* Image */}
        <Image
          src="./huz.png" // Ensure this image exists in the "public" directory
          alt="M.Huzaifa Ansari"
          // width={100}
          // height={100}
          fill
          // className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
</div>
        {/* About Details */}
        <div className="md:w-2/3 space-y-4">
          <p>
            I am a web developer with a strong focus on front-end development. My websites are designed to attract, engage, and inspire users to respond positively.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <p>
              <strong>Birthday:</strong> Oct 19, 2009
            </p>
            <p>
              <strong>Phone:</strong> +92 3422033394
            </p>
            <p>
              <strong>Email:</strong> m.huzaifa.ansari246@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Falak Tower, Nazimabad4, Karachi
            </p>
            <p>
              <strong>Language:</strong> Urdu, English
            </p>
            <p>
              <strong>Freelance:</strong> Available
            </p>
          </div>
          {/* Download CV Button */}
          <a
            href="./public/Huzaifa CV Resume.pdf" // Ensure this file exists in the "public" directory
            download="M.Huzaifa_Ansari_CV.png" // Optional: Set a custom download filename
            className="bg-yellow-500 text-gray-900 px-4 py-2 mt-10 rounded hover:bg-yellow-600 relative top-4"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
