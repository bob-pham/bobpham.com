import { useRef } from 'react';
import Image from "next/image";
import ProjectHeader from '../components/ProjectHeader';

import robot from '../public/images/storai_teller/robot.png';
import loadingPage from '../public/images/storai_teller/loading_page.png';
import createStory from '../public/images/storai_teller/create_story_page.png';
import page1 from '../public/images/storai_teller/page1.png';
import pageLast from '../public/images/storai_teller/pagelast.png';
import homePage from '../public/images/storai_teller/homepage.png';

const tech = [
  "Python",
  "Flask",
  "React",
  "Tailwindcss",
  "OpenAI",
  "DaisyUI"
];

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
        <p>
          StorAI Teller is innovative webapp that allows kids and parents to create completely
          unique stories using AI. Its no question that kids should be reading more, it helps
          expand vocabulary, improves writing, builds independence and self confidence, and fuels
          imagination Not everyone has access to books: books can be expensive, and libraries
          are not always commonplace or well stocked. Online, books may be more accessible,
          but can also be behind a paywall.
          <br />
          <br />
          StoryAI Teller solves this problem by potentially creating an infinite well of unique
          stories at a click of a button. Currently free, though likely AI pictures/text
          completion will always be dirt cheap compared to hiring professionals.
          <br />
          <br />
          There are additional benefits to StorAI Teller as well, it can stimulates children’s
          creativity, aiding them in gaining inspiration and understanding of how stories
          are created and structured. Additionally, activities can be structured around StorAI
          Teller: Don’t like the pictures that are generated? A cool activity would be to draw
          your own, using the AI generated photos as a launching point.
          <br />
          <br />
          Try it Today! (Currently in Alpha)
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
            - Future Improvements
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
          StorAI Teller uses a Flask backend, and OpenAI's python library to create
          stories based on prompts and its associated pictures. The frontend was made
          using React and TailwindCSS.
          <br />
          <br />
          The frontend webapp is kept intentially simple - after all, the target
          audience of this app are children. Users can set a theme, which is able to be
          literally anything, as well as set as include as many characters as they want.
          <br />
          <br />
          The theme and characters are sent to the backend in an API call, where they
          are further parsed. Themes are filtered and refined to avoid mature themes
          and those disallowed by OpenAI's terms of service. The themes are then used
          to create a prompt which is used to create a story with OpenAI's Text Completion
          API.
          <br />
          <br />
          Once the story has been created, the story is further parsed. First, it is
          seperated into consituent pages. These pages are then furthered parsed
          and modified, in order to create prompts to create associated images.
          If the prompt is disallowed by OpenAI, no image is created. Since pictures
          take a significant time to be constructed, their size is limited to 524x524,
          and the associated parsing and API calls are parallelized using multithreading
          <br />
          <br />
          Finally, the story book is sent back to the user as a response, and the
          frontend constructs a book.
        </p>
        <h2
          className="text-center text-lg mb-4 text-green-500"
          ref={improvements}
        >
          Future Improvements
        </h2>
        <p>The project is still in alpha, many improvements and enhancements can be done
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
          <br />
          - Drag and drop friendly mobile UI for kids
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
  )
}