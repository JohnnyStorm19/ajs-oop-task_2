/* eslint-disable no-unused-vars */
import Undead from '../Characters/Undead';

test('should return normal char', () => {
  const char = new Undead('Ghoul');
  const result = {
    name: 'Ghoul',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Invalid name';
  expect(() => {
    const char = new Undead('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Character type must be a string';
  expect(() => {
    const char = new Undead('Гуль', 13);
  }).toThrow(error);
});

test('should execute lvlUp fn', () => {
  const char = new Undead('Ghoul');
  char.levelUp();
  const result = {
    name: 'Ghoul',
    type: 'Undead',
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
  };
  expect(char).toEqual(result);
});

test('testing invalid levelUp for dead char', () => {
  const error = 'нельзя повысить левел умершего';
  const char = new Undead('Ghoul');
  char.health = 0;
  expect(() => {
    char.levelUp();
  }).toThrow(error);
});

test.each([
  {
    health: 100, points: 20, defence: 25, expected: 85,
  },
  {
    health: 0, points: 10, defence: 25, expected: 0,
  },
  {
    health: 50, points: 30, defence: 30, expected: 29,
  },
])(
  ('testing different damage with health: $health, defence: $defence and damage: $points'),
  ({
    health, points, defence, expected,
  }) => {
    const char = new Undead('Ghoul');
    char.health = health;
    char.defence = defence;
    char.damage(points);
    const result = char.health;
    expect(result).toBe(expected);
  },
);
