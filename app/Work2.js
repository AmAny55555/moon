import React from "react";
import Image from "next/image";

function Work2(props) {
  return (
    <div className="relative flex justify-center">
      <div className="animated-corner-card">
        <div className="flex items-center justify-center w-full h-full z-10 relative">
          <Image
            src={props.src}
            alt="img"
            width={400}
            height={100}
            className="object-contain"
          />
        </div>
        <span className="corner-glow" />
      </div>
    </div>
  );
}

export default Work2;
