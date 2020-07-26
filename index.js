const inquirer = require('inquirer');
const fs = require('fs')
const template=require('./src/page-template')
const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const teamMember = {
    manager:"",
    engineer: [],
    intern: []
};   


function ShowMenu() {
    
    console.log("\n** BUILDING MY TEAM **\n");         
       

    // manager building team
    function managerQuest() {
        console.log("\n** Manager **\n");  
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
                        console.log('\nPlease enter team manager’s name!');
                        return false;
                    }
                }
            },
            //manager ID
            {
                type: 'input',
                name: 'id',
                message: 'What is your team manager’s ID?',
                validate: idInput => {           //validation the entry
                    const val=/^\d*$/;
                    if (idInput.match(val)) {
                        return true;
                    } else {
                        console.log('\n Please enter a valid manager ID!');
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
                    const val=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if (emailInput.match(val)) {
                        return true;
                    } else {
                        console.log('\n Please enter a valid email address!');
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
                    const val=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                    if (officeNumInput.match(val)) {
                        return true;
                    } else {
                        console.log('\n Please enter a valid  office number!');
                        return false;
                    }
                }
            }
        ]) //create manager object
            .then(answers => {
                const manager = new Manager(answers.nameManager, answers.id, answers.email, answers.officeNum);
                teamMember.manager = manager;              
                //call to add employee to the team
                addEmployee();
            })

    }

    // add employee
    function addEmployee() {
        console.log("\n** Adding a employee **\n"); 

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
        console.log("\n** Engineer **\n"); 

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
                        console.log('\n Please enter the name!');
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
                    const val=/^\d*$/;
                    if (idInput.match(val)) {
                        return true;
                    } else {
                        console.log('\n Please enter a valid engineer ID!');
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
                    const val=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if (emailInput.match(val)) {
                        return true;
                    } else {
                        console.log('\n Please enter a valid engineer email address!');
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
                        console.log('\n Please enter engineer github username!');
                        return false;
                    }
                }
            },

        ])//create a engineer object
            .then(answerEngineer => {
                const eng = new Engineer(answerEngineer.nameIng, answerEngineer.idIng, answerEngineer.emailIng, answerEngineer.githubIng);
               teamMember.engineer.push(eng)                
                //call to add employee
                addEmployee();
            })
    }

    //add a intern to the member team
    function addInterntoTeam() {

        console.log("\n** Intern **\n"); 

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
                        console.log('\n Please enter the intern name!');
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
                    const val=/^\d*$/;
                    if (idInput.match(val)) {
                        return true;
                    } else {
                        console.log('\n Please enter your intern ID!');
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
                    const val=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if (emailInput.match(val)) {
                        return true;
                    } else {
                        console.log('\n Please enter a valid intern email address!');
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
                        console.log('\n Please enter the school name!');
                        return false;
                    }
                }
            },

        ])// create a intern object, add a list teamMenber
            .then(answerInt => {
                const int = new Intern(answerInt.nameInt, answerInt.idInt, answerInt.emailInt, answerInt.schoolName);
                teamMember.intern.push(int)
                // identifier.push(answerInt.idInt);
                addEmployee();
            })
    }

    //create a file html
   function createfileTeam() {
    console.log("manager",teamMember)  
      
        fs.writeFileSync("./dist/team.html",template(teamMember),"utf-8");
    }

 
    //call to show the manager question
    managerQuest();
}


//call to show in console the menu
ShowMenu();
