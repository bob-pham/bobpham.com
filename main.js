let aboutMePosition = document.getElementById('about_me').getBoundingClientRect().top;
let projectsPosition = document.getElementById('projects').getBoundingClientRect().top - document.getElementById('projects').clientHeight - document.getElementById('projects_bulk').clientHeight;
let transitionPosition = projectsPosition - aboutMePosition;
let initialState = [0, 0.75, 1.6, 2.5, 0];
let aboutMeState = [aboutMePosition, 1.4, 1.7, 0, Math.PI / 2];
let transState = [transitionPosition, 0.5, 1.6, -2, Math.PI];
let pcState = [projectsPosition, 0.68, 1.3, -0.15, (3 * Math.PI) / 2];

document.getElementById("about-me-button").addEventListener("click", scrollToAboutMe, false);
document.getElementById("projects-button").addEventListener("click", scrollToProjects, false);

function scrollToAboutMe() {
  window.scroll({
    top: aboutMePosition,
    behavior: 'smooth'
  });
}

function scrollToProjects() {
  window.scroll({
    top: document.getElementById('projects').getBoundingClientRect().top,
    behavior: 'smooth'
  });
}