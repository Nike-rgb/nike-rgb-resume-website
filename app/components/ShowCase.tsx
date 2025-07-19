import React from "react";
import Image from "next/image";
import Island from "./Island";
import Link from "next/link";
import Button from "./Button";
import { FiExternalLink } from "react-icons/fi";

export default function ShowCase() {
  return (
    <div className="mt-20 md:mt-36">
      <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-2 md:mb-12">
        I build solutions such as
      </h2>

      <div className="mx-auto md:mt-32 my-20 md:my-24 flex flex-col md:flex-row md:gap-20 items-center gap-12 px-2 md:max-w-5xl">
        <div className="w-full md:flex-4/5">
          <Image
            src="/scanonline.png"
            alt="ScanItOnline Product Preview"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-1/5 flex-col items-start text-center md:text-left max-w-xl">
          <h3 className="text-2xl text-slate-700 md:text-4xl font-semibold mb-4">
            ScanItOnline
          </h3>
          <p className="p-2 text-left leading-relaxed text-gray-600 mb-6 font-medium">
            A document scanning web-app with multipoint cropping feature
          </p>
          <Link href="https://scanitonline.vercel.app" target="_blank">
            <Button
              text="Try Now"
              extraClass="px-8"
              startIcon={<FiExternalLink />}
            />
          </Link>
        </div>
      </div>

      <h3 className="text-4xl md:text-4xl font-semibold text-slate-800 mt-12 mb-6">
        Or something creative
      </h3>
      <div className="mt-20 md:mt-36">
        <div className="md:max-w-[70vw] mx-auto">
          <div className="flex justify-between">
            <div className="flex text-right">
              <Image
                src="/cloud.png"
                alt="cloud"
                width={500}
                height={500}
                className="w-40 md:w-64 aspect-auto h-auto -rotate-16"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-16">
            <p className="text font-[Indie_Flower] text-lg md:text-2xl text-slate-600 font-medium -rotate-6 relative md:-top-16">
              This is not a picture. Try spinning the island
            </p>
            <Island />
          </div>
        </div>
      </div>
    </div>
  );
}
