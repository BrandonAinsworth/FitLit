class UserRepository {
  constructor(dataDetails) {
    this.users = dataDetails.users;
    this.usersActivity = dataDetails.activityData;
    this.usersHydration = dataDetails.hydrationData;
    this.usersSleep = dataDetails.sleepData;
    this.averageStepGoal = () => {

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
    
    console.log(outputUser);
    return outputUser;
  }

}

export default UserRepository;