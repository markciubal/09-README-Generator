/***
 *    _____________________  _____  ________     _____  ___________                .___
 *    \______   \_   _____/ /  _  \ \______ \   /     \ \_   _____/      _____   __| _/
 *     |       _/|    __)_ /  /_\  \ |    |  \ /  \ /  \ |    __)_      /     \ / __ | 
 *     |    |   \|        /    |    \|    `   /    Y    \|        \    |  Y Y  / /_/ | 
 *     |____|_  /_______  \____|__  /_______  \____|__  /_______  / /\ |__|_|  \____ | 
 *            \/        \/        \/        \/        \/        \/  \/       \/     \/ 
 *               ________                                   __                         
 *              /  _____/  ____   ____   ________________ _/  |_ ___________           
 *             /   \  ____/ __ \ /    \_/ __ \_  __ \__  \\   __/  _ \_  __ \          
 *             \    \_\  \  ___/|   |  \  ___/|  | \// __ \|  |(  <_> |  | \/          
 *              \______  /\___  |___|  /\___  |__|  (____  |__| \____/|__|             
 *                     \/     \/     \/     \/           \/                            
https://patorjk.com/software/taag/#p=display&h=3&c=c&f=Graffiti&t=README.md%0A%20%20%20%20%20%20%20%20%20Generator
 */
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

class ReadmeGenerator {
    constructor() { };
    writeToFile = (filename, data) => {
        const readmeMarkdown = generateMarkdown(data);
        fs.writeFile(filename, readmeMarkdown, function (error) {
            if (error) {
                console.error(error);
            } else { 
                console.log(`Successfully wrote to ${filename}.`);
            }
        })
    }
    askQuestions = () => {
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
                message: 'What do you want to call this project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'How would you describe your project?',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What are the installation instructions?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'How do you use your project?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'How can you contribute?',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'How can perform tests?',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'Do you have any questions for this project?',
                name: 'questions',
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            }, 
            {
                type: 'list',
                message: 'What license is this?',
                name: 'license',
                choices: [
                    {
                        name: 'The Unlicense',
                        value: 'unlicense',
                        description: 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.yarn is an awesome package manager',
                    },
                    {
                        name: 'MIT License',
                        value: 'MIT',
                        description: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
                    }
                    
                ]
            },
        ];
        inquirer
            .prompt(questions)
            .then((response) => {
                const filename = `README.md`;
                this.writeToFile(filename, response);
                console.log(`Successfully inquirered.`);
            })
    }
}
// Initialize application.
const readme = new ReadmeGenerator();
readme.askQuestions(); 