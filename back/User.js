class User {
    constructor(userData){
        this.userID = userData.users[0].userID
        this.name = userData.users[0].name;
        this.address = userData.users[0].address
        this.email = userData.users[0].email
        this.dailyStepGoal = userData.users[0].dailyStepGoal
        this.activity = userData.activityData
        this.hydration = userData.hydrationData
        this.sleep = userData.sleepData
    }
    returnUserFirstName(){
        let name = this.name.split(' ');
        return name[0];
    }
    returnUserFullName(){
        return this.name;
    }
    returnUserEmail(){
        return this.email
    }
    returnUserDailyStepGoal(){
        return this.dailyStepGoal
    }
    returnDailyOuncesConsumed(date){
        let ouncesConsumed = this.hydration.filter(element => 
            element.date === date
        );
        return ouncesConsumed[0].numOunces;
    }
    returnWeeklyOuncesConsumed(date){
      //
    }
}



export default User