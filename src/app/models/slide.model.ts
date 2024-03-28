export class Slide {
  public url: string;
  public title: string;
  public subtitle: string;
  public description: string;

  constructor(url: string, title: string, subtitle: string, description: string) {
    this.url = url;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
  }
}