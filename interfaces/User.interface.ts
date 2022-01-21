import { Bson } from "../deps.ts"

export interface IUser {
    _id: Bson.ObjectId;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
}