---
title: right angle
description: right angle is a posture correction web-application that uses computer vision help users improve their posture by detecting and notifying users when they have good and bad sitting posture.
link: right-angle
startDate: 10-01-2022
endDate: 10-01-2022
tech: 
- TailwindCSS
- Python
- Flask
- React
- OpenCV
logo: /projects/right_angle/logo.png
demoVideo: m0zNMef_iKU
gitLink: https://github.com/bob-pham/RightAngle
demoImages:
- /projects/right_angle/Calibrate.png
- /projects/right_angle/Correct.png
- /projects/right_angle/Incorrect.png
---

Right Angle is a full-stack application that I and a team of 3 others created
during SacHacks IV. Right Angle is a posture correction web application that
uses computer vision to detect whether or not a users has good or bad posture
and is perfect for remote workers and students! Right Angle is a program that
corrects a user's posture by identifying their body's pose and informs the user
whether or not their posture should be corrected. The program first tells the
user to sit up straight while it calibrates. Once calibrated, the program will
signal to the user if their posture is good or bad!

In the age of COVID-19, we realized the importance of office ergonomics as we
transitioned to remote work and learning. As current co-op interns, it's easy
for us to forget how to maintain a healthy posture, as we spend the majority of
our days seated at our desk. That's why we were inspired to create Right Angle;
an application to help office workers and students create the healthy habit of
correcting their posture!

### Development + Implementation

Our project uses a Flask backend, and OpenCV to monitor the user's position and
posture. Our frontend was made using React and Tailwind CSS.

As far as the actual slouch detection, this was accomplished using the OpenCV
library. Using the library and media pipeline's facial/body detection, we use
the calibrated posture to calculate the whether the user starts to slouch. This
is done by cross referencing data about the relative position of the user's
face, the angle of the user's neck, as well as their proximity to the camera.
Multiple datapoints are required, as we cannot enforce where the user has
positioned their webcam in order to check. The program continually takes an
average of the user's posture as the program runs, to avoid small lapses into
bad posture being reported.

**Challenges**

The biggest challenge when creating right angle was connecting our frontend and
our backend. This was due to a number of reasons, but what it boils down to was
that it was a 24 hour event, and so the front and backends were written by
different people who did not have good undersatnding of how the other's worked.
Additionally, our team developed on different devices with different operating
sytems and architecture.

**Future Improvements**

In the future, and expansion of right angle would be to fully implement a
backend database with accompanying data visualization, to allow users to track
improvements in their sitting posture. This was intended to be one of the
features of right angle, however as this was a 24 hour hackathon we were unable
to implement it.
