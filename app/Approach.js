"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./components/canvas-reveal-effect";
import { Button } from "./components/Button";

export function CanvasRevealEffectDemo() {
  return (
    <div className="bg-[#010217]">
      <h1 className="font-bold text-3xl text-center text-white">
        My <span className="text-fuchsia-300">approach</span>
      </h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center gap-6 px-8">
        <Card
          title="Development & Progress"
          description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From selection to polished code, I keep you updated every step."
          buttonText="Phase 1"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          title="Launch & Delivery"
          description="After polishing the code and final checks, I ensure smooth delivery and deployment, keeping everything transparent and simple."
          buttonText="Phase 2"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card
          title="Post-Launch Support"
          description="I'm available for maintenance, updates, and improvements even after launch. Long-term support is part of the deal."
          buttonText="Phase 3"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
}

const Card = ({ title, description, children, buttonText }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="max-w-xs w-full mx-auto p-4 relative h-[30rem] rounded-xl flex flex-col justify-between bg-[linear-gradient(103.4deg,_#04071D_16.66%,_#0C0E23_81.61%)]"
    >
      {/* الزوائد في الزوايا */}
      <span className="absolute -top-4 -left-2 text-gray-600 text-5xl font-thin z-20">
        +
      </span>
      <span className="absolute -top-4 -right-1 text-gray-600 text-5xl font-thin z-20">
        +
      </span>
      <span className="absolute -bottom-1 -left-1 text-gray-600 text-5xl font-thin z-20">
        +
      </span>
      <span className="absolute -bottom-1 right-1 text-gray-600  text-5xl font-thin z-20">
        +
      </span>

      {/* خلفية تأثير الحركة */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* محتوى الكارت */}
      <div className="relative z-10 flex flex-col justify-between h-full text-center">
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-white font-bold text-lg mb-2">{title}</h2>
            <p className="text-gray-300 text-sm">{description}</p>
          </motion.div>
        )}

        {/* زر مخصص لكل كارت */}
        <div className="flex justify-center mt-auto relative bottom-48">
          <Button className="w-36 text-sm">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};
