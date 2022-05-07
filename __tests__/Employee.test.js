const Employee = require("../lib/Employee.js");

test("creates a new employee", () => {
    const employee = new Employee("Jonathan", "1", "notarealemail@google.com");

    expect(employee.name).toBe("Jonathan");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("notarealemail@google.com");
    expect(employee.getRole()).toBe("Employee");
});

test("email validation", () => {
    const employee1 = new Employee("Jonathan", "1", "notarealemail@google.com");

    expect(employee1.getEmail()).toBe("notarealemail@google.com");

    const employee2 = new Employee("Jonathan", "1", "totallyarealemail.google.com");

    expect(employee2.getEmail()).toBeFalsy();
});