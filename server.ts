import { Application, config } from "./deps.ts";
import router from "./routes.ts";
import _404 from "./middleware/fourZerofour.ts";
import errorHandler from "./middleware/error-handler.ts";

const env = config()
const PORT = env.PORT || 3000;
const HOST = env.HOST || 'localhost';

const app = new Application();
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Server running on port ${PORT}`);

app.listen(`${HOST}:${PORT}`);