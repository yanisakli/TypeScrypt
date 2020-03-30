import { Pokemon } from "../Pokemon/Pokemon";


function randomInt(numberMax: number): number {
    return Math.floor(Math.random() * Math.floor(numberMax));
}

export class Battle{

    static intervalId: NodeJS.Timeout;

    static fight(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
        if(pokemon1.speed > pokemon2.speed){
            return pokemon1;
        } else if (pokemon2.speed > pokemon2.speed) {
            return pokemon2;
        } else {
            const rand = randomInt(2);
            return rand === 0 ? pokemon1 : pokemon2;
        }
    }

    /*static simulateFight(pokemon1: Pokemon, pokemon2: Pokemon): Promise<Pokemon> {
        return new Promise((resolve, reject) => {
            Battle.intervalId = setInterval(() => {
                console.log("Start combat");
                const roundOrder = Battle.fight(pokemon1, pokemon2);
                console.log(`${roundOrder[0].name} start`);
                roundOrder[0].attack(roundOrder[1], 0, roundOrder[0].checkHit(roundOrder[0].attacks[0]));
                if (roundOrder[1].hp <= 0){
                    resolve(roundOrder[0]);
                    clearInterval(Battle.intervalId);
                    return;
                }
                roundOrder[1].attack(roundOrder[0], 0, roundOrder[1].checkHit(roundOrder[1].attackList[0]));
                if (roundOrder[0].hp <= 0){
                    resolve(roundOrder[1]);
                    clearInterval(Battle.intervalId);
                    return;
                }
            }, 500 ,pokemon1, pokemon2);
        })
    }
    */
}