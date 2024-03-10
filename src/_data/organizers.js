class Organizer {
  constructor(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  get avatarSrc() {
    return `/static/images/organizers/${this.avatar}`;
  }
}

export default [
  new Organizer("Glen", "Goodwin", "glen.png"),
  new Organizer("Asa", "Smith", "asa.jpg"),
  new Organizer("Troy", "Vassalotti", "troy.jpg"),
  new Organizer("Roman", "Grewal", "roman.jpg"),
  new Organizer("Eli", "Oshinsky", "eli.jpg"),
];
