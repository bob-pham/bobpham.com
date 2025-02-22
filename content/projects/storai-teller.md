---
title: StorAI Teller
description: StorAI Teller is innovative webapp that allows kids and parents to create completely unique children picturebooks using AI.
link: storai-teller
startDate: 01-01-2023
endDate: 01-01-2023
tech: 
- TailwindCSS
- Python
- Flask
- React
- OpenAI
logo: /projects/storai-teller/robot.png
demoVideo: hzhaBG5DpFo
gitLink: https://github.com/bob-pham/Stor-AI-Teller
demoImages:
- /projects/storai-teller/homepage.png
- /projects/storai-teller/create_story_page.png
- /projects/storai-teller/loading_page.png
- /projects/storai-teller/page1.png
- /projects/storai-teller/pagelast.png
---

#### By Lilian & Bob Pham

Introducing StorAI Teller, the cutting-edge web application that harnesses the power of Artificial Intelligence to revolutionize the way kids and parents create stories. We all know the benefits of reading for children: it enhances vocabulary, improves writing skills, fosters independence and self-confidence, and ignites imagination. Unfortunately, not everyone has equal access to books. Libraries may be scarce, and books can be expensive. Moreover, digital books are often behind paywalls.

With StoryAI Teller, these problems are a thing of the past. Our web app generates unique stories at the click of a button, offering an infinite well of exciting adventures for young readers. Our innovative machine learning algorithm uses Natural Language Processing techniques to analyze user inputs, tailoring each story to their interests and preferences.

Best of all, our app is currently free. While AI-generated text and images will always be significantly cheaper than hiring professional writers and illustrators, we want to make sure everyone has access to our incredible platform.

In short, StorAI Teller is a game-changer. We're leveraging state-of-the-art technologies such as AI, machine learning, and natural language processing to empower young readers and ignite their love of storytelling. Join us on this exciting journey today.

### Development + Implementation

---

StorAI Teller employs a Flask backend, leveraging OpenAI's powerful Python library to generate unique stories based on user prompts and associated pictures. The frontend, developed using React and TailwindCSS, is intentionally simple, designed to cater to our target audience - children.

Users can set any theme they desire and include as many characters as they like. These themes are sent to the backend in an API call where they undergo advanced filtering and refinement to avoid mature themes or those disallowed by OpenAI's terms of service. These themes are then utilized to create a prompt which is used to generate a story with OpenAI's Text Completion API.

Once the story has been created, it is parsed into constituent pages and further modified to create prompts for associated images. Since pictures take significant time to construct, their size is limited to 524x524, and the associated parsing and API calls are parallelized using multithreading to optimize performance.

The storybook is then sent back to the user as a response, and the frontend constructs a book with all the bells and whistles that children love.
Future Improvements

The project is still in alpha, many improvements and enhancements can be done, such as:
- Add Users
- Public Database of constructed stories viewable by users
- Allow users to have a saved history of created stories/viewed
- Allow users to share stories
- Ability to save constructed stories as books
- Drag and drop friendly mobile UI for kids

