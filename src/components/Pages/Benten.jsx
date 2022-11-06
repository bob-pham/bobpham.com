import ProjectHeader from "./ProjectHeader";

const tech = ["C++", "Image Magick", "CMake"];

export default function Benten() {
  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="Benten"
        gitLink="https://github.com/bob-pham/Benten"
        tech={tech}
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          [WIP] Benten is a multithreaded CLI image editor written in C++ and utilizes
          the ImageMagick library. Benten does not give the user the usual
          granular control of a traditional editor, rather it transforms images
          into predefined permutations. Each permutation is a testbed for
          different algorithms, and computer vision tools.
          <br />
          <br />
          Current permutations supported / under development (goal is to have
          10):
        </p>
        <ul className="list-disc leading-4 place-self-center">
          <li>PixelArtTransform</li>
          <li>TriangleVectorTransform</li>
          <li>CircleAreaTransform</li>
          <li>AbstractBlobTransform</li>
          <li>ColorReducer</li>
          <li>Silhoutter</li>
        </ul>
      </div>
    </main>
  );
}
