import { IPokemon } from './IPokemon';

export class Pokemon {
    id: number;
    name: string;

    constructor (pokemon?: IPokemon)
    {
        this.id = pokemon && pokemon.id;
        this.name = pokemon && pokemon.name;
    }
}
