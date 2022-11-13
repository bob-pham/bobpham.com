import AboutMe from "../components/AboutMe";
import MenuBar from "../components/MenuBar";
import LandingPage from "../components/LandingPage";
import ProjectsSection from "../components/ProjectsSection";

function Home() {
  return (
    <>
      <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y overflow-hidden scroll-smooth snap-proximity snap-y">
        <MenuBar head="Portfolio" />
        <article className="grid place-items-center h-screen overflow-hidden snap-start">
          <LandingPage />
        </article>
        <article className="grid place-items-center bg-gray-900 py-2 overflow-hidden snap-start">
          <div className="flex flex-col w-1/2 border-opacity-50 overflow-hidden">
            <h1 className="w-11/12 rounded-xl text-center text-3xl font-montserrat text-green-500 overflow-hidden">
              About Me
            </h1>
            <div className="divider overflow-hidden"></div>
          </div>
          <AboutMe />
        </article>
        <article className="grid place-items-center bg-gray-900 text-white my-24 py-2 snap-start">
          <div className="flex flex-col w-1/2 border-opacity-50">
            <h1 className="rounded-xl text-center text-3xl font-montserrat text-green-500">
              Projects
            </h1>
            <div className="divider"></div>
          </div>
          <ProjectsSection />
        </article>
      </main>
    </>
  );
}

export default Home;
