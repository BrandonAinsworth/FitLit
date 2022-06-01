class Activity {
  constructor(data) {
    this.allUsersActivityData = data.activityData;
  }

  returnSpecificUser(id) {
    let activityFilter = this.allUsersActivityData.filter(user => id === user.userID);
    if(activityFilter.length > 0) {
      return activityFilter;
    }
    return `User not found`
  }
};

export default Activity;
