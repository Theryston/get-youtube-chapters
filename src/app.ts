import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { config } from "https://deno.land/std@0.143.0/dotenv/mod.ts";

import { router } from "./routes/routes.ts";

const ENV = await config();

const HOST = ENV.API_HOST ?? "127.0.0.1";
const PORT = ENV.API_PORT ?? 8080;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(`${HOST}:${PORT}`);
console.log(`Listening on port: ${PORT}`);
