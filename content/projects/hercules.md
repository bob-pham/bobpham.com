---
title: Hercules
description: Android app which incentives healthy living by gamifying healthy habits
link: hercules 
startDate: 01-01-2022
endDate: 01-01-2022
tech: 
- Java
- Android
logo: /projects/hercules/home.png
demoVideo: HjFphuleU8M
gitLink: https://github.com/bob-pham/Hercules
demoImages:
- /projects/hercules/questpage.png
- /projects/hercules/changeroomsscreenshot.png
- /projects/hercules/home.png
---

Hercules is a project created during NwHacks 2022 by myself and a team of three
others. Hercules is a "gamified" health tracking app, oriented towards those
who struggle to maintain a healthy lifestyle. The app is engineered to
incentivize users to work out, eat well, and develop healthy habits by
rewarding them for fulfilling their fitness plans, or “questlines”, which are
comprised of different tasks. Each user has a customizable avatar, and upon
completion of certain goals "quests", users will earn gold and experience
points that can be used to buy items at the shop and increase their character’s
stats. As a proof of concept developed over the course of 24 hours, it is
relatively simple, however a simple algorithm was developed to make it harder
to earn rewards with inconsistent or unhealthy progress.

### Development + Implementation

---

During the development of Hercules, the primary focus of my contributions was
on the backend systems of "quests" (tasks), "questlines" (routines), in-game
user experience and currency, as well as in-game item shops.

"Quests" and "questlines" were developed with inheritance and polymorphism in
mind and were shaped around the composite design pattern. Quests stored
information about the activity they represented and how much in-game experience
and currency they would be worth. Questlines inherit from quests and represent
a collection composed of quests and questlines and also store data on their own
and their children's in-game experience currency and progress consistency. The
composite design pattern was instrumental in this use case allowing for
straightforward calculation on total experience/currency calculation on entire
questlines and minimized data reads when seeking progress consistency. Updates
to subquests within a questline were proliferated up the hierarchy using an
observer pattern to decrease coupling.

As part of the quest and questline systems, I was also responsible for
developing an algorithm to distribute the quests and questlines and determine
their associated rewards. The quest and questline distribution system was more
straightforward, as it would just spread the quests/questlines based on a
defined, healthy gap. The reward system was designed to promote consistency and
give more points based on consistent completion. The frequency was determined
by calculating the slope between the most recent completions to accomplish
this. Consistency between completions would have slopes close to zero. Thus the
algorithm rewarded players experience and currency equal to a random base
amount multiplied by the reciprocal of the slope, limited at a maximum cap.

Implementing the in-game item shop was comparatively straightforward compared
to everything I worked on. Given that the project was a proof of concept,
in-game currency was simply an integer stored in the user's data, and the shop
would merely check if the user had enough currency when they tried to make a
purchase, and if they did would subtract the price from their wallet and add
the item to the user's inventory. Most of the work for this portion was
frontend, done using android studio and XML.

### Possible Future Improvements

---

Unfortunately, however, due to the time constraints of the hackathon, most of
the features that I developed remain unimplemented in our demo. Development of
our frontend lagged behind our backend progress. Thus we decided that it would
be best to commit our time to finishing our front end so we could have
something to present to the judges. However, the code for these contributions
is still a part of the source code.

Given the opportunity to expand, this project could be improved by having a
dedicated frontend, perhaps with a game engine, and a dedicated backend running
on a remote server. Many additional ideas that we came up with for Hercules
were also never realized, so I may revisit this project in the future.
