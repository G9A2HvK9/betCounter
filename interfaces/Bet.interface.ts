import { IUser } from "./User.interface.ts";

export interface IBet {
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