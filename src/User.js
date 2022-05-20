class User {
  constructor(userDetails) {
    this.user = userDetails[0];
    this.hydrationData = [];
  }

  returnUserFirstName() {
    let name = this.user.name.split(' ');
    return name[0];
  }

  getHydrationData(para1) {
    this.hydrationData = para1.returnSpecificUser(this.user.id);
  };

  averageAllTimeOuncesConsumed() {

  };

}

export default User;
