import Image from "next/image";
import { Chart } from "react-google-charts";
import Popup from "reactjs-popup";

import profile from "../public/icons/thingaa.png";

const Profile = () => {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2">
        <Image src={profile} alt="Profile Picture" />
      </div>
    </div>
  );
};

export default function AboutMe() {
  const columns = [
    { type: "string", id: "Company" },
    { type: "string", id: "Bar Label" },
    { type: "string", role: "tooltip" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" }
  ];

  const rows = [
    [
      "Intel",
      "Firmware Engineer Intern",
      "Sep 2022 - Present | Developing firmware for custom security HW block, for next generation IPU's and FNIC's as part of NEX Cloud Networking Group (NCNG)",
      new Date(2022, 9, 6),
      new Date()
    ],
    [
      "UBC",
      "Studying - Honours CS",
      "Sep 2020 - Present | Relevant Courses: Data Structures and Algorithms, Software Design, Computer Systems",
      new Date(2020, 9, 6),
      new Date(2022, 9, 5)
    ],
    [
      "PRS",
      "Technical Assistant",
      "Jun 2021 - Aug 2021 | Project leader in Desktop and Laptop Repair",
      new Date(2021, 6, 1),
      new Date(2021, 8, 31)
    ]
  ];

  const option = {
    backgroundColor: "#9CA3AF",
    colors: ["#127cc1", "#6EC4E8", "#16A34A"],
    tooltip: {
      isHtml: true,
      textStyle: "#000000"
    },
    timeline: {
      barLabelStyle: {
        fontName: "montserrat",
        fontSize: 14,
        textStyle: "#000000"
      },
      rowLabelStyle: {
        fontName: "montserrat",
        fontSize: 14,
        color: "#0F172A"
      }
    },
    animation: {
      startup: true
    },
    hAxis: {
      // textStyle: '#FFFFFF'
    },
    fontName: "montserrat",
    allowHtml: true
  };

  const data = [columns, ...rows];

  return (
    <>
      <div className="grid sm:grid-cols-2 w-11/12">
        <div className="grid cols-span-1">
          <Popup
            trigger={
              <button>
                <Profile />
              </button>
            }
            modal
          >
            <div className="mx-10 bg-slate-600 p-10 rounded-xl grid place-items-center text-white font-montserrat overflow-hidden">
              <h1 className="text-xl text-green-500">
                This section is still a WIP
              </h1>
              <p className="text-lg">
                My vision for my final site is that everything that appears in
                this section currently to be entirely contained within the
                left-hand side, where the 'about me description' currently sits.
                On the right side, I would instead have an interactive, 3d model
                created with Three.js. I wanted to launch my site first, before
                working on any kind of model.
                <br />
                <br />
                This is similar to what I have on my legacy site. My legacy site
                was not made with any kind of JavaScript framework, which I
                wanted to migrate towards for greater interactivity. Most
                importantly however, the old model that I was using, though
                nice, is way to big, at almost 40mb. This heavily impact
                loadtimes, and given how little people statistically spend on
                these sites, I've decided to remove it until I create a new
                model, one that is more appropriately sized. The goal for this
                new model is to be under 1mb, which is a tough stretch.
                <br />
                <br />
                Check it out on my legacy site using the link below:
              </p>
              <a className="btn btn-accent" href="/legacy-portfolio-site">
                Legacy Site
              </a>
            </div>
          </Popup>
          <div className="grid place-items-center mt-2">
            <h1 className="font-montserrat text-center text-lg text-white pt-2 mb-2">
              Experience
            </h1>
            <div className="place-self-center pt-1 px-1 rounded-xl mb-5 bg-gray-400 w-3/4">
              <Chart
                chartType="Timeline"
                data={data}
                width="100%"
                height="50%"
                options={option}
                className=""
              />
            </div>
          </div>
          {/* <canvas></canvas> */}
          <div className="flex w-1/2 place-self-center text-white font-montserrat">
            <a
              href="/contact"
              className="h-fit p-2 flex-grow card bg-base-300 hover:bg-base-100 rounded-box text-center"
            >
              Contact
            </a>
            <div className="divider divider-horizontal"></div>
            <a
              href="/resume"
              className="h-fit p-2 flex-grow card bg-base-300 hover:bg-base-100 rounded-box text-center"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="grid overflow-hidden">
          <div className="grid bg-gradient-to-r from-slate-800 to-gray-800 h-full m-3 rounded-xl px-10 pb-10 overflow-hidden">
            <p className="text-white font-montserrat pt-10 place-self-center overflow-hidden">
              Hello! I'm Bob.
              <br />
              <br />
              I am a third-year honours computer science student at the
              University of British Columbia. Currently, I am a firmware
              engineer intern at Intel, as part of the NEX Cloud Networking
              Group (NCNG), working on firmware security. I am passionate about
              programming and am continually striving to push my abilities to
              the next level, understand new technologies, and learn industry
              practices.
              <br />
              <br />I am currently interested in internship opportunities for
              summer 2023. Message me for all inquiries and/or if you're
              interested in working together on a project!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
