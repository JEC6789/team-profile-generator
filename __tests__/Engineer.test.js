const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

test("creates an engineer object", () => {
    const engineer = new Engineer("Jonathan", "2", "notarealemail@gmail.com", "JEC6789");

    expect(engineer.name).toBe("Jonathan");
    expect(engineer.id).toBe("2");
    expect(engineer.email).toBe("notarealemail@gmail.com");
    expect(engineer.github).toBe("JEC6789");
    expect(engineer.getRole()).toBe("Engineer");
});

test("github username validation", () => {
    const engineer1 = new Engineer("Jonathan", "2", "notarealemail@gmail.com", "JEC6789");
    expect(engineer1.getGithub()).toBe("JEC6789");

    const engineer2 = new Engineer("Jonathan", "2", "notarealemail@gmail.com", "-Negativland-");
    expect(engineer2.getGithub()).toBeFalsy();

    const engineer3 = new Engineer("Jonathan", "2", "notarealemail@gmail.com", "MyUsernameIsGonnaBeOver40CharactersLongAndThereIsNothingYouCanDoToStopMe");
    expect(engineer3.getGithub()).toBeFalsy();

    const engineer4 = new Engineer("Jonathan", "2", "notarealemail@gmail.com", "xXx_$$$_YoloSwag420BlazeIt_$$$_xXx");
    expect(engineer4.getGithub()).toBeFalsy();
});