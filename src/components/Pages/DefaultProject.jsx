import MenuBar from "../Home/MenuBar";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function DefaultProject(props) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(props.pageInfo)
      .then((response) => response.text())
      .then((str) => setMarkdown(str));
  }, []);

  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y overflow-hidden">
      <MenuBar />
      <div className="place-self-center">
      {props.tech.map((item) => (
        <span className="badge badge-outline mx-1 text-lg p-4">{item}</span>
      ))}
      </div>
      <div className="place-self-center w-11/12 font-montserrat text-white">
        <ReactMarkdown className="">{markdown}</ReactMarkdown>
      </div>
    </main>
  );
}
