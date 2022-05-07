class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email.toLowerCase();
    }

    getName() {

    }

    getId() {

    }

    getEmail() {
        if(this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return this.email;
        }
        return false;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;