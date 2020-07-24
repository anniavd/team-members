const Manager=require('../lib/Manager.js')

test('creates a Manager object', () => {
    const manager = new Manager('Ann', 5666, 'email', 11234567);
  
    expect(manager.officeNumber).toEqual(expect.any(Number));   

 });

 test('creates a getofficeNumber', () => {
    const manager = new Manager('Ann', '5666', 'email', 11234567);
  
    expect(manager.getofficeNumber()).toBe(11234567);
   
 });

 test('creates a getRole ', () => {
    const manager = new Manager('Ann', 5666, 'email', 11234567);
  
    expect(manager.getRole()).toBe("Manager");
  
  });