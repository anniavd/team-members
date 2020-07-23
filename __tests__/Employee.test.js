const Employee =require('../lib/Employee.js')


test('creates a name ', () => {
    const employee = new Employee('Ann', '5666', 'email');
  
    expect(employee.name).toBe('Ann');
   

 });

 test('creates a email', () => {
  const employee = new Employee('Ann', '5666', 'email');

  expect(employee.email).toBe('email');

});

test('creates a id', () => {
  const employee = new Employee('Ann', '5666', 'email');

  expect(employee.getId()).toBe("5666");

});

test('creates a getName object', () => {
  const employee = new Employee('Ann', '5666', 'email');

  expect(employee.getName()).toBe("Ann");

});

test('creates a getId object', () => {
  const employee = new Employee('Ann', '5666', 'email');

  expect(employee.getId()).toBe("5666");

});

test('creates a getEmail object', () => {
  const employee = new Employee('Ann', '5666', 'email');
  expect(employee.getEmail()).toBe("email");

});

test('creates a getRole object', () => {
  const employee = new Employee('Ann', '5666', 'email');

  expect(employee.getRole()).toBe("Employee");

});
