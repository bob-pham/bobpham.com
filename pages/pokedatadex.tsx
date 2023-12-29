import { useRef } from "react";
import Image from "next/image";

import ProjectHeader from "../components/ProjectHeader";

import logo from "../public/images/pokedatadex/logo.png";
import home from "../public/images/pokedatadex/pokedatadexhome.png";
import query from "../public/images/pokedatadex/pokedatadex query.png";
import leaderboard from "../public/images/pokedatadex/playerleaderboard.png";
import view from "../public/images/pokedatadex/view tables.png";
import schema from "../public/images/pokedatadex/schema.png";

const tech = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "SQL",
  "Apache",
];

export default function PokeDataDex() {
  const development = useRef<null | HTMLHeadingElement>(null);
  const pictures = useRef<null | HTMLHeadingElement>(null);

  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="PokeDataDex"
        logo={logo}
        tech={tech}
        gitLink="https://github.com/bob-pham/PokeDataDex"
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <a
          href="https://www.students.cs.ubc.ca/~bobpham/PokeDataDex.php?"
          target="_"
          className="btn grid grid-cols-2 gap-0 bg-green-600 hover:bg-green-400 text-white border-white border-2 mt-2 mb-5 w-fit place-self-center"
        >
          Try It Here!
        </a>

        <p>
          PokeDataDex is a Pokemon Go journal that aims to allow players to keep
          track of their activities and interactions with both in-game and
          outside of game elements. Our database models different in-game
          aspects that players may want to keep track of, in addition to actions
          that players may do in-game. As such, players can keep track of what
          they have accomplished within the game, as well as compare with other
          players.

          Created as part of CPSC 304
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
                  behavior: "smooth",
                });
              }
            }}
          >
            - Development and Implementation
          </button>
          <button
            className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-700 hover:rounded-lg hover:px-4"
            onClick={() => {
              if (pictures.current) {
                window.scrollTo({
                  top: pictures.current.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
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
          As previously mentioned, this project was created as part of CPSC 304,
          and was set out to be a crud app.
          <br />
          <br />
          The bulk of the work came with designing and normalizing the database
          that we were going to create. We decided to keep it minimal, and only
          capture the most relevant portions of the game. It is noted that some
          relationships don't exist in the game either, but were created in
          order to meet complexity requirements. An ER diagram of the schema can
          be seen below.
        </p>
        <Image
          src={schema}
          className="w-auto place-self-center"
          alt="Add Dataset"
        />
        <p>
          <br />
          <br />
          The implementation was done with an Oracle SQL database, that is
          interfaced using a PHP Apache server, with all other front end elements being created with vanilla HTML, CSS, and JavaScript
        </p>
      </div>
      <div className="grid place-items-center text-green-500" ref={pictures}>
        <h1 className="text-2xl">Image Gallery</h1>
        <div className="lg:w-1/2 md:w-5/6 w-11/12">
          <div className="carousel w-full rounded-xl max-h-80">
            <div
              id="slide1"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={home}
                className="w-auto"
                alt="Add Dataset"
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
                src={query}
                className="w-auto"
                alt="Add Dataset Populated"
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
                src={leaderboard}
                className="w-auto"
                alt="Courses Query"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={view}
                className="w-auto"
                alt="Sections Query"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
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
      <div className="flex justify-center mb-10 w-full py-2 gap-2">
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
