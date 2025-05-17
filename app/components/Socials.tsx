import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SiMedium } from "react-icons/si";

export default function Socials() {
  return (
    <>
      <div className="my-10 md:my-40 md:px-24">
        <h2 className="md:text-center text-2xl md:text-4xl font-semibold text-[#212529] mb-8 md:mb-16">
          I code daily!
        </h2>
        <div className="flex justify-between md:flex-row gap-4 md:gap-24 mx-auto my-4 md:my-12">
          <p className="hidden md:inline-block font-[Indie_Flower] max-w-1/5 text-xl font-medium -rotate-3 tracking-wide">
            I love solving problems through code. Problem-solving and critical
            thinking is my forte.
          </p>
          <div className="flex gap-12 md:gap-24 mt-2 md:mt-12 justify-between md:justify-center">
            <Link
              className="hover:scale-115 transition-transform duration-300"
              href="https://github.com/Nike-rgb">
              <FaGithub className="hidden md:inline" size={60} />
              <FaGithub className="md:hidden" size={40} />
            </Link>
            <Link
              className="hover:scale-115 transition-transform duration-300"
              href="https://medium.com/@nikeshlepcha7">
              <SiMedium className="hidden md:inline" size={60} />
              <SiMedium className="md:hidden" size={40} />
            </Link>
            <Link
              href="https://resume-nikesh.tiiny.site"
              className="hover:scale-115 transition-transform duration-300">
              <HiDocumentText className="hidden md:inline" size={60} />
              <HiDocumentText className="md:hidden" size={40} />
            </Link>
          </div>
          <div className="font-[Indie_Flower] max-w-1/3 text-md md:text-2xl font-medium">
            Check out some of my works
            <Image
              src="/arrow1.svg"
              alt="arrow"
              width={500}
              height={500}
              className="w-16 md:w-48 relative md:-left-16 -rotate-16 md:top-8"
            />
          </div>
        </div>
      </div>
    </>
  );
}
