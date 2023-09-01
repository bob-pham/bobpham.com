import { useState } from "react";
import Image from "next/image";
import Popup from "reactjs-popup";

import MenuBar from "../components/MenuBar";
import ResumeCode from "../components/ResumeCode";

import header from "../public/images/coopheader.png";
import Cornucopia from "../public/images/cornucopia/logo.png";

const Languages = () => {
  const [languages, setLanguages] = useState(0);
  return (
    <div
      className="w-full bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"
      onClick={() => setLanguages(1)}
    >
      <div className="indicator w-1/2">
        <span
          className={
            languages == 0
              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
              : "hidden"
          }
        >
          !
        </span>
        <h3 className="font-bold">Programming Languages:</h3>
      </div>
      <p>
        Assembly, Bash/Zsh, C, C++, C#, Go*, HTML + CSS, Java, JavaScript,
        LaTeX, Lua*, Python, R, Racket, Rust*, SQL, TypeScript
      </p>
    </div>
  );
};

const Frameworks = () => {
  const [frameworks, setFrameworks] = useState(0);
  return (
    <div
      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"
      onClick={() => setFrameworks(1)}
    >
      <div className="indicator w-11/12">
        <span
          className={
            frameworks == 0
              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
              : "hidden"
          }
        >
          !
        </span>
        <h3 className="font-bold">
          Frameworks, Engines, Libraries and Databases:
        </h3>
      </div>
      <p>
        Angular*, Bootstrap, Django, Flask, GraphQL*, Image Magick, JUnit,
        MongoDB*, MySQL*, Next.js*, Node.js*, OpenCV*, React, React Native*,
        TailwindCSS, Three.js, Unity
      </p>
    </div>
  );
};

const Tools = () => {
  const [tools, setTools] = useState(0);

  return (
    <div
      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"
      onClick={() => setTools(1)}
    >
      <div className="indicator w-3/4">
        <span
          className={
            tools == 0
              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
              : "hidden"
          }
        >
          !
        </span>
        <h3 className="font-bold">Development Tools and Environments</h3>
      </div>
      <p className="mb-0">
        Android Studio, Azure DevOps, CMake, Git/GitHub, IntelliJ IDEA, Jira,
        Linux*, Vim, Visual Studio, VSCode, Vite, Webpack*
      </p>
    </div>
  );
};

const Job1 = () => {
  const [job1, setJob1] = useState(0);

  return (
    <div
      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"
      onClick={() => setJob1(1)}
    >
      <div className="indicator w-full">
        <span
          className={
            job1 == 0
              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
              : "hidden"
          }
        >
          !
        </span>
        <div className="flex m-0 w-full">
          <strong className="w-1/2 text-left justify-self-start ">
            Intel - Firmware Engineer Intern
          </strong>
          <p className="w-1/2 text-right justify-self-end">
            Sep 2022 - Sep 2023
          </p>
        </div>
      </div>
      <ul className="leading-4 list-disc px-3">
        <li>
          Implementing new <strong>cryptographic algorithms</strong> for custom
          security HW block using <strong>Assembly</strong> and{" "}
          <strong>C</strong>, for next generation IPU's and FNIC's as part of
          NEX Cloud Networking Group (NCNG), FW security team
        </li>
        <li>
          designed binary data and <strong>device attestation</strong> parsers,
          streamlining verification and cross team collaboration
        </li>
        <li>
          Developing <strong>Python</strong> testing framework and system test
          suites that simplifiy verification of new functionality
        </li>
      </ul>
    </div>
  );
};

