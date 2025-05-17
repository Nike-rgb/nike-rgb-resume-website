import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFlutter,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: <FaReact className="text-2xl md:text-4xl text-blue-500" />,
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs className="text-2xl md:text-4xl text-black dark:text-white" />
    ),
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-2xl md:text-4xl text-blue-700" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-2xl md:text-4xl text-green-600" />,
  },
  {
    name: "Express.js",
    icon: (
      <SiExpress className="text-2xl md:text-4xl text-gray-800 dark:text-gray-200" />
    ),
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-2xl md:text-4xl text-green-700" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-2xl md:text-4xl text-sky-400" />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="text-2xl md:text-4xl text-blue-400" />,
  },
  {
    name: "Java",
    icon: <FaJava className="text-2xl md:text-4xl text-red-600" />,
  },
];

export default function TechStack() {
  return (
    <div className="my-20 px-4 md:px-24 text-center">
      <h2 className=" text-2xl md:text-4xl font-semibold text-[#212529] mb-12">
        My Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="size-24 md:size-32 bg-white dark:bg-gray-900 shadow rounded-xl flex flex-col items-center justify-center">
            {tech.icon}
            <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
