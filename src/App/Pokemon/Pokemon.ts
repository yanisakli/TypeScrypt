import { IPokemon } from './IPokemon';
import { Attack } from '../Attack/Attack';
import { Ability, Item } from '../..';

export class Pokemon {
    id: number;
    name: string;
    level: number;
    speed: number;
    offStat: number;
    defStat: number;
    maxHealth: number;
    health: number;
    basePower: number;
    attacks: Attack[];
    specOffStat: number;//
    specDefStat: number;//

    constructor (pokemon?: IPokemon)
    {
        this.id = pokemon && pokemon.id;
        this.name = pokemon && pokemon.name;
        this.level = pokemon && pokemon.level;
        this.speed = pokemon && pokemon.speed;
        this.offStat = pokemon && pokemon.offStat;
        this.defStat = pokemon && pokemon.defStat;
        this.maxHealth = pokemon && pokemon.maxHealth;
        this.basePower = pokemon && pokemon.basePower;
        this.health = this.maxHealth;
        this.attacks = pokemon && pokemon.attacks;
        this.specOffStat = pokemon && pokemon.specOffStat;
        this.specDefStat = pokemon && pokemon.specDefStat;
    }

    public loseHealth (dammages: number): void {
        this.health -= dammages;
        if ( this.health < 0 ) {
            this.health = 0
        }
    }
}
