class UserRepository {
  constructor(dataDetails) {
    this.users = dataDetails.users;
    this.usersActivity = dataDetails.activityData;
    this.usersHydration = dataDetails.hydrationData;
    this.usersSleep = dataDetails.sleepData;
    this.averageStepGoalAllUsers = () => {
      let result = 0;
      let totalStepsGoal = this.users.reduce((total, stepDataPoint) => {

        total += stepDataPoint.dailyStepGoal;
        return total;
      }, 0);
      result = parseInt((totalStepsGoal / this.users.length).toFixed(0));
      return result;
    } 
    this.averageSleepQuality = () => {

    }
  }

  returnSpecificUser(userID) {
    // We want to input the userID and output the user object.

    // We will need to pull the user information from each of the four 
    // datasets.

    let outputUser = {};
    outputUser.users = this.users.filter((user) => user.id === userID);
    outputUser.activityData = this.usersActivity.filter((user) => user.userID === userID);
    outputUser.hydrationData = this.usersHydration.filter((user) => user.userID === userID);
    outputUser.sleepData = this.usersSleep.filter((user) => user.userID === userID);
    return outputUser;
  }

}

export default UserRepository;