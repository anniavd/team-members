const inquirer = require('inquirer');
const fs = require('fs')

const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const teamMember = []; //create array member's team.
const identifier = [];

//const outPageHtml =path.join(OUTPUT_DIR,"team.html")


function ShowMenu() {


    // manager building team
    function managerQuest() {
        inquirer.prompt([
            //manager name
            {
                type: 'input',
                name: 'nameManager',
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
            //manager ID
            {
                type: 'input',
                name: 'id',
                message: 'What is your team manager’s  ID?',
                validate: idInput => {           //validation the entry
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter manager ID!');
                        return false;
                    }
                }
            },
            //manager email
            {
                type: 'input',
                name: 'email',
                message: 'What is your team manager’s email address?',
                validate: emailInput => {  //validation the entry
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter the email address!');
                        return false;
                    }
                }
            },
            //manager office number
            {
                type: 'input',
                name: 'officeNum',
                message: 'What is your team manager’s office number?',
                validate: officeNumInput => {  //validation the entry
                    if (officeNumInput) {
                        return true;
                    } else {
                        console.log('Please enter the office number!');
                        return false;
                    }
                }
            }
        ]) //create manager object
            .then(answers => {
                const manager = new Manager(answers.nameManager, answers.id, answers.email, answers.officeNum);
                teamMember.push(manager);
                //identifier.push(answers.id);
                //call to add employee to the team
                addEmployee();
            })

    }

    // add employee
    function addEmployee() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'memberType',
                message: 'Which type of team member would you like to add?.',
                choices: ['Engenieer', 'Intern', "I don't want to add any team members"]

            }
        ]).then(employeeType => {
            switch (employeeType.memberType) {
                case "Engenieer":
                    addEngineertoTeam();
                    break;
                case "Intern":
                    addInterntoTeam();
                    break;
                default:
                    createfileTeam();
            }
        });
    }

    //add a engineer to the member team
    function addEngineertoTeam() {
        inquirer.prompt([
            //engineer name
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
                name: 'idIng',
                message: 'What is your engineer ID?',
                validate: idInput => {           //validation the entry
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter engineer ID!');
                        return false;
                    }
                }
            },
            //engineer email
            {
                type: 'input',
                name: 'emailIng',
                message: 'What is your engineer email address?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter engineer email address!');
                        return false;
                    }
                }
            },
            // engineer github user
            {
                type: 'input',
                name: 'githubIng',
                message: 'What is your engineer github username?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter engineer github username!');
                        return false;
                    }
                }
            },

        ])//create a engineer object
            .then(answerEngineer => {
                const eng = new Engineer(answerEngineer.nameIng, answerEngineer.idIng, answerEngineer.emailIng, answerEngineer.githubIng);
                teamMember.push(eng);
                // identifier.push(answerEngineer.idIng);
                //call to add employee
                addEmployee();
            })
    }

    //add a intern to the member team
    function addInterntoTeam() {
        inquirer.prompt([
            //Intern name
            {
                type: 'input',
                name: 'nameInt',
                message: 'What is your intern name?',
                validate: nameInput => {           //validation the entry
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the intern name!');
                        return false;
                    }
                }
            },
            //Intern ID
            {
                type: 'input',
                name: 'idInt',
                message: 'What is your intern ID?',
                validate: idInput => {           //validation the entry
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter your intern ID!');
                        return false;
                    }
                }
            },
            //Intern email
            {
                type: 'input',
                name: 'emailInt',
                message: 'What is your intern email address?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter the intern email address!');
                        return false;
                    }
                }
            },
            // Intern school name
            {
                type: 'input',
                name: 'schoolName',
                message: 'What is your intern school name?',
                validate: schoolNameInput => {
                    if (schoolNameInput) {
                        return true;
                    } else {
                        console.log('Please enter the school name!');
                        return false;
                    }
                }
            },

        ])// create a intern object, add a list teamMenber
            .then(answerInt => {
                const int = new Intern(answerInt.nameInt, answerInt.idInt, answerInt.emailInt, answerInt.schoolName);
                teamMember.push(int);
                // identifier.push(answerInt.idInt);
                addEmployee();
            })
    }

    //create a file html
    function createfileTeam() {

        console.log(teamMember)
        fs.writeFileSync("./dist/team.html", teamMember, "utf-8");
    }

    //call to show the manager question
    managerQuest();
}


//call to show in console the menu
ShowMenu();
