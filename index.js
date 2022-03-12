const inquirer = require('inquirer');
const fs = require('fs');
const formatHTML = require('./scr/site-template');
const { prompt } = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const console = require('console');
/**
 * main file to run to generate the profile
 * runs init to start the process.
 */
let data = {
    managers: [],
    engineers: [],
    interns: []
};

/**
 * Prompts the User for engineer info, then pushes a new Engineer object to data
 */
let promptEngineer = (data) => {
    console.log('You will be prompted to enter Engineer info.');
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `Please enter Engineer's name:`,
                default: 'Hank',
                validate: nameInput =>{
                    if(nameInput){
                        return true;
                    } else{
                        console.log(`Please enter the Engineer's name!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'empID',
                message: `Please enter the Engineer's ID`,
                default: '3333',
                validate: idInput =>{
                    if(idInput){
                        return true;
                    } else{
                        console.log(`Please enter the Engineer's ID!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: `Please enter Employee's email`,
                default: 'borntorun@fakemail.com',
                validate: emailInput => {
                    if(emailInput){
                        return true;
                    } else{
                        console.log("Please enter the Employee's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: `Please enter the Engineer's Github profile:`,
                default: 'RUStillThere',
                validate: officeInput => {
                    if(officeInput){
                        return true;
                    } else{
                        console.log("Please enter the Engineer's github!");
                        return false;
                    }
                }
            }
        ]).then(answers => {
            data.engineers.push(new Engineer(answers.name, answers.empID, answers.email, answers.github));
            return data;
        })
        .then(addEmployeeChoice);
};

/**
 * Prompts the User for intern info, then pushes a new Intern object to data
 */
let promptIntern = (data) => {
    console.log("Please enter Intern information:");
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter Intern name:',
                default: 'Sasha',
                validate: nameInput =>{
                    if(nameInput){
                        return true;
                    } else{
                        console.log(`Please enter the Intern's name!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'empID',
                message: "Please enter the Intern's ID",
                default: '54321',
                validate: idInput =>{
                    if(idInput){
                        return true;
                    } else{
                        console.log("Please enter the Intern's ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: `Please enter Employee's email`,
                default: 'VBC@ad.nais.edu',
                validate: emailInput => {
                    if(emailInput){
                        return true;
                    } else{
                        console.log("Please enter the Employee's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: `Please enter the Intern's school:`,
                default: 'New Avalon Institute of Science',
                validate: officeInput => {
                    if(officeInput){
                        return true;
                    } else{
                        console.log("Please enter the Intern's office!");
                        return false;
                    }
                }
            }
        ]).then(answers => {
            data.interns.push(new Intern(answers.name, answers.empID, answers.email, answers.school));
            return data;
        })
        .then(addEmployeeChoice);
};

/**
 * asks the user to choose: quit and generate HTML file, new Engineer, or new Intern
 * if quit, return the data object, else invoke the appropriate prompt function
 */
let addEmployeeChoice = (data) => {
    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'You may select what type of employee to add, or quit and build the site.',
            choices: ['Quit and build', 'Add an Engineer', 'Add an Intern']
        }
    ]).then((answer) => {
        switch (answer.choice) {
            case 'Quit and build':
                return data;
                break;
            case 'Add an Engineer':
                return promptEngineer(data);
                break;
            case 'Add an Intern':
                return promptIntern(data);
                break;
            default:
                break;
        };
      
    });
  
};

/**
 * asks user to enter the manager name, ID, email, and office number
 * saves response to the data object
 * @todo: remove default stated from final app
 */

let init = () => {
    console.log(`
    ================================
    Welcome to the Profile Generator
    --------------------------------`);
    console.log('Please enter Manager information');
    if(!data){
        let data  = {
            managers: [],
            engineers: [],
            interns: []
        };
    }
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter Manager name:',
            default: 'Tim',
            validate: nameInput =>{
                if(nameInput){
                    return true;
                } else{
                    console.log('Please enter the Manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empID',
            message: "Please enter the Manager's ID",
            default: '12345',
            validate: idInput =>{
                if(idInput){
                    return true;
                } else{
                    console.log('Please enter the Manager ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter Employee's email`,
            default: 'hasMugWT@fakemai.com',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else{
                    console.log("Please enter the Employee's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter the manager office number:',
            default: '343',
            validate: officeInput => {
                if(officeInput){
                    return true;
                } else{
                    console.log("Please enter the Manager's office!");
                    return false;
                }
            }
        }
        ])
        .then(answers => {
            data.managers.push(new Manager(answers.name, answers.empID, answers.email, answers.office));
            return data;
        });
};
// Run the app
init()
    .then(addEmployeeChoice)
    .then(data => {
        console.log(data);
        return formatHTML(data);
    })
    .then(pageHTML => {
        return writeIndexFile(pageHTML);
    }).then(writeFileResponse=>{
        console.log(writeFileResponse);
        return fs.copyFile();
    }).then(copyFileResponse =>{
        console.log(copyFileResponse);
    }).catch((err) => {
      console.log(err);
    });