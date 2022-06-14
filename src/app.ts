import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

import { router } from "./routes/routes.ts";

const HOST = config().API_HOST ?? "127.0.0.1";
const PORT = config().API_PORT ?? 8080;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(`${HOST}:${PORT}`);
console.log(`Listening on port: ${PORT}`);
