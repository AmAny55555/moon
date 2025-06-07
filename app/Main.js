import React from "react";
import Col2 from "./Col2";

function Main() {
  return (
    <div className="bg-[#010217] flex flex-col  lg:flex-row w-full p-4 sm:p-6 lg:p-20 gap-6 relative">
      {/* القسم الأيسر */}
      <div className="relative border border-gray-500 bg-[#050511a2] w-full lg:w-1/2 p-4 flex flex-col items-center justify-center">
        {/* الصورة */}
        <div className="w-full max-w-[400px]">
          <img
            src="/eaarth.png"
            alt="img4"
            className="w-full  object-contain"
          />
        </div>

        {/* النص */}
        <p className="text-white font-bold text-xl sm:text-2xl lg:text-3xl text-center max-w-[400px]  absolute bottom-16 left-6">
          I prioritize client collaboration, fostering open communication
        </p>
      </div>

      {/* القسم الأيمن */}
      <div className="w-full lg:w-1/2">
        <Col2 />
      </div>
    </div>
  );
}

export default Main;
