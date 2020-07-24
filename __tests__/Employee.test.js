const Employee =require('../lib/Employee.js')



test('creates a employee object ', () => {
  const employee = new Employee('Ann', 5666, 'email');

  
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  

});


test('creates a getName ', () => {
  const employee = new Employee('Ann', 5666, 'email');

  expect(employee.getName()).toEqual("Ann");

});

test('creates a getId', () => {
  const employee = new Employee('Ann', 5666, 'email');

  expect(employee.getId()).toEqual(5666);

});

test('creates a getEmail ', () => {
  const employee = new Employee('Ann', 5666, 'email');
  expect(employee.getEmail()).toEqual("email");

});

test('creates a getRole', () => {
  const employee = new Employee('Ann', 5666, 'email');

  expect(employee.getRole()).toBe("Employee");

});
