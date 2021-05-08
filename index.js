const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Enter a project title:',
        name: 'title',
    },
    {
        type: 'editor',
        message: 'Enter a project description:',
        name: 'description',
    },
    {
        type: 'editor',
        message: 'Enter an installation instructions:',
        name: 'installation',
    },
    {
        type: 'editor',
        message: 'Enter the usage information:',
        name: 'usage',
    },
    {
        type: 'editor',
        message: 'Enter contribution guidelines:',
        name: 'contributing',
    },
    {
        type: 'editor',
        message: 'Enter test instructions:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose an open source license:',
        name: 'license',
        choices: [
            {
                name: 'Unlicense',
                value: 'unlicense',
            },
            {
                name: 'GNU AGPLv3',
                value: 'agpl-3.0',
            },
            {
                name: 'GNU GPLv3',
                value: 'gpl-3.0',
            },
            {
                name: 'GNU LGPLv3',
                value: 'lgpl-3.0',
            },
            {
                name: 'Mozilla Public 2.0',
                value: 'mpl-2.0',
            },
            {
                name: 'Apache 2.0',
                value: 'apache-2.0',
            },
            {
                name: 'MIT',
                value: 'mit',
            },
            {
                name: 'Boost Software 1.0',
                value: 'bsl-1.0',
            },
            new inquirer.Separator(),
        ],
        default: 0,
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(`./dest/${fileName}`, generateMarkdown(data), 'utf8', error => {
        if (error) {
            console.error('\x1b[31m', `\n${error}\n`);
        } else {
            console.log('\x1b[32m', '\nFile successfully generated!\n');
        }
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile('README.md', answers);
        })
        .catch(error => {
            console.error(error);
        });
}

init();
