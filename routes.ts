import { Router } from "./deps.ts";
import {
    getAdvertisements,
    getAdvertisement,
    addAdvertisement,
    updateAdvertisement,
    publishAdvertisement,
    deleteAdvertisement
} from "./controllers/Advertisement.controller.ts";

import {
  getUsers,
  addUser
} from "./controllers/User.controller.ts"

const router = new Router();

router.get("/api/v1/getUser", getUsers)
  .post("/api/v1/user", addUser)

export default router;