"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCode, FaServer, FaCloud } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function WorkHistoryHorizontal() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 6 && hour < 18 ? "light" : "dark");
  }, []);

  const textColor = theme === "light" ? "text-slate-700" : "text-slate-300";
  const accentColor =
    theme === "light"
      ? "from-indigo-600 via-purple-500 to-pink-500"
      : "from-indigo-400 via-purple-400 to-pink-400";

  const workHistory = [
    {
      id: 1,
      icon: <FaCode className="w-5 h-5" />,
      role: "Frontend Developer",
      company: "CodeSmith Studio",
      period: "2020–2021",
      year: "2020",
      desc: "Built modern UI systems and refined UX for SaaS dashboards.",
    },
    {
      id: 2,
      icon: <FaServer className="w-5 h-5" />,
      role: "Backend Engineer",
      company: "TechNova Labs",
      period: "2021–2022",
      year: "2021",
      desc: "Designed microservice APIs and optimized data layer performance.",
    },
    {
      id: 3,
      icon: <FaCloud className="w-5 h-5" />,
      role: "DevOps Specialist",
      company: "CloudStrive Inc.",
      period: "2022–2024",
      year: "2022",
      desc: "Implemented scalable CI/CD and monitored cloud infrastructure.",
    },
    {
      id: 4,
      icon: <FaCloud className="w-5 h-5" />,
      role: "Automation Lead",
      company: "FlowForge Systems",
      period: "2024–Present",
      year: "2024",
      desc: "Leading internal automation projects with AI and workflow tools.",
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-10 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
          Work Timeline
        </h2>
        <p className={`${textColor} text-lg`}>
          My technical journey — click on a year to see details.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal timeline line */}
        <div className="relative pt-20 pb-32">
          <div
            className={`absolute top-20 left-0 right-0 h-[3px] bg-gradient-to-r ${accentColor}`}
          ></div>

          {/* Timeline nodes */}
          <div className="relative flex justify-between items-center">
            {workHistory.map((job, index) => (
              <div key={job.id} className="relative flex flex-col items-center">
                {/* Node with year */}
                <motion.div
                  className={`relative rounded-full w-20 h-20 bg-gradient-to-br ${accentColor} shadow-lg flex items-center justify-center cursor-pointer ${
                    selectedJob === index ? "ring-4 ring-purple-300" : ""
                  }`}
                  whileHover={{ scale: 1.15 }}
                  onClick={() =>
                    setSelectedJob(selectedJob === index ? null : index)
                  }
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white font-bold text-lg">
                    {job.year}
                  </span>
                </motion.div>

                {/* Description card below */}
                {selectedJob === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-28 z-10 flex flex-col items-center text-center max-w-xs"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center justify-center gap-2 mb-2 text-indigo-500 dark:text-indigo-400">
                        {job.icon}
                        <h3 className="font-semibold text-base sm:text-lg text-slate-800 dark:text-slate-100">
                          {job.role}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-1">
                        {job.company}
                      </p>
                      <div className="text-xs text-slate-500 dark:text-slate-500 mb-3 flex items-center justify-center gap-1">
                        <HiSparkles className="text-amber-400 w-3 h-3" />
                        {job.period}
                      </div>
                      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {job.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
