
const Employee = require('../lib/employee.js');


test('creates an employee object', () => {
    const employee = new Employee('Gerrit', 3, 'elenb1gs@gmail.com');

    expect(employee.employeeName).toBe('Gerrit');
    expect(employee.employeeIdent).toEqual(3);
    expect(employee.employeeEmail).toBe('elenb1gs@gmail.com');

});