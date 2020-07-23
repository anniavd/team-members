const inquirer = require('inquirer');
const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")


//Manager Questions



const managerQuest = () => {

    return inquirer.prompt([
        //manager name
        {
            type: 'input',
            name: 'nameTeam',
            message: 'What is your team manager’s name?',
            validate: nameTeamInput => {           //validation the entry
                if (nameTeamInput) {
                    return true;
                } else {
                    console.log('Please enter team manager’s name!');
                    return false;
                }
            }
        },
        //employee ID
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
            validate: idInput => {           //validation the entry
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter employee ID!');
                    return false;
                }
            }
        },
        //employee email
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        //manager office number
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is your office number?',
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        },
        //select employee for building a team  or end the team
        {

            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add employees to your team or no.',
            choices: ['Engenieer', 'Intern', 'NO']
            
        }
        
    ])//;
        .then(({ addEmployee }) => {
            if (addEmployee === 'Engenieer') {
                return inquirer.prompt([
                    //manager name
                    {
                        type: 'input',
                        name: 'nameIng',
                        message: 'What is your engineer name?',
                        validate: nameIngInput => {           //validation the entry
                            if (nameIngInput) {
                                return true;
                            } else {
                                console.log('Please enter the name!');
                                return false;
                            }
                        }
                    },
                    //engineer ID
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the employee ID?',
                        validate: idInput => {           //validation the entry
                            if (idInput) {
                                return true;
                            } else {
                                console.log('Please enter employee ID!');
                                return false;
                            }
                        }
                    },
                    //engineer email
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the email address?',
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log('Please enter the email address!');
                                return false;
                            }
                        }
                    },
                    // engineer github user
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the github username?',
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                console.log('Please enter the github username!');
                                return false;
                            }
                        }
                    },
                   
                ])
                
            }
            else if (addEmployee === 'Intern') {
                return inquirer.prompt([
                    //Intern name
                    {
                        type: 'input',
                        name: 'nameIng',
                        message: 'What is your Intern name?',
                        validate: nameIngInput => {           //validation the entry
                            if (nameIngInput) {
                                return true;
                            } else {
                                console.log('Please enter the name!');
                                return false;
                            }
                        }
                    },
                    //Intern ID
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the employee ID?',
                        validate: idInput => {           //validation the entry
                            if (idInput) {
                                return true;
                            } else {
                                console.log('Please enter  the employee ID!');
                                return false;
                            }
                        }
                    },
                    //Intern email
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the email address?',
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log('Please enter the email address!');
                                return false;
                            }
                        }
                    },
                    // Intern school name
                    {
                        type: 'input',
                        name: 'schoolName',
                        message: 'What is the school name?',
                        validate: schoolNameInput => {
                            if (schoolNameInput) {
                                return true;
                            } else {
                                console.log('Please enter the school name!');
                                return false;
                            }
                        }
                    },
                    
                ])
                
            }
            else {
                return "";
            }

        });
    
};



/*const buildTeam = (addEmployee) => {
    if (addEmployee !== 'NO') {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add employees to your team or no.',
                choices: ['Engenieer', 'Intern', 'NO']
            }
        ])
    }
}*/

managerQuest();
