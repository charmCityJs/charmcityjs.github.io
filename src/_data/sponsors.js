class Sponsor {
  constructor(name, avatar) {
    this.name = name;
    this.avatar = avatar;
  }

  get avatarSrc() {
    return `/static/images/sponsors/${this.avatar}`;
  }
}
