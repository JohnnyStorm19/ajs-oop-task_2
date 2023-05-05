import Character from './BaseCharacter';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 25;
    this.defence = 25;
  }
}
