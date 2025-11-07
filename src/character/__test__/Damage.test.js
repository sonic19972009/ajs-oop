import Character from '../Character.js';

describe('Character damage method', () => {
  let char;

  beforeEach(() => {
    char = new Character('Hero', 'Bowman');
    char.attack = 50;
  });

  test('damage reduces health correctly with defence', () => {
    char.defence = 25; // 25%
    char.damage(40); // 40 * (1 - 0.25) = 30
    expect(char.health).toBe(70); // 100 - 30
  });

  test('damage does not reduce health below 0', () => {
    char.defence = 0;
    char.damage(200);
    expect(char.health).toBe(0);
  });

  test('damage does nothing if character is already dead', () => {
    char.health = 0;
    char.damage(50);
    expect(char.health).toBe(0);
  });
});
