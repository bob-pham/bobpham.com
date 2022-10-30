import { Chart } from "react-google-charts";

export default function AboutMe() {

  const columns = [
    { type: "string", id: "Company" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ];

  const rows = [
    ["Intel", new Date(2022, 9, 6), new Date()],
    ["UBC", new Date(2020, 9, 6), new Date(2022, 9, 5)],
    ["PRS", new Date(2021, 6, 1), new Date(2021, 8, 31)],
  ];

  const option = {
    backgroundColor: "#9CA3AF",
    timeline: {
      barLabelStyle: {
        fontName: "montserrat",
        fontSize: 14,
        color: "#0F172A",
      },
      rowLabelStyle: {
        fontName: "montserrat",
        fontSize: 14,
        color: "#0F172A",
      },
    },
    animation: {
      startup: true,
    },
    fontName: "montserrat",
  };

  const data = [columns, ...rows];

  return (
    <>
      <div className="grid grid-cols-2 overflow-hidden w-11/12">
        <div className="bg-gray-400 h-fit m-3 rounded-xl px-10 drop-shadow-2xl">
          <p className="text-slate-900 font-montserrat pt-10">
            Hello! I'm Bob. 
            <br/>
            <br/>
            I am a third-year honours computer science student
            at the University of British Columbia. Currently, I am a firmware
            engineer intern at Intel, as part of the Ethernet Products Group
            (EPG), working on firmware security. I am passionate about
            programming and am continually striving to push my abilities to the
            next level, understand new technologies, and learn industry
            practices. 
            <br/>
            <br/>
            I am currently interested in internship opportunities for
            summer 2023. Message me for all inquiries and/or if you're
            interested in working together on a project!
          </p>
          <h1 className="font-bebasneue text-center text-2xl text-slate-900 pt-2 mb-2">
            Experience
          </h1>
          {/* TODO: Animate timeline when first viewed */}
          <Chart
            chartType="Timeline"
            data={data}
            width="100%"
            height="50%"
            options={option}
          />
        </div>
        <canvas className="cols-span-1"></canvas>
      </div>
    </>
  );
}
