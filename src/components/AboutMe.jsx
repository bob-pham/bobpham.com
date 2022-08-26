import { useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import aboutMe from '../markdown/aboutme.mdx';

export default function AboutMe() {
    
    const [markdown, setMarkdown] = useState("");

    useEffect( () => {
        fetch(aboutMe).then((response) => response.text()).then((str) => setMarkdown(str))
    }, []);
    

    return (
    <>
        <div className="grid grid-cols-12 overflow-hidden">
            <canvas className="col-span-5"></canvas>
            <ReactMarkdown className="col-span-7 p-10 text-white text-lg font-montserrat">{markdown}</ReactMarkdown>
        </div>

    </>
    );
}