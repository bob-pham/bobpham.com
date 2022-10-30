import MenuBar from '../Home/MenuBar';

export default function ProjectHeader(props) {
  return (
    <>
      <MenuBar />
      <img className="pt-16 pb-4 px-4 max-h-100" src={props.logo} />
      <h1 className="text-center my-5 text-4xl">{props.name}</h1>
      <div className="flex flex-col w-1/2 border-opacity-50 place-self-center">
        <div className="place-self-center">
          {props.tech.map((item) => (
            <span className="badge badge-outline mx-1 text-lg p-4">{item}</span>
          ))}
        </div>
        <div className="divider "></div>
      </div>
    </>
  );
}
