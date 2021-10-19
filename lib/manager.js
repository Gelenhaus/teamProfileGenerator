const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, ident, email, office) {
        super(name, ident, email);

        this.employeeOffice = office;
    }
};

module.exports = Manager;