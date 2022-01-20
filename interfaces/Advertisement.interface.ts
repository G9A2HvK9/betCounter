import { IType } from "./Type.interface.ts";
import { IChannel } from "./Channel.interface.ts";

export interface IAdvertisement {
    id: string;
    name?: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    isActive?: boolean;
    type?: Array<IType>;
    channel?: Array<IChannel>;
}
