# FitLit

[FitLit Demo](https://user-images.githubusercontent.com/87993138/172069549-9055821e-4a2e-4eee-9595-90b85678bd3e.mov)

## Table of Contents
- [Project Overview](#project-overview)
- [Learning Goals](#learning-goals)
- [Technologies and Tools](#technologies-and-tools)
- [Project Reflections](#project-reflections)
- [Roadmap](#roadmap)
- [Setup](#setup)
- [Contributors](#contributors)
- [Sources](#sources)

## Project Overview

In this project, we fetched data from an API with user, activity, hydration and sleep data for many users over many days. Think of something like Fitbit. Fitbit devices log data and present it on a dashboard for their users. Our goal is to present a useful dashboard for a user to view and see their latest activity data, goals, and milestones. 

The [Turing School of Software and Design](https://turing.edu/) provided a project spec sheet for students to follow. [Part 1](https://frontend.turing.edu/projects/Fitlit-part-one.html). [Part 2](https://frontend.turing.edu/projects/Fitlit-part-two.html).

## Learning Goals

### Part 1

* Implement ES6 classes that communicate to each other as needed
* Use object and array prototype methods to perform data manipulation
* Create a dashboard that is easy to use and displays information in a clear way on multiple screens
* Write modular, reusable code that follows SRP (Single Responsibility Principle)
* Implement a robust testing suite using TDD (Test-Driven-Development)
* Make network requests to API endpoints to retrieve and manipulate data

### Part 2

* Local server and network requests to GET, POST and manipulate data
* Refactor codebase
* Accessibility using Lighthouse and WAVE
* Implementing feedback from Project Manager

## Technologies and Tools

* JavaScript
* HTML
* CSS
* Fetch API
* Mocha
* Chai
* NPM
* Webpack

## Project Reflections

#### Part 1 Challenges

* Fetched API data was received as an object when we were expecting an array. This caused us to refactor our classes to accept data in that configuration.
* We initially created four seperate fetch calls to access our data. Eventually we decided it would be more efficient to consolidate all of those calls into a single promise.
* Utilizing the driver-navigator approach, we learned how to articulate our ideas to the driver.

#### Part 1 Wins

* Integrating `Promise.all()`.
* Manipulation of multiple datasets.
* Creating a user interface to reflect our datasets on the DOM.
* We were successful in planning and executing those plans, and followed our wireframe, sticking to our Define the Relationship document, and project board to meet the requirements of our MVP.
* Collaborated well as a team and leveraged active-listening and effective communication to our advantage.

#### Part 2 Challenges

* Modifying CSS to fit data to DOM.
* Error handling for inputs.
* Error handling for fetch calls.
* Posting data to the local server.

#### Part 2 Wins

* Using the local server and webpack simultaneously.
* Allowing user to access new data.
* Allowing user to input hydration, sleep, and activity data seperately.
* Creating robust forms using HTML and CSS.
* Preventing the user from inputting incorrect or incomplete data.
* Parsing input to match dataset format.
* POST and GET fetch requests completed successfully.

## Roadmap

Future features could include:

* Integration of Chart.js to display data
* Functionality to edit user profile
* Add user friend-list to sidebar
* Drag-and-drop widgets
* Date-picker

## Setup
1. Fork and clone the local FitLit API server [here]()
2. Cd into the root directory and run `npm install`
3. To run this server, run `npm start` in the terminal. To stop the local server, use command `Control + C`. Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems.
4. Fork _this_ repo - on the top right corner of this page, click the **Fork** button.
5. Clone down the _forked_ repo. 
6. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
7. Run `npm start` in the terminal, to see the HTML page `Control + C` is the command to stop running the local server.  Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems. This command is not specific to Webpack; make note of it for future use.
8. Open a browser window and go to http://localHost:8080 to view the website
9. Do not run `npm audit fix --force`.  This will update to the latest version of packages.  We need to be using `webpack-dev-server@3.11.2` which is not the latest version. 

## Contributors

**Brandon Ainsworth**
* [LinkedIn](https://www.linkedin.com/in/brandon-ainsworth-922164183/)
* [GitHub](https://github.com/BrandonAinsworth)

**Rachel Bock**
* [LinkedIn](https://www.linkedin.com/in/rachelbock/)
* [GitHub](https://github.com/rachel-bock)

**Amber Bodnar**
* [LinkedIn](https://www.linkedin.com/in/amberbodnar/)
* [GitHub](https://github.com/abodnar1)

## Sources

* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Stack Overflow](https://stackoverflow.com/)
* [W3-Schools](https://www.w3schools.com/)
* [YouTube - WebPack](https://www.youtube.com/watch?v=GU-2T7k9NfI)
* Mentors - [Artan Myrtolli](https://github.com/artanmyrtolli), [David Engel](https://github.com/David5280), [Matt Roden](https://github.com/Matt-Roden), [Nate Ewert-Krocker](https://github.com/NEwertKrocker)
* And a huge shout out to our fellow Turing cohort members!
