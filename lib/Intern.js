const Employee = require("../lib/Employee.js");

class Intern extends Employee {
    constructor(name = "") {
        super(name);
        this.school;
    }

    getSchool() {
        
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;