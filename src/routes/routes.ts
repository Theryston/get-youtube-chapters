import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { ChaptersController } from "../controllers/ChaptersController.ts";

const router = new Router();

const chaptersController = new ChaptersController();

router.get("/api/v1/video-chapters/:id", (ctx) =>
  chaptersController.getChapters(ctx)
);

export { router };
