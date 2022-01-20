import Advertisement from "../models/advertisement.model.ts";
import { IAdvertisement } from "../interfaces/Advertisement.interface.ts";
import { IChannel } from "../interfaces/Channel.interface.ts";
import { IType } from "../interfaces/Type.interface.ts";
import { readJSON } from "../utils/json.helper.ts";
import { validateDates } from "../utils/date.helper.ts";

class AdvertisementService {
    advertisements: Array<IAdvertisement> = [];
    channels: Array<IChannel> = [];
    types: Array<IType> = [];

    constructor() {
        this.loadData;
    }

    loadData = () => {
        const advertiseJSON = readJSON("./data/advertisements.json");
        const adverts = Advertisement.fromJSON(advertiseJSON);
        this.advertisements = Object.values(adverts);
        this.channels = readJSON("./data/channels.json");
        this.types = readJSON("./data/types.json");
    };

    fetchAdvertisements = () => {
        return this.advertisements;
    };

    fetchAdvertisement = (id: string) => {
        const result = this.advertisements.find((advertisement) => advertisement.id === id);
        return result
    };

    createAdvertisement = (advertisement: IAdvertisement) => {
        const newAdvertisement = Object.values(advertisement);
        const [first] = newAdvertisement;
        this.advertisements.push(first);
    };

    updateAdvertisement = (advertisement: IAdvertisement, id: string) => {
        const updatedAdvertisement: {
            name?: string;
            description?: string;
            startDate?: string;
            endDate?: string;
            type?: Array<IType>;
            channel?: Array<IChannel>;
        } = advertisement;
        this.advertisements = this.advertisements.map((advert) =>
            advert.id === id ? { ...advert, ...updatedAdvertisement } : advert
        );
    
        return true;
    };

    deleteAdvertisement = (id: string) => {
        this.advertisements = this.advertisements.filter((advert) =>
          advert.id !== id
        );
        return this.advertisements;
      };

      publishAdvertisement = (
        id: string,
        startDate: string,
        endDate: string,
        isActive: boolean,
      ) => {
        if (validateDates(startDate, endDate)) {
          const publishData: IAdvertisement = {
            id,
            startDate,
            endDate,
            isActive,
          };
          return this.updateAdvertisement(publishData, id);
        }
      };
}

export default new AdvertisementService();
