const Manager = require('../lib/manager.js');


test('creates an manager object', () => {
    const manager = new Manager('Gerrit', 3, 'elenb1gs@gmail.com', 123);
    expect(manager.employeeName).toBe('Gerrit');
    expect(manager.employeeIdent).toEqual(3);
    expect(manager.employeeEmail).toBe('elenb1gs@gmail.com');
    expect(manager.employeeOffice).toEqual(123);
})