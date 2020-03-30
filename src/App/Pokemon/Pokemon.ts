import { IPokemon } from './IPokemon';

export class Pokemon {
    id: number;
    name: string;
    speed: number;

    constructor (pokemon?: IPokemon)
    {
        this.id = pokemon && pokemon.id;
        this.name = pokemon && pokemon.name;
        this.speed = pokemon && pokemon.speed;
    }
}
