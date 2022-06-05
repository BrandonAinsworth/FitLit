class UserRepository {
  constructor(data) {
    this.allUsersData = data.userData;
  }

  returnSpecificUser(id) {
    return this.allUsersData.filter((user) => id === user.id);
  }

  averageStepGoalAllUsers() {
    let result = 0;
    let totalStepsGoal = this.allUsersData.reduce((total, user) => {
        total += user.dailyStepGoal;
        return total;
      }, 0);
    result = parseInt((totalStepsGoal / this.allUsersData.length).toFixed(0));
    return result;
  }
}

export default UserRepository;