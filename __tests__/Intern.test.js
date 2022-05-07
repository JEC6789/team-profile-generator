const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

test("creates an intern object", () => {
    const intern = new Intern("Jonathan", "2", "notarealemail@gmail.com", "The University of Skill Issue");

    expect(intern.name).toBe("Jonathan");
    expect(intern.id).toBe("2");
    expect(intern.email).toBe("notarealemail@gmail.com");
    expect(intern.school).toBe("The University of Skill Issue");
    expect(intern.getRole()).toBe("Intern");
});