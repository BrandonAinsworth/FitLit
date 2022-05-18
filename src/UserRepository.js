class UserRepository {
  constructor(data) {
    this.usersData = data;
  }

  returnSpecificUser(id) {
    return this.usersData.filter((user) => id === user.id );
  }

  averageStepGoalAllUsers() {
    let result = 0;
    let totalStepsGoal = this.usersData.reduce((total, user) => {

        total += user.dailyStepGoal;
        return total;
      }, 0);
      result = parseInt((totalStepsGoal / this.usersData.length).toFixed(0));
      return result;
  }

}

export default UserRepository;