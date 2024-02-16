const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project about?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installation is required?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the application used for?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license are you using?',
        choices: [
            { name: 'MIT', value: ['MIT','![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)']},
            { name: 'ISC', value: ['ISC','![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)']},
            { name: 'Perl', value: ['Perl','![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)']},
            { name: 'MPL 2.0', value: ['MPL 2.0','![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)']},
        ],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    //Write the data to a specific file using the file system
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('An error occured writing file:', err)
        } else {
            console.log('README file successfully created!');
        }
    });
}

// function to initialize program
const init = async () => {
    console.log('Welcome to README Generator, please answer the following questions:');
    try {
        const answers = await inquirer.prompt(questions);
        //Creates a variable for the badges
        let licenseBadge;

        const README = generateMarkdown(answers);

        writeToFile('README.md', README);

    } catch (err) {
        console.log('Error occured', err);
    }
};

// function call to initialize program
init();