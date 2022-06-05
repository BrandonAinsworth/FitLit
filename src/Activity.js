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
  
  averageAllUsersStairsByDate(date) {
    let matchingDates = this.allUsersActivityData.filter(userInfo => userInfo.date === date);

    let totalFlights = matchingDates.reduce((acc, userInfo) => {
      acc += userInfo.flightsOfStairs;
      return acc;
    }, 0);

    return parseInt((totalFlights / matchingDates.length).toFixed(0));
  }

  averageAllUsersStepsByDate(date) {
    let matchingDates = this.allUsersActivityData.filter(userInfo => userInfo.date === date);

    let totalSteps = matchingDates.reduce((acc, userInfo) => {
      acc += userInfo.numSteps;
      return acc;
    }, 0);

    return parseInt((totalSteps / matchingDates.length).toFixed(0));
  }

  averageAllUsersMinutesByDate(date) {
    let matchingDates = this.allUsersActivityData.filter(userInfo => userInfo.date === date);

    let totalMins = matchingDates.reduce((acc, userInfo) => {
      acc += userInfo.minutesActive;
      return acc;
    }, 0);

    return parseInt((totalMins / matchingDates.length).toFixed(0));
  }

};

export default Activity;