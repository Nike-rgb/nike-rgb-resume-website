"use client";

import React, { useEffect, useRef, useState } from "react";

const context = `
Name: Nikesh Kazi ;
Age: 24 ;
Location: Kathmandu, Nepal ,
study: Bachelor of Electronics, Communication and Information Engineering ;
studied at: IOE Thapathali campus ;
university: Tribhuvan University ;
vegetarian: Yes ;
what are your hobbies: guitar, music, dance, beatboxing, any arts in general ;
Email: nikeshlepcha7@gmail.com ;
contact: nikeshlepcha7@gmail.com ;
you can write me at nikeshlepcha7@gmail.com ;
Akame ga kill was my first anime ;
I play games and I am mythical glory in Mobile Legends  ;
I am in mythical glory rank in Mobile Legends ;
I have 70 stars in Mobile Legends ;
I like to main heroes like: Hanzo, Alpha, Gloo, wanwan, and Hayabusa ;
I play heroes like: Hanzo, Alpha, Gloo, wanwan, and Hayabusa ;
reach me at: nikeshlepcha7@gmail.com ;
Skills: JavaScript, TypeScript, React, Next.js, MongoDB ;
programming languages: JavaScript, TypeScript, React, Nextjs, MongoDB ;
languages: JavaScript, TypeScript, React, Nextjs and MongoDB ;
frameworks: React, Nextjs, flutter ;
tech stack: JavaScript, TypeScript, React, Nextjs, MongoDB ;
techstack: JavaScript, TypeScript, React, Nextjs, MongoDB ;
technologies: JavaScript, TypeScript, React, Next.js, MongoDB ;
I can work with JavaScript, TypeScript, React, Next.js, MongoDB ;
Experience: 2 years of experience in web development ;
team work: Yes ;
I learn about new technologies by reading articles, watching videos, and practicing ;
I learn best by doing hands-on projects and experimenting with new technologies ;
My learning style is hands-on projects and practical experience ;
I like music artists like Eminem, Kendrick, Polyphia, Slipknot etc. ;

`;

const exampleQuestions = [
  "Where did you study?",
  "What is your learning style?",
  "What is your current rank in Mobile Legends?",
  "What are your hobbies?",
  "Which was your first anime?",
  "What music artists do you like?",
];

const ChatBot: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    if (!workerRef.current) {
      workerRef.current = new Worker(new URL("../worker.js", import.meta.url), {
        type: "module",
      });

      workerRef.current.onmessage = (e) => {
        const { type, value, message } = e.data;

        switch (type) {
          case "model-loaded":
            setLoading(false);
            break;
          case "model-error":
            setLoading(false);
            setError(`Model failed to load: ${message}`);
            break;
          case "answer":
            setLoading(false);
            setResult(value);
            break;
          case "error":
            setLoading(false);
            setError(message);
            break;
        }
      };
    }

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    workerRef.current?.postMessage({ context, question: userInput });
  };

  const handleExampleClick = (question: string) => {
    setUserInput(question);
  };

  return (
    <div className="hidden md:flex md:py-24 flex-col md:flex-row items-start justify-between gap-12">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#212529] dark:text-white">
          Know more about me
        </h2>
        <h3 className="text-sm md:text-lg mb-6 text-[#212529] dark:text-white">
          {
            "The chat below uses a BERT model to answer questions about me. It's not OpenAI, so don’t expect conversations :)"
          }
        </h3>
        <h4 className=" text-sm text-gray-500">
          {
            "It's a QnA model, so no yes-no questions. Use the examples on the right. Also the answers are on limited topics."
          }
        </h4>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-6 md:mt-12 sm:flex-row items-center gap-6 md:w-3/4">
          <input
            type="text"
            disabled={loading}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={
              loading ? "Model is loading..." : "Type your message..."
            }
            className="flex-grow w-full sm:w-auto px-5 py-3 border-0 border-b-[1px] border-gray-300 placeholder:text-gray-500 focus:outline-none transition"
          />
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "hidden" : ""
            } px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all shadow-md`}>
            Send
          </button>
        </form>

        {result && !loading && (
          <div className="mt-6 text-gray-800 font-[Indie_Flower] dark:bg-gray-800 rounded-lg p-4 text-lg">
            {result}
          </div>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      <div className="w-full md:w-1/3 pl-8">
        <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
          Try asking these:
        </h4>
        <div className="flex flex-col gap-3">
          {exampleQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleExampleClick(q)}
              className="text-left text-sm md:text-base px-4 py-2 rounded-md border border-gray-100 hover:bg-indigo-50 hover:border-indigo-300 transition-all">
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
