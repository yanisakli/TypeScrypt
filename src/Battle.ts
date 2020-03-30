import { Pokemon } from "./App/Models/Pokemon/Pokemon";


function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

export class Battle{
    static fightFirst(pok1: Pokemon, pok2: Pokemon): Pokemon {
        if(pok1.speed > pok2.speed){
            return pok1;
        } else if (pok2.speed > pok1.speed) {
            return pok2;
        } else {
            const rand = getRandomInt(2);
            return rand === 0 ? pok1 : pok2;
        }
    }
}