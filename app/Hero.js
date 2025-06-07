import React from "react";
import { Spotlight } from "./components/SpotLight";
import { GridBackgroundDemo } from "./components/Line";
import { Button } from "./components/Button";
import { TextGenerateEffect } from "./components/text-generate-effect";

import { FloatingNav } from "./components/Navbar";

function Hero() {
  return (
    <div className="relative bg-[#010217] overflow-hidden p-4 h-screen flex flex-col justify-center items-center">
      <FloatingNav />

      {/* خلفية الخطوط */}
      <GridBackgroundDemo />

      {/* Spotlights */}
      <Spotlight
        className="absolute top-[20%] left-[80px] opacity-70 z-10 pointer-events-none"
        fill="white"
      />
      <Spotlight
        className="absolute top-[20%] left-[240px] opacity-20 z-10 pointer-events-none"
        fill="purple"
      />
      <Spotlight
        className="absolute top-[10%] left-[90%] opacity-100 z-30 pointer-events-none"
        fill="white"
      />

      {/* المحتوى النصي */}
      <div className="absolute top-50 left-1/2 transform -translate-x-1/2 z-40 text-white text-center  px-4">
        <h1 className="capitalize">dynamic web magic with next.js</h1>
        <TextGenerateEffect className="text-[#caccdc] text-center font-bold sm:text-xl md:text-4xl capitalize">
          <>
            <p className="text-[#caccdc] ">
              {" "}
              transforming concepts into seamless
            </p>{" "}
            <span className="text-fuchsia-300 text-5xl">user experiences</span>
            <h1 className="text-sm font-normal mt-3 text-[#caccdc] ">
              Hi, I'm Adrian, a Next.js developer based in Croatia.
            </h1>
          </>
        </TextGenerateEffect>
      </div>

      {/* زرار Show my Work */}
      <div className="flex  relative bottom-10  z-40">
        <Button className={"w-52"}>Show my Work</Button>
      </div>
    </div>
  );
}

export default Hero;
