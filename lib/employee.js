
const inquirer = require('inquirer');

class Employee {
    constructor(name, ident, email) {
        this.employeeName = name;
        this.employeeIdent = ident;
        this.employeeEmail = email;
    }
    getName() {
        console.log(this.employeeName);
    }
    getIdent() {
        console.log(this.employeeIdent);
    }
    getEmail() {
        console.log(this.employeeEmail);
    }
}

// let tester = new Employee('gerrit', 34, 'gerry@gmail.com');
// tester.getName();
// tester.getEmail();
// tester.getIdent();


module.exports = Employee;