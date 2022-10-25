import { useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { Chart } from 'react-google-charts';
import aboutMe from '../../markdown/aboutme.mdx';

export default function AboutMe() {
    
    const [markdown, setMarkdown] = useState("");

    const columns = [
        { type: "string", id: "Company" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" },
      ];
      
      const rows = [
        ["Intel", new Date(2022, 9, 6), new Date()],
        ["UBC", new Date(2020, 9, 6), new Date(2022, 9, 5)],
        ["PRS", new Date(2021, 6, 1), new Date(2021, 8, 31)],
      ];

    const data = [columns, ...rows];

    useEffect( () => {
        fetch(aboutMe).then((response) => response.text()).then((str) => setMarkdown(str))
    }, []);
    
    return (
    <>
        <div className="grid grid-cols-2 overflow-hidden w-11/12">
            <ReactMarkdown className="p-10 cols-span-1 text-white text-lg font-montserrat">{markdown}</ReactMarkdown>
            <canvas className="cols-span-1"></canvas>
        </div>
        <div className="w-11/12">
            <Chart 
                chartType="Timeline"
                data={data} 
                width="100%" 
                height="400px" 
                options={{
                    title: "Experience/Study Timeline",
                    backgroundColor: "#334155",
                    timeline: {
                        barLabelStyle: { fontName: "montserrat", fontSize: 14, color: "#FFFFFF" },
                        rowLabelStyle: { fontName: "montserrat", fontSize: 14, color: "#FFFFFF" },
                    },
                    hAxis: {
                        textStyle: {
                            color: "white",
                        },
                        rowLabelStyle: { fontName: "montserrat", fontSize: 14, color: "#FFFFFF" },
                        texColor: "#FFFFFF",
                    }
                }}/>
        </div>

    </>
    );
}