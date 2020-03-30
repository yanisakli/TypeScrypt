import { Pokemon, Attack, Ability, Item } from "../..";


describe('Pokemon logic model', () => {
  let pikachu: Pokemon;
  let charge: Attack;
  let MathRandom: () => number;

  beforeEach( () => {
    charge = new Attack({
      name: 'Charge',
      basePower: 5
    });
    pikachu = new Pokemon({
      name: 'Pikachu',
      level: 70,
      speed: 90,
      offStat: 55,
      defStat: 40,
      maxHealth: 30,
    })

    MathRandom = Math.random;
    Math.random = () => 0.25;
  });

  it('Pikachu should have 10 Health after lost 20', () => {
    pikachu.loseHealth(20);
    expect(pikachu.health).toBe(10);
  });
  it('Pikachu should have 0 Health after lost 100 ', () => {
    pikachu.loseHealth(100);
    expect(pikachu.health).toBe(0);
  });

  afterEach( () => {
      Math.random = MathRandom;
  })
});
