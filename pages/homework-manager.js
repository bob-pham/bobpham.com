import { useRef } from "react";
import Image from "next/image";

import ProjectHeader from "../components/ProjectHeader";

import AddClass from "../public/images/hw_manager/hw add class.png";
import HomeScreen from "../public/images/hw_manager/hw homescreen.png";
import ViewClass from "../public/images/hw_manager/hw view class.png";

const tech = ["JavaScript", "HTML", "CSS"];

export default function HomeworkManager() {

  const development = useRef(null);
  const pictures = useRef(null);

  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="Homework Manager"
        logo={HomeScreen}
        tech={tech}
        gitLink="https://github.com/bob-pham/homework_manager"
        demo="2x9oMn2Jy0w"
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          A Google chrome extension that helps manage upcoming assignments and
          grades. The extension generates a todo-list based on upcoming
          deadlines and assessment weights, and calculates current grades. The
          extension also allows for setting additional reminders prior to the
          due date.
        </p>
        <div className="grid place-items-center my-5 text-green-500">
          <div className="flex flex-col w-1/2 place-self-center">
            <h1 className="text-xl text-white text-center">Page Navigation</h1>
            <div className="divider"></div>
          </div>
          <button
            className="my-2"
            onClick={() =>
              window.scrollTo({
                top: Dev.current.offsetTop,
                behaviour: "smooth",
              })
            }
          >
            - Development and Implementation
          </button>
          <button
            className="my-2"
            onClick={() =>
              window.scrollTo({
                top: pictures.current.offsetTop,
                behaviour: "smooth",
              })
            }
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
          I completed numerous different iterations of this project, but due to
          my perfectionism never truly saw it as done, but a project needs to
          come to an end at some point. The concept behind the project is
          relatively simple. Its simplicity allows me to experiment with
          frontend technologies and different data structures and algorithms.
          <br />
          <br />
          Additionally, I am a strong believer in the idea that you must truly
          understand the technologies that you use. Due to this reason, no
          JavaScript Frameworks are used, and everything is done purely with
          Vanilla JavaScript, as well as HTML + CSS. From this I was able to
          learn many of the underlying features that modern frameworks utilize:
          the program is structured in such a way that I essentially created my
          own custom pseudo-framework. Will I ever do something like this again?
          Probably not, but it was a good experience, and has inspired me to
          potentially actually make a true framework in the future. (I am
          currently being inspired by Blazor + Svelt 👀)
          <br />
          <br />
          I created the program with object-oriented design patterns shaped
          around assessments, subclasses, assignments, and tasks. These were
          implemented using a composite design pattern, with assessments being
          an abstract class and assignments and tasks extending it. This allowed
          assignments to have subtasks associated with them, which may also have
          their subtasks. This simplified grade and weight calculations, as one
          could quickly iterate through assessments of children to calculate the
          weight. Updating the parents of children was done using an observer
          pattern, which decreased coupling in the code.
          <br />
          <br />
          The todo-list was implemented using a priority system. Initially, this
          was accomplished using a sorted array of assessments; however, this
          had terrible asymptotic runtimes. The to-do-list priority system had
          three primary functions: insertAssessment, removeAssessment, and
          update, which would re-sort the assessments based on priority if
          values in an assessment were changed. Insert/removeAssessment ran at{" "}
          <strong>O(n)</strong> with my initial sorted array implementation. Due
          to sorting, update ran at <strong>O(n^2)</strong> using the quicksort
          algorithm. To improve the asymptotic runtimes, I changed the
          implementation to a priority tree, implemented with a binary heap data
          model. This drastically improved the runtimes of
          insert/removeAssessment to <strong>O(logn)</strong> and{" "}
          <strong>O(n)</strong> for update. The frontend of advanced homework
          planner was created using HTML and CSS. Initially, this was done with
          the BootStrap framework; however, this is currently being redone to
          use CSS grid. Grid gives the same responsiveness as BootStrap but has
          the advantage of making the HTML more readable and making the bundle
          size smaller.
        </p>
      </div>
      <div className="grid place-items-center text-green-500" ref={pictures}>
        <h1 className="text-2xl">Image Gallery</h1>
        <div className="w-1/2">
          <div className="carousel w-full rounded-xl max-h-80">
            <div
              id="slide1"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image src={AddClass} className="w-auto" alt="Add Class"/>
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
              <Image src={ViewClass} className="w-auto" alt="View Class"/>
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
              <Image src={HomeScreen} className="w-auto" alt="Home Screen"/>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
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
      </div>
    </main>
  );
}
