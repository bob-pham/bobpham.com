import { useState, useEffect } from 'react'
// import Matrix from '../../javascript/matrix'
import '../index.css'

import AboutMe from './AboutMe'
import MenuBar from './MenuBar'
import LandingPage from './LandingPage'
import ProjectsSection from './ProjectsSection'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
        <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y">
          <MenuBar />
          <article className="grid place-items-center h-screen">
            <LandingPage />
          </article>
          <article className="grid place-items-center bg-gray-900 text-white my-24 py-2">
            <h1 className="w-11/12 py-4 bg-gradient-to-br from-slate-800 to-slate-400 via-slate-600 animate-gradient-x rounded-xl text-center text-5xl font-bebasneue">About Me</h1>
            <AboutMe />
          </article>
          <article className="grid place-items-center bg-gray-900 text-white my-24 py-2">
            <h1 className="w-11/12 py-4 bg-gradient-to-br from-slate-800 to-slate-400 via-slate-600 animate-gradient-x rounded-xl text-center text-5xl font-bebasneue">Projects</h1>
            <ProjectsSection / >
          </article>
        </main>
        </>

  )
}

export default App
