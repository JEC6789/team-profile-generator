const Employee = require("../lib/Employee.js");

class Manager extends Employee {
    constructor(name = "") {
        super(name);
        this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;