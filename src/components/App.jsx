import { useState, useEffect } from 'react'
import Matrix from '../../javascript/matrix'
import '../index.css'

import AboutMe from './AboutMe'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(Matrix, 1);
  }, [])

  return (
    <>
        <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y ">
          <menu className="w-screen absolute z-40">
            <div className="navbar bg-gradient-to-br from-slate-900 to-zinc-800 via-gray-900 animate-gradient-x text-white">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>About Me</a></li>
                    <li><a>Resume</a></li>
                    <li tabindex="0">
                      <a className="justify-between">
                        Projects
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                      </a>
                      <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bebasneue">Bob Pham</a>
              </div>
              <div className="navbar-center hidden lg:flex font-montserrat font-bold">
                <ul className="menu menu-horizontal p-0">
                  <li><a>About Me</a></li>
                  <li><a>Resume</a></li>
                  <li tabindex="0">
                    <a>
                      Projects
                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="navbar-end md:px-5">
                <input className="h-8 md:px-5" type="image" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiNGRkZGRkY7Ij4gICAgPHBhdGggZD0iTTE1LDNDOC4zNzMsMywzLDguMzczLDMsMTVjMCw1LjYyMywzLjg3MiwxMC4zMjgsOS4wOTIsMTEuNjNDMTIuMDM2LDI2LjQ2OCwxMiwyNi4yOCwxMiwyNi4wNDd2LTIuMDUxIGMtMC40ODcsMC0xLjMwMywwLTEuNTA4LDBjLTAuODIxLDAtMS41NTEtMC4zNTMtMS45MDUtMS4wMDljLTAuMzkzLTAuNzI5LTAuNDYxLTEuODQ0LTEuNDM1LTIuNTI2IGMtMC4yODktMC4yMjctMC4wNjktMC40ODYsMC4yNjQtMC40NTFjMC42MTUsMC4xNzQsMS4xMjUsMC41OTYsMS42MDUsMS4yMjJjMC40NzgsMC42MjcsMC43MDMsMC43NjksMS41OTYsMC43NjkgYzAuNDMzLDAsMS4wODEtMC4wMjUsMS42OTEtMC4xMjFjMC4zMjgtMC44MzMsMC44OTUtMS42LDEuNTg4LTEuOTYyYy0zLjk5Ni0wLjQxMS01LjkwMy0yLjM5OS01LjkwMy01LjA5OCBjMC0xLjE2MiwwLjQ5NS0yLjI4NiwxLjMzNi0zLjIzM0M5LjA1MywxMC42NDcsOC43MDYsOC43Myw5LjQzNSw4YzEuNzk4LDAsMi44ODUsMS4xNjYsMy4xNDYsMS40ODFDMTMuNDc3LDkuMTc0LDE0LjQ2MSw5LDE1LjQ5NSw5IGMxLjAzNiwwLDIuMDI0LDAuMTc0LDIuOTIyLDAuNDgzQzE4LjY3NSw5LjE3LDE5Ljc2Myw4LDIxLjU2NSw4YzAuNzMyLDAuNzMxLDAuMzgxLDIuNjU2LDAuMTAyLDMuNTk0IGMwLjgzNiwwLjk0NSwxLjMyOCwyLjA2NiwxLjMyOCwzLjIyNmMwLDIuNjk3LTEuOTA0LDQuNjg0LTUuODk0LDUuMDk3QzE4LjE5OSwyMC40OSwxOSwyMi4xLDE5LDIzLjMxM3YyLjczNCBjMCwwLjEwNC0wLjAyMywwLjE3OS0wLjAzNSwwLjI2OEMyMy42NDEsMjQuNjc2LDI3LDIwLjIzNiwyNywxNUMyNyw4LjM3MywyMS42MjcsMywxNSwzeiI+PC9wYXRoPjwvc3ZnPg=="/>
                <input className="h-8 md:px-5" type="image" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiNGRkZGRkY7Ij4gICAgPHBhdGggZD0iTTQxLDRIOUM2LjI0LDQsNCw2LjI0LDQsOXYzMmMwLDIuNzYsMi4yNCw1LDUsNWgzMmMyLjc2LDAsNS0yLjI0LDUtNVY5QzQ2LDYuMjQsNDMuNzYsNCw0MSw0eiBNMTcsMjB2MTloLTZWMjBIMTd6IE0xMSwxNC40N2MwLTEuNCwxLjItMi40NywzLTIuNDdzMi45MywxLjA3LDMsMi40N2MwLDEuNC0xLjEyLDIuNTMtMywyLjUzQzEyLjIsMTcsMTEsMTUuODcsMTEsMTQuNDd6IE0zOSwzOWgtNmMwLDAsMC05LjI2LDAtMTAgYzAtMi0xLTQtMy41LTQuMDRoLTAuMDhDMjcsMjQuOTYsMjYsMjcuMDIsMjYsMjljMCwwLjkxLDAsMTAsMCwxMGgtNlYyMGg2djIuNTZjMCwwLDEuOTMtMi41Niw1LjgxLTIuNTYgYzMuOTcsMCw3LjE5LDIuNzMsNy4xOSw4LjI2VjM5eiI+PC9wYXRoPjwvc3ZnPg==" />
              </div>
            </div>
          </menu>
          <article>
            <div className="h-screen grid place-items-center font-bebasneue sm:text-5xl text-3xl text-white text-center">
              <div className="md:w-fit w-11/12 z-40 rounded-xl p-10 bg-gradient-to-br from-slate-900 to-zinc-800 via-gray-900 animate-gradient-x drop-shadow-lg">
                <h1 className="h-min m-1">Hello, I'm Bob</h1>
                <h1 className="h-min m-1">Firmware Engineer CO-OP @ Intel</h1>
                <h1 className="h-min m-1">Honours CS Student @ UBC</h1>
              </div>
              <canvas className="absolute z-0 bg-white montserrat text-lg" id="canvas"></canvas>
            </div>
          </article>
          <article className="grid place-items-center bg-gray-900 text-white my-24 py-2">
            <h1 className="w-11/12 py-4 bg-slate-800 rounded-xl text-center text-5xl font-bebasneue">About Me</h1>
            <AboutMe />
          </article>
        </main>
        </>

  )
}

export default App
