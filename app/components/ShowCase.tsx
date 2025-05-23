"use client";
import React from "react";
import Image from "next/image";
import Island from "./Island";
import Link from "next/link";

export default function ShowCase() {
  return (
    <>
      <div className="mb-10 md:my-40">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#212529] mb-2 md:mb-16">
          {" "}
          I build solutions such as
        </h2>
        <div className="mx-auto md:mt-32 my-8 md:my-24 flex flex-col md:flex-row md:gap-20 items-center gap-12 px-2 md:max-w-6xl">
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
            <h3 className="text-lg md:text-3xl font-semibold mb-4">
              ScanItOnline
            </h3>
            <p className="text-base text-left text-gray-600 mb-6">
              A web-based document scanning app with multipoint cropping feature
              your physical paperwork into scanned document right from your
              browser.
            </p>
            <Link
              href="https://scanitonline.vercel.app"
              target="_blank"
              className="inline-block py-2 px-3 md:px-6 bg-[#AC50C3] text-white rounded-lg shadow hover:bg-[#9042a4] transition">
              Visit App
            </Link>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#212529] mt-12 mb-2">
          {" "}
          Or something creative
        </h2>
        <div className="mt-8 md:mt-16">
          <div className="md:max-w-[70vw] mx-auto">
            <div className="flex justify-between ">
              <div className="flex text-right">
                <Image
                  src="/cloud.png"
                  alt="cloud"
                  width={500}
                  height={500}
                  className="w-40 md:w-64 aspect-auto h-auto -rotate-16"
                />
              </div>
              <Image
                src="/bird.gif"
                alt="BIRD"
                unoptimized
                width={500}
                height={500}
                className="fly size-24 md:size-48 -rotate-5"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-16">
              <p className="font-[Indie_Flower] text-lg md:text-2xl font-medium -rotate-6 relative md:-top-16">
                {"This is not a picture. Try spinning the island"}
              </p>
              <Island />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
