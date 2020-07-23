const Engineer=require('../lib/Engineer.js')

test('creates a github ', () => {
    const engineer = new Engineer('Ann', '5666', 'email', 'anngit');
  
    expect(engineer.github).toBe('anngit');
   

 });

 test('creates a getGithub', () => {
    const engineer = new Engineer('Ann', '5666', 'email', 'anngit');
  
    expect(engineer.getGithub()).toBe('anngit');
   

 });

 test('creates a getRole object', () => {
    const engineer = new Engineer('Ann', '5666', 'email','anngit');
  
    expect(engineer.getRole()).toBe("Engineer");
  
  });