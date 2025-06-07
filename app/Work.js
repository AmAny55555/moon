import React from "react";
import Work2 from "./Work2";

function Work() {
  return (
    <div className="bg-red ">
      <h1 className="font-bold text-3xl text-white text-center">
        My <span className="text-fuchsia-300">work experience</span>
      </h1>
      <div className="w-full px-4 mt-5 mb-5">
        <div className=" sm:grid-col-1 md:grid grid-cols-2 gap-10 items-center justify-center mt-16  max-w-4xl mx-auto p-2 ">
          <Work2 src="/st.png" />
          <Work2 src="/st.png" />
          <Work2 src="/sss.png" />
          <Work2 src="/ss.png" />
        </div>
      </div>
    </div>
  );
}

export default Work;
