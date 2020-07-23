const Manager=require('../lib/Manager.js')

test('creates a nameSchool', () => {
    const manager = new Manager('Ann', '5666', 'email', 'offnumber');
  
    expect(manager.officeNumber).toBe('offnumber');
   

 });

 test('creates a getnameSchool', () => {
    const manager = new Manager('Ann', '5666', 'email', 'offnumber');
  
    expect(manager.getofficeNumber()).toBe('offnumber');
   

 });

 test('creates a getRole ', () => {
    const manager = new Manager('Ann', '5666', 'email', 'offnumber');
  
    expect(manager.getRole()).toBe("Manager");
  
  });