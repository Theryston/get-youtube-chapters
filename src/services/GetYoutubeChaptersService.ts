import { IYoutubeChapter } from "../interfaces/IYoutubeChapter.ts";

const chapters: IYoutubeChapter[] = [
  {
    text: "Chapter 1",
    time: "00:00:00",
    timeInSeconds: 0,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export class GetYoutubeChaptersService {
  public getChapters(youtubeId: string): IYoutubeChapter | undefined {
    return chapters.find((ch) => ch.youtubeId === youtubeId);
  }
}
