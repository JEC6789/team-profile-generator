const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

test("creates a manager object", () => {
    const manager = new Manager("Jonathan", "4", "notarealemail@gmail.com", "42");

    expect(manager.name).toBe("Jonathan");
    expect(manager.id).toBe("4");
    expect(manager.email).toBe("notarealemail@gmail.com");
    expect(manager.officeNumber).toBe("42");
    expect(manager.getRole()).toBe("Manager");
});