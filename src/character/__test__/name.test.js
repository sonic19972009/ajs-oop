import Character from '../Character.js';

test('name shorter than 2 characters throws error', () => {
  expect(() => {
    new Character('A', 'Bowman');
  }).toThrow('Name must be a string between 2 and 10 characters');
});

test('name longer than 10 characters throws error', () => {
  expect(() => {
    new Character('tmtmtmtmtmtm', 'Bowman');
  }).toThrow('Name must be a string between 2 and 10 characters');
});

test('name is not a string throws error', () => {
  expect(() => {
    new Character(7, 'Bowman');
  }).toThrow('Name must be a string between 2 and 10 characters');
});
