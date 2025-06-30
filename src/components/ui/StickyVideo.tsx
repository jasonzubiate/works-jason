"use client";

import { useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useCallback, useRef, useEffect, useState } from "react";

export default function StickyVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Scroll progress through the entire services section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 200px", "end end"],
  });

  // Load images once on mount
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    const totalImages = 206;

    for (let i = 1; i <= totalImages; i++) {
      const image = new window.Image();
      image.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      };
      image.src = `/images/videos-frames/${i}.webp`;
      loadedImages.push(image);
    }
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

  // Render first frame immediately when images are loaded
  useEffect(() => {
    if (imagesLoaded && images.length > 0) {
      renderFrame(0);
    }
  }, [imagesLoaded, images, renderFrame]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (imagesLoaded) {
      renderFrame(Math.floor(Number(latest)));
    }
  });

  return (
    <div
      ref={containerRef}
      className="hidden md:block col-span-6 col-start-7 h-full"
    >
      <div className="sticky top-32 h-[550px] bg-neutral-800">
        <canvas ref={canvasRef} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
