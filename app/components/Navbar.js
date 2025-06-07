"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

const HomeIcon = () => <span>🏠</span>;
const ServicesIcon = () => <span>🛠️</span>;
const ProductsIcon = () => <span>📦</span>;
const ContactIcon = () => <span>📞</span>;

export const FloatingNav = ({
  navItems = [],
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full shadow-lg z-[5000] pr-8 pl-8 py-2 items-center justify-center space-x-12", // space-x-12 لمسافة واسعة بين الروابط
          "bg-[rgba(23,18,40,0.74)] text-white backdrop-blur-sm", // لون كحلي بنفسجي غامق مع شفافية وخلفية ضبابية
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-2 hover:text-[rgba(221,74,255,0.9)] transition-colors duration-300 ease-in-out font-semibold text-sm"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </a>
        ))}

        <button
          type="button"
          className=" text-white px-5 py-2 rounded-full font-semibold relative "
        >
      <div className="flex gap-6">
            <span>Home</span>
              <span>service</span>
                  <span>Products</span>
                      <span>Contact</span>
      </div>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px" />
        </button>
      </motion.nav>
    </AnimatePresence>
  );
};

// مثال الاستخدام مع 4 روابط
export default function App() {
  const navItems = [
    { name: "Home", link: "/", icon: <HomeIcon /> },
    { name: "Services", link: "/services", icon: <ServicesIcon /> },
    { name: "Products", link: "/products", icon: <ProductsIcon /> },
    { name: "Contact", link: "/contact", icon: <ContactIcon /> },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
      <div style={{ height: "200vh", paddingTop: 150 }}>
        <h1 className="text-white text-center">
          Scroll down and up to see the navbar appear/disappear
        </h1>
      </div>
    </>
  );
}
