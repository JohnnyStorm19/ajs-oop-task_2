import Character from './BaseCharacter';

export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 40;
    this.defence = 10;
  }
}
