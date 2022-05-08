const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generatePage = require("./src/page-template");
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

        switch(addMember) {
            case "Engineer":
                return addEngineer();
            case "Intern":
                return addIntern();
            default:
                return employeeArray;
        }
    })
    .then(employeeArray => {
        return generatePage(employeeArray);
    })
    .then(pageHTML => {
        return new Promise((resolve, reject) => {
            fs.writeFile("./dist/index.html", pageHTML, err => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: "File created!"
                });
            });
        });
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return new Promise((resolve, reject) => {
            fs.copyFile("./src/style.css", "./dist/style.css", err => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: "File copied!"
                });
            });
        });
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
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

        switch(addMember) {
            case "Engineer":
                return addEngineer();
            case "Intern":
                return addIntern();
            default:
                return employeeArray;
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

        switch(addMember) {
            case "Engineer":
                return addEngineer();
            case "Intern":
                return addIntern();
            default:
                return employeeArray;
        }
    });
}

theAwakening();