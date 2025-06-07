"use client";

import React from "react";
import SimpleGlobe from "./components/Moon"; // عدل المسار حسب مكان الملف

export default function Col2() {
  return (
    <div className="col flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
      {/* القسم الأول */}
      <div className="bg-[#010217] border border-gray-500 p-5 relative min-h-[200px] overflow-hidden rounded-md">
        <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold relative top-5 left-5 max-w-full">
          I'm very flexible with time <br /> zone communications
        </h1>
        <div className="relative top-4 flex justify-center">
          <img src={"/mo.png"} alt="Moon Image" className="max-w-full h-auto" />
        </div>
      </div>

      {/* القسم الثاني */}
      <div className="bg-[#010217] border border-gray-500 grid grid-cols-1 md:grid-cols-2 items-center rounded-md">
        <div className="text-white p-5">
          <p className="font-thin text-gray-400 mb-3">
            I constantly try to improve <br />
            <span className="font-bold text-4xl text-white whitespace-nowrap">
              My tech stack
            </span>
          </p>
        </div>
        <div className="p-5 flex justify-center">
          <img
            src={"/group.png"}
            alt="Group Image"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
