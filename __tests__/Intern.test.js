const Intern = require('../lib/intern.js');


test('creates an intern object', () => {
    const intern = new Intern('Gerrit', 3, 'elenb1gs@gmail.com', 'Greenville High');
    expect(intern.employeeName).toBe('Gerrit');
    expect(intern.employeeIdent).toEqual(3);
    expect(intern.employeeEmail).toBe('elenb1gs@gmail.com');
    expect(intern.employeeSchool).toBe('Greenville High');
})