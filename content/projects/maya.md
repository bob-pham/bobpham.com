---
title: Maya
description: Maya is a Virtual Health Assistant, designed with the goal of separating more urgent call center requests from those that might be solved through more basic means, such as Cognitive Behavioural Therapy.
link: maya 
startDate: 01-01-2023
endDate: 01-01-2023
tech: 
- Python
- Flask
- React
- TailwindCSS
- OpenAI
logo: /projects/maya/maya_home.png
demoVideo: 4K0aI33Ept8
gitLink: https://github.com/bob-pham/Maya-Mental-Health-Assistant
demoImages:
- /projects/maya/maya_talking.png
- /projects/maya/maya_response.png
- /projects/maya/maya_home.png
---

Mental health call services are often overburdened with people using them for a
variety of reasons. The goal of Maya is to separate more urgent requests from
those that might be solved through more basic means, such as Cognitive
Behavioural Therapy.

Ideally, Maya could be integrated into home assistants like Amazon Echo, Google
Home, or Siri, to detect when a person may be in distress and perform the
necessary steps to either stablize their condition or connect them with a
mental health hotline, should it seem necessary. This will lighten the load of
hotlines, ensuring that people who are higher risk get through faster, and
aren't stuck waiting for an operator on the other end.

Maya uses live audio transcription and looks for keywords to determine whether
a person may be high risk or lower risk, and takes the appropriate action given
what it believes the situation to be.

Maya was created during NWHacks 2023

### Development + Implementation

---

Our project uses a Flask backend, and a React frontend. The React Speech to
Text Library was used to get a live transcription of user speech. Parsing was
done with the flask backend.

#### Challenges

The biggest challenge when creating right angle was connecting our frontend and
our backend. This was due to a number of reasons, but what it boils down to was
that it was a 24 hour event, and so the front and backends were written by
different people who did not have good undersatnding of how the other's worked.
Additionally, our team developed on different devices with different operating
sytems and architecture.

#### Future Improvements

In the future, maya should be have a database, as well as connection to an AI
model, like ChatGPT

