"use client";

import {
  motion,
  useScroll,
  useInView,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useEffect, useState, useCallback, useRef } from "react";
import { helveticaNowDisplay } from "@/fonts";

const STAGES = [
  {
    index: 1,
    title: "Strategy",
  },
  {
    index: 2,
    title: "Design",
  },
  {
    index: 3,
    title: "Scale",
  },
];

export default function ServicesCard() {
  const [currentStage, setCurrentStage] = useState(STAGES[0]);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Option 1: Use useInView for entry/exit detection
  const sectionInView = useInView(containerRef, {
    margin: "0px 0px -100px 0px",
  });

  const sectionExitView = useInView(containerRef, {
    margin: "-800px 0px 0px 0px",
  });

  const shouldShow = sectionInView && sectionExitView;

  // Load images once on mount
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= 206; i++) {
      const image = new window.Image();
      image.src = `/images/videos-frames/${i}.webp`;
      loadedImages.push(image);
    }

    setImages(loadedImages);
  }, []);

  // Map scroll progress to frame index (0-205)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 205]);

  const renderFrame = useCallback(
    (index: number) => {
      if (images[index] && canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = images[index].width;
          canvas.height = images[index].height;
          ctx.drawImage(images[index], 0, 0);
        }
      }
    },
    [images]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Update current stage based on scroll progress
    if (latest < 0.50) {
      // 64/207 ≈ 0.31
      setCurrentStage(STAGES[0]);
    } else if (latest < 0.80) {
      // 141/207 ≈ 0.68
      setCurrentStage(STAGES[1]);
    } else if (latest < 1) {
      // 207/207 = 1
      setCurrentStage(STAGES[2]);
    }
  });

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(Math.floor(Number(latest)));
  });

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 h-full w-full border border-red-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center lg:hidden gap-6 rounded-xl bg-neutral-700/60 backdrop-blur-lg py-2 pl-4 pr-2 z-999"
      >
        <div className="flex flex-col gap-1">
          <p
            className={`${helveticaNowDisplay.className} text-neutral-500 leading-none`}
          >
            Stage 0{currentStage.index}
          </p>
          <p className={`${helveticaNowDisplay.className} leading-none`}>
            {currentStage.title}
          </p>
        </div>

        <div className="w-18 h-18 rounded bg-neutral-700 overflow-hidden">
          <canvas ref={canvasRef} className="h-full w-full object-cover" />
        </div>
      </motion.div>
    </div>
  );
}
