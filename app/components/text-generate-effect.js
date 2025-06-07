"use client";

import React, { useEffect } from "react";
import { useAnimate, stagger } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  children,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration,
      delay: stagger(0.2),
    });
  }, [scope, animate, filter, duration]);

  // هنا نحول كل طفل (child) لعنصر <motion.span> لعمل تأثير الحركة
  const renderWords = () => {
    return (
      <div ref={scope}>
        {React.Children.map(children, (child, idx) => {
          return (
            <span
              key={idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {child}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-5xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
