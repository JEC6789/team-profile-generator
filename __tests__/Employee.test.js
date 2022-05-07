const Employee = require("../lib/Employee.js");

test("creates a new employee", () => {
    const employee = new Employee("Jonathan", "1", "NotARealEmail@gmail.com");

    expect(employee.name).toBe("Jonathan");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("notarealemail@gmail.com");
    expect(employee.getRole()).toBe("Employee");
});

test("email validation", () => {
    const employee1 = new Employee("Jonathan", "1", "NotARealEmail@gmail.com");
    expect(employee1.getEmail()).toBe("notarealemail@gmail.com");

    const employee2 = new Employee("Jonathan", "1", "totallyarealemail.gmail.com");
    expect(employee2.getEmail()).toBeFalsy();
});