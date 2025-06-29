"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { helveticaNowDisplay } from "@/fonts";

export default function Header() {
  return (
    <header>
      <div className="fixed top-3 left-3 w-[70px] md:w-[55px] h-auto overflow-hidden mix-blend-difference z-1000">
        <motion.img
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 4.6, ease: "easeInOut" }}
          src="/images/general/works-logo.svg"
          alt="logo"
        />
      </div>

      <nav className="fixed top-2 right-3 mix-blend-difference z-1000">
        <div className="overflow-hidden">
          <motion.button
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 4.6, ease: "easeInOut" }}
            className={`${helveticaNowDisplay.className} font-medium leading-none lg:hidden cursor-pointer`}
          >
            Menu
          </motion.button>
        </div>

        <ul className="hidden lg:flex gap-5">
          <li className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 4.6, ease: "easeInOut" }}
            >
              <Link href="/">
                <span
                  className={`${helveticaNowDisplay.className} text-sm font-medium leading-none text-neutral-500`}
                >
                  Projects
                </span>
              </Link>
            </motion.div>
          </li>
          <li className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 4.6, ease: "easeInOut" }}
            >
              <Link href="/">
                <span
                  className={`${helveticaNowDisplay.className} text-sm font-medium leading-none text-white`}
                >
                  Capabilities
                </span>
              </Link>
            </motion.div>
          </li>
          <li className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 4.6, ease: "easeInOut" }}
            >
              <Link href="/">
                <span
                  className={`${helveticaNowDisplay.className} text-sm font-medium leading-none text-neutral-500`}
                >
                  About
                </span>
              </Link>
            </motion.div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
