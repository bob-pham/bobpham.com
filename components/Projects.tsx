import React from "react";
import GitHubCalendar from "react-github-calendar";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Button } from "./ui/button";
import Image from "next/image";
import { loadMetadata } from "@/lib/projects";

const Header = ({ logo }: { logo: string | undefined }) => {
  return (
    <div className="grid place-items-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-600 to-neutral-500 p-1">
      <Image
        src={logo ? logo : "/projects/projects.png"}
        alt="logo"
        height={200}
        width={200}
        className="max-h-24 min-h-24 w-auto"
      />
    </div>
  );
};

export default async function Projects() {
  const projects = await loadMetadata();
  return (
    <div className="text-white my-16 grid place-items-center w-11/12 max-w-full">
      <h3 className="py-16 text-white sm:text-xl md:text-3xl lg:text-5xl font-bold text-center">
        Projects
      </h3>
      <div className="grid place-items-center">
        <div className="w-full max-w-[100%] overflow-x-hidden grid place-items-center place-self-center h-auto">
        <GitHubCalendar username="bob-pham" />
        </div>
        <a href="https://github.com/bob-pham" target="_blank">
          <Button className="border-white border m-8">
            <Image
              src="/logos/github_logo.png"
              height={20}
              width={20}
              alt="Github"
              className="bg-white rounded-full"
            />{" "}
            Github
          </Button>
        </a>
      </div>
      <BentoGrid className="w-11/12 mx-auto max-w-full">
        {projects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            header={<Header logo={project.logo} />}
            link={`projects/${project.link}`}
            items={project.tech}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
