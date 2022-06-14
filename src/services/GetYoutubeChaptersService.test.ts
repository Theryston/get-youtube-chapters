import { expect } from "https://deno.land/x/expect@v0.2.9/expect.ts";

import { GetYoutubeChaptersService } from "./GetYoutubeChaptersService.ts";

const VALID_YOUTUBE_ID = "oTivhgjbhIg";
const INVALID_YOUTUBE_ID = "invalid";

Deno.test("GetYoutubeChaptersService", async () => {
  const service = new GetYoutubeChaptersService();
  const chapters = await service.execute(VALID_YOUTUBE_ID);
  expect(chapters).toBeDefined();

  const chapters2 = await service.execute(INVALID_YOUTUBE_ID);
  expect(chapters2).toBeUndefined();
});
