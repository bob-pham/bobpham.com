import { useRef, useEffect } from "react";

export default function LandingPage({ timeout = 60 }) {
  const canvas = useRef<null | HTMLCanvasElement>(null);

  const backgroundColor: string = "rgba(17, 24, 39, 1)";
  const backgroundFade: string = "rgba(17, 24, 39, 0.25)";
  const textColor: string = "#16A34A";

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
    <div className="w-full h-full grid place-items-center font-bebasneue sm:text-5xl text-2xl text-white text-center overflow-hidden">
      <canvas
        className="h-full w-full absolute z-0 bg-white text-lg overflow-hidden top-0 left-0"
        ref={canvas}
      ></canvas>
      <div className="md:w-fit w-11/12 overflow-hidden rounded-xl p-10 bg-gradient-to-br from-slate-800 to-zinc-700 via-gray-800 animate-gradient-x border-2 border-slate-800 drop-shadow-sm z-10">
        <h1 className="h-min m-1">Hello, I'm Bob</h1>
        <h1 className="h-min m-1">Honours CS Student @ UBC</h1>
        <h1 className="h-min m-1">Prev Firmware Engineer Intern @ Intel</h1>
      </div>
    </div>
  );
}
