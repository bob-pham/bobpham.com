---
title: Homework Manager
description: Google Chrome extention homework manager, created entirely using vanilla JS - using a barebones framework I created
link: maya 
startDate: 03-01-2022
endDate: 04-01-2022
tech: 
- JavaScript
logo: /projects/hw_manager/hw homescreen.png
demoVideo: 2x9oMn2Jy0w
gitLink: https://github.com/bob-pham/homework_manager
demoImages:
- /projects/hw_manager/hw add class.png
- /projects/hw_manager/hw homescreen.png
- /projects/hw_manager/hw view class.png
---

A Google chrome extension that helps manage upcoming assignments and grades.
The extension generates a todo-list based on upcoming deadlines and assessment
weights, and calculates current grades. The extension also allows for setting
additional reminders prior to the due date.

### Development and Implementation

---

I completed numerous different iterations of this project, but due to my
perfectionism never truly saw it as done, but a project needs to come to an end
at some point. The concept behind the project is relatively simple. Its
simplicity allows me to experiment with frontend technologies and different
data structures and algorithms.

Additionally, I am a strong believer in the idea that you must truly understand
the technologies that you use. Due to this reason, no JavaScript Frameworks are
used, and everything is done purely with Vanilla JavaScript, as well as HTML +
CSS. From this I was able to learn many of the underlying features that modern
frameworks utilize: the program is structured in such a way that I essentially
created my own custom pseudo-framework. Will I ever do something like this
again? Probably not, but it was a good experience, and has inspired me to
potentially actually make a true framework in the future. (I am currently being
inspired by Blazor + Svelt 👀)

I created the program with object-oriented design patterns shaped around
assessments, subclasses, assignments, and tasks. These were implemented using a
composite design pattern, with assessments being an abstract class and
assignments and tasks extending it. This allowed assignments to have subtasks
associated with them, which may also have their subtasks. This simplified grade
and weight calculations, as one could quickly iterate through assessments of
children to calculate the weight. Updating the parents of children was done
using an observer pattern, which decreased coupling in the code.

The todo-list was implemented using a priority system. Initially, this was
accomplished using a sorted array of assessments; however, this had terrible
asymptotic runtimes. The to-do-list priority system had three primary
functions: insertAssessment, removeAssessment, and update, which would re-sort
the assessments based on priority if values in an assessment were changed.
Insert/removeAssessment ran at O(n) with my initial sorted array
implementation. Due to sorting, update ran at O(n^2) using the quicksort
algorithm. To improve the asymptotic runtimes, I changed the implementation to
a priority tree, implemented with a binary heap data model. This drastically
improved the runtimes of insert/removeAssessment to O(logn) and O(n) for
update. The frontend of advanced homework planner was created using HTML and
CSS. Initially, this was done with the BootStrap framework; however, this is
currently being redone to use CSS grid. Grid gives the same responsiveness as
BootStrap but has the advantage of making the HTML more readable and making the
bundle size smaller.
