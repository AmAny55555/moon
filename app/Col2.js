import React from "react";
import { World } from "./components/Moon";

function Col2() {
  return (
    <div className="col flex flex-col gap-10">
      {/* الجزء العلوي */}
      <div className="bg-[#010217] border border-gray-500 p-5 relative min-h-[200px] overflow-hidden">
        <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold relative top-5 left-5 max-w-full">
          I'm very flexible with time <br /> zone communications
        </h1>
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <World />
        </div>
      </div>

      {/* الجزء السفلي */}
      <div className="flex w-full justify-center">
        <div className="bg-[#010217] border border-gray-500 p-6 mt-5 rounded-lg w-full max-w-4xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* النص */}
          <div className="text-white w-full md:w-1/2">
            <h1 className="text-base sm:text-lg md:text-xl">
              I constantly try to improve <br />
              <span className="font-bold text-2xl md:text-3xl text-nowrap sm:mb-6">
                My tech stack
              </span>
            </h1>
          </div>

          {/* الأزرار */}
          <div className="grid grid-cols-2 sm:mt-20 md:mt-0  gap-x-6 gap-y-4 text-white w-full md:w-1/2">
            <button
              className="bg-[#0d0f28] px-4 py-2 rounded w-full text-white relative bottom-6"
              style={{
                clipPath: "polygon(0 1%, 100% 0, 100% 35%, 0 36%)",
              }}
            >
              Next.js
            </button>
            <button className="bg-[#0d0f28] h-12 w-full">Express</button>
            <button className="bg-[#0d0f28] h-12 w-full text-xs relative bottom-10">
              TypeScript
            </button>
            <button className="bg-[#0d0f28] h-12 w-full relative top-5">
              Vue.js
            </button>
            <button className="bg-[#0d0f28] h-12 w-full  relative bottom-5">
              React
            </button>
            <button
              className="bg-[#0d0f28] px-3  rounded w-full text-white relative top-[53px]  "
              style={{
                clipPath: "polygon(0 1%, 100% 0, 100% 35%, 0 36%)",
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Col2;
