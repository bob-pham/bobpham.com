import { useRef } from "react";
import Image from "next/image";
import ProjectHeader from "../components/ProjectHeader";

import HomeScreen from "../public/images/hercules/home.png";
import ChangeRoom from "../public/images/hercules/changeroomscreenshot.png";
import QuestPage from "../public/images/hercules/questpage.png";

const tech = ["Java", "Android", "Android Studio", "XML"];

export default function Hercules() {
  const development = useRef<null | HTMLHeadingElement>(null);
  const improvements = useRef<null | HTMLHeadingElement>(null);
  const pictures = useRef<null | HTMLHeadingElement>(null);

  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="Hercules"
        tech={tech}
        gitLink="https://github.com/bob-pham/Hercules"
        logo={HomeScreen}
        demo="h7hHna3sPq8"
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          Hercules is a project created during NwHacks 2022 by myself and a team
          of three others. Hercules is a "gamified" health tracking app,
          oriented towards those who struggle to maintain a healthy lifestyle.
          The app is engineered to incentivize users to work out, eat well, and
          develop healthy habits by rewarding them for fulfilling their fitness
          plans, or “questlines”, which are comprised of different tasks. Each
          user has a customizable avatar, and upon completion of certain goals
          "quests", users will earn gold and experience points that can be used
          to buy items at the shop and increase their character’s stats. As a
          proof of concept developed over the course of 24 hours, it is
          relatively simple, however a simple algorithm was developed to make it
          harder to earn rewards with inconsistent or unhealthy progress.
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
          <h1 className="text-xl mt-10 text-center" ref={development}>
            Development + Implementation
          </h1>
          <div className="divider"></div>
        </div>
        <p>
          During the development of Hercules, the primary focus of my
          contributions was on the backend systems of "quests" (tasks),
          "questlines" (routines), in-game user experience and currency, as well
          as in-game item shops. <br />
          <br />
          "Quests" and "questlines" were developed with inheritance and
          polymorphism in mind and were shaped around the composite design
          pattern. Quests stored information about the activity they represented
          and how much in-game experience and currency they would be worth.
          Questlines inherit from quests and represent a collection composed of
          quests and questlines and also store data on their own and their
          children's in-game experience currency and progress consistency. The
          composite design pattern was instrumental in this use case allowing
          for straightforward calculation on total experience/currency
          calculation on entire questlines and minimized data reads when seeking
          progress consistency. Updates to subquests within a questline were
          proliferated up the hierarchy using an observer pattern to decrease
          coupling. <br />
          <br />
          As part of the quest and questline systems, I was also responsible for
          developing an algorithm to distribute the quests and questlines and
          determine their associated rewards. The quest and questline
          distribution system was more straightforward, as it would just spread
          the quests/questlines based on a defined, healthy gap. The reward
          system was designed to promote consistency and give more points based
          on consistent completion. The frequency was determined by calculating
          the slope between the most recent completions to accomplish this.
          Consistency between completions would have slopes close to zero. Thus
          the algorithm rewarded players experience and currency equal to a
          random base amount multiplied by the reciprocal of the slope, limited
          at a maximum cap. <br />
          <br />
          Implementing the in-game item shop was comparatively straightforward
          compared to everything I worked on. Given that the project was a proof
          of concept, in-game currency was simply an integer stored in the
          user's data, and the shop would merely check if the user had enough
          currency when they tried to make a purchase, and if they did would
          subtract the price from their wallet and add the item to the user's
          inventory. Most of the work for this portion was frontend, done using
          android studio and XML.
        </p>
        <h2
          className="text-green-500 text-center text-xl my-5"
          ref={improvements}
        >
          Possible Future Improvements
        </h2>
        <p>
          Unfortunately, however, due to the time constraints of the hackathon,
          most of the features that I developed remain unimplemented in our
          demo. Development of our frontend lagged behind our backend progress.
          Thus we decided that it would be best to commit our time to finishing
          our front end so we could have something to present to the judges.
          However, the code for these contributions is still a part of the
          source code. <br /> <br />
          Given the opportunity to expand, this project could be improved by
          having a dedicated frontend, perhaps with a game engine, and a
          dedicated backend running on a remote server. Many additional ideas
          that we came up with for Hercules were also never realized, so I may
          revisit this project in the future.
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
              <Image src={ChangeRoom} className="w-auto" alt="Change Room" />
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
              <Image src={QuestPage} className="w-auto" alt="Quest Page" />
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
              <Image src={HomeScreen} className="w-auto" alt="Home Screen" />
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
