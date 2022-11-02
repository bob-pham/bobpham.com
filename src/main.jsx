import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./components/Home/App";
import Resume from "./components/Pages/Resume";
import ProjectCornucopia from "./components/Pages/ProjectCornucopia";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route
          exact
          path="/project-cornucopia"
          element={<ProjectCornucopia />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
