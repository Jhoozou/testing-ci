// tests/app.test.js
const { sayHello } = require('../app');

test('sayHello retourne un message personnalisé', () => {
  expect(sayHello('Stéphane')).toBe('Hello, Stéphane!');
});
