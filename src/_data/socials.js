import Metadata from "./metadata.js";

class SocialMedia {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

export default [
  new SocialMedia("GitHub", Metadata.github),
  new SocialMedia("Mastodon", "https://mastodon.social/@charmcityjs"),
  new SocialMedia("Meetup", Metadata.meetup),
  new SocialMedia("Instagram", "https://instagram.com/charmcityjs"),
  new SocialMedia("X", "https://x.com/charmcityjs"),
];
