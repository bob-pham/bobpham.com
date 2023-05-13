import { useRef } from "react";
import Image from "next/image";
import ProjectHeader from "../components/ProjectHeader";

import robot from "../public/images/storai_teller/robot.png";
import loadingPage from "../public/images/storai_teller/loading_page.png";
import createStory from "../public/images/storai_teller/create_story_page.png";
import page1 from "../public/images/storai_teller/page1.png";
import pageLast from "../public/images/storai_teller/pagelast.png";
import homePage from "../public/images/storai_teller/homepage.png";

const tech = ["Python", "Flask", "React", "Tailwindcss", "OpenAI", "DaisyUI"];

export default function StorAITeller() {
  const development = useRef<null | HTMLHeadingElement>(null);
  const improvements = useRef<null | HTMLHeadingElement>(null);
  const pictures = useRef<null | HTMLHeadingElement>(null);

  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="StorAI Teller"
        logo={robot}
        tech={tech}
        gitLink="https://github.com/bob-pham/Stor-AI-Teller"
        demo="hzhaBG5DpFo"
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p className="text-center text-xl">
          <br />
          By Lilian & Bob Pham
          <br />
        </p>
        <p>
          Introducing StorAI Teller, the cutting-edge web application that
          harnesses the power of Artificial Intelligence to revolutionize the
          way kids and parents create stories. We all know the benefits of
          reading for children: it enhances vocabulary, improves writing skills,
          fosters independence and self-confidence, and ignites imagination.
          Unfortunately, not everyone has equal access to books. Libraries may
          be scarce, and books can be expensive. Moreover, digital books are
          often behind paywalls.
          <br />
          <br />
          With StoryAI Teller, these problems are a thing of the past. Our web
          app generates unique stories at the click of a button, offering an
          infinite well of exciting adventures for young readers. Our innovative
          machine learning algorithm uses Natural Language Processing techniques
          to analyze user inputs, tailoring each story to their interests and
          preferences.
          <br />
          <br />
          Best of all, our app is currently free. While AI-generated text and
          images will always be significantly cheaper than hiring professional
          writers and illustrators, we want to make sure everyone has access to
          our incredible platform.
          <br />
          <br />
          In short, StorAI Teller is a game-changer. We're leveraging
          state-of-the-art technologies such as AI, machine learning, and
          natural language processing to empower young readers and ignite their
          love of storytelling. Join us on this exciting journey today.
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
                });
              }
            }}
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
                });
              }
            }}
          >
            - Future Improvements
          </button>
          <button
            className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-700 hover:rounded-lg hover:px-4"
            onClick={() => {
              if (pictures.current) {
                window.scrollTo({
                  top: pictures.current.offsetTop,
                  behavior: "smooth"
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
          StorAI Teller employs a Flask backend, leveraging OpenAI's powerful
          Python library to generate unique stories based on user prompts and
          associated pictures. The frontend, developed using React and
          TailwindCSS, is intentionally simple, designed to cater to our target
          audience - children. 
          <br />
          <br />
          Users can set any theme they desire and include as many characters as
          they like. These themes are sent to the backend in an API call where
          they undergo advanced filtering and refinement to avoid mature themes
          or those disallowed by OpenAI's terms of service. These themes are
          then utilized to create a prompt which is used to generate a story
          with OpenAI's Text Completion API.
          <br />
          <br />
          Once the story has been created, it is parsed into constituent pages
          and further modified to create prompts for associated images. Since
          pictures take significant time to construct, their size is limited to
          524x524, and the associated parsing and API calls are parallelized
          using multithreading to optimize performance.
          <br />
          <br />
          The storybook is then sent back to the user as a response, and the
          frontend constructs a book with all the bells and whistles that
          children love.
        </p>
        <h2
          className="text-center text-lg mb-4 text-green-500"
          ref={improvements}
        >
          Future Improvements
        </h2>
        <p>
          The project is still in alpha, many improvements and enhancements can
          be done
          <br />
          <br />
          - Add Users
          <br />
          - Public Database of constructed stories viewable by users
          <br />
          - Allow users to have a saved history of created stories/viewed
          <br />
          - Allow users to share stories
          <br />
          - Ability to save constructed stories as books
          <br />- Drag and drop friendly mobile UI for kids
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
                src={homePage}
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
                src={createStory}
                className="w-9/12 h-fit"
                alt="Create Story Page Showcase"
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
                src={loadingPage}
                className="w-9/12 h-fit"
                alt="Loading Page Showcase"
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
                src={page1}
                className="w-9/12 h-fit"
                alt="Story Book Page"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide5"
              className="carousel-item relative w-full justify-center bg-slate-700 p-3"
            >
              <Image
                src={pageLast}
                className="w-9/12 h-fit"
                alt="Last Story Book Page"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
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
        <a href="#slide4" className="btn btn-xs">
          4
        </a>
        <a href="#slide5" className="btn btn-xs">
          5
        </a>
      </div>
    </main>
  );
}
