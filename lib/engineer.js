const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(name, ident, email, github) {
        super(name, ident, email);

        this.employeeGithub = github;
    }
    getGitHub() {
        console.log(this.employeeGithub);
    }
};

module.exports = Engineer;