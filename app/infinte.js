"use client";

import React from "react";
import { InfiniteMovingCards } from "./components/infinitemovingcards";

const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure His professionalism promptness and dedication to delivering exceptional results were evident throughout our project Adrians enthusiasm for every facet of development truly stands out If youre seeking to elevate your website and elevate your brand Adrian is the ideal partner",
    name: "Michel joen",
    title: "Marketing Director",
    img: "/gf.png",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure His professionalism promptness and dedication to delivering exceptional results were evident throughout our project Adrians enthusiasm for every facet of development truly stands out If youre seeking to elevate your website and elevate your brand Adrian is the ideal partner",
    name: "joenista michkel",
    title: "Product Manager",
    img: "/gf.png",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure His professionalism promptness and dedication to delivering exceptional results were evident throughout our project Adrians enthusiasm for every facet of development truly stands out If youre seeking to elevate your website and elevate your brand Adrian is the ideal partner",
    name: "jomana adel",
    title: "Marketing Director",
    img: "/gf.png",
  },
];

export default function Home() {
  return (
    <div>
      <main className="mt-20 mb-20">
        <p className="text-white text-center font-bold sm:text-xl md:text-2xl mb-5">
          Kind words from{" "}
          <span className="text-fuchsia-400">satisfied clients</span>
        </p>
        <InfiniteMovingCards items={testimonials} />
      </main>
    </div>
  );
}
