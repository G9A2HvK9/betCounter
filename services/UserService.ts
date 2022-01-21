import { readJSON } from "../utils/json.helper.ts";
import { validateDates } from "../utils/date.helper.ts";
import { IUser } from "../interfaces/User.interface.ts";
import { db } from "../database/mongo.ts";

class UserService {

    constructor() {
        this.loadData;
    }

    loadData = () => {
        const usersCollection:any = db.collection<IUser>("users");
        this.users = await usersCollection.find();
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
