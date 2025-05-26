import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

export default async function Hero() {
  const data = await fetch(
    "https://gist.githubusercontent.com/Nike-rgb/0271de49bff5b8a40a80feab244c673d/raw/learning.json",
    {
      next: {
        revalidate: 60,
      },
    }
  ).then((res) => res.json());
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 justify-between md:gap-24 mx-auto md:my-8">
        <div className="flex flex-col md:gap-6 gap-2 md:w-2/5">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 ">
            Nikesh Kazi
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-600 ">
            Software Engineer
          </h2>

          <p className="text-gray-500 italic text-md">
            {`"I build pixel-perfect web applications."`}
          </p>

          <div className="flex flex-col md:flex-row md:gap-16 gap-3 mt-4 md:mt-0">
            <a
              href="https://wa.me/9817954435"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700">
              <div className="flex gap-2 items-centers ">
                <FaWhatsapp color="#25D366" size={20} /> 9817954435
              </div>
            </a>
            <a
              href="mailto:nikeshlepcha7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700">
              <div className="flex gap-2 items-center">
                <BiLogoGmail size={20} />
                nikeshlepcha7@gmail.com
              </div>
            </a>
          </div>
        </div>

        <div className="md:w-3/5">
          <p className="pr-4 leading-relaxed md:pr-12 text-md italic md:text-lg text-gray-700 md:leading-10">
            {`
            "${data.heroText}"
            `}
          </p>
        </div>
      </div>
      <div className="md:my-16 mt-4">
        <p className="text-gray-500  text-center text-base md:text-md">
          I&apos;m currently learning:{" "}
          <span className="text-gray-700 italic underline">
            {data.learning}
          </span>
        </p>
      </div>
    </>
  );
}
