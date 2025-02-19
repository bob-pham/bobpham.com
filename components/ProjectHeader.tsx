"use client";
import Image from "next/image";
import Youtube from "react-youtube";
import { Button } from "./ui/button";
import TechCard from "./TechCard";

const projects = "/projects/projects.png";

export default function ProjectHeader({
  name,
  logo,
  tech,
  gitLink,
  demo,
}: {
  name: string;
  logo?: string;
  tech: string[];
  gitLink?: string;
  demo?: string;
}) {
  return (
    <div className="grid place-items-center w-full">
      <Image
        className="pb-4 px-4 max-h-96 w-auto place-self-center"
        src={logo ? logo : projects}
        alt={name}
        width={300}
        height={300}
      />
      <div className="grid place-items-center sm:w-1/2 w-3/4 border-opacity-50 place-self-center">
        <a
          href={gitLink ? gitLink : "https://github.com/bob-pham"}
          target="_"
        >
          <Button className="border-white border m-8">
            <Image
              src="/logos/github_logo.png"
              alt="Github"
              width={20}
              height={20}
              className="bg-white rounded-full"
            />
            Github
          </Button>
        </a>
        <div className="place-self-center flex space-x-4 m-0">
          {tech.map((item: string) => (
              <TechCard name={item} key={item}/>
          ))}
        </div>
        <div className="divider "></div>
        {demo ? (
          <div className="w-full align-self-center justify-self-center mb-10">
            <Youtube
              videoId={demo}
              opts={{
                width: "100%",
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
