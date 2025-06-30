import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { helveticaNowDisplay } from "@/fonts";

export default function Footer() {
  return (
    <footer
      className={`bg-[rgb(245,227,26)] text-black flex flex-col md:grid grid-cols-12 px-3 py-6 md:py-3 gap-3 ${helveticaNowDisplay.className}`}
    >
      <div className="grid-cols-1 hidden md:flex flex-col gap-0.5">
        <p className="md:text-sm font-medium leading-none">New York City</p>
        <p className="md:text-sm font-medium leading-none">9:41 AM</p>
      </div>

      <div className="flex flex-col mb-6 md:mb-0 md:grid-cols-1 col-start-7 lg:col-start-9">
        <ul className="flex flex-col gap-1.5">
          <li className="md:text-sm font-medium leading-none">
            <Link href="/">Projects</Link>
          </li>
          <li className="md:text-sm font-medium leading-none">
            <Link href="/">Ideas</Link>
          </li>
          <li className="md:text-sm font-medium leading-none">
            <Link href="/">About</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:grid-cols-1 mb-32">
        <ul className="flex flex-col gap-1.5 justify-self-end">
          <li className="md:text-sm font-medium leading-none">
            <a href="https://www.instagram.com/works.studio/">Instagram</a>
          </li>
          <li className="md:text-sm font-medium leading-none">
            <a href="https://www.linkedin.com/company/works-studio/">Linkedin</a>
          </li>
          <li className="md:text-sm font-medium leading-none">
            <a href="https://x.com/worksstudio">X (Twitter)</a>
          </li>
        </ul>
      </div>

      <div className="hidden md:block grid-cols-1 col-start-11 lg:col-start-12">
        <div className="flex flex-col gap-1.5">
          <a
            href="mailto:hello@works.studio"
            className="md:text-sm font-medium leading-none"
          >
            hello@works.studio
          </a>
          <p className="md:text-sm font-medium leading-none">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <form className="col-start-7 lg:col-start-9 col-span-6 lg:col-span-4 flex justify-between items-center gap-4 border-b border-black pb-1 md:mt-10 mb-12 md:mb-0">
        <input
          className="md:text-sm font-medium leading-none w-full placeholder:text-black"
          placeholder="Enter Email To Subscribe"
        />

        <button type="submit">
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <div className="flex flex-col gap-1.5 md:hidden">
        <a
          href="mailto:hello@works.studio"
          className="md:text-sm font-medium leading-none"
        >
          hello@works.studio
        </a>
        <p className="md:text-sm font-medium leading-none">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
