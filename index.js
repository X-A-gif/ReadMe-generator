// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide instructions on how to install your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions on how to use your project:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide guidelines for contributing to your project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide instructions on how to run tests for your project:",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license does your project use?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];
  

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    
    writeToFile("README.md", markdown);
    console.log("README.md file has been generated successfully.");
  } catch (error) {
    console.log(error);
  }
}

// Function call to initialize app
init();
