import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./components/Home/App";
import Contact from "./components/Home/Contact";
import Resume from "./components/Pages/Resume";
import ProjectCornucopia from "./components/Pages/ProjectCornucopia";
import Benten from "./components/Pages/Benten";
import RightAngle from "./components/Pages/RightAngle";
import Hercules from "./components/Pages/Hercules";

import DaisyUIMockupCode from "./components/Pages/DaisyUIMockupCode";
import UsefulRFunctions from "./components/Pages/UsefulRFunctions";
import CliPomodoro from "./components/Pages/CliPomodoro";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route
          exact
          path="/project-cornucopia"
          element={<ProjectCornucopia />}
        />
        <Route exact path="/benten" element={<Benten />} />
        <Route exact path="/right-angle" element={<RightAngle />} />
        <Route exact path="/hercules" element={<Hercules />} />
        <Route
          exact
          path="/daisyui-code-mockup-scripts"
          element={<DaisyUIMockupCode />}
        />
        <Route
          exact
          path="/useful-r-functions"
          element={<UsefulRFunctions />}
        />
        <Route exact path="/cli-pomodoro" element={<CliPomodoro />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
