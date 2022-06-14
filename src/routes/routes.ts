import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const router = new Router();

router.get("/api/v1/video-chapters/:id", (context) => {
  context.response.status = 200;
  context.response.body = "Hello World!";
});

export { router };
