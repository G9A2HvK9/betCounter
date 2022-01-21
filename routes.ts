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
  getUsers
} from "./controllers/User.controller.ts"

const router = new Router();

router.get("/api/v1/advertisements", getAdvertisements)
  .get("/api/v1/user", getUsers)
  .get("/api/v1/advertisements/:id", getAdvertisement)
  .post("/api/v1/advertisements", addAdvertisement)
  .put("/api/v1/advertisements/:id", updateAdvertisement)
  .put("/api/v1/advertisements/publish", publishAdvertisement)
  .delete("/api/v1/advertisements/:id", deleteAdvertisement);


export default router;