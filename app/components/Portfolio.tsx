"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TedXBaneshowr",
    image: "/tedxbaneshwor.jpg",
    link: "https://www.tedxbaneshwor.com/",
  },
  {
    title: "Aideascent",
    image: "/aideascent.jpg",
    link: "https://www.aideascent.com/",
  },
];

export default function Portfolio() {
  return (
    <div className="hidden md:block my-20 md:px-24 px-4">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#212529] mb-12">
        Portfolio Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col border border-gray-200 rounded-xl overflow-hidden shadow-md">
            <div className="relative w-full h-64 md:h-160 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-[#121212] to-transparent pointer-events-none" />
            </div>

            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <Link
                href={project.link}
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                Visit <FaExternalLinkAlt className="inline" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
