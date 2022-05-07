const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        if(this.github.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
            return this.github;
        }
        return false;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;