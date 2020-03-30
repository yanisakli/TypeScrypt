import { Pikachu, Ditto } from "../../Pokemons";
import { Pokemon } from "./Pokemon";
import { Battle } from "../../Battle";


describe('It should be Pikachu', () => {
    const pikachu: Pokemon = Pikachu;
    const ditto: Pokemon = Ditto;

    test('should pick pikachu', () => {
        expect(Battle.fight(ditto, pikachu)).toBe(pikachu);
    });
});