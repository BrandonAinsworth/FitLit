class User {
  constructor(userDetails) {
    this.user = userDetails[0];
    this.hydrationData = [];
  };

  returnUserFirstName() {
    let name = this.user.name.split(' ');
    return name[0];
  };

  getHydrationData(allHydrationData) {
    this.hydrationData = allHydrationData.returnSpecificUser(this.user.id);
  };

  averageAllTimeOuncesConsumed() {
    let totalOunces = this.hydrationData.reduce((total, dailyOunces) => {
      total += dailyOunces.numOunces;
      return total;
    }, 0);

    let averageAllTime = parseInt((totalOunces / this.hydrationData.length).toFixed());
    return averageAllTime;
  };

};

export default User;
