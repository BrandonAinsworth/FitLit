import Hydration from "./Hydration";

class User {
  constructor(userDetails) {
    this.user = userDetails[0];
    this.hydrationData = [];
    this.sortedHydrationData = [];
    this.sleepData = [];
    this.sortedSleepData = [];
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
      this.sortedHydrationData = this.hydrationData.sort((a, b) => {
      let dateA = new Date (a.date);
      let dateB = new Date (b.date);
      return dateB - dateA;
    });

    let output = this.sortedHydrationData.filter((point, index) => index < 7);
    return output;
  };

  getSleepData(allSleepData) {
    this.sleepData = allSleepData.returnSpecificUser(this.user.id);
  };

  averageHoursSleptAllTime() {
    let totalHours = this.sleepData.reduce((total, point) => {
      total += point.hoursSlept;
      return total;
    }, 0);

    let averageAllTime = parseFloat((totalHours / this.sleepData.length).toFixed(1));
    return averageAllTime;
  };

  averageSleepQualityAllTime() {
    let totalQuality = this.sleepData.reduce((total, point) => {
      total += point.sleepQuality;
      return total;
    }, 0);

    let averageAllTime = parseFloat((totalQuality / this.sleepData.length).toFixed(1));
    return averageAllTime;
  };

  returnDailyHoursSlept(date) {
    let dailyHours = this.sleepData.find(dailyHrs => dailyHrs.date === date)
    if (dailyHours === undefined) {
      return 0;
    }
    return dailyHours.hoursSlept;
  };


  returnDailySleepQuality(date) {
    let dailyQuality = this.sleepData.find(dailyQuality => dailyQuality.date === date)
    return dailyQuality.sleepQuality;
  };

  returnWeeklySleepData(date) {
    this.sortedSleepData = this.sleepData.sort((a, b) => {
    let dateA = new Date (a.date);
    let dateB = new Date (b.date);
    return dateB - dateA;
  });

  let index = this.sortedSleepData.findIndex((e) => e.date === date);

  let output = [];

  for (let i = 0; i < 7; i++) {
    output.push(this.sortedSleepData[index + i]);
  }

  return output;
  };

  returnLatestWeekSleepData() {
    this.returnWeeklySleepData();
    let output = this.sortedSleepData.filter((point, index) => index < 7);
    return output;
  }

};

export default User;
