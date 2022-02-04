// Packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log('Please provide a valid title to your project');
            } return false;
        }
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "Please provide a short description of your project",
        name: "description",
      },
      {
        type: "input",
        message: "What are the steps required to install dependencies?",
        name: "installation",
      },
      {
        type: "list",
        message: "What license should your project include?",
        name: "license",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repo?'
      },
      {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contributor",
      },
      {
        type: 'input',
        name: 'test',
        message: 'How should you run tests?'
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log("Success! Your README.md has been created!")
    );
  }



// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      const response = generateMarkdown(answers);
      writeToFile("output/README.md", response);
    });
}

// Function call to initialize app
init();