const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('can create a first name last name greeting', ()=>{
  expect(getGreeting("Marcy Smith")).toBe("Hi Marcy Smith")
})