"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaJava, FaAws } from "react-icons/fa";
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
      name: "Next.js",
      icon: <SiNextdotjs className="size-5 text-black dark:text-white" />,
    },
    {
      name: "React/Native",
      icon: <FaReact className="size-5 text-blue-500" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="size-5 rounded text-blue-700" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="size-5 text-sky-400" />,
    },
    { name: "Flutter", icon: <SiFlutter className="size-5 text-blue-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="size-5 text-green-600" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="size-5 text-gray-800 dark:text-gray-300" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="size-5 text-green-700" /> },
    { name: "AWS/Amplify", icon: <FaAws className="size-5 text-[#eb991e]" /> },
  ],
  Automation: [
    { name: "Zapier", icon: <SiZapier className="size-5 text-orange-500" /> },
    { name: "n8n", icon: <SiN8N className="size-5 text-pink-500" /> },
  ],
};

const imageAssociations = [
  {
    image: "/Group 42.svg",
    techs: ["React", "TypeScript", "Tailwind CSS", "MongoDB"],
    title: "Food Delivery",
    description:
      "Seamless ordering experience. From craving to doorstep in minutes.",
  },
  {
    image: "/Group 41.svg",
    techs: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Flutter",
      "Java",
      "Zapier",
      "n8n",
    ],
    title: "Enterprise Solutions",
    description:
      "Powerful automation. Built for scale. Designed for simplicity.",
  },
];

export default function TechStack() {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTechs, setActiveTechs] = useState<string[]>(
    imageAssociations[0].techs
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const next = (prev + 1) % imageAssociations.length;

        setTimeout(() => {
          setActiveTechs(imageAssociations[next].techs);
        }, 400);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-16 py-12 sm:py-14 md:py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex col-span-2 justify-center relative"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={imageAssociations[currentImage].image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {imageAssociations[currentImage].title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-base max-w-sm">
                      {imageAssociations[currentImage].description}
                    </p>
                  </div>

                  <div className="h-[400px] flex items-center justify-center">
                    <img
                      src={imageAssociations[currentImage].image}
                      alt={imageAssociations[currentImage].title}
                      className="w-auto h-full object-contain"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-slate-700 via-slate-500 to-slate-900 bg-clip-text text-transparent font-black tracking-tight leading-tight dark:text-white">
                Tech Stack
              </h2>
            </div>

            <div className="space-y-6">
              {Object.entries(categorizedTechStack).map(([category, techs]) => (
                <div key={category}>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-6 sm:gap-8">
                    {techs.map((tech, index) => {
                      const isActive = activeTechs.includes(tech.name);
                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          className={`flex flex-col items-center gap-2`}
                        >
                          <div
                            className={`p-[2px] rounded-xl ${
                              isActive
                                ? "bg-gradient-to-r from-indigo-600 to-purple-500"
                                : ""
                            }`}
                          >
                            <motion.div
                              className={`flex items-center justify-center size-10 rounded-lg ${
                                isActive ? "shadow-lg" : "shadow-none"
                              }`}
                              animate={{
                                backgroundColor: isActive
                                  ? "rgba(255, 255, 255, 0.9)"
                                  : "rgb(255, 255, 255)",
                              }}
                              transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.4,
                              }}
                            >
                              {tech.icon}
                            </motion.div>
                          </div>

                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {tech.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
