import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

export default async function Hero() {
  const data = await fetch(
    "https://gist.githubusercontent.com/Nike-rgb/0271de49bff5b8a40a80feab244c673d/raw/learning.json",
    {
      next: {
        revalidate: 60,
      },
    },
  ).then((res) => res.json());
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-auto md:my-8 max-w-7xl">
        <div className="flex flex-col gap-5 md:gap-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800">
            Nikesh Kazi
          </h1>
          <h2 className="text-3xl  text-slate-600">Software Engineer</h2>
          <p className="italic text-gray-700 text-lg">
            {"I build pixel-perfect web applications."}
          </p>

          <div className="flex flex-col gap-3 text-lg">
            <a
              href="https://wa.me/9817954435"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:underline"
            >
              <FaWhatsapp size={20} /> 9817954435
            </a>
            <a
              href="mailto:nikeshlepcha7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:underline"
            >
              <BiLogoGmail size={20} /> nikeshlepcha7@gmail.com
            </a>
          </div>
        </div>

        <div className="hidden md:block text-lg min-w-xs max-w-lg leading-10 text-slate-700 italic md:pl-8">
          {`"${data.heroText}"`}
        </div>
      </div>

      <div className="mt-12 md:mt-20 text-center">
        <p className="text-gray-600">
          {"I'm currently learning: "}
          <span className="text-gray-800 text-lg underline italic">
            {data.learning}
          </span>
        </p>
      </div>
    </>
  );
}
