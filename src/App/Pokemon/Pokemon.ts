import { IPokemon } from './IPokemon';
import { Attack } from '../Attack/Attack';

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
    }

    public loseHealth (dammages: number): void {
        this.health -= dammages;
        if ( this.health < 0 ) {
            this.health = 0
        }
    }
}
