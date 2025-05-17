import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between md:gap-24 mx-auto md:my-8">
      <div className="flex flex-col md:gap-6 gap-2 md:w-2/5">
        <h1 className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Nikesh Kazi Lepcha
        </h1>
        <h2 className="text-xl md:text-3xl text-gray-600 dark:text-gray-300">
          Software Engineer
        </h2>

        <p className="text-gray-500 italic text-md dark:text-gray-400">
          {`"I build pixel-perfect web applications."`}
        </p>

        <div className="flex flex-col md:flex-row md:gap-16 gap-3 mt-4 md:mt-0">
          <a
            href="https://wa.me/9817954435"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <div className="flex gap-2 items-center underline ">
              <FaWhatsapp color="#25D366" size={20} /> 9817954435
            </div>
          </a>
          <a
            href="mailto:nikeshlepcha7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <div className="flex gap-2 items-center underline ">
              <BiLogoGmail size={20} />
              nikeshlepcha7@gmail.com
            </div>
          </a>
        </div>
      </div>

      <div className="md:w-3/5">
        <p className="pr-4 leading-relaxed md:pr-12 text-md italic md:text-xl text-gray-700 dark:text-gray-300 md:leading-10">
          &quot;I’m a developer with expertise in React, Next.js, and TypeScript
          and MERN. I build responsive interfaces that balance performace,
          aesthetics with functionality. My approach involves clean,
          maintainable code. In the future, I aspire to lead projects that push
          the boundaries of web interactivity, mentor junior developers, and
          contribute to open-source tools that make the web faster and more
          inclusive for everyone.&quot;
        </p>
      </div>
    </div>
  );
}
