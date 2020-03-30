import { Pokemon } from "../Pokemon/Pokemon";
import { Battle } from "./Fight";


describe('It should be Pikachu', () => {
    const pikachu: Pokemon = new Pokemon({
        name: 'Pikachu',
        speed: 90,
    });
    const ditto: Pokemon = new Pokemon({
        name: 'Ditto',
        speed: 48,
    });

    test('should pick pikachu', () => {
        expect(Battle.fight(ditto, pikachu)).toBe(pikachu);
    });
});