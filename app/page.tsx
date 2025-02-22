import JobHistory from "@/components/JobHistory";
import LinkBar from "@/components/LinkBar";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";

const nameText = [
  {
    text: "Bob",
    className:
      "text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
  },
  {
    text: "Pham",
    className:
      "text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
  },
];

const subText = [
  {
    text: "Computer",
    className:
      "text-2xl md:text-4xl mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto text-blue-500 dark:text-blue-500",
  },
  {
    text: "Science",
    className:
      "text-2xl md:text-4xl mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto text-blue-500 dark:text-blue-500",
  },
  {
    text: "@",
    className:
      "text-2xl md:text-4xl mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto text-blue-500 dark:text-blue-500",
  },
  {
    text: "UBC",
    className:
      "text-2xl md:text-4xl mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto text-blue-500 dark:text-blue-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen min-w-full h-full w-full">
      <div className="min-h-screen h-full grid place-items-center">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-5  w-full pt-20 md:pt-0 grid place-items-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <TypewriterEffectSmooth words={nameText} />
          </h1>
          <TypewriterEffectSmooth words={subText} />
          <div className="w-full flex items-center justify-center text-white grid grid-cols-1">
            <p className="text-center text-white">
              Hi, my name is Bob and I write software. Beep boop.
            </p>
            <LinkBar />
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll min-h-fit min-w-screen grid place-items-center">
          <JobHistory />
          <Projects />
      </div>
    </div>
  );
}
