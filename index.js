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
            message: "Enter the team manager's email",
            validate: input => {
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
            choices: ["Finish build", "Engineer", "Intern"]
        }
    ]).then(({name, id, email, officeNumber, addMember}) => {
        this.manager = new Manager(name, id, email, officeNumber);

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
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter this engineer's name",
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
            message: "Enter this engineer's employee ID",
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
            message: "Enter this engineer's email",
            validate: input => {
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
            name: "github",
            message: "Enter this engineer's GitHub username",
            validate: input => {
                if(!input.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
                    if(input) {
                        console.log("Invalid username entered. PLease try again");
                    } else {
                        console.log("dewit");
                    }
                    return false;
                }
                return true;
            }
        },
        {
            type: "list",
            name: "addMember",
            message: "Select the role of the next member of your team",
            choices: ["Finish build", "Engineer", "Intern"]
        }
    ]).then(({name, id, email, github, addMember}) => {
        this.engineer = new Engineer(name, id, email, github);

        employeeArray.push(this.engineer);

        console.log(employeeArray);

        switch(addMember) {
            case "Engineer":
                return addEngineer();
            case "Intern":
                return addIntern();
            case "Finish build":
                return theEnd();
        }
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter this intern's name",
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
            message: "Enter this intern's employee ID",
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
            message: "Enter this intern's email",
            validate: input => {
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
            name: "school",
            message: "Enter this intern's school",
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
            message: "Select the role of the next member of your team",
            choices: ["Finish build", "Engineer", "Intern"]
        }
    ]).then(({name, id, email, school, addMember}) => {
        this.intern = new Intern(name, id, email, school);

        employeeArray.push(this.intern);

        console.log(employeeArray);

        switch(addMember) {
            case "Engineer":
                return addEngineer();
            case "Intern":
                return addIntern();
            case "Finish build":
                return theEnd();
        }
    });
}

function theEnd() {
    console.log("Too fast, too soon");
}

theAwakening();