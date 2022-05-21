import Hydration from "./Hydration";

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

  returnDailyOuncesConsumed(date) {
    let dailyConsumed = this.hydrationData.find(dailyOunces => dailyOunces.date === date)
    return dailyConsumed.numOunces;
  };

  returnWeeklyOuncesConsumed() {
      this.hydrationData = this.hydrationData.sort((a, b) => {
      let dateA = new Date (a.date);
      let dateB = new Date (b.date);
      return dateB - dateA;
    });

    let output = [];
    for (let i = 0; i < 7; i++) {
      output.push(this.hydrationData[i].numOunces);
    };

    return output;
  };

};

export default User;
