const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const employeeArray = [];


function theAwakening() {
    this.manager = new Manager();

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the team manager's name",
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log("dewit");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the team manager's employee ID",
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log("dewit");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter the team manager's name",
            validate: function(input) {
                if(!input.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                    if(input) {
                        console.log("Invalid email address entered. PLease try again");
                    } else {
                        console.log("dewit");
                    }
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the team manager's office number",
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log("dewit");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "addMember",
            message: "Time to introduce additional members to your team! Select the type of member you want to add below",
            choices: ["Engineer", "Intern", "Finish build"]
        }
    ]).then(({name, id, email, officeNumber, addMember}) => {
            this.manager.name = name;
            this.manager.id = id;
            this.manager.email = email;
            this.manager.officeNumber = officeNumber;

            employeeArray.push(this.manager);

            console.log(employeeArray);

            switch(addMember) {
                case "Engineer":
                    return addEngineer();
                case "Intern":
                    return addIntern();
                case "Finish build":
                    return theEnd();
            }
    })
}

function addEngineer() {
    console.log("engineer option");
}

function addIntern() {
    console.log("Intern option");
}

function theEnd() {
    console.log("Too fast, too soon");
}
/*
prompts: (r=required, t=text, l=list)
r-t-manager-name
r-t-employee-id
r-t-email
r-t-office-#
r-l-add-employee: [engineer-e, intern-i, finish-default]

e-t-name
e-t-id
e-t-email
e-t-github
e-l-add-employee

i-t-name
i-t-id
i-t-email
i-t-school
i-l-add-employee

default-end-prompts
*/

theAwakening();