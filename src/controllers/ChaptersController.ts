import { Context } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { getQuery } from "https://deno.land/x/oak@v10.6.0/helpers.ts";

import { GetYoutubeChaptersService } from "../services/GetYoutubeChaptersService.ts";

export class ChaptersController {
  getYoutubeChaptersService = new GetYoutubeChaptersService();
  constructor() {}

  async getChapters(ctx: Context) {
    const { id } = getQuery(ctx, { mergeParams: true });
    const chapter = await this.getYoutubeChaptersService.getChapters(id);

    if (!chapter) {
      ctx.response.status = 404;
      ctx.response.body = {
        message: "Chapter not found",
      };
      return;
    }

    ctx.response.status = 200;
    ctx.response.body = chapter;
  }
}
