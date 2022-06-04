class User {
  constructor(userDetails) {
    this.user = userDetails[0];
    this.hydrationData = [];
    this.sortedHydrationData = [];
    this.sleepData = [];
    this.sortedSleepData = [];
    this.activityData = [];
    this.sortedActivityData = [];
  }

  returnUserFirstName() {
    let name = this.user.name.split(' ');
    return name[0];
  }

  getHydrationData(allHydrationData) {
    this.hydrationData = allHydrationData.returnSpecificUser(this.user.id);
  }

  averageAllTimeOuncesConsumed() {
    let totalOunces = this.hydrationData.reduce((total, dailyOunces) => {
      total += dailyOunces.numOunces;
      return total;
    }, 0);

    let averageAllTime = parseInt((totalOunces / this.hydrationData.length).toFixed());
    return averageAllTime;
  }

  returnDailyOuncesConsumed(date) {
    let dailyConsumed = this.hydrationData.find(dailyOunces => dailyOunces.date === date)
    return dailyConsumed.numOunces;
  }

  returnWeeklyOuncesConsumed() {
      this.sortedHydrationData = this.hydrationData.sort((a, b) => {
      let dateA = new Date (a.date);
      let dateB = new Date (b.date);
      return dateB - dateA;
    })

    let output = this.sortedHydrationData.filter((point, index) => index < 7);
    return output;
  }

  getSleepData(allSleepData) {
    this.sleepData = allSleepData.returnSpecificUser(this.user.id);
  }

  averageHoursSleptAllTime() {
    let totalHours = this.sleepData.reduce((total, point) => {
      total += point.hoursSlept;
      return total;
    }, 0);

    let averageAllTime = parseFloat((totalHours / this.sleepData.length).toFixed(1));
    return averageAllTime;
  }

  averageSleepQualityAllTime() {
    let totalQuality = this.sleepData.reduce((total, point) => {
      total += point.sleepQuality;
      return total;
    }, 0);

    let averageAllTime = parseFloat((totalQuality / this.sleepData.length).toFixed(1));
    return averageAllTime;
  }

  returnDailyHoursSlept(date) {
    let dailyHours = this.sleepData.find(dailyHrs => dailyHrs.date === date)
    if (dailyHours === undefined) {
      return 0;
    }
    return dailyHours.hoursSlept;
  }

  returnDailySleepQuality(date) {
    let dailyQuality = this.sleepData.find(dailyQuality => dailyQuality.date === date)
    return dailyQuality.sleepQuality;
  }

  returnWeeklySleepData(date) {
    this.sortedSleepData = this.sleepData.sort((a, b) => {
      let dateA = new Date (a.date);
      let dateB = new Date (b.date);
      return dateB - dateA;
    });

    let index = this.sortedSleepData.findIndex((e) => e.date === date);

    let output = this.sortedSleepData.slice(index, index + 7)

    return output;
  }

  returnLatestWeekSleepData() {
    this.returnWeeklySleepData();
    let output = this.sortedSleepData.filter((point, index) => index < 7);
    return output;
  }

  getActivityData(allUsersActivityData){
    this.activityData = allUsersActivityData.returnSpecificUser(this.user.id);
  }

  returnUserMilesWalked(date){
    let dailySteps = this.activityData.find(elem => elem.date === date)
    if(dailySteps === undefined){
      return 'No data'
    }
    return parseFloat(((dailySteps.numSteps * this.user.strideLength) / 5280).toFixed(1));
  }

  returnMinutesActive(date){
    let dailyMinutes = this.activityData.find(elem => elem.date === date)
    if(dailyMinutes === undefined){
      return 'No data'
    }
    return dailyMinutes.minutesActive;
  }

  sortActivityData(){
    return this.sortedActivityData = this.activityData.sort((a, b) => {
      let dateA = new Date (a.date);
      let dateB = new Date (b.date);
      return dateB - dateA;
    });
  }
  returnWeeklyAvgMinutesActive(date){
    this.sortActivityData()

    let index = this.sortedActivityData.findIndex((e) => e.date === date);

    let output = this.sortedActivityData.slice(index, index + 7)

    let total = output.reduce((acc, elem) => {
      acc += elem.minutesActive
      return acc
    },0);
    return parseFloat((total / output.length).toFixed(1));
  }

  returnStepsByDay(date) {
    let stepsTaken = this.activityData.find(elem => elem.date === date)
    
    return stepsTaken.numSteps;
  }

  compareToStepGoal(date){

    let todaysSteps = this.activityData.find(elem => elem.date === date)

    if(this.user.dailyStepGoal <= todaysSteps.numSteps){
      return true
    }
    return false
  }

  returnAllDaysStepGoalExceeded(){
    this.sortActivityData();
      let daysMet = this.sortedActivityData.filter(daily => this.user.dailyStepGoal <= daily.numSteps);
      if(daysMet.length === 0){
        return 'Goal not met'
      } 
      return daysMet;     
  }

  findAllTimeStairClimbingRecord() {
    this.activityData.sort((a,b) => b.flightsOfStairs - a.flightsOfStairs);

    return this.activityData[0].flightsOfStairs;
  }

  returnStairsByDay(date){
    let dailyStairs = this.activityData.find(elem => elem.date === date)
    if(dailyStairs === undefined){
      return 'No data'
    }
    return dailyStairs.flightsOfStairs;
  }


}



export default User;
