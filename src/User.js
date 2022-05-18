class User {
  constructor(userData) {
    this.user = userData[0];
  }

  returnUserFirstName() {
    let name = this.user.name.split(' ');
    return name[0];
  }

}

export default User;