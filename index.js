const fs = require("fs");
const inquirer = require("inquirer");

/*
prompts: (r=required, t-text, l=list)
r-t-manager-name
r-t-employee-id
r-t-email
r-t-office-#
r-l-add-employee: [engineer-e, intern-i, finish-default]

e-t-name
e-t-id
e-t-email
e-t-github
e-l-add-employee

i-t-name
i-t-id
i-t-email
i-t-school
i-l-add-employee

default-end-prompts
*/