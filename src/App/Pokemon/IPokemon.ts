import { Attack } from "../Attack/Attack";
import { Ability, Item } from "../..";

export class IPokemon {
    id?: number;
    name?: string;
    level?: number;
    speed?: number;
    offStat?: number;
    defStat?: number;
    maxHealth?: number;
    health?: number;
    basePower?: number;
    attacks?: Attack[];
    specOffStat?: number;
    specDefStat?: number;
    abilities?: Ability[];
    items?: Item[];
}
