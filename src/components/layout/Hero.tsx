"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { freightBigPro } from "@/fonts";
import useDisableScroll from "@/hooks/useDisableScroll";

export default function Hero() {
  useDisableScroll();

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const videoOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const text1Opacity = useTransform(scrollYProgress, [0.15, 0.3], [1, 0]);
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.65],
    [0, 1, 0]
  );
  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="h-[300svh] w-full relative px-3 md:px-36"
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <motion.video
          src="/videos/hero.mp4"
          className="scale-350 lg:scale-200 -translate-y-8 sm:-translate-y-0 w-full h-full"
          style={{ opacity: videoOpacity }}
          autoPlay
          muted
          playsInline
        ></motion.video>
      </div>

      <div className="absolute top-0 left-0 w-full flex justify-center h-full">
        <div className="h-[300svh] w-full relative">
          <div className="sticky top-1/2 -translate-y-1/2 z-10 mb-128">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ opacity: text1Opacity }}
              transition={{ duration: 0.8, delay: 4.5, ease: "easeInOut" }}
              className={`${freightBigPro.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] text-center text-[40px] md:text-[52px] font-light leading-[0.9]`}
            >
              <span>
                Great work isn&apos;t bound by any one medium—it&apos;s shaped
                by a{" "}
              </span>
              <span className="italic">deep understanding </span>
              <span>of context and purpose.</span>
            </motion.p>

            <motion.p
              style={{ opacity: text2Opacity }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`${freightBigPro.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] text-center text-[40px] md:text-[52px] font-light leading-[0.9]`}
            >
              <span>
                Our process is rooted in clarity and intention. Inspired by the
                German concept of{" "}
              </span>
              <span className="italic">Gesamtkunstwerk</span>
              <span>—the </span>
              <span className="italic">'total work of art'</span>
              <span>
                —we approach each project as a fully considered system, where
                every decision is in{" "}
              </span>
              <span className="italic">service of the whole</span>
              <span>.</span>
            </motion.p>

            <motion.p
              style={{ opacity: text3Opacity }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`${freightBigPro.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] text-center text-[40px] md:text-[52px] font-light leading-[0.9]`}
            >
              <span>
                Through this process, comprised of three main stages, we distill{" "}
              </span>
              <span className="italic">complexity into clarity</span>
              <span>, create </span>
              <span className="italic">moments of lasting impact</span>
              <span>, and </span>
              <span className="italic">evolve our partners </span>
              <span>
                through lasting collaboration in their most important moments.
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
