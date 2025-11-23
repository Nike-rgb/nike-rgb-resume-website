"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Hand,
  Code2,
  FileCode,
  Database,
  Cloud,
  CreditCard,
  Bot,
  ArrowBigLeft,
  ArrowBigRight,
  Book,
} from "lucide-react";
import { HiSparkles } from "react-icons/hi2";

const HandGestureAnimation = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`relative flex items-center w-full justify-center ${className} gap-2`}
    >
      <ArrowBigLeft
        strokeWidth={2}
        style={{ animationDuration: "1.5s" }}
        className=" size-8"
      />
      <ArrowBigRight
        strokeWidth={2}
        style={{ animationDuration: "1.5s" }}
        className="size-8"
      />
    </div>
  );
};

const portfolioProjects = [
  {
    id: "01",
    client: "LowPropTax",
    location: "California, USA",
    category: "PropTech",
    title: "LowPropTax",
    description:
      "LowPropTax is a platform which aims to reduce property taxes with a performance-based model. As Lead Engineer, I architected the platform's backend - from authentication flows & payment gateways to VPC/NAT setups.",
    features: [
      "AI-powered comparables & adjustment modelling",
      "Integrated Stripe payments & invoicing",
      "Automated Mails and Automation",
      "Custom CRM for ticketing & appeals tracking",
      "Automated document and case workflow engine",
    ],
    techs: [
      {
        name: "Next.js",
        icon: <Code2 className="text-black dark:text-white" />,
      },

      {
        name: "MongoDB",
        icon: <Database className="text-green-700" />,
      },
      { name: "OpenAI", icon: <Bot className="text-green-600" /> },
      { name: "AWS Amplify", icon: <Cloud className="text-[#FF9900]" /> },
      {
        name: "Stripe",
        icon: <CreditCard className="text-indigo-500" />,
      },
    ],
    images: [
      "/lpt0.png",
      "/lpt4.png",
      "/lpt2.png",
      "lpt-payment.png",
      "lpt-adjustment.png",
      "lpt-comp.png",
      "lpt3.png",
      "lpt-crm.png",
    ],
  },
  {
    id: "02",
    client: "TedXBaneshwor",
    location: "Kathmandu, Nepal",
    category: "Non-Profit",
    title: "TEDxBaneshwor's Digital Experience",
    description:
      "Worked in building the official digital experience for TEDxBaneshwor, part of the globally recognized TEDx program. TEDx’s mission is sharing “ideas worth spreading” by featuring local speakers, innovators, and creators who present impactful talks designed to inspire and inform. ",

    features: [
      "Speaker & partner management system",
      "Volunteer coordination portal",
      "Headless CRM for easy content management",
      "SEO-optimized pages for event discovery",
      "Sponsor showcase and events announcements module",
    ],
    techs: [
      {
        name: "Next.js",
        icon: <Code2 className="text-black dark:text-white" />,
      },
      {
        name: "Django",
        icon: <Code2 className="text-green-600" />, // Django green
      },
      {
        name: "Strapi",
        icon: <Cloud className="text-purple-600" />, // Strapi purple
      },
      {
        name: "TypeScript",
        icon: <FileCode className="text-blue-600" />,
      },
      {
        name: "AWS",
        icon: <Cloud className="text-[#FF9900]" />,
      },
    ],

    images: ["tedx1.jpg", "tedx2.jpg", "tedx3.jpg", "tedx4.jpg"],
  },

  {
    id: "03",
    client: "AideAscent",
    location: "Kamalpokhari, Nepal",
    category: "SaaS / B2B",
    title: "AideAscent — Business Website",
    description:
      "AideAscent is a B2B SaaS platform that provides software solution to businesses. As a NextJs developer, my responsibility was to build pixel-perfect, responsive and intuitive designs and components, while running isolated tests on them.",
    features: [
      "Pixel-perfect responsive components",
      "Intuitive and user-friendly design",
      "State-of-art designs and, UI",
      "Components tested on storybook",
    ],
    techs: [
      {
        name: "Next.js",
        icon: <Code2 className="text-black dark:text-white" />,
      },
      {
        name: "Storybook",
        icon: <Book className="text-blue-600 dark:text-white" />,
      },
      { name: "CMS", icon: <Cloud className="text-orange-500" /> },
    ],
    images: ["aide1.jpg", "aide2.jpg", "aide3.png"],
  },
];

