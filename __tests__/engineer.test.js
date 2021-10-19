
const Engineer = require('../lib/engineer.js');


test('creates an engineer object', () => {
    const engineer = new Engineer('Gerrit', 3, 'elenb1gs@gmail.com', 'github.com/Gelenhaus');
    expect(engineer.employeeName).toBe('Gerrit');
    expect(engineer.employeeIdent).toEqual(3);
    expect(engineer.employeeEmail).toBe('elenb1gs@gmail.com');
    expect(engineer.employeeGithub).toBe('github.com/Gelenhaus');
})