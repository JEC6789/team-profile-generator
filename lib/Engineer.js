const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor(name = "") {
        super(name);
        this.github;
    }

    getGithub() {

    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;