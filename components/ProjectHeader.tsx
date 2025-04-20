"use client";
import Image from "next/image";
import Youtube from "react-youtube";
import { Button } from "./ui/button";
import TechCard from "./TechCard";

const projects = "/projects/projects.png";

function formatDate(startDate: string | undefined, endDate: string | undefined) {
  if (!startDate) {
    return "";
  }

  let date = new Date(startDate);
  const mths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const start = `${mths[date.getMonth()]} ${date.getFullYear()}`;
  let end = "Present";

  if (endDate != null) {
    date = new Date(endDate);
    end = `${mths[date.getMonth()]} ${date.getFullYear()}`;
  }

  if (endDate === startDate) {
    return start;
  }
  return `${start} - ${end}`;
}

export default function ProjectHeader({
  name,
  logo,
  tech,
  gitLink,
  demo,
  startDate,
  endDate,
}: {
  name: string;
  logo?: string;
  tech: string[];
  gitLink?: string;
  demo?: string;
  startDate?: string;
  endDate?: string;
}) {
  return (
    <div className="grid place-items-center w-full">
      <h1 className="text-4xl font-bold text-center my-2 text-white">{name}</h1>
      <Image
        className="pb-4 px-4 max-h-96 w-auto place-self-center"
        src={logo ? logo : projects}
        alt={name}
        width={300}
        height={300}
      />
      <div className="grid place-items-center sm:w-1/2 w-3/4 border-opacity-50 place-self-center">
        <a href={gitLink ? gitLink : "https://github.com/bob-pham"} target="_">
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
            <TechCard name={item} key={item} />
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
      <h4 className="text-lg text-white">{formatDate(startDate, endDate)}</h4>
    </div>
  );
}
