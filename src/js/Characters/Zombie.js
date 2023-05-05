import Character from './BaseCharacter';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 40;
    this.defence = 10;
  }
}
