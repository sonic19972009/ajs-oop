import Character from '../Character.js';

describe('Character levelUp method', () => {
  let char;

  beforeEach(() => {
    char = new Character('Hero', 'Bowman');
    char.attack = 50;
    char.defence = 30;
  });

  test('levelUp increases level and stats', () => {
    char.health = 80;
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBe(60); // 50 * 1.2
    expect(char.defence).toBe(36); // 30 * 1.2
    expect(char.health).toBe(100);
  });

  test('levelUp throws error if health is 0', () => {
    char.health = 0;
    expect(() => char.levelUp()).toThrow('Cannot level up a dead character');
  });
});
