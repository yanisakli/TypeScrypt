import AttackService from './attack.service';
import { Pokemon, Attack } from '../..';
import { Pikachu, Bulbizard } from '../../pokemons';

describe('Attack', () => {
  let pikachu: Pokemon;
  let bulbizard: Pokemon;
  let eclair: Attack
  let deflagration: Attack
  let attackServices: AttackService;

  beforeEach( () => {
    eclair = new Attack({
      name: 'Eclair',
      basePower: 40
    });
    deflagration = new Attack({
      name: 'Déflagration',
      basePower: 35
    });
    pikachu = Pikachu;
    bulbizard = Bulbizard;
    attackServices = new AttackService();
  })

  it('Calculated dammages of Pikachu Eclair should be 29', () => {
    let dammages = attackServices.calculateAttackDammages(pikachu, eclair, Bulbizard)
    expect(dammages).toBe(29)
  });

  it('Calculated dammages of Bulbizard Déflagration should be 3', () => {
    let dammages = attackServices.calculateAttackDammages(bulbizard, deflagration, pikachu)
    expect(dammages).toBe(3)
  });

  it('Bulbizard should have 19 health', () => {
    let _ = attackServices.attack(pikachu, eclair, bulbizard)
    expect(bulbizard.health).toBe(19)
  });

  it('Attack should return 29 dammages ', () => {
    let dammages = attackServices.attack(pikachu, eclair, bulbizard)
    expect(dammages).toBe(29)
  });
});
