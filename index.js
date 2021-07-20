const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utilities/generate-site.js');

const teamMembers = [];

const startApp = () => {

    // initial questionarie for adding a manager to the team
    const addManager = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the team manager name?',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the team managers name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the managers ID?',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the team managers ID!');
                        return false;
                    }
                } 
            },
            {
                tupe: 'input',
                name: 'managerEmail',
                message: 'Please enter managers email?',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter managers email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number for team Manager?',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter the office number for team Manager');
                        return false;
                    }
                }
            },

        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.id, answers.managerEmail, answers.officeNumber);
            teamMembers.push(manager); 
            
            createNewTeamMember();
        })
    }

    //Engineer Questions 
    const addEngineer = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineers name>',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter engineers name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineers ID',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter engineer ID!!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineers email?',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter engineers Email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'What is the engineers GitHub username?',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter engineers GitHub username!');
                        return false;
                    }
                }
            },
        ])
            .then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.id, answers.engineerEmail, answers.gitHub);
                teamMembers.push(engineer);

                createNewTeamMember();
            })
    }
    
    // Intern question
    const addIntern = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the interns name?',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter interns name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the interns ID?',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter interns ID!');
                        return false;
                    }
                }
            },
            {
            type: 'input',
            name: 'id',
            message: 'What is the interns ID?',
            validate: answerInput => {
                if(answerInput) {
                    return true;
                } else {
                    console.log('Please enter interns ID!');
                    return false;
                }
            }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the interns ID?',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter interns ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the interns email?',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter interns email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the interns school?',
                validate: answerInput => {
                    if(answerInput) {
                        return true;
                    } else {
                        console.log('Please enter interns school!');
                        return false;
                    }
                }
            },
        ])
            .then(answers => {
                const intern = new Intern(answers.internName, answers.id, answers.internEmail, answers.school);
                teamMembers.push(intern);

                createNewTeamMember();
            })
    }
    
    // Adding an engineer or intern or finishing menu options
    const createNewTeamMember = () => {
        return inquirer.prompt([
            {
            type: 'list',
                name: 'teamMenu',
                message: 'What type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'Finish Building the team']
            }
        ])
            .then(answers => {
                if(answers.teamMenu === 'Engineer') {
                    addEngineer();
                }
                else if (answers.teamMenu === 'Intern') {
                    addIntern ();
                }
                else {
                    const pageHTML = generatePage(teamMembers);
                    writeFile(pageHTML);
                    console.log('File created');
                    copyFile();
                    console.log('Stylesheet Copied');
                }
            })
    }

    addManager()
}

startApp()