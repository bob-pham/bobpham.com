import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Chart } from "react-google-charts";
import aboutMe from "../../markdown/aboutme.mdx";

export default function AboutMe() {
  const [markdown, setMarkdown] = useState("");

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

  useEffect(() => {
    fetch(aboutMe)
      .then((response) => response.text())
      .then((str) => setMarkdown(str));
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 overflow-hidden w-11/12">
        <div className="bg-gray-400 h-fit my-3 rounded-xl px-10">
          <ReactMarkdown className="p-10 cols-span-1 text-lg font-montserrat text-slate-900">
            {markdown}
          </ReactMarkdown>
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
