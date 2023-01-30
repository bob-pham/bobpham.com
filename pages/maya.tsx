import { useRef } from "react";
import Image from "next/image";

import ProjectHeader from "../components/ProjectHeader";

import mayaHome from "../public/images/maya/maya_home.png";
import mayaResponse from "../public/images/maya/maya_response.png";
import mayaTalking from "../public/images/maya/maya_talking.png";

const tech = [
  "Python",
  "Flask",
  "React",
  "Tailwindcss",
];

export default function Maya() {
  const development = useRef<null | HTMLHeadingElement>(null);
  const challenges = useRef<null | HTMLHeadingElement>(null);
  const improvements = useRef<null | HTMLHeadingElement>(null);
  const pictures = useRef<null | HTMLHeadingElement>(null);

  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="Maya"
        logo={mayaHome}
        tech={tech}
        gitLink="https://github.com/bob-pham/Maya-Mental-Health-Assistant"
        demo="4K0aI33Ept8"
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          Mental health call services are often overburdened with people using 
          them for a variety of reasons. The goal of Maya is to separate more 
          urgent requests from those that might be solved through more basic 
          means, such as Cognitive Behavioural Therapy.
          <br />
          <br />
          Ideally, Maya could be integrated into home assistants like 
          Amazon Echo, Google Home, or Siri, to detect when a person 
          may be in distress and perform the necessary steps to either 
          stablize their condition or connect them with a mental health 
          hotline, should it seem necessary. This will lighten the load 
          of hotlines, ensuring that people who are higher risk get through 
          faster, and aren't stuck waiting for an operator on the other end.
          <br />
          <br />
          Maya uses live audio transcription and looks for keywords to 
          determine whether a person may be high risk or lower risk, and 
          takes the appropriate action given what it believes the situation 
          to be.
          <br />
          <br />
          Maya was created during NWHacks 2023
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
                  behavior: "smooth"
                })
              }
            }
            }
          >
            - Development and Implementation
          </button>
          <button
            className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-700 hover:rounded-lg hover:px-4"
            onClick={() => {
              if (challenges.current) {
                window.scrollTo({
                  top: challenges.current.offsetTop,
                  behavior: "smooth"
                })
              }
            }
            }
          >
            - Challenges
          </button>
          <button
            className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-700 hover:rounded-lg hover:px-4"
            onClick={() => {
              if (improvements.current) {
                window.scrollTo({
                  top: improvements.current.offsetTop,
                  behavior: "smooth"
                })
              }
            }
            }
          >
            - Possible Future Improvements
          </button>
          <button
            className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-700 hover:rounded-lg hover:px-4"
            onClick={() => {
              if (pictures.current) {
                window.scrollTo({
                  top: pictures.current.offsetTop,
                  behavior: "smooth"
                })
              }
            }
            }
          >
            - Image Gallery
          </button>
        </div>
        <div className="flex flex-col w-1/2 place-self-center">
          <h1 className="text-xl mt-10 text-center"
          ref={development}>
            Development + Implementation
          </h1>
          <div className="divider"></div>
        </div>
        <p>
          Our project uses a Flask backend, and a React frontend. The React
          Speech to Text Library was used to get a live transcription of user 
          speech. Parsing was done with the flask backend. 
        </p>
        <h2
          className="text-center text-lg mb-4 text-green-500"
          ref={challenges}
        >
          Challenges
        </h2>
        <p>
          The biggest challenge when creating right angle was connecting our
          frontend and our backend. This was due to a number of reasons, but
          what it boils down to was that it was a 24 hour event, and so the
          front and backends were written by different people who did not have
          good undersatnding of how the other's worked. Additionally, our team
          developed on different devices with different operating sytems and
          architecture.
        </p>
        <h2
          className="text-center text-lg mb-4 text-green-500"
          ref={improvements}
        >
          Future Improvements
        </h2>
        <p>
          In the future, maya should be have a database, as well as connection to 
          an AI model, like ChatGPT
        </p>
      </div>
      <div className="grid place-items-center text-green-500">
        <h1 className="text-2xl" ref={pictures}>
          Image Gallery
        </h1>
        <div className="lg:w-1/2 md:w-5/6 w-11/12">
          <div className="carousel w-full rounded-xl max-h-80">
            <div
              id="slide1"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={mayaHome}
                className="w-9/12 h-fit"
                alt="Homepage Showcase"
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
                src={mayaTalking}
                className="w-9/12 h-fit"
                alt="Talking to Maya"
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
                src={mayaResponse}
                className="w-9/12 h-fit"
                alt="Maya's Response"
              />
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
      <div className="flex mb-10 justify-center w-full py-2 gap-2">
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
