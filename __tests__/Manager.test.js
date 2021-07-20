const Manager = require('../lib/Manager');

test('Creates a Manager object', () => {
    const manager = new Manager('Manager', '10', 'manager@noemail.com', 'Room300')

    expect(manager.employeeName).toEqual(expect.any(String));
    expect(manager.employeeID).toEqual(expect.any(String));
    expect(manager.employeeEmail).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test("Gets Manager's office number", () => {
    const manager = new Manager('Manager', '10', 'manager@noemail.com', 'Room300')

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

test("Gets Manager's role", () => {
    const manager = new Manager('Manager', '10', 'manager@noemail.com', 'Room300')

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));

    
});
