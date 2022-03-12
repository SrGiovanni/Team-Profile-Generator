const inquirer = require('inquirer');
const fs = require('fs');
const formatHTML = require('./scr/site-template');
const { writeFile } = require('fs');
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
    inquirer([
        {
            type: 'input',
            name: 'name',
            message: `Please enter Engineer's name:`,
            default: 'Tim',
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
    inquirer([
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
    inquirer([
        {
            type: 'list',
            name: 'choice',
            message: 'You may select what type of employee to add, or quit and build the site.',
            choices: ['Quit and build', 'Add an Engineer', 'Add an Intern']
        }
    ]).then((choice) => {
        switch (choice) {
            case 'Quit and build':
                return data;
                break;
            case 'Add an Engineer':
                promptEngineer(data);
                break;
            case 'Add an Intern':
                promptIntern(data);
                break;
            default:
                break;
        }
      
    })
  
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
    return inquirer([
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
    ]).then(answers => {
        data.managers.push(new Manager(answers.name, answers.empID, answers.email, answers.office));
        return data;
    });
};
// Run the app
init()
    .then(data =>{
        return addEmployeeChoice(data)})
    .then(data => {
        return formatHTML(data);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    }).then(writeFileResponse=>{
        console.log(writeFileResponse);
        return fs.copyFile();
    }).then(copyFileResponse =>{
        console.log(copyFileResponse);
    }).catch((err) => {
      console.log(err);
    });