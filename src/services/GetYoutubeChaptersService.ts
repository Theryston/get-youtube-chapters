import { IYoutubeChapter } from "../interfaces/IYoutubeChapter.ts";
import { logger } from "../utils/logger.ts";

const YOUTUBE_BASE_URL = "https://www.youtube.com/watch";

export class GetYoutubeChaptersService {
  public async execute(
    youtubeId: string
  ): Promise<IYoutubeChapter[] | undefined> {
    try {
      const url = `${YOUTUBE_BASE_URL}?v=${youtubeId}`;
      const description = await this.getDescriptionFromYoutubeUrl(url);
      const chapters = this.parseChaptersFromText(description);
      return chapters;
    } catch (_error) {
      return undefined;
    }
  }

  private async getDescriptionFromYoutubeUrl(url: string): Promise<string> {
    let content = "";
    let description = "";

    try {
      const response = await fetch(url);
      content = await response.text();
    } catch (error) {
      logger.error(error);
      throw new Error(error);
    }

    const startSearch = '"description":{"simpleText":"';
    const endSearch = '"}';

    let currentPosition = content.indexOf(startSearch);

    if (currentPosition < 0) throw new Error("Invalid URL");

    description = content.substr(currentPosition + startSearch.length);
    currentPosition = description.indexOf(endSearch);

    if (currentPosition < 0) throw new Error("Invalid URL");
    description = description.substr(
      0,
      description.length - (description.length - currentPosition)
    );

    description = description.replace(/\\n/g, "\n");

    return description;
  }

  private parseChaptersFromText(text: string): IYoutubeChapter[] | undefined {
    if (!text) throw new Error("Invalid text");

    const startString = "0:00";
    let currentPosition = 0;

    currentPosition = text.indexOf(startString);

    if (currentPosition < 0) throw new Error("Invalid text");

    const chapters = text.substr(currentPosition).split("\n");

    return chapters.map((chapter) => ({ text: chapter }));
  }
}
