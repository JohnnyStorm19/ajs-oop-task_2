import Character from './BaseCharacter';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 10;
    this.defence = 40;
  }
}
