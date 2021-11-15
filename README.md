# Team-Profile-Generator

![License](https://img.shields.io/badge/license-MIT-blue)

![team-gen](assets/gif/team-gen.gif)

## Description
We were challenged to use Node.js to build a command-line application that takes in information about employess on a software engineering team. The information then generates a HTML webpage that displays the summaries of each person. Having recently learnt about testing this project provided me with an opporuntiy to implement testing methods using 'jest' as well as further develop my understanding and skills with 'inquirer'. 

To view a video demonstation of the application please [CLICK HERE.](https://watch.screencastify.com/v/IuZqyfmKadrkxuGOzwNU) 

To view the code and see how it was created view my [GitHub repo here.](https://github.com/mjhwest/Team-Profile-Generator) 

## Table of Contents
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Features](#features)
- [Contribute](#contribute)
- [License](#license)

## Installation
Once the user has cloned the project from GitHub there are a very steps they must undertake in order to get the application running. 
They must first open the command line and then type in 'npm install' or 'npm i'. This will download the neccessary dependencies so that the application functions. 
The two depenedencies that are installed are "jest" and "inquirer". In short "jest' is a Javascript library for creating, running and structuring tests wheras 'inquirer' is used to as a way to capture user input in your node.js command line. For screenshot about how to install 'jest and inquirer' please see section 'Usage'. 

## Usage
Once cloned from GitHub into the terminal the user will be presented with the following file structure. 

![cloned](assets/images/cloned.png)

In the command line the user can then enter ' npm install' and this will install all the neccessary dependencies. 

![install](assets/images/install.png)

Once the dependencies are install the user can test the application using Jest. This will make sure that all the tests you are running are correct and will pass. 

![test](assets/images/test.png)

In the command line the user can input "node index.js" and this will start the 'inquirer' function and allow the questions to be presented which will generate the HTML webpage. The user will be prompted with a range of questions about the manager, the engineers and interns. Once they have selected all their team members they select the option "Our team is complete". 

![index](assets/images/index.png)

Once the user has selected "Our team is complete" the HTML file will be created and display the same information as they have input. This will be generated in the foler "dist" and the html file will be called 'team.html'. 

![team](assets/images/team.png)

The html file will be generated and once opened in a web browser will display all the information the user has input. To easily define the specific roles managers have been assigned a red background, engineers a purple background and interns a blue background.

![generate](assets/images/generate.png)

## Tests
As previously mentioned the user can test the functionality of the application. This can be done by opening the root directory in the command line and inputing "npm test". 

## Features
- Node.js
- Javascript
- HTML 
- CSS 
- Bootstrap
- Inquirer 
- Jest

## Contribute
If you would like to contribute to this project please contact me via email at mjhwest89@gmail.com

## License
This project is released under the [MIT LICENSE](https://github.com/mjhwest/Team-Profile-Generator/blob/main/LICENSE)