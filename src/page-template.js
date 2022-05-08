const generateMembers = employeeArray => {
    sectionHTML = ``;

    for(i = 0; i < employeeArray.length; i++) {
        sectionHTML += `<article>
        <section>
        <h2>${employeeArray[0].name}</h2>
        <h3>${employeeArray[0].role}</h3>
        </section>
        </article>`;
    }

    return sectionHTML;
};

module.exports = templateData => {
    console.log(templateData);

    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>My Team</header>
        <main>
            ${generateMembers(templateData)}
            <article>text</article>
            <article>text</article>
            <article>text</article>
            <article>text</article>
        </main>
    </body>
</html>`;
};