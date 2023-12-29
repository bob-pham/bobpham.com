import { useState } from "react";
import Image from "next/image";
import Popup from "reactjs-popup";

import MenuBar from "../components/MenuBar";

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
          className={languages == 0
            ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
            : "hidden"}
        >
          !
        </span>
        <h3 className="font-bold">Programming Languages:</h3>
      </div>
      <p>
        Assembly (x86/ARM), Bash/Zsh, C, C++, C#, HTML + CSS, Java, JavaScript,
        LaTeX, Lua, PHP, Python, R, Racket, SQL, TCL, TypeScript, Verilog/System
        Verilog
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
          className={frameworks == 0
            ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
            : "hidden"}
        >
          !
        </span>
        <h3 className="font-bold">
          Frameworks, Engines, Libraries and Databases:
        </h3>
      </div>
      <p>
        Bootstrap, Django, Docker, Express, Flask, Image Magick, JUnit, Mocha,
        MySQL, Next.js, Node.js, OpenCV, OpenGL, React, React Native,
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
          className={tools == 0
            ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
            : "hidden"}
        >
          !
        </span>
        <h3 className="font-bold">Development Tools and Environments</h3>
      </div>
      <p className="mb-0">
        AWS, Azure DevOps, CMake, Git/GitHub, Jetbrains, Jira, Linux, Vim,
        Visual Studio, VSCode, Vite
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
          className={job1 == 0
            ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
            : "hidden"}
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
          Lead the development of the X.509 certificate generation feature for
          SPDM compliant device attestation for a next generation security
          offload IP, implemented in <strong>assembly</strong>
        </li>
        <li>
          Primary developer of a suite of <strong>Python</strong>{" "}
          applications for the generation, verification, and parsing of
          certificates and certificate chains relating to device attestation,
          simplifying cross team development, communication, and collaboration
        </li>
        <li>
          Upgraded and enhanced the IP to support next-generation{" "}
          <strong>signing</strong>, <strong>hashing</strong>, and{" "}
          <strong>asymmetric key encryption cryptographic algorithms</strong>
          {" "}
          using
          <strong>assembly</strong> and <strong>C</strong>
        </li>
        <li>
          Developed a <strong>Python</strong> wrapper for a{" "}
          <strong>TCL + SV</strong>{" "}
          test suite, allowing for faster test development and simpler
          integration with modern security libraries and verification tools
        </li>
        <li>
          Authored a control flow visualization tool using{" "}
          <strong>Python</strong> and{" "}
          <strong>Graphviz</strong>, which generates UML diagrams live during
          CPU simulation execution, increasing developer visibility into a
          previously black-box system
        </li>
        <li>
          Refactored testing infrastructure to utilize multi-threading for test
          generation and execution, reducing total runtime by upwards of 500%
        </li>
        <li>
          Gained strong understanding of cryptography security protocols for
          both software and firmware development, earning a white and yellow
          belt in Intel’s security belt certification program
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
          className={job2 == 0
            ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
            : "hidden"}
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
          className={projects == 0
            ? "indicator-item indicator-end badge badge-accent animate-bounce font-montserrat"
            : "hidden"}
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
            className={project1 == 0
              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
              : "hidden"}
          >
            !
          </span>
          <div className="flex w-full">
            <strong className="w-3/4 text-left justify-self-start ">
              Benten - C++, OpenGL, Image Magick, FFMPEG
            </strong>
            <p className="w-1/4 text-right justify-self-end">
              Sep 2023 - Present
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p>Multithreaded CLI Image Editor</p>
        <ul className="list-disc leading-4 px-3">
          <li>
            Implemented advanced image processing algorithms, including edge
            detection, color correction, and noise reduction, to enhance the
            visual quality of images/videos, and isolating them for parallel
            processing
          </li>
          <li>
            Used <strong>OpenGL</strong>{" "}
            to leverage the system’s GPU for enhanced performance and rendering
            capabilities
          </li>
          <li>
            Safeguards against race conditions and deadlocks using mutexes and
            semaphores
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
              className={project2 == 0
                ? "indicator-item indicator-end badge badge-accent animate-bounce font-montserrat"
                : "hidden"}
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
            Scans, parses, and saves grocery receipts with{" "}
            <strong>OpenCV</strong>and <strong>PyTesseract</strong>
          </li>
          <li>
            Utilized graph theory (<strong>BFS</strong>,{" "}
            <strong>Dijkstra</strong>) to develop a recipe recommendation
            engine, generating personalized suggestions based on ingredients,
            expiration dates, and user preferences
          </li>
          <li>
            Created database schema to store user data and recipes using{" "}
            <strong>Django’s ORM</strong> and <strong>MySQL</strong>
          </li>
          <li>
            Created secure API endpoints with appropriate authentication
            mechanisms, such as token-based authentication, to protect sensitive
            user data and ensure secure interactions with the application
          </li>
          <li>
            Responsive User Interface developed using <strong>React</strong>,
            {" "}
            <strong>Tailwindcss</strong>, and <strong>Vite</strong>
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
            className={project3 == 0
              ? "indicator-item indicator-center badge badge-accent animate-bounce font-montserrat"
              : "hidden"}
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
            href="https://drive.google.com/file/d/1-q4rHFroVfRtFb7E8BxK8_6hsjdpNF_M/view"
            target="_"
            className="btn btn-accent my-5"
          >
            Download my real resume here
          </a>
        </div>
        <div className="grid place-self-center place-items-center w-11/12 overflow-scroll mt-5  text-[14px]">
          <article className="place-self-center bg-white w-[794px] h-[1123px] pt-5 z-0">
            <div className="flex flex-col font-serif text-black px-[56px] w-full mt-10">
              <div className="grid grid-cols-1 w-max place-items-center">
                <div className="grid w-max place-items-center">
                  <h1 className="text-4xl font-bold w-max">Bob Pham</h1>
                </div>
                <div className="w-max grid place-items-center grid-cols-5">
                  <p className="text-left mx-[-4px] px-[-4px] transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">
                    bobbaopham@gmail.com |
                  </p>
                  <p className="text-left mx-[-4px] px-[-4px] transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">
                    (604) - 352 - 2975 |
                  </p>
                  <a href="https://www.linkedin.com/in/bobpham" target="_">
                    <p className="text-right mx-[-4px] px-[-4px] transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">
                      linkedin.com/in/bobpham |
                    </p>
                  </a>
                  <a href="/">
                    <p className="text-right mx-[-4px] px-[-4px] transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">
                      bobpham.vercel.app |
                    </p>
                  </a>
                  <a href="https://github.com/bob-pham" target="_">
                    <p className="text-right mx-[-4px] px-[-4px] transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 rounded-lg hover:px-2">
                      github.com/bob-pham
                    </p>
                  </a>
                </div>
              </div>
              <h2 className="font-bold text-xl">Education</h2>
              <div className="divider bg-black h-[2px] m-0"></div>
              <div className="flex w-full mt-0">
                <div className="flex w-full">
                  <p className="justify-self-start w-10/12">
                    <strong>University of British Columbia</strong>{" "}
                    - Vancouver, BC
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
                    4.1 GPA (88%) Overall, 4.33 GPA (90%) Computer Science (4.33
                    Scale)
                  </li>
                  <li>
                    Relevant courses: Object Oriented Programming, Algorithms
                    and Data Structures, Computer Systems, Relational Databases,
                    Software Engineering, Algorithm Design and Analysis
                  </li>
                </ul>
              </div>
              <div className="flex flex-col ">
                <div className="flex w-full">
                  <h2 className="w-1/2 font-bold text-xl m-0 justify-self-start">
                    Experience
                  </h2>
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
                      I was able to spend a year working as a Firmware Engineer
                      Itern at Intel. Since I work in a security team and handle
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
              </div>
            </div>
          </article>
        </div>
        <a
          href="https://github.com/bob-pham/bob-pham.github.io/blob/version2/pages/resume.tsx"
          target="_"
          className="btn grid grid-cols-2 gap-0 bg-green-600 hover:bg-green-400 text-white border-white border-2 mt-2 mb-5 w-fit place-self-center"
        >
          Review the code here!
        </a>
      </main>
    </>
  );
}
