"use client";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useInView } from "motion/react";
import { useCallback, useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { helveticaNowDisplay } from "@/fonts";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { work } from "@/data/work";
import { CarouselSlideProps } from "@/types";

export default function ClientCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(carouselRef, { once: true, amount: 0.5 });

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollNext(emblaApi.canScrollNext());
    setCanScrollPrev(emblaApi.canScrollPrev());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollButtons();

    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);

    return () => {
      emblaApi.off("select", updateScrollButtons);
      emblaApi.off("reInit", updateScrollButtons);
    };
  }, [emblaApi, updateScrollButtons]);

  return (
    <div ref={carouselRef}>
      <div className="hidden lg:flex gap-3 mb-6">
        <button
          className={`${
            canScrollPrev ? "opacity-100" : "opacity-50"
          } w-8 h-8 rounded flex items-center justify-center bg-neutral-700 transition-colors duration-300 cursor-pointer`}
          onClick={scrollPrev}
        >
          <ArrowLeft className="w-4 h-4 text-white" />
        </button>
        <button
          className={`${
            canScrollNext ? "opacity-100" : "opacity-50"
          } w-8 h-8 rounded flex items-center justify-center bg-neutral-700 transition-colors duration-300 cursor-pointer`}
          onClick={scrollNext}
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>

      <div ref={emblaRef}>
        <ul className="flex gap-3">
          {work.map((item, key) => (
            <li key={key}>
              <CarouselSlide
                name={item.name}
                description={item.description}
                image={item.image}
                index={key}
                isInView={isInView}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CarouselSlide({
  name,
  description,
  image,
  index,
  isInView,
}: CarouselSlideProps & { isInView: boolean }) {
  return (
    <div className="flex-[0_0_100%] min-w-0 w-[275px] md:w-[350px]">
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={
            isInView
              ? { clipPath: "inset(0 0 0 0)" }
              : { clipPath: "inset(0 0 100% 0)" }
          }
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="relative h-[343px] md:h-[440px] w-full bg-neutral-800 overflow-hidden group will-change-transform"
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="w-full h-full"
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-4">
          <h4
            className={`${helveticaNowDisplay.className} text-lg leading-[1.25]`}
          >
            {name}
          </h4>

          <p
            className={`${helveticaNowDisplay.className} text-lg text-neutral-500 leading-[1.25]`}
          >
            {description}
          </p>

          <Link href="/" className="flex items-center gap-1 group">
            <span
              className={`${helveticaNowDisplay.className} text-lg text-neutral-500 group-hover:text-white transition-colors duration-300`}
            >
              View Project
            </span>

            <ArrowUpRight className="w-5.5 h-5.5 text-neutral-500 group-hover:text-white transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
