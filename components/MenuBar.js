import Head from "next/head";
import projects from "../public/projects.json";

export default function MenuBar(props) {
  return (
    <>
      <Head>
        <title>Bob Pham - {props.head}</title>
        <meta name="description" content="Bob's Portfolio Site" />
        <meta charset="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&display=swap" rel="stylesheet" /> 
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://img.icons8.com/color/48/000000/code.png"
        />
      </Head>
      <menu className="w-screen absolute z-40">
        <div className="navbar bg-gradient-to-br from-slate-800 to-zinc-700 via-gray-800 animate-gradient-x text-white border-b-2 border-slate-800">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-green-500"
              >
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/resume">Resume</a>
                </li>
                <li tabIndex="0">
                  <a className="justify-between">
                    Projects
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-gradient-to-br from-green-600 to-emerald-700 via-green-700">
                    {projects.map(item => (
                      <li key={item["name"]} className="text-white">
                        <a href={item["url"]}>{item["name"]}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <a
              className="btn btn-ghost normal-case text-2xl font-bebasneue"
              href="/"
            >
              Bob Pham
            </a>
          </div>
          <div className="navbar-center hidden lg:flex font-montserrat ">
            <ul className="menu menu-horizontal p-0 text-green-500">
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
              <li tabIndex="0">
                <a>
                  Projects
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-gradient-to-br from-green-600 to-emerald-700 via-green-700">
                  {projects.map(item => (
                    <li key={item["name"]} className="text-white">
                      <a href={item["url"]}>{item["name"]}</a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-end md:px-5">
            <a href="https://github.com/bob-pham" target="_">
              <input
                className="h-8 md:px-5"
                type="image"
                href=""
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiNGRkZGRkY7Ij4gICAgPHBhdGggZD0iTTE1LDNDOC4zNzMsMywzLDguMzczLDMsMTVjMCw1LjYyMywzLjg3MiwxMC4zMjgsOS4wOTIsMTEuNjNDMTIuMDM2LDI2LjQ2OCwxMiwyNi4yOCwxMiwyNi4wNDd2LTIuMDUxIGMtMC40ODcsMC0xLjMwMywwLTEuNTA4LDBjLTAuODIxLDAtMS41NTEtMC4zNTMtMS45MDUtMS4wMDljLTAuMzkzLTAuNzI5LTAuNDYxLTEuODQ0LTEuNDM1LTIuNTI2IGMtMC4yODktMC4yMjctMC4wNjktMC40ODYsMC4yNjQtMC40NTFjMC42MTUsMC4xNzQsMS4xMjUsMC41OTYsMS42MDUsMS4yMjJjMC40NzgsMC42MjcsMC43MDMsMC43NjksMS41OTYsMC43NjkgYzAuNDMzLDAsMS4wODEtMC4wMjUsMS42OTEtMC4xMjFjMC4zMjgtMC44MzMsMC44OTUtMS42LDEuNTg4LTEuOTYyYy0zLjk5Ni0wLjQxMS01LjkwMy0yLjM5OS01LjkwMy01LjA5OCBjMC0xLjE2MiwwLjQ5NS0yLjI4NiwxLjMzNi0zLjIzM0M5LjA1MywxMC42NDcsOC43MDYsOC43Myw5LjQzNSw4YzEuNzk4LDAsMi44ODUsMS4xNjYsMy4xNDYsMS40ODFDMTMuNDc3LDkuMTc0LDE0LjQ2MSw5LDE1LjQ5NSw5IGMxLjAzNiwwLDIuMDI0LDAuMTc0LDIuOTIyLDAuNDgzQzE4LjY3NSw5LjE3LDE5Ljc2Myw4LDIxLjU2NSw4YzAuNzMyLDAuNzMxLDAuMzgxLDIuNjU2LDAuMTAyLDMuNTk0IGMwLjgzNiwwLjk0NSwxLjMyOCwyLjA2NiwxLjMyOCwzLjIyNmMwLDIuNjk3LTEuOTA0LDQuNjg0LTUuODk0LDUuMDk3QzE4LjE5OSwyMC40OSwxOSwyMi4xLDE5LDIzLjMxM3YyLjczNCBjMCwwLjEwNC0wLjAyMywwLjE3OS0wLjAzNSwwLjI2OEMyMy42NDEsMjQuNjc2LDI3LDIwLjIzNiwyNywxNUMyNyw4LjM3MywyMS42MjcsMywxNSwzeiI+PC9wYXRoPjwvc3ZnPg=="
              />
            </a>
            <a href="https://www.linkedin.com/in/bobpham/" target="_">
              <input
                className="h-8 md:px-5"
                type="image"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiNGRkZGRkY7Ij4gICAgPHBhdGggZD0iTTQxLDRIOUM2LjI0LDQsNCw2LjI0LDQsOXYzMmMwLDIuNzYsMi4yNCw1LDUsNWgzMmMyLjc2LDAsNS0yLjI0LDUtNVY5QzQ2LDYuMjQsNDMuNzYsNCw0MSw0eiBNMTcsMjB2MTloLTZWMjBIMTd6IE0xMSwxNC40N2MwLTEuNCwxLjItMi40NywzLTIuNDdzMi45MywxLjA3LDMsMi40N2MwLDEuNC0xLjEyLDIuNTMtMywyLjUzQzEyLjIsMTcsMTEsMTUuODcsMTEsMTQuNDd6IE0zOSwzOWgtNmMwLDAsMC05LjI2LDAtMTAgYzAtMi0xLTQtMy41LTQuMDRoLTAuMDhDMjcsMjQuOTYsMjYsMjcuMDIsMjYsMjljMCwwLjkxLDAsMTAsMCwxMGgtNlYyMGg2djIuNTZjMCwwLDEuOTMtMi41Niw1LjgxLTIuNTYgYzMuOTcsMCw3LjE5LDIuNzMsNy4xOSw4LjI2VjM5eiI+PC9wYXRoPjwvc3ZnPg=="
              />
            </a>
          </div>
        </div>
      </menu>
    </>
  );
}