const Job2 = () => {
  const [job2, setJob2] = useState(0);

  return (
    <div
      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"
      onClick={() => setJob2(1)}
    >
      <div className="indicator w-full">
        <span
          className={
            job2 == 0
              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
              : "hidden"
          }
        >
          !
        </span>
        <div className="flex m-0 w-full">
          <strong className="w-3/4 text-left justify-self-start ">
            Product Repurposing Solutions - Technical Assistant
          </strong>
          <p className="w-1/4 text-right justify-self-end">
            Jun 2021 - Aug 2021
          </p>
        </div>
      </div>
      <ul className="leading-4 list-disc px-3">
        <li>
          Project leader of the computer repair and refurbish process,
          contributing to shipping and receiving, inventory management,
          warehouse organization, and desktop and laptop repair
        </li>
        <li>
          Restructured laptop repair infrastructure and logistics, increasing
          productivity by <strong>200%</strong>
        </li>
      </ul>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState(0);

  return (
    <div
      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"
      onClick={() => setProjects(1)}
    >
      <div className="indicator w-1/3">
        <span
          className={
            projects == 0
              ? "indicator-item indicator-end badge badge-accent animate-bounce font-montserrat"
              : "hidden"
          }
        >
          !
        </span>
        <h2 className="font-bold text-xl m-0">Technical Projects</h2>
      </div>
    </div>
  );
};

const Project1 = () => {
  const [project1, setProject1] = useState(0);
  return (
    <div
      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"
      onClick={() => setProject1(1)}
    >
      <div className="flex m-0">
        <div className="indicator w-full">
          <span
            className={
              project1 == 0
                ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
                : "hidden"
            }
          >
            !
          </span>
          <div className="flex w-full">
            <strong className="w-3/4 text-left justify-self-start ">
              Benten - C++
            </strong>
            <p className="w-1/4 text-right justify-self-end">
              Sep 2022 - Present
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p>Multithreaded CLI Image Editor</p>
        <ul className="list-disc leading-4 px-3">
          <li>
            Isolates areas by similar colour or shape using BFS and
            edge-detection algorithms for parallel processing
          </li>
          <li>
            Safeguards against race conditions and deadlocks using mutexes and
            semaphores
          </li>
          <li>
            Edits and saves images into 10 complex predefined styles using Image
            Magick library
          </li>
        </ul>
      </div>
    </div>
  );
};

const Project2 = () => {
  const [project2, setProject2] = useState(0);
  return (
    <div
      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"
      onClick={() => setProject2(1)}
    >
      <div className="flex m-0">
        <div className="flex w-full">
          <div className="indicator w-3/4">
            <span
              className={
                project2 == 0
                  ? "indicator-item indicator-end badge badge-accent animate-bounce font-montserrat"
                  : "hidden"
              }
            >
              !
            </span>
            <strong className="text-left justify-self-start ">
              Cornucopia - Python, Django, OpenCV, JavaScript, React
            </strong>
          </div>
          <p className="w-1/4 text-right justify-self-end">May - Jul 2022</p>
        </div>
      </div>
      <div className="w-full">
        <p>
          Full-stack web app that reduces food waste by scanning grocery
          receipts to manage kitchen pantries
        </p>
        <ul className="list-disc leading-4 px-3">
          <li>
            Grocery receipt image manipulation and text recognition accomplished
            with <strong>OpenCV</strong>and <strong>PyTesseract</strong>
          </li>
          <li>
            Developed custom unit testing framework to assess accuracy of text
            parsing and filtering algorithms
          </li>
          <li>
            Notifies users of food recalls using periodic API calls to
            government institutions and a web scraper
          </li>
          <li>
            Backend logic managed with <strong>Django</strong>, user data stored
            in <strong>SQL</strong> database, and frontend created with{" "}
            <strong>React</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Project3 = () => {
  const [project3, setProject3] = useState(0);
  return (
    <div
      className="bg-white transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2"
      onClick={() => setProject3(1)}
    >
      <div className="flex m-0">
        <div className="indicator w-full">
          <span
            className={
              project3 == 0
                ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
                : "hidden"
            }
          >
            !
          </span>
          <div className="flex w-full">
            <strong className="w-3/4 text-left justify-self-start ">
              Hercules - Java, Android, Android Studio
            </strong>
            <p className="w-1/4 text-right justify-self-end">Jan 2022</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p>
          Android app which incentivizes healthy living by gamifying healthy
          habits
        </p>
        <ul className="list-disc leading-4 px-3">
          <li>
            Developed backend systems managing in-game currency, experience,
            item-inventory, item-shop, quests, and questline systems using{" "}
            <strong>Java</strong>, and frontend GUI with{" "}
            <strong>Android Studio</strong> tools and <strong>XML</strong>
          </li>
          <li>
            Architected algorithm that encourages continuous user progress by
            rewarding users in-game experience and currency based on consistency
            in questline completion
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function Resume() {
  return (
    <>
      <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-xy overflow-hidden scroll-smooth snap-proximity snap-y">
        <MenuBar head="Resume" />
        <div className="grid place-items-center mt-20">
          <h1 className="font-montserrat text-white text-xl text-center">
            Interactive Resume
          </h1>
          <h3 className="text-center">
            Created Entirely with React + TailwindCSS! Identical to my actual
            resume!
          </h3>
          <h3 className="font-montserrat text-green-500 text-lg mb-5 animate-bounce">
            Click around!
          </h3>

          <a
            href="https://drive.google.com/file/d/1s9E60gqCFklQF0CQgA9NobL5Ain8a6b9/view?usp=share_link"
            target="_"
            className="btn btn-accent my-5"
          >
            Download my real resume here
          </a>
        </div>
        <div className="grid place-self-center place-items-center w-11/12 overflow-scroll mt-5  text-[14px]">
          <article className="place-self-center bg-white w-[794px] h-[1123px] pt-5 z-0">
            <div className="flex justify-end w-full px-10">
              <Image className="w-3/4 " src={header} alt="Co-op Header" />
            </div>
            <div className="flex flex-col font-serif text-black px-[80px] w-full">
              <div className="flex w-full">
                <div className="w-5/12 justify-self-start">
                  <h1 className="text-4xl font-bold">Bob Pham</h1>
                  <p className="text-left transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">
                    <strong>Email:</strong> bobbaopham@gmail.com
                  </p>
                  <p className="text-left transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">
                    <strong>Phone:</strong> (604) - 352 - 2975
                  </p>
                  <h2 className="font-bold text-xl">Education</h2>
                </div>
                <div className="w-7/12 justify-self-end mt-4 overflow-visible">
                  <a href="https://www.linkedin.com/in/bobpham" target="_">
                    <p className="text-right transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">
                      <strong>Linkedin:</strong>{" "}
                      https://www.linkedin.com/in/bobpham
                    </p>
                  </a>
                  <a href="/">
                    <p className="text-right transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">
                      <strong>Website:</strong> https://bob-pham.github.io/
                    </p>
                  </a>
                  <a href="https://github.com/bob-pham" target="_">
                    <p className="text-right transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">
                      <strong>Github:</strong> https://github.com/bob-pham
                    </p>
                  </a>
                </div>
              </div>
              <div className="divider bg-black h-[2px] m-0"></div>
              <div className="flex w-full mt-0">
                <div className="flex w-full">
                  <p className="justify-self-start w-10/12">
                    <strong>University of British Columbia</strong> - Vancouver,
                    BC
                  </p>
                  <strong className="justify-self-end text-right w-6/12">
                    Expected Graduation: May 2025
                  </strong>
                </div>
              </div>
              <div className="w-full">
                <ul className="list-disc px-3 m-0 leading-snug">
                  <li>
                    3rd Year Bachelor of Science,{" "}
                    <strong>Honours Computer Science</strong>
                  </li>
                  <li>
                    4.1 GPA (87%) Overall, 4.33 GPA (90%) Computer Science (4.33
                    Scale)
                  </li>
                  <li>
                    Relevant courses: Data Structures and Algorithms, Software
                    Design, Computer Systems
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-xl m-0">Technical Skills</h2>
                <div className="divider bg-black h-[2px] m-0"></div>
                <div className=" leading-5 grid">
                  <Popup
                    trigger={
                      <button className="w-full flex text-left">
                        <Languages />
                      </button>
                    }
                    modal
                  >
                    <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 mx-20 font-montserrat">
                      <h1 className="font-bold mb-10">Programming Languages</h1>
                      <p>
                        Learning a new programming languages is something that I
                        really enjoy, which is why I have so many listed here.
                        Of course I haven't mastered every language, but I've
                        made a todo list with most of these.
                        <br />
                        <br />
                        My most comfortable languages are:
                      </p>
                      <ul className="list-disc leading-4">
                        <li>Python</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>JavaScript/TypeScript</li>
                      </ul>
                    </div>
                  </Popup>
                  <Popup
                    trigger={
                      <button className="w-full text-left">
                        <Frameworks />
                      </button>
                    }
                    modal
                  >
                    <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">
                      <h1 className="font-bold mb-10">
                        Frameworks, Engines, Libraries and Databases
                      </h1>
                      <p>
                        You don't always have to reinvent the wheel for every
                        project - even if I try to. Most of my projects have
                        been full-stack, and so most of this list revolves
                        around that, though my favorite library to play with is
                        OpenCV.
                        <br />
                        <br />
                      </p>
                      <p className="text-center">
                        My current go-to tech stack:
                      </p>
                      <ul className="list-disc leading-4">
                        <li>React + NextJS</li>
                        <li>Tailwindcss</li>
                        <li>Flask</li>
                        <li>MongoDB</li>
                      </ul>
                    </div>
                  </Popup>
                  <Popup
                    trigger={
                      <button className="w-full text-left">
                        <Tools />
                      </button>
                    }
                    modal
                  >
                    <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">
                      <h1 className="font-bold mb-5">
                        Development Tools and Environments
                      </h1>
                      <p>My current developer setup is:</p>
                      <ul className="list-disc leading-4">
                        <li>VSCode</li>
                        <li>VSCode Neovim - Extension (Highly recommended)</li>
                        <li>Atom One Dark Pro - Theme</li>
                        <li>Glassit (opacity: 246) - Extension</li>
                        <li>Oh my posh (windows) / Oh my zsh (Linux)</li>
                        <li>FiraMono Nerd Font & Agnoster</li>
                        <li>Git/GitHub</li>
                      </ul>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex w-full">
                  <h2 className="w-1/2 font-bold text-xl m-0 justify-self-start">
                    Experience
                  </h2>
                  <p className="w-1/2 m-0 text-right justify-self-end text-[12px]">
                    *Currently Acquiring
                  </p>
                </div>
                <div className="divider bg-black h-[2px] m-0"></div>
                <Popup
                  trigger={
                    <button className="w-full text-left">
                      <Job1 />
                    </button>
                  }
                  modal
                >
                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">
                    <h1 className="font-bold">
                      Intel - Firmware Engineer Intern
                    </h1>
                    <p>
                      As of the time of writing, I am a Firmware Engineer Itern
                      at Intel. Since I work in a security team and handle
                      sensitive device information/secrets, I cannot speak about
                      much of what I was able to create and accomplish. As far
                      as what is currently within the resume, this is a
                      representative but vague description of some of these
                      tasks. Though, based on these facts the knowledgable
                      reader should be able to extrapolate my abilities. Feel
                      free to contact me if you want any clarifications. many of
                      my accomplishments at Intel need to be kept vague and
                      non-specific.
                      <br />
                      <br />
                      Other tidbits of information:
                    </p>
                    <ul className="list-disc leading-4">
                      <li>Intel Security Yellow + White Belt Certified</li>
                      <li>
                        Developed suite of scripts to parse and interpret
                        previously unknown binary data
                      </li>
                      <li>
                        Implemented assembly microcode of functions implementing
                        cutting edge cryptography algorithms
                      </li>
                      <li>Pushing for further C adoption within team</li>
                    </ul>
                  </div>
                </Popup>
                <Popup
                  trigger={
                    <button className="w-full text-left">
                      <Job2 />
                    </button>
                  }
                  modal
                >
                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">
                    <h1 className="font-bold">Product Repurposing Solutions</h1>
                    <p>
                      Product Repurposing Solutions (PRS) is a local business
                      that refurbishes used electronics. As one of the first
                      hires are PRS, I was able to influence much of the repair
                      and refurbish process, and was able to touch many
                      different aspects of the business, though my focus was
                      primarily on laptop repair.
                      <br />
                      <br />
                      Part of being a professional is being knowledgable in the
                      tools that you use. Having a job both designing low-level
                      computer systems and repairing them are skills that I
                      value.
                    </p>
                  </div>
                </Popup>
              </div>
              <div className="flex flex-col">
                <Popup
                  trigger={
                    <button className="w-full text-left">
                      <Projects />
                    </button>
                  }
                  modal
                >
                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">
                    <h1 className="font-bold">Technical Projects</h1>
                    <p>
                      Just like every other computer science students, I work on
                      a lot of technical projects in my spare time. The three
                      projects here are the three that I am currently the most
                      proud of. A complete list of my projects can be found on
                      the home page.
                    </p>
                  </div>
                </Popup>
                <div className="divider bg-black h-[2px] m-0"></div>
                <Popup
                  trigger={
                    <button className="w-full text-left">
                      <Project1 />
                    </button>
                  }
                  modal
                >
                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">
                    <h1 className="font-bold">Benten</h1>
                    <p>
                      Benten is a multithreaded CLI image editor written in C++
                      and utilizes the ImageMagick library. Benten does not give
                      the user the usual granular control of a traditional
                      editor, rather it transforms images into predefined
                      permutations. Each permutation is a testbed for different
                      algorithms, and computer vision tools.
                      <br />
                      <br />
                      Current permutations supported / under development (goal
                      is to have 10):
                    </p>
                    <ul className="list-disc leading-4">
                      <li>PixelArtTransform</li>
                      <li>TriangleVectorTransform</li>
                      <li>CircleAreaTransform</li>
                      <li>AbstractBlobTransform</li>
                      <li>ColorReducer</li>
                      <li>Silhoutter</li>
                    </ul>
                    <a href="/benten">
                      <button className="btn bg-green-500 text-white mt-10">
                        Learn More
                      </button>
                    </a>
                  </div>
                </Popup>
                <Popup
                  trigger={
                    <button className="w-full text-left">
                      <Project2 />
                    </button>
                  }
                  modal
                >
                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">
                    <h1 className="font-bold">Cornucopia</h1>
                    <Image
                      className="w-1/2 my-5"
                      src={Cornucopia}
                      alt="Cornucopia"
                    />
                    <p>
                      Project Cornucopia PythonDjangoReactTailwindcssOpenCV
                      Cornucopia is an app which helps users manage kitchen
                      pantries and minimize food waste Users are able to add
                      grocery items to their pantry, and Cornucopia will notify
                      them when their items are expired. Pantry items can be
                      added individually, or in batches by scanning grocery
                      receipts. Additionally, users will be notified if any food
                      item within their pantry has been recalled for saftey
                      reasons. Cornucopia also is able to scan user pantry, and
                      suggest meals which use items that may expire soon.
                    </p>
                    <a href="/project-cornucopia">
                      <button className="btn bg-green-500 text-white mt-10">
                        Learn More
                      </button>
                    </a>
                  </div>
                </Popup>
                <Popup
                  trigger={
                    <button className="w-full text-left">
                      <Project3 />
                    </button>
                  }
                  modal
                >
                  <div className="grid place-items-center bg-gradient-to-br from-slate-700 to-blue-900 via-gray-700 animate-gradient-x rounded-lg p-10 font-montserrat mx-10">
                    <h1 className="font-bold">Hercules</h1>
                    <p>
                      Hercules is a project created during NwHacks 2022 by
                      myself and a team of three others. Hercules is a
                      "gamified" health tracking app, oriented towards those who
                      struggle to maintain a healthy lifestyle. The app is
                      engineered to incentivize users to work out, eat well, and
                      develop healthy habits by rewarding them for fulfilling
                      their fitness plans, or “questlines”, which are comprised
                      of different tasks. Each user has a customizable avatar,
                      and upon completion of certain goals "quests", users will
                      earn gold and experience points that can be used to buy
                      items at the shop and increase their character’s stats. As
                      a proof of concept developed over the course of 24 hours,
                      it is relatively simple, however a simple algorithm was
                      developed to make it harder to earn rewards with
                      inconsistent or unhealthy progress.
                    </p>
                    <a href="/hercules">
                      <button className="btn bg-green-500 text-white mt-10">
                        Learn More
                      </button>
                    </a>
                  </div>
                </Popup>
              </div>
            </div>
          </article>
        </div>
        <ResumeCode />
      </main>
    </>
  );
}
