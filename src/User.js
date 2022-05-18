class User {
  constructor(userDetails) {
    this.user = userDetails[0];
  }

  returnUserFirstName() {
    let name = this.user.name.split(' ');
    return name[0];
  }

}

export default User;