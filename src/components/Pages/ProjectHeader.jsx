import Youtube from "react-youtube";

import MenuBar from "../Home/MenuBar";
import gitlogo from "../../assets/icons/github.png";
import projects from "../../assets/images/projects.png"

export default function ProjectHeader(props) {
  return (
    <>
      <MenuBar />
      <img className="pt-16 pb-4 px-4 max-h-96 place-self-center" src={props.logo ? props.logo : projects} />
      <h1 className="text-center my-5 text-4xl">{props.name}</h1>
      <div className="flex flex-col w-1/2 border-opacity-50 place-self-center">
        <a
          href={props.gitLink ? props.gitLink : "https://github.com/bob-pham"}
          target="_"
          className="btn grid grid-cols-2 gap-0 text-white border-white border-2 mt-2 mb-5 w-1/4 place-self-center"
        >
          <img src={gitlogo} />
          Github
        </a>
        <div className="place-self-center">
          {props.tech.map((item) => (
            <span className="badge badge-outline mx-1 text-lg p-4">{item}</span>
          ))}
        </div>
        <div className="divider "></div>
      {props.demo ? <Youtube
        videoId={props.demo}
        className="place-self-center max-w-fit mb-10"
      /> : null} 
      </div>
    </>
  );
}
