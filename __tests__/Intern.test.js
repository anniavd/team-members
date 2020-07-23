const Intern =require('../lib/Intern.js')


test('creates a nameSchool', () => {
    const intern = new Intern('Ann', '5666', 'email', 'nameS');
  
    expect(intern.nameSchool).toBe('nameS');
   

 });

 test('creates a getnameSchool', () => {
    const intern = new Intern('Ann', '5666', 'email', 'nameS');
  
    expect(intern.getnameSchool()).toBe('nameS');
   

 });

 test('creates a getRole ', () => {
    const intern = new Intern('Ann', '5666', 'email', 'nameS');
  
    expect(intern.getRole()).toBe("Intern");
  
  });