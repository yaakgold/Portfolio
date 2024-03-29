export class Slide {
  public url: string;
  public title: string;
  public subtitle: string;
  public linkToCode: string
  public description: string;
  public shortDescription: string;

  constructor(url: string, title: string, subtitle: string, linkToCode: string, description: string, shortDescription: string) {
    this.url = url;
    this.title = title;
    this.subtitle = subtitle;
    this.linkToCode = linkToCode;
    this.description = description;
    this.shortDescription = shortDescription;
  }
}