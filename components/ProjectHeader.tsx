import Image from "next/image";

import Youtube from "react-youtube";

import MenuBar from "./MenuBar";
import gitlogo from "../public/icons/github.png";
import projects from "../public/images/projects.png";

export default function ProjectHeader(props: any) {
  return (
    <>
      <MenuBar head={props.name} />
      <Image
        className="pt-24 pb-4 px-4 max-h-96 w-auto place-self-center"
        src={props.logo ? props.logo : projects}
        alt={props.name}
      />
      <h1 className="text-center my-5 text-4xl">{props.name}</h1>
      <div className="flex flex-col sm:w-1/2 w-3/4 border-opacity-50 place-self-center">
        <a
          href={props.gitLink ? props.gitLink : "https://github.com/bob-pham"}
          target="_"
          className="btn grid grid-cols-2 gap-0 text-white border-white border-2 mt-2 mb-5 w-fit place-self-center"
        >
          <Image src={gitlogo} alt="Github" />
          Github
        </a>
        <div className="place-self-center">
          {props.tech.map((item: any) => (
            <span
              key={item}
              className="badge badge-outline mx-1 lg:text-lg md:text-md text-sm p-4"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="divider "></div>
        {props.demo ? (
          <div className="w-full align-self-center justify-self-center mb-10">
            <Youtube
              videoId={props.demo}
              opts={{
                width: "100%"
              }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
