export class SocialModel {
  constructor(data) {
    this.platform = data.platform || "";
    this.url = data.url || "";
    this.icon = data.icon || `bi-${data.platform}`;
  }
}
