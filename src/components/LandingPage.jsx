import { useRef, useEffect } from 'react'


export default function LandingPage({ timeout = 60 }) {
    const canvas = useRef();

    useEffect(() =>{
        const context = canvas.current.getContext('2d');

        const width = document.body.offsetWidth;
        const height = document.body.offsetHeight;
        canvas.current.width = width;
        canvas.current.height = height;
    
        // context.fillStyle = '#0F172A';
        context.fillStyle = 'rgba(17,24,39,1)';
        context.fillRect(0, 0, width, height);
    
        // calculate how many 'lines' to show and animate
        const columns = Math.floor(width / 20) + 1;
        const yPositions = Array.from({ length: columns }).fill(0);
    
        const matrixEffect = () => {

            context.fillStyle = 'rgba(17,24,39, 0.12)';
            // context.fillStyle = 'rgba(15, 23, 42, 0.12)';
            context.fillRect(0, 0, width, height);
    
            context.fillStyle = '#ffffff';
            context.font = '20pt monospace';
    
            yPositions.forEach((y, index) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = index * 25;
                context.fillText(text, x, y);
    
                yPositions[index] = y > 100 + Math.random() * 10000 ? 0 : y + 20

            });
        };
    
        const interval = setInterval(matrixEffect, timeout);
        return () => {
            clearInterval(interval);
        };
    }, [canvas, timeout])

    return(
        <div className=" w-100 grid place-items-center font-bebasneue sm:text-5xl text-3xl text-white text-center">
            <canvas className="h-full w-full absolute z-0 bg-white montserrat text-lg" ref={canvas}></canvas>
            <div className="md:w-fit w-11/12 z-40 rounded-xl p-10 bg-gradient-to-br from-slate-800 to-zinc-700 via-gray-800 animate-gradient-x border-2 border-slate-800 drop-shadow-sm">
                <h1 className="h-min m-1">Hello, I'm Bob</h1>
                <h1 className="h-min m-1">Firmware Engineer Intern @ Intel</h1>
                <h1 className="h-min m-1">Honours CS Student @ UBC</h1>
            </div>
        </div>
    )
}