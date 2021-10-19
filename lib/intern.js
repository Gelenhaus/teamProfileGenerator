const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(name, ident, email, school) {
        super(name, ident, email);
        this.employeeSchool = school;
    }
    getSchool() {
        console.log(this.employeeSchool);
    }
};

// let testy = new Intern("gerrit", 34, "gerry@yahoo.com", "GreenvilleHigh");
// testy.getSchool();
// testy.getEmail();


module.exports = Intern;