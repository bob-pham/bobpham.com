
export default function ProjectCard(props) {
    return (
        <div className="grid-col-span-1 card card-compact w-11/12 h-full bg-slate-800 shadow-xl font-montserrat">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bebasneue text-2xl">{props.name}</h2>
                <p>{props.description}</p>
                <div className="w-11/12">
                    {props.tech.map( item => (<span className="badge m-1">{item}</span>))}
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent">Learn More</button>
                </div>
            </div>
        </div>
    )
}