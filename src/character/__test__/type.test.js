import Character from '../Character.js';

test('valid type creates character correctly', () => {
  const result = new Character('Tom', 'Swordsman');
  expect(result).toEqual({
    name: 'Tom',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 0,
    defence: 0,
  });
});

test('invalid type throws error', () => {
  expect(() => {
    new Character('Tom', 'Alex');
  }).toThrow('Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
