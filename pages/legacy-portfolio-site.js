import ProjectHeader from '../components/ProjectHeader';

import website from '../public/images/website.png';

const tech = ['HTML', 'CSS', 'JavaScript', 'Three.js', 'Blender'];

export default function LegacyPortfolioSite() {
  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="[Legacy/Defunct] Portfolio Website Development"
        logo={website}
        tech={tech}
        gitLink="https://github.com/bob-pham/personal_website"
        demo="PFrEKIxIH0Y"
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
          The most eye-catching portion of my portfolio would be the homepage.
          The homepage features a 3d-model of myself sitting at my desk that
          spins around and pans to different perspectives as the page is
          scrolled. The model was created in Blender and implemented into the
          website using the Three.js library. There are also white stars
          throughout the background, created and randomly distributed throughout
          the scene upon loading. Camera movement and star generation were all
          accomplished using JavaScript. The layout is responsive in different
          (desktop) aspect ratios by calculating distances based on screen
          sizes. Simply because it looked terrible, these features are all
          disabled for mobile devices.
          <br />
          <br />
          Creating this website also taught me a great deal about HTML and CSS.
          Originally, responsiveness was done using the BootStrap framework;
          however, this was later removed in favour of CSS Grid. Grid gave me
          the same responsiveness as BootStrap but made the HTML more readable,
          in addition to making the bundle size smaller. This website was done
          with plain HTML + CSS as well as vanilla JavaScript. All of the assets
          done were made by myself, a conscious choice in order to understand
          the technologies on a fundamental level.
          <br />
          <br />
          Funny that I would mention bundle size though: This site is incredibly
          unoptimized in its current state. The biggest offender is the model
          that I made, which is almost 40mb. In future versions of my portfolio
          site, I will try to use a smaller model.
        </p>
      </div>
    </main>
  );
}
