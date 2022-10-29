import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./components/Home/App";
import DefaultProject from "./components/Pages/DefaultProject";

import ProjectCornucopiaMDX from "./markdown/ProjectCornucopia.mdx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          exact
          path="/project_cornucopia"
          element={<DefaultProject pageInfo={ProjectCornucopiaMDX} tech={["Python", "Django", "React", "Tailwindcss", "OpenCV"]} />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
