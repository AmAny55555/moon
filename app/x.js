"use client";

import React from "react";
import { PinContainer } from "./components/3d-pin";

export default function HomePage() {
  return (
    <div>
      <p className="font-bold mb-5 text-white sm:text-2xl md:text-3xl text-center z-[1000] mt-80">
        A small selection of
        <span className="text-[#CBACF9]"> recent project</span>
      </p>
      <main className="min-h-screen w-[80%] mx-auto grid grid-cols-1 md:grid md:grid-cols-2 gap-x-0 gap-y-52 place-items-center bg-[#010217] py-20">
        <PinContainer>
          <div
            className="w-[400px] h-[400px] text-white text-lg font-bold space-y-5 flex flex-col justify-between p-5 rounded-xl"
            style={{
              background:
                "linear-gradient(103.4deg, #04071D 16.66%, #0C0E23 81.61%)",
            }}
          >
            <div className="space-y-4">
              <div className="relative w-[500px] h-[200px]">
                {/* الصورة الخلفية */}
                <img
                  src="/f.png"
                  alt="bg image"
                  className=" w-full h-full object-cover "
                />

                {/* الصورة الأمامية */}
                <img
                  src="/1.png"
                  alt="ai content image"
                  className="absolute bottom-0 left-20 w-[230px] h-[180px] z-10"
                />
              </div>

              <p className="font-bold">AI Image SaaS - Canva Application</p>
              <p className="font-normal text-sm  text-[#BEC1DD]">
                A REAL Software-as-a-Service app with AI features and a payments
                and credits system using the latest tech stack.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="w-5 h-5 invert"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  alt="Vue.js"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                  className="w-5 h-5"
                />
              </div>
              <p className="text-[#CBACF9] font-thin">check live site</p>
            </div>
          </div>
        </PinContainer>

        <PinContainer>
          <div
            className="w-[400px] h-[400px] text-white text-lg font-bold  flex flex-col justify-between p-5 rounded-xl bg-cover bg-center"
            style={{
              background:
                "linear-gradient(103.4deg, #04071D 16.66%, #0C0E23 81.61%)",
            }}
          >
            <div className="space-y-4 flex flex-col items-center">
              <div className="relative w-[500px] h-[200px]">
                {/* الصورة الخلفية */}
                <img
                  src="/f.png"
                  alt="bg image"
                  className="absolute inset-0 w-full h-full object-cover "
                />

                {/* الصورة الأمامية */}
                <img
                  src="/99.png"
                  alt="ai content image"
                  className="absolute bottom-0 left-32 w-[250px] h-[180px] z-10"
                />
              </div>

              <p className="font-bold relative z-10  -left-10">
                Yoom - Video Conferencing App
              </p>
              <p className="font-normal text-sm relative z-10 text-[#BEC1DD] ">
                Simplify your video conferencing experience with Yoom.
                Seamlessly connect with colleagues and friends.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="w-5 h-5 invert"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  alt="Vue.js"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                  className="w-5 h-5"
                />
              </div>
              <p className="text-[#CBACF9] font-thin">check live site</p>
            </div>
          </div>
        </PinContainer>

        <PinContainer>
          <div
            className="w-[400px] h-[400px] text-white text-lg font-bold space-y-5 flex flex-col justify-between p-5 rounded-xl"
            style={{
              background:
                "linear-gradient(103.4deg, #04071D 16.66%, #0C0E23 81.61%)",
            }}
          >
            <div className="space-y-4">
              <div className="relative w-[500px] h-[200px]">
                {/* الصورة الخلفية */}
                <img
                  src="/f.png"
                  alt="bg image"
                  className="absolute inset-0 w-full h-full object-cover "
                />

                {/* الصورة الأمامية */}
                <img
                  src="/234.png"
                  alt="ai content image"
                  className="absolute bottom-0 left-16 w-[250px] h-[180px] z-10"
                />
              </div>

              <p className="font-bold">3D Solar System Planets to Explore</p>
              <p className="font-normal text-sm  text-[#BEC1DD]">
                Explore the wonders of our solar system with this captivating 3D
                simulation of the planets using Three.js.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="w-5 h-5 invert"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  alt="Vue.js"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                  className="w-5 h-5"
                />
              </div>
              <p className="text-[#CBACF9] font-thin">check live site</p>
            </div>
          </div>
        </PinContainer>

        <PinContainer>
          <div
            className="w-[400px] h-[400px] text-white text-lg font-bold space-y-5 flex flex-col justify-between p-5 rounded-xl"
            style={{
              background:
                "linear-gradient(103.4deg, #04071D 16.66%, #0C0E23 81.61%)",
            }}
          >
            <div className="space-y-4">
              <div className="relative w-[500px] h-[200px]">
                {/* الصورة الخلفية */}
                <img
                  src="/f.png"
                  alt="bg image"
                  className="absolute inset-0 w-full h-full object-cover "
                />

                {/* الصورة الأمامية */}
                <img
                  src="/66.png"
                  alt="ai content image"
                  className="absolute bottom-0 left-16 w-[250px] h-[180px] z-10"
                />
              </div>

              <p className="font-bold">Animated Apple Iphone 3D Website</p>
              <p className="font-normal text-sm  text-[#BEC1DD]">
                Recreated the Apple iPhone 15 Pro website, combining GSAP
                animations and Three.js 3D effects.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="w-5 h-5 invert"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  alt="Vue.js"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                  className="w-5 h-5"
                />
              </div>
              <p className="text-[#CBACF9] font-thin">check live site</p>
            </div>
          </div>
        </PinContainer>
      </main>
    </div>
  );
}
