import { helveticaNowDisplay } from "@/fonts";
import ClientCarousel from "../feature/ClientCarousel";
import Copy from "./Copy";

export default function Work() {
  return (
    <section className="py-28 md:py-32 px-3 lg:px-36 overflow-x-hidden">
      <div className="flex flex-col gap-3 w-full md:w-[550px] mb-20 md:mb-16">
        <Copy>
          <h3
            className={`${helveticaNowDisplay.className} md:text-sm leading-none text-neutral-500`}
          >
            Our Thinking in Action
          </h3>
        </Copy>
        <Copy>
          <p
            className={`${helveticaNowDisplay.className} text-lg leading-[1.25]`}
          >
            We work across all disciplines to bring ideas to life, rooting
            ourselves not in any single medium, but rather an overarching
            directive: to use our knowledge of contemporary and historic culture
            to create relevant creative solutions—by any medium necessary.
          </p>
        </Copy>
      </div>

      <ClientCarousel />
    </section>
  );
}
