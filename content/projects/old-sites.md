---
title: Old Sites
description: Previous iterations of my portfolio website 
link: old-sites
startDate: 11-01-2022
endDate: 11-01-2022
tech: 
- TypeScript
- React
- TailwindCSS
demoVideo: PFrEKIxIH0Y
logo: /projects/portfolio_site/portfoliowebsite.png
gitLink: https://github.com/bob-pham/bob-pham.github.io
---

My legacy/defunct portfolio website, which hosts information about me as well as my technical projects.

### Development + Implementation

---

#### Iteration 1

My interest lies primarily in full-stack and backend development; however, this isn't to say that I dislike frontend development. I find backend and full-stack development more fun, but frontend development can sometimes be a good change of pace. I also understand the importance of putting my best foot forward and thus sought to make a well-made, memorable, and eye-catching portfolio.

My previous portfolio website was suboptimal, it became incredibly hard to maintain since I set out to program it from scratch - without any use of any CSS processor or JavaScript Framework. Additionally, the websites loadtime left much to be desired, since it needed to fetch a 40mb model every time it was loaded. As such, most of the fancy features were disabled on mobile, which only made things worse, since most people would be checking the website out on that platform. With all of this in mind, I set out to create a new website that would fix all of these issues, and go even further beyond.

#### Iteration 0

The most eye-catching portion of my portfolio would be the homepage. The homepage features a 3d-model of myself sitting at my desk that spins around and pans to different perspectives as the page is scrolled. The model was created in Blender and implemented into the website using the Three.js library. There are also white stars throughout the background, created and randomly distributed throughout the scene upon loading. Camera movement and star generation were all accomplished using JavaScript. The layout is responsive in different (desktop) aspect ratios by calculating distances based on screen sizes. Simply because it looked terrible, these features are all disabled for mobile devices.

Creating this website also taught me a great deal about HTML and CSS. Originally, responsiveness was done using the BootStrap framework; however, this was later removed in favour of CSS Grid. Grid gave me the same responsiveness as BootStrap but made the HTML more readable, in addition to making the bundle size smaller. This website was done with plain HTML + CSS as well as vanilla JavaScript. All of the assets done were made by myself, a conscious choice in order to understand the technologies on a fundamental level.

Funny that I would mention bundle size though: This site is incredibly unoptimized in its current state. The biggest offender is the model that I made, which is almost 40mb. In future versions of my portfolio site, I will try to use a smaller model.
