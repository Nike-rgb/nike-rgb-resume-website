"use client";

import { FaWhatsapp } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { LuSun, LuMoon } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";

export default function Hero() {
  const [data, setData] = useState<{ heroText?: string; learning?: string }>(
    {}
  );
  const [localTime, setLocalTime] = useState("");
  const [pairIndex, setPairIndex] = useState(0);
  const [codeIndex, setCodeIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const buildWords = [
    "applications",
    "architecture",
    "workflows",
    "solutions",
    "designs",
    "APIs",
    "systems",
  ];

  const codeSnippets = [
    {
      language: "infrastructure",
      title: "VPC peering",
      code: `IF server has database
    CREATE private link with database

    IF server calls external service
      ADD NAT`,
    },
    {
      language: "automation",
      title: "Email prompts",
      code: `USER adds item to cart
      
IF no purchase within 10 days
    SEND follow-up email

    IF email not opened within a week
      SEND reminder SMS`,
    },
    {
      language: "security",
      title: "Session authentication",
      code: `VERIFY user token
    IF token expired
      REFRESH session token

    IF failed_login_attempt > 5
      REQUIRE multi-factor authentication
      LOG security event`,
    },
    {
      language: "monitoring",
      title: "Server health",
      code: `CHECK CPU usage > 80%
    ALERT ops team

IF disk space < 10%
    CLEAN temp files
    SEND warning email`,
    },
  ];

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Nike-rgb/0271de49bff5b8a40a80feab244c673d/raw/learning.json"
    )
      .then((res) => res.json())
      .then(setData);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formattedTime = now.toLocaleTimeString([], options);
      const offsetMinutes = now.getTimezoneOffset() / -1;
      const offsetHours = Math.floor(offsetMinutes / 60);
      const offsetMins = Math.abs(offsetMinutes % 60);
      const offsetSign = offsetMinutes >= 0 ? "+" : "-";
      const offsetString = `GMT${offsetSign}${Math.abs(offsetHours)
        .toString()
        .padStart(2, "0")}:${offsetMins.toString().padStart(2, "0")}`;
      setLocalTime(`${formattedTime} (${offsetString})`);
    };
    updateTime();
  }, []);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setPairIndex((prev) => (prev + 1) % buildWords.length);
    }, 5000);
    const codeInterval = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
      setDisplayedCode("");
    }, 8000);
    return () => {
      clearInterval(wordInterval);
      clearInterval(codeInterval);
    };
  }, []);

  useEffect(() => {
    const currentCode = codeSnippets[codeIndex].code;
    let index = 0;
    setDisplayedCode("");

    const interval = setInterval(() => {
      if (index < currentCode.length) {
        setDisplayedCode(currentCode.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [codeIndex]);

  const currentSnippet = codeSnippets[codeIndex];

  const editorTheme =
    theme === "light"
      ? {
          container:
            "bg-gradient-to-br from-[#ffffff] to-[#f5f5f7] border-slate-300 shadow-lg",
          header: "bg-[#f9f9fa]/80 border-slate-200",
          text: "text-slate-700",
          keyword: "text-sky-600 font-semibold",
          entity: "text-violet-600",
          value: "text-amber-600",
          cursor: "bg-slate-400",
        }
      : {
          container:
            "bg-gradient-to-br from-[#1e1e2e] to-[#181825] border-slate-700/30 shadow-xl",
          header: "bg-[#2a2a3a]/80 border-slate-700/30",
          text: "text-slate-300",
          keyword: "text-sky-400 font-semibold",
          entity: "text-purple-400",
          value: "text-amber-400",
          cursor: "bg-slate-200",
        };

  return (
    <section className="relative w-full md:max-w-7xl mx-auto flex flex-col gap-12 md:gap-16 overflow-hidden px-4 sm:px-6 md:px-16 pt-8 pb-12 sm:pb-14 md:pb-16 transition-colors duration-500">
      <div className="flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-14 md:gap-16 items-center">
          <div className="lg:col-span-7 space-y-4 md:space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-end gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-linear-to-r from-indigo-600 to-purple-500 text-white rounded-full text-xs sm:text-sm font-medium shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-100"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                Available
              </div>
              <div className="text-slate-500 text-sm md:text-base font-normal ml-1 sm:ml-2">
                Local time: {localTime || "Loading..."}
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Nikesh Kazi
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-base md:text-xl font text-slate-600">
              <div className="flex flex-row-reverse md:flex-row items-center gap-3">
                <div className="w-4 h-px bg-slate-600 font-medium" />
                <span className="">Full Stack Software Engineer</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 sm:gap-3 py-2 transition-all md:text-base">
              <HiSparkles className="text-purple-600 animate-pulse w-4 sm:w-5 h-4 sm:h-5" />
              <span className="text-slate-600">
                Current Learning:{" "}
                <span className="text-slate-600 tracking-wider pb-0.5">
                  {data.learning || "System Architecture"}
                </span>
              </span>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:nikeshlepcha7@gmail.com"
                className="group flex items-center gap-2 bg-white hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="flex items-center size-10 rounded-lg transition-colors duration-300">
                  <IoMailOutline size={20} />
                </div>

                <span className=" tracking-wide text-slate-700 group-hover:underline group-hover:text-slate-900">
                  nikeshlepcha7@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/9817954435"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
              >
                <div className="flex items-center size-10 rounded-lg transition-colors duration-300">
                  <FaWhatsapp size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="tracking-wide text-slate-700 group-hover:underline group-hover:text-slate-900">
                    +977 9817954435
                  </span>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-3xl md:text-4xl font-semibold px-2 mb-4 sm:mb-6">
              <span className="text-slate-600">I build</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`word-${pairIndex}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  {buildWords[pairIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div
              className={`relative group rounded-xl overflow-hidden border transition-all duration-500 min-w-[260px] sm:min-w-[300px] ${editorTheme.container}`}
            >
              <div
                className={`relative backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b ${editorTheme.header}`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>

                <div className="text-xs text-slate-400 font-mono truncate">
                  {currentSnippet.title}
                </div>

                <button
                  onClick={() =>
                    setTheme((prev) => (prev === "light" ? "dark" : "light"))
                  }
                  className="text-slate-500 transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <LuMoon className="w-4 h-4 hover:text-slate-800" />
                  ) : (
                    <LuSun className="w-4 h-4 text-white hover:text-slate-500" />
                  )}
                </button>
              </div>

              <div className="relative p-4 sm:p-5 h-[180px] sm:h-[200px] w-full overflow-hidden">
                <pre
                  className={`text-xs sm:text-sm font-mono leading-relaxed whitespace-pre w-full transition-colors duration-500 ${editorTheme.text}`}
                >
                  <code
                    className="block"
                    dangerouslySetInnerHTML={{
                      __html: displayedCode
                        .replace(
                          /(IF|VERIFY|CHECK|SEND|CREATE|ADD|REFRESH|REQUIRE|LOG)/g,
                          `<span class='${editorTheme.keyword}'>$1</span>`
                        )
                        .replace(
                          /(server|email|token|CPU|database|session)/g,
                          `<span class='${editorTheme.entity}'>$1</span>`
                        )
                        .replace(
                          /(\d+ ?(days?|%|min))/g,
                          `<span class='${editorTheme.value}'>$1</span>`
                        ),
                    }}
                  />
                  <span
                    className={`inline-block w-2 h-4 ml-0.5 animate-pulse ${editorTheme.cursor}`}
                  ></span>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
