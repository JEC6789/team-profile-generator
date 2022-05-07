const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name);
        super(id);
        super(email);
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;