"use client";

import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFlutter,
  SiZapier,
  SiN8N,
} from "react-icons/si";

const categorizedTechStack = {
  Frontend: [
    {
      name: "React",
      icon: <FaReact className="icon md:size-6 text-blue-500" />,
    },
    {
      name: "Next.js",
      icon: (
        <SiNextdotjs className="icon md:size-6 text-black dark:text-white" />
      ),
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="icon md:size-6 text-blue-700" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="icon md:size-6 text-sky-400" />,
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="icon md:size-6 text-blue-400" />,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="icon md:size-6 text-green-600" />,
    },
    {
      name: "Express.js",
      icon: (
        <SiExpress className="icon text-gray-800 md:size-6 dark:text-gray-200" />
      ),
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="icon md:size-6 text-green-700" />,
    },
    { name: "Java", icon: <FaJava className="icon md:size-6 text-red-600" /> },
  ],
  Automation: [
    {
      name: "Zapier",
      icon: <SiZapier className="icon md:size-6 text-orange-500" />,
    },
    { name: "n8n", icon: <SiN8N className="icon md:size-6 text-pink-500" /> },
  ],
};

export default function TechStack() {
  return (
    <div className="mt-20 mx-auto md:max-w-[80vw] px-4 md:px-24">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#212529] text-center mb-12">
        My Tech Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {Object.entries(categorizedTechStack).map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-lg md:text-xl mb-4 text-gray-600 font-semibold md:text-center">
              {category}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-2 gap-4 place-items-center mx-auto">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="w-20 h-20 md:size-24 bg-white dark:bg-gray-900 shadow rounded-lg flex flex-col items-center justify-center text-center">
                  {tech.icon}
                  <p className="mt-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .icon {
          font-size: 1.25rem;
        }

        @media (min-width: 768px) {
          .icon {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}
