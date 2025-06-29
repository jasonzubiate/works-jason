"use client";

import { motion } from "motion/react";
import { helveticaNowDisplay, freightBigPro } from "@/fonts";

const partnershipIcons = [
  "/images/partnership-icons/nike.svg",
  "/images/partnership-icons/louis-vuitton.svg",
  "/images/partnership-icons/converse.svg",
  "/images/partnership-icons/fear-of-god.svg",
  "/images/partnership-icons/virgin-music.svg",
  "/images/partnership-icons/nike.svg",
  "/images/partnership-icons/louis-vuitton.svg",
  "/images/partnership-icons/converse.svg",
];

export default function Partnerships() {
  return (
    <section className="flex flex-col items-center pt-40 md:pt-60 pb-48 md:pb-96 px-3 md:px-36">
      <p className="leading-[0.7] text-[40px] md:text-[52px] text-center w-full max-w-[740px] mx-auto mb-16">
        <span className={`${freightBigPro.className} italic`}>We seek </span>
        <span className={`${freightBigPro.className} uppercase`}>
          partnerships{" "}
        </span>
        <span className={`${freightBigPro.className} italic`}>rooted in </span>
        <span className={`${freightBigPro.className} uppercase`}>
          deep rigor,{" "}
        </span>
        <span className={`${freightBigPro.className} italic`}>and the </span>
        <span className={`${freightBigPro.className} uppercase`}>persuit </span>
        <span className={`${freightBigPro.className} italic`}>of </span>
        <span className={`${freightBigPro.className} uppercase`}>
          something meaningful.
        </span>
      </p>

      <div className="flex w-screen overflow-x-hidden lg:hidden mb-16">
        <motion.div
          animate={{ x: "-100%" }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          className="flex gap-2 pr-2"
        >
          {partnershipIcons.map((icon, index) => (
            <li
              key={index}
              className="flex items-center justify-center w-20 h-20 md:w-32 md:h-32 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
            >
              <img
                src={icon}
                alt={`partner ${index + 1}`}
                className="w-8 h-8 md:w-16 md:h-16"
              />
            </li>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: "-100%" }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          className="flex gap-2 pr-2"
        >
          {partnershipIcons.map((icon, index) => (
            <li
              key={index}
              className="flex items-center justify-center w-20 h-20 md:w-32 md:h-32 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
            >
              <img
                src={icon}
                alt={`partner ${index + 1}`}
                className="w-8 h-8 md:w-16 md:h-16"
              />
            </li>
          ))}
        </motion.div>
      </div>

      <ul className="hidden lg:flex gap-2 md:gap-3 mb-16 overflow-x-hidden">
        {partnershipIcons.map((icon, index) => (
          <li
            key={index}
            className="flex items-center justify-center w-32 h-32 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
          >
            <img
              src={icon}
              alt={`partner ${index + 1}`}
              className="w-16 h-16"
            />
          </li>
        ))}
      </ul>

      <button className="px-4 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300 cursor-pointer">
        <span className={`${helveticaNowDisplay.className} md:text-lg`}>
          Partner With Us
        </span>
      </button>
    </section>
  );
}
