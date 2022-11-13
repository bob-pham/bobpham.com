import { useRef, useEffect } from "react";
import Image from "next/image";
import MenuBar from "../components/MenuBar";
import profile from "../public/icons/thingaa.png";

const Profile = () => {
  return (
    <div className="avatar my-5">
      <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2">
        <Image src={profile} alt="Profile Picture" />
      </div>
    </div>
  );
};

export default function Contact({ timeout = 60 }) {
  const canvas = useRef<null | HTMLCanvasElement>(null);

  const backgroundColor = "rgba(17, 24, 39, 1)";
  const backgroundFade = "rgba(17, 24, 39, 0.25)";
  const textColor = "#16A34A";

  useEffect(() => {
    const context: any = canvas.current ? canvas.current.getContext("2d") : null;

    const width: number = document.body.offsetWidth;
    const height: number = document.body.offsetHeight;
    if (canvas.current) {
      canvas.current.width = width;
      canvas.current.height = height;
    }

    // context.fillStyle = '#0F172A';
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);

    // calculate how many 'lines' to show and animate
    const columns = Math.floor(width / 20) + 1;
    const yPositions = Array.from({ length: columns }).fill(0);

    const matrixEffect = () => {
      context.fillStyle = backgroundFade;
      context.fillRect(0, 0, width, height);

      context.fillStyle = textColor;
      context.font = "20pt monospace";

      yPositions.forEach((y: any, index ) => {
        const text: string = String.fromCharCode(Math.random() * 128);
        const x: number = index * 25;
        context.fillText(text, x, y);

        yPositions[index] = y > 100 + Math.random() * 10000 ? 0 : y + 30;
      });
    };

    const interval = setInterval(matrixEffect, timeout);
    return () => {
      clearInterval(interval);
    };
  }, [canvas, timeout]);

  return (
    <>
      <MenuBar head="Contact" />
      <main className="grid grid-cols-1 place-items-center h-screen w-screen m-0">
        <canvas
          className="h-screen w-full absolute z-0 bg-white text-lg top-0 left-0"
          ref={canvas}
        ></canvas>
        <div className="grid place-items-center mt-16">
          <Profile />
          <div className="text-center font-montserrat text-white bg-slate-700 border-white border p-10 rounded-xl m-0 z-10">
            <div className="md:w-fit w-11/12 rounded-xl p-10 bg-gradient-to-br from-slate-800 to-zinc-700 via-gray-800 animate-gradient-x drop-shadow-sm font-bebasneue text-2xl">
              <h1 className="h-min m-1">Hello, I'm Bob</h1>
              <h1 className="h-min m-1">Firmware Engineer Intern @ Intel</h1>
              <h1 className="h-min m-1">Honours CS Student @ UBC</h1>
            </div>
            <div className="mt-5 ">
              <h1 className="font-bold">Contact Info:</h1>
              <h1 className="my-2">Email: <span className="text-green-500">bobbaopham@gmail.com</span></h1>
              <a href="https://www.linkedin.com/in/bobpham/">
                <h1 className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-800 hover:rounded-lg hover:px-4 hover:py-2">LinkedIn: <span className="text-green-500">linkedin.com/in/bobpham</span></h1>
              </a>
              <a href="https://github.com/bob-pham">
                <h1 className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-800 hover:rounded-lg hover:px-4 hover:py-2">GitHub: <span className="text-green-500">github.com/bob-pham</span></h1>
              </a>
              <a href="https://bob-pham.github.io/">
                <h1 className="my-2 transition ease-in-out hover:-translate-y-1 hover:bg-slate-800 hover:rounded-lg hover:px-4 hover:py-2">Website: <span className="text-green-500">bob-pham.github.io</span></h1>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
