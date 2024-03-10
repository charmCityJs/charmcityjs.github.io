export default {
  title: "charmCityJS",
  description: "Baltimore's JavaScript Community",
  email: "charmcityjs@gmail.com",
  slack: "http://slack.charmcityjs.org/",
  domain: "charmcityjs.github.io",
  url: "https://charmcityjs.github.io",
  github: "https://github.com/charmCityJs",
  meetup: "https://www.meetup.com/charmcityjs/",
  get issues() {
    return `${this.github}/talks/issues`;
  },
  get talks() {
    return `${this.issues}/new?labels=talk&template=submit-talk.md`;
  },
  get recommend() {
    return `${this.issues}/new?labels=speaker&template=recommend-speaker.md"`;
  },
};
