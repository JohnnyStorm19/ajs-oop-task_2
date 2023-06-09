/* eslint-disable no-unused-vars */
import Swordsman from '../Characters/Swordsman';

test('should return normal char', () => {
  const char = new Swordsman('Arthur');
  const result = {
    name: 'Arthur',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Invalid name';
  expect(() => {
    const char = new Swordsman('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Character type must be a string';
  expect(() => {
    const char = new Swordsman('Артур', 13);
  }).toThrow(error);
});

test('should execute lvlUp fn', () => {
  const char = new Swordsman('Knight');
  char.levelUp();
  const result = {
    name: 'Knight',
    type: 'Swordsman',
    attack: 48,
    defence: 12,
    health: 100,
    level: 2,
  };
  expect(char).toEqual(result);
});

test('testing invalid levelUp for dead char', () => {
  const error = 'нельзя повысить левел умершего';
  const char = new Swordsman('Knight');
  char.health = 0;
  expect(() => {
    char.levelUp();
  }).toThrow(error);
});

test.each([
  {
    health: 100, points: 20, defence: 10, expected: 82,
  },
  {
    health: 0, points: 10, defence: 10, expected: 0,
  },
  {
    health: 50, points: 30, defence: 15, expected: 24.5,
  },
])(
  ('testing different damage with health: $health, defence: $defence and damage: $points'),
  ({
    health, points, defence, expected,
  }) => {
    const char = new Swordsman('Knight');
    char.health = health;
    char.defence = defence;
    char.damage(points);
    const result = char.health;
    expect(result).toBe(expected);
  },
);
