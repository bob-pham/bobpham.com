import { useRef } from "react";
import Image from "next/image";

import ProjectHeader from "../components/ProjectHeader";

import addDatasetBlank from "../public/images/insight_ubc/add page.png";
import addDataset from "../public/images/insight_ubc/rooms_added.png";
import coursesQuery from "../public/images/insight_ubc/course_avg.png";
import sectionsQuery from "../public/images/insight_ubc/search_success.png";
import buildingDone from "../public/images/insight_ubc/building_search.png";

const tech = [
  "React",
  "TypeScript",
  "Express.js",
  "MaterialUI",
  "JSZip",
  "parse5",
];

export default function InsightUBC() {
  const development = useRef<null | HTMLHeadingElement>(null);
  const pictures = useRef<null | HTMLHeadingElement>(null);

  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="InsightUBC"
        logo={sectionsQuery}
        tech={tech}
        demo="HjFphuleU8M"
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          InsightUBC is a full stack web-app, that is the default project of
          UBC's CPSC 310 class. Within the InsightUBC project, we created a REST
          backend that was able to accept .zip's of JSON and HTM files for
          classroom and building information respectively, and allow users to
          query the parsed results.
        </p>
        <div className="grid place-items-center my-5 text-green-500">
          <div className="flex flex-col w-1/2 place-self-center">
            <h1 className="text-xl text-white text-center">Page Navigation</h1>
            <div className="divider"></div>
          </div>
          <button
            className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-700 hover:rounded-lg hover:px-4"
            onClick={() => {
              if (development.current) {
                window.scrollTo({
                  top: development.current.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          >
            - Development and Implementation
          </button>
          <button
            className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-700 hover:rounded-lg hover:px-4"
            onClick={() => {
              if (pictures.current) {
                window.scrollTo({
                  top: pictures.current.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          >
            - Image Gallery
          </button>
        </div>
        <div className="flex flex-col w-1/2 place-self-center">
          <h1 className="text-xl mt-10 text-center" ref={development}>
            Development + Implementation
          </h1>
          <div className="divider"></div>
        </div>
        <p>
          Within course constraints, my focus revolved around parsing and
          managing data from input .zip files. I utilized JSZip, FS-extra, and
          parse5 libraries, crafting a tailored data structure resembling a
          basic DBMS for efficient data storage and simplified queries.

          Please note that specific implementation details are restricted by
          course policies. In addition to these core tasks, I spearheaded the
          development of a practical Mocha/Chai testing suite. Furthermore, I
          built API endpoints using Express.js and designed React.js + Material
          UI frontend pages for user-friendly data querying. This hands-on
          approach demonstrates my versatility in both backend and frontend
          development, showcasing an ability to deliver effective solutions
          within defined parameters.
        </p>
      </div>
      <div className="grid place-items-center text-green-500" ref={pictures}>
        <h1 className="text-2xl">Image Gallery</h1>
        <div className="lg:w-1/2 md:w-5/6 w-11/12">
          <div className="carousel w-full rounded-xl max-h-80">
            <div
              id="slide1"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={addDatasetBlank}
                className="w-auto"
                alt="Add Dataset"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={addDataset}
                className="w-auto"
                alt="Add Dataset Populated"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={coursesQuery}
                className="w-auto"
                alt="Courses Query"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={sectionsQuery}
                className="w-auto"
                alt="Sections Query"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide5"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={buildingDone}
                className="w-auto"
                alt="Building Query"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10 w-full py-2 gap-2">
        <a href="#slide1" className="btn btn-xs">
          1
        </a>
        <a href="#slide2" className="btn btn-xs">
          2
        </a>
        <a href="#slide3" className="btn btn-xs">
          3
        </a>
        <a href="#slide4" className="btn btn-xs">
          4
        </a>
        <a href="#slide5" className="btn btn-xs">
          5
        </a>
      </div>
    </main>
  );
}
