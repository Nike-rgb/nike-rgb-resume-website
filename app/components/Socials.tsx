import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import MediumStories from "./MediumStories";
import Button from "./Button";

export default function Socials() {
  return (
    <section className="mt-20 md:mt-36">
      <h2 className="text-slate-800 md:text-center text-4xl md:text-5xl font-semibold mb-8 md:mb-16">
        I code daily!
      </h2>

      <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-12">
        <div className="flex flex-col md:w-1/2 gap-24">
          <p className="hidden md:block font-[Indie_Flower] mt-8 text-xl max-w-xs font-medium -rotate-3 tracking-wide">
            I love solving problems through code. Problem-solving and critical
            thinking is my forte.
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Nike-rgb"
            >
              <Button
                startIcon={<FaGithub size={22} />}
                text="Github"
                extraClass="px-6"
              />
            </Link>

            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://medium.com/@nikeshlepcha7"
            >
              <Button
                variant="outlined"
                startIcon={<SiMedium size={22} />}
                text="Medium"
                extraClass="px-6"
              />
            </Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <MediumStories />
        </div>
      </div>
    </section>
  );
}
