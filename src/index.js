import Bowerman from './character/Bowerman.js';
import Swordsman from './character/Swordsman.js';
import Magician from './character/Magician.js';
import Daemon from './character/Daemon.js';
import Undead from './character/Undead.js';
import Zombie from './character/Zombie.js';

const characters = [
  new Bowerman('Robin'),
  new Swordsman('Arthur'),
  new Magician('Merlin'),
  new Daemon('Azazel'),
  new Undead('Ghoul'),
  new Zombie('Walker'),
];

console.log('Все персонажи:');
characters.forEach((char) => {
  console.log(`Имя: ${char.name}`);
  console.log(`Тип: ${char.type}`);
  console.log(`Здоровье: ${char.health}`);
  console.log(`Уровень: ${char.level}`);
  console.log(`Атака: ${char.attack}`);
  console.log(`Защита: ${char.defence}`);
  console.log('------------------------');
});
