// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your first name?',
        name: 'fname',
    },
    {
        type: 'input',
        message: 'What is your last name?',
        name: 'lname',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'What is your favorite color in hexidecimal?',
        name: 'hex',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn address?',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'What is your GitHub address?',
        name: 'github',
    },
];

const askQuestions = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(`Successfully inquirered.`);
            const {fname, lname, location, hex, linkedin, github } = response;
            console.log(questions);
            const filename = `${fname}${lname}.txt`;
            writeToFile(filename, JSON.stringify(questions));
            console.log(`Successfully wrote ${filename}.`);
        })
};

// TODO: Create a function to write README file
const writeToFile = (filename, data) => {
    fs.writeFile(filename, data, function (error) {
        if (error) {
            console.error(error);
        } else { 
            console.log("Successfully wrote to file.");
        }
    })
}
// TODO: Create a function to initialize app
const init = () => askQuestions(); 

// Function call to initialize app
init();
