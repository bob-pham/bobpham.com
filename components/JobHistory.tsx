import React from "react";
import JobCard from "./ui/job-card";

export default function JobHistory() {
  return (
    <div className="text-white my-16 w-full max-w-screen">
      <h3 className="py-16 text-white sm:text-xl md:text-3xl lg:text-5xl font-bold text-center ">
        Experience
      </h3>
      <div className="grid columns-1 place-items-center">
        <JobCard
          name="UBC Orbit"
          date="Sep 2023 - May 2025"
          position="Firmware Developer"
          logo="/logos/ubc_orbit.png"
          link="/experience/ubc-orbit"
          description="Firmware developer on the Command and Data Handling (CDH) subteam, writing build systems, internal tools, and device drivers"
        />
        <JobCard
          name="Invinity Energy Systems"
          date="May 2024 - Aug 2024"
          position="Software Engineer Intern"
          logo="/logos/invinity_energy_systems_logo.svg"
          link="/experience/invinity-energy-systems"
          description="Software engineer intern, developing scalable high-performance web application for controlling and monitoring distributed battery grids"
        />
        <JobCard
          name="Intel"
          date="Sep 2022 - Sep 2023"
          position="Firmware Engineer Intern"
          logo="/logos/intel_logo.png"
          link="/experience/invinity-energy-systems"
          description="Firmware engineer intern, developing firmware, microcode, and software for a next generation hardware security module for IPU and FNIC SoC's"
        />
      </div>
      <h3 className="py-16 text-white sm:text-xl md:text-3xl lg:text-5xl font-bold text-center ">
        Education
      </h3>
      <div className="grid columns-1 place-items-center">
        <JobCard
          name="University of British Columbia"
          date="Sep 2020 - Present"
          position="BSc. of Science - Computer Science"
          logo="/logos/ubc logo.png"
          description="Introduction to Software Engineering (CPSC 310) Teaching Assistant. x4 Deans Honour List"
        />
      </div>
    </div>
  );
}
