import AboutMe from "./AboutMe";
import MenuBar from "./MenuBar";
import LandingPage from "./LandingPage";
import ProjectsSection from "./ProjectsSection";

function App() {
  return (
    <>
      <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y overflow-hidden">
        <MenuBar />
        <article className="grid place-items-center h-screen overflow-hidden">
          <LandingPage />
        </article>
        <article className="grid place-items-center bg-gray-900 py-2 overflow-hidden">
          {/* <h1 className="w-11/12 py-4 bg-gradient-to-br from-green-600 to-emerald-700 via-green-700 drop-shadow-2xl animate-gradient-x rounded-xl text-center text-5xl font-bebasneue"> */}
          <div className="flex flex-col w-1/2 border-opacity-50">
            <h1 className="w-11/12 rounded-xl text-center text-3xl font-montserrat text-green-500">
              About Me
            </h1>
            <div className="divider "></div>
          </div>
          <AboutMe />
        </article>
        <article className="grid place-items-center bg-gray-900 text-white my-24 py-2">
          <div className="flex flex-col w-1/2 border-opacity-50">
            <h1 className="rounded-xl text-center text-3xl font-montserrat text-green-500">
              Projects
            </h1>
            <div className="divider"></div>
          </div>
          {/* <h1 className="w-11/12 py-4 bg-gradient-to-br from-green-600 to-emerald-700 via-green-700 drop-shadow-2xl animate-gradient-x rounded-xl text-center text-5xl font-bebasneue">
            Projects
          </h1> */}
          <ProjectsSection />
        </article>
      </main>
    </>
  );
}

export default App;
