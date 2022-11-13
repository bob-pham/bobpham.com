import ProjectHeader from '../components/ProjectHeader';

import website from '../public/images/portfoliowebsite.png';

const tech = ['React', 'Next.js', 'Tailwindcss', 'Three.js', , 'Blender'];

export default function PortfolioSite() {
  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="Portfolio Website Development"
        logo={website}
        tech={tech}
        gitLink="https://github.com/bob-pham/bob-pham.github.io"
        // demo="PFrEKIxIH0Y"
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          My [legacy/defunct] portfolio website, which hosts information about
          me as well as my technical projects.
        </p>
        <div className="flex flex-col w-1/2 place-self-center">
          <h1 className="text-xl mt-10 text-center">
            Development + Implementation
          </h1>
          <div className="divider"></div>
        </div>
        <p>
          My interest lies primarily in full-stack and backend development;
          however, this isn't to say that I dislike frontend development. I find
          backend and full-stack development more fun, but frontend development
          can sometimes be a good change of pace. I also understand the
          importance of putting my best foot forward and thus sought to make a
          well-made, memorable, and eye-catching portfolio.
          <br />
          <br />
          My previous portfolio website was suboptimal, it became incredibly
          hard to maintain since I set out to program it from scratch - without
          any use of any CSS processor or JavaScript Framework. Additionally,
          the websites loadtime left much to be desired, since it needed to
          fetch a 40mb model every time it was loaded. As such, most of the
          fancy features were disabled on mobile, which only made things worse,
          since most people would be checking the website out on that platform.
          With all of this in mind, I set out to create a new website that would
          fix all of these issues, and go even further beyond.
          <br />
          <br />
            <strong>This site is still incomplete.</strong>
            <br />
          <br />
            <strong>TODO:</strong>
        </p>
        <ul className="list-disc font-bold">
                <li>Create a model</li>
                <li>Model interactivity/motion with Three.js</li>
                <li>Embed demos of clientside projects</li>
            </ul>
      </div>
    </main>
  );
}
