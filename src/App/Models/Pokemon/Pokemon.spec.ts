import { Pikachu, Ditto } from "../../../Pokemons";
import { Pokemon } from "./Pokemon";
import { Battle } from "../../../Battle";


describe('Test Pokemon.ts', () => {
    const pikachu: Pokemon = Pikachu;
    const ditto: Pokemon = Ditto;

    test('should pick pikachu', () => {
        expect(Battle.fightFirst(ditto, pikachu)).toBe(pikachu);
    });
});