const GhostGestureHint = () => {
  return (
    <div className="inset-0 z-40 flex items-center justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-12 bg-slate-900/10  rounded-full blur-xl" />

        <motion.div
          animate={{
            x: [20, -40, 20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.5,
          }}
          className="relative z-10"
        >
          <motion.div
            className="absolute -inset-4 bg-white/30 rounded-full"
            animate={{
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5,
            }}
          />

          <div className="w-12 h-12 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-slate-900 relative">
            <Hand className="w-5 h-5 fill-slate-900/20" strokeWidth={2} />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-16 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest text-slate-800 drop-shadow-md whitespace-nowrap"
        >
          Drag to Explore
        </motion.p>
      </motion.div>
    </div>
  );
};

export default function PortfolioPanoramic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = portfolioProjects[currentIndex];

  const constraintsRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const [showDragHint, setShowDragHint] = useState(false);
  const isInView = useInView(constraintsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const calculateWidth = () => {
      if (innerRef.current && constraintsRef.current) {
        const scrollWidth = innerRef.current.scrollWidth;
        const offsetWidth = constraintsRef.current.offsetWidth;
        setWidth(scrollWidth - offsetWidth + 48);
      }
    };

    const timer = setTimeout(calculateWidth, 50);
    window.addEventListener("resize", calculateWidth);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateWidth);
    };
  }, [currentIndex, project.images]);

  useEffect(() => {
    if (isInView && showDragHint) {
      const timer = setTimeout(() => {
        if (sessionStorage.getItem("portfolio-drag-hint-seen") !== "true") {
          setShowDragHint(false);
          sessionStorage.setItem("portfolio-drag-hint-seen", "true");
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isInView, showDragHint]);

  useEffect(() => {
    const hasSeenHint = sessionStorage.getItem("portfolio-drag-hint-seen");
    if (hasSeenHint) {
      setShowDragHint(false);
    } else if (isInView) {
      setShowDragHint(true);
    }
  }, [isInView]);

  return (
    <section className="text-slate-900 min-h-screen py-12 transition-colors duration-500 flex flex-col justify-center relative">
      <div className="container relative mx-auto px-4 md:px-8 max-w-7xl">
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xs -mx-2 px-4 md:-mx-8 md:px-8 mb-8 transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Featured Works
            </h2>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {portfolioProjects.map((p, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => setCurrentIndex(idx)}
                    className="group relative flex flex-col items-center gap-1"
                  >
                    <span
                      className={`text-sm cursor-pointer md:text-base font-semibold transition-all duration-300 ${
                        isActive
                          ? "text-black scale-115"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {p.client}
                    </span>
                    <span
                      className={`h-0.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 w-full"
                          : "bg-transparent w-0 group-hover:bg-slate-200 group-hover:w-1/2"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="shadow-sm md:hidden h-px" />
          </div>
        </div>

        <div className="mb-6 md:mb-12 grid lg:grid-cols-12 gap-6 md:gap-12">
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {project.category}
                  </span>
                  <div className="h-px w-4 md:w-8 bg-slate-200 dark:bg-slate-800"></div>
                  <MapPin className="text-sm text-slate-500" />
                  <span className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                    {project.location}
                  </span>

                  <div className="h-px w-8 bg-slate-200 dark:bg-slate-800"></div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-800 dark:text-slate-100">
                  {project.title}
                </h3>

                <div className="min-h-[120px] md:min-h-[100px]">
                  <p className="tracking-wide text-slate-700 dark:text-slate-400 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5 lg:flex lg:justify-end lg:items-start pt-2 min-h-[90px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id + "tech"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-wrap gap-3 lg:justify-end content-start"
              >
                {project.techs.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100  shadow-xs"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div
          className="relative group cursor-grab active:cursor-grabbing mb-16"
          ref={constraintsRef}
        >
          <AnimatePresence>
            {showDragHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl pointer-events-none"
              >
                <div className="bg-white/90 backdrop-blur-2xl p-3 rounded-2xl shadow-2xl border border-slate-100 flex flex-col items-center gap-2 text-slate-800">
                  <div className="w-full relative">
                    <GhostGestureHint />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute -top-10 right-0 text-xs font-medium text-slate-400 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span>Drag to view all images</span>
            <div className="w-8 h-8 text-indigo-500">
              <HandGestureAnimation className="text-slate-600 animate-pulse" />
            </div>
          </div>

          <motion.div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-50">
            <motion.div
              key={project.id}
              ref={innerRef}
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 p-1"
            >
              {project.images.map((img, index) => (
                <div
                  key={`${project.id}-img-${index}`}
                  className="relative shrink-0 w-[70vw] md:w-[60vw] lg:w-[50vw] aspect-video md:aspect-video  bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden select-none border border-slate-100 dark:border-slate-800"
                >
                  <div className="absolute inset-0 p-1">
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-cover rounded-lg"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-slate-900 dark:text-white flex items-center gap-2">
          <HiSparkles className="text-purple-500 text-xl" />
          Key Features
        </h3>
        <div className="">
          <div className="px-6">
            <div className="">
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-12">
                <AnimatePresence mode="wait">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={`${project.id}-feat-${idx}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                    >
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-linear-to-r from-purple-600 to-pink-600 shrink-0" />
                      <span className="leading-relaxed font-medium">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
