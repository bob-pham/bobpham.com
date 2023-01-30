import { useState } from "react";
import Image from "next/image";

import GitHubCalendar from "react-github-calendar";
import quickSort from "../scripts/quicksort";
import ProjectCard from "./ProjectCard";

import projectsOriginal from "../public/projects.json";
import gitlogo from "../public/icons/github.png";
import calendar from "../public/icons/calendar.png";

import cornucopiaLogo from "../public/images/cornucopia/logo.png";
import deviceRepairManager from "../public/images/device_repair_manager/simple_device_repair_manager.png";
import hercules from "../public/images/hercules/home.png";
import hwManager from "../public/images/hw_manager/hw homescreen.png";
import pomodoro from "../public/images/pomodoro.png";
import rightAngle from "../public/images/right_angle/logo.png";
import projectsDefault from "../public/images/projects.png";
import script from "../public/icons/scripts.png";
import portfoliowebsite from "../public/images/portfoliowebsite.png";
import legacywebsite from "../public/images/website.png";
import mayaHome from "../public/images/maya/maya_home.png";
import storAIBot from "../public/images/storai_teller/robot.png";


const images: any = {
  "Project Cornucopia": cornucopiaLogo,
  "right angle": rightAngle,
  "Hercules": hercules,
  "Homework Manager": hwManager,
  "Simple Device Repair Manager": deviceRepairManager,
  "CLI Pomodoro": pomodoro,
  "Portfolio Website": portfoliowebsite,
  "[Legacy] Portfolio Site": legacywebsite,
  "script": script,
  "Maya": mayaHome,
  "StorAI Teller": storAIBot
};

export default function ProjectsSection(props: any) {
  const [mode, setMode] = useState(0);
  const [projects, setProjects] = useState(projectsOriginal);

  const changeMode = (val: number) => {
    setMode(val);
    setProjects(quickSort(projects, val, 0, projects.length - 1));
  };

  return (
    <>
      <div className="grid w-11/12 place-items-center m-5 font-montserrat">
        <GitHubCalendar username="bob-pham" />
        <a
          href="https://github.com/bob-pham"
          target="_"
          className="btn grid grid-cols-2 gap-0 text-white border-white border-2 my-2"
        >
          <Image src={gitlogo} alt="Github" />
          Github
        </a>
        <div className="tabs my-5 ">
          <button
            className={
              mode == 0
                ? "tab tab-bordered text-lg tab-active text-white"
                : "tab tab-bordered text-lg"
            }
            onClick={() => changeMode(0)}
          >
            Dev Curated
          </button>
          <button
            className={
              mode == 1
                ? "tab tab-bordered text-lg tab-active text-white"
                : "tab tab-bordered text-lg"
            }
            onClick={() => changeMode(1)}
          >
            Date Created
          </button>
        </div>
        <div className="grid place-self-start text-white text-2xl bg-gray-700 w-full px-10 rounded-xl py-1 font-bebasneue">
          <h1>{mode == 0 ? "Featured" : "Latest"}</h1>
        </div>
      </div>
      <div className="hero w-11/12 bg-base-200 rounded-3xl mb-3 bg-gradient-to-r from-slate-800 to-zinc-700 via-gray-800 animate-gradient-x font-montserrat hover:scale-110 transition duration-300 ease-in-out">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={
              images[projects[0]["name"]] != undefined
                ? images[projects[0]["name"]]
                : projectsDefault
            }
            className="rounded-lg w-11/12"
            alt={projects[0]["name"]}
          />
          <div>
            <h1 className="text-5xl font-bebasneue">{projects[0]["name"]}</h1>
            <div className="grid grid-cols-5 place-items-center w-fit bg-slate-900 p-2 rounded-xl">
              <Image className="col-span-1" src={calendar} alt="calendar" />
              <h1 className="col-span-4">
                {projects[0]["dateStart"] + " "}-{" " + projects[0]["dateEnd"]}
              </h1>
            </div>
            <p className="py-6">{projects[0]["description"]}</p>
            <div className="w-11/12">
              {projects[0]["tech"].map(item => (
                <span key={item} className="badge badge-outline m-1">
                  {item}
                </span>
              ))}
            </div>
            <a href={projects[0]["url"]}>
              <button className="btn bg-green-500 text-white my-4">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-rows-auto grid-x-2 gap-y-10 my-2 place-items-center w-11/12 ">
        {projects.slice(1).map(proj => (
          <ProjectCard
            name={proj["name"]}
            description={proj["description"]}
            tech={proj["tech"]}
            dateStart={proj["dateStart"]}
            dateEnd={proj["dateEnd"]}
            pagelink={proj["url"]}
            logo={
              images[proj["name"]] != undefined
                ? images[proj["name"]]
                : proj["script"]
                ? images["script"]
                : projectsDefault
            }
            key={proj["name"]}
          />
        ))}
      </div>
    </>
  );
}
