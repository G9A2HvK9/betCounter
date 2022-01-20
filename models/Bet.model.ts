import { IBet } from "../interfaces/Bet.interface";
import { IUser } from "../interfaces/User.interface.ts";

class Bet implements IBet {
    id: string;
    title: string;
    description: string;
    winningCondition: string;
    beersBet: number;
    originator: IUser;
    partner: IUser;
    winner: IUser;
    startDate: Date;
    endDate: Date;
    isActive: boolean;

    constructor({ id, title, description, winningCondition, beersBet, originator, partner, winner, startDate, endDate, isActive }: {
        id: string;
        title: string;
        description: string;
        winningCondition: string;
        beersBet: number;
        originator: IUser;
        partner: IUser;
        winner: IUser;
        startDate: Date;
        endDate: Date;
        isActive: boolean;
    }
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.winningCondition = winningCondition;
        this.beersBet = beersBet;
        this.originator = originator;
        this.partner = partner;
        this.winner = winner;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isActive = isActive;
    }

    toJSON(): IBet {
        return Object.assign({}, this);
    }

    static fromJSON(json: IBet | string): Bet {
        if (typeof json === "string") {
            return JSON.parse(json, Bet.reviver);
        }
        let bet = Object.create(Bet.prototype);
        return Object.assign(bet, json);
    }

    static reviver(key: string, value: any): any {
        return key === "" ? Bet.fromJSON(value) : value;
    }
}

export default Bet;