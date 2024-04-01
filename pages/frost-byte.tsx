import ProjectHeader from "../components/ProjectHeader";

const tech = ["Rust", "MySQL", "Ubuntu"];

export default function FrostByte() {
  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="FrostByte"
        tech={tech}
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          Frost-Byte is an alternative to OS level NAS software, being a simple,
          intuitive, and performant solution for infrequently accessed cold
          storage
        </p>
      </div>
    </main>
  );
}
