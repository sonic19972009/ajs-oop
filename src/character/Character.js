export default class Character {
  static allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be a string between 2 and 10 characters');
    }

    if (!Character.allowedTypes.includes(type)) {
      throw new Error(`Type must be one of: ${Character.allowedTypes.join(', ')}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up a dead character');
    }
    this.level += 1;
    this.attack = +(this.attack * 1.2).toFixed(1); // повышаем на 20%
    this.defence = +(this.defence * 1.2).toFixed(1);
    this.health = 100;
  }

  damage(points) {
    if (this.health === 0) return; // ничего не делаем, если персонаж уже мёртв
    const actualDamage = points * (1 - this.defence / 100);
    this.health -= actualDamage;
    if (this.health < 0) this.health = 0;
  }
}
