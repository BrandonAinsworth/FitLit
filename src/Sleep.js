class Sleep {
  constructor(allUsersSleepData) {
    this.allUsersSleepData = allUsersSleepData.sleepData;
  }

  returnSpecificUser(id) {
    let userSleep = this.allUsersSleepData.filter((user) => id === user.userID);
    return userSleep;
  }

  averageSleepQualityAllUsers() {
    let result = 0;
    let totalSleepQuality = this.allUsersSleepData.reduce((total, user) => {
        total += user.sleepQuality;
        return total;
      }, 0);
      result = parseFloat((totalSleepQuality / this.allUsersSleepData.length).toFixed(1));
      return result;
  }
}

export default Sleep;