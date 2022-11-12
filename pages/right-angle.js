import { useRef } from "react";
import Image from "next/image";

import ProjectHeader from "../components/ProjectHeader";

import Logo from "../public/images/right_angle/logo.png";
import Correct from "../public/images/right_angle/Correct.png";
import Calibrate from "../public/images/right_angle/Calibrate.png";
import Incorrect from "../public/images/right_angle/Incorrect.png";

const tech = [
  "Python",
  "Flask",
  "React",
  "Tailwindcss",
  "OpenCV",
  "media pipe",
];

export default function RightAngle() {
  const challenges = useRef(null);
  const improvements = useRef(null);
  const pictures = useRef(null);

  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="right angle"
        logo={Logo}
        tech={tech}
        gitLink="https://github.com/bob-pham/RightAngle"
        demo="m0zNMef_iKU"
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          Right Angle is a full-stack application that I and a team of 3 others
          created during SacHacks IV. Right Angle is a posture correction web
          application that uses computer vision to detect whether or not a users
          has good or bad posture and is perfect for remote workers and
          students! Right Angle is a program that corrects a user's posture by
          identifying their body's pose and informs the user whether or not
          their posture should be corrected. The program first tells the user to
          sit up straight while it calibrates. Once calibrated, the program will
          signal to the user if their posture is good or bad!
          <br />
          <br />
          In the age of COVID-19, we realized the importance of office
          ergonomics as we transitioned to remote work and learning. As current
          co-op interns, it's easy for us to forget how to maintain a healthy
          posture, as we spend the majority of our days seated at our desk.
          That's why we were inspired to create Right Angle; an application to
          help office workers and students create the healthy habit of
          correcting their posture!
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
                top: challenges.current.offsetTop,
                behaviour: "smooth",
              })
            }
          >
            - Challenges
          </button>
          <button
            className="my-2"
            onClick={() =>
              window.scrollTo({
                top: improvements.current.offsetTop,
                behaviour: "smooth",
              })
            }
          >
            - Possible Future Improvements
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
          <h1 className="text-xl mt-10 text-center">
            Development + Implementation
          </h1>
          <div className="divider"></div>
        </div>
        <p>
          Our project uses a Flask backend, and OpenCV to monitor the user's
          position and posture. Our frontend was made using React and Tailwind
          CSS.
          <br />
          <br />
          As far as the actual slouch detection, this was accomplished using the
          OpenCV library. Using the library and media pipeline's facial/body
          detection, we use the calibrated posture to calculate the whether the
          user starts to slouch. This is done by cross referencing data about
          the relative position of the user's face, the angle of the user's
          neck, as well as their proximity to the camera. Multiple datapoints
          are required, as we cannot enforce where the user has positioned their
          webcam in order to check. The program continually takes an average of
          the user's posture as the program runs, to avoid small lapses into bad
          posture being reported.
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
          In the future, and expansion of right angle would be to fully
          implement a backend database with accompanying data visualization, to
          allow users to track improvements in their sitting posture. This was
          intended to be one of the features of right angle, however as this was
          a 24 hour hackathon we were unable to implement it.
        </p>
      </div>
      <div className="grid place-items-center text-green-500">
        <h1 className="text-2xl" ref={pictures}>
          Image Gallery
        </h1>
        <div className="w-1/2">
          <div className="carousel w-full rounded-xl max-h-80">
            <div
              id="slide1"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image src={Calibrate} className="w-auto" alt="Calibration Showcase"/>
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
              <Image src={Correct} className="w-auto" alt="Correct Posture Showcase"/>
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
              <Image src={Incorrect} className="w-auto" alt="Slouching Showcase"/>
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
