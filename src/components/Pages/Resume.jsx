import MenuBar from "../Home/MenuBar";

import header from "../../assets/images/coopHeader.png";

export default function Resume() {
  return (
    <>
      <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-xy overflow-hidden scroll-smooth snap-proximity snap-y">
        <MenuBar />
        <div className="grid place-items-center mt-20">
          <h1 className="font-montserrat text-white text-xl text-center">
            Interactive Resume
          </h1>
          <h3>
            Created Entirely with React + CSS! Identical to my actual resume!
          </h3>
          <h3 className="font-montserrat text-green-500 text-lg mb-5">
            Click around!
          </h3>
        </div>
        <div className="grid place-self-center place-items-center w-11/12 overflow-scroll mt-5">
          <article className="place-self-center bg-white w-[794px] h-[1123px] pt-5 z-0">
            <div className="flex justify-end w-full px-10">
              <img className="w-3/4 " src={header} />
            </div>
            <div className="flex flex-col font-serif text-black px-24 w-full">
              <div className="flex w-full">
                <div className="w-5/12 justify-self-start">
                  <h1 className="text-4xl font-bold">Bob Pham</h1>
                  <p className="text-left">
                    <strong>Email:</strong> bobbaopham@gmail.com
                  </p>
                  <p className="text-left">
                    <strong>Phone:</strong> (604)-352-2975
                  </p>
                  <h2 className="font-bold text-xl">Education</h2>
                </div>
                <div className="w-7/12 justify-self-end mt-4 overflow-visible">
                  <a href="https://www.linkedin.com/in/bobpham" target="_">
                    <p className="text-right ">
                      <strong>Linkedin:</strong>{" "}
                      https://www.linkedin.com/in/bobpham
                    </p>
                  </a>
                  <a href="/">
                    <p className="text-right">
                      <strong>Website:</strong> https://bob-pham.github.io/
                    </p>
                  </a>
                  <a href="https://github.com/bob-pham" target="_">
                    <p className="text-right">
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
                <ul className="list-disc px-4 m-0 leading-snug">
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
                <div className=" leading-5">
                  <h3 className="font-bold">Programming Languages:</h3>
                  <p>
                    Assembly, Bash/Zsh, C, C++, C#, Go*, HTML + CSS, Java,
                    JavaScript, LaTeX, Lua*, Python, R, Racket, Rust*, SQL,
                    TypeScript
                  </p>
                  <h3 className="font-bold">
                    Frameworks, Engines, Libraries and Databases:
                  </h3>
                  <p>
                    Angular*, Bootstrap, Django, Flask, GraphQL*, Image Magick,
                    JUnit, MongoDB*, MySQL*, Next.js*, Node.js*, OpenCV*, React,
                    React Native*, TailwindCSS, Three.js, Unity
                  </p>
                  <h3 className="font-bold">
                    Developement Tools and Environments
                  </h3>
                  <p className="mb-0">
                    Android Studio, CMake, Git/GitHub, IntelliJ IDEA, Linux*,
                    Vim, Visual Studio, VSCode, Vite, Webpack*
                  </p>
                  <div className="w-full">
                    <p className="text-sm text-right m-0">
                      *Currently Acquiring
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-xl m-0">Experience</h2>
                <div className="divider bg-black h-[2px] m-0"></div>
                <div className="flex m-0">
                  <strong className="w-1/2 text-left justify-self-start ">
                    Intel - Firmware Engineer Intern
                  </strong>
                  <p className="w-1/2 text-right justify-self-end">
                    Sep 2022 - Present
                  </p>
                </div>
                <ul className="leading-4 list-disc px-4">
                  <li>
                    Developing microcode using <strong>Assembly</strong> and{" "}
                    <strong>C</strong> for custom security HW block for next
                    generation Infrastructure Processing Units (IPU’s) as part
                    of the Ethernet Products Group (EPG)
                  </li>
                  <li>
                    Developing system test suites and scripts using{" "}
                    <strong>Python</strong> for new and previous untested
                    functionality
                  </li>
                </ul>
                <div className="flex m-0">
                  <strong className="w-3/4 text-left justify-self-start ">
                    Product Repurposing Solutions - Technical Assistant
                  </strong>
                  <p className="w-1/4 text-right justify-self-end">
                    Jun 2021 - Aug 2021
                  </p>
                </div>
                <ul className="leading-4 list-disc px-4">
                  <li>
                    Project leader of the computer repair and refurbish process,
                    contributing to shipping and receiving, inventory
                    management, warehouse organization, and desktop and laptop
                    repair
                  </li>
                  <li>
                    Restructured laptop repair infrastructure and logistics,
                    increasing productivity by <strong>200%</strong>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                  <h2 className="font-bold text-xl m-0">Technical Projects</h2>
                  <div className="divider bg-black h-[2px] m-0"></div>
                <div className="flex m-0">
                  <div className="flex w-full">
                    <strong className="w-3/4 text-left justify-self-start ">
                      Benten - C++
                    </strong>
                    <p className="w-1/4 text-right justify-self-end">
                      Sep 2022 - Present
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <p>Multithreaded CLI Image Editor</p>
                  <ul className="list-disc leading-5 px-4">
                    <li>
                    Isolates areas by similar colour or shape using BFS and edge-detection algorithms for parallel processing
                    </li>
                    <li>
                    Safeguards against race conditions and deadlocks using mutexes and semaphores
                    </li>
                    <li>Edits and saves images into 10 complex predefined styles using Image Magick library</li>
                  </ul>
                  </div>
              </div>
            </div>
          </article>
        </div>
        <div className="w-3/4 place-self-center my-32">
        <div className="mockup-code">
          <pre data-prefix="1"><code>npm i daisyui</code></pre>
        </div>
        </div>
      </main>
    </>
  );
}
