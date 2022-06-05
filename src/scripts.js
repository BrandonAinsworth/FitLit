import './css/styles.css';
import { postNewHydration, promise } from './apiCalls'
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import Activity from './Activity';

/*~~~~~~~~QUERY SELECTORS~~~~~~~*/
var userFirstName = document.querySelector(".greeting");
var userFullName = document.querySelector(".user-full-name");
var userAddress = document.querySelector(".user-address");
var userEmail = document.querySelector(".user-email");
var userStepGoal = document.querySelector(".step-goal");
var userStrideLength = document.querySelector(".stride-length");
var averageStepGoal = document.querySelector(".average-step-goal");
var totalDailyOunces = document.querySelector(".total-daily-ounces");
var weeklyWaterConsumption = document.querySelector(".weekly-water-consumption");
var dailyHoursSlept = document.querySelector(".daily-hours-slept");
var dailySleepQuality = document.querySelector(".daily-sleep-quality");
var weeklySleepData = document.querySelector(".weekly-sleep-data");
var allTimeAverageHoursSlept = document.querySelector(".average-hours-slept");
var allTimeAverageSleepQuality = document.querySelector(".average-sleep-quality");
var catchError = document.querySelector(".catch-error");
var totalDailySteps = document.querySelector(".total-num-steps");
var dailyMinutesActive = document.querySelector(".daily-minutes-active");
var dailyMiles = document.querySelector(".daily-distance-miles");
var dailyFlights = document.querySelector(".daily-flights");
var stepsCompared = document.querySelector(".steps-compared");
var minutesCompared = document.querySelector(".minutes-compared");
var flightsCompared = document.querySelector(".flights-compared");
var weeklyActivityData = document.querySelector(".weekly-user-activity");
var hydrationDate = document.getElementById("hydration-date");
var hydrationOz = document.getElementById("hydration-oz");
var hydrationButton = document.getElementById("hydration-button");


/*~~~~~~~~GLOBAL VARIABLES~~~~~~~*/
var userRepo;
var individual;
var sleepData;
var sleepRepo;
var hydrationData;
var hydrationRepo;
var weeklyConsumption;
var dailyConsumption;
var activityData;
var activityRepo;


/*~~~~~~~~EVENT LISTENERS~~~~~~~*/
hydrationButton.addEventListener('click', saveNewHydrationInfo);
hydrationDate.addEventListener('keyup', checkFields);
hydrationOz.addEventListener('keydown', checkFields);





const getRandomID = () => {
  return Math.floor(Math.random() * 50);
}

const id = getRandomID();
// const id = 2; //This should be Jarvis.

/*~~~~~~~~FUNCTIONS~~~~~~~*/
function getData(){
  promise.then(data => {

    userRepo = new UserRepository(data[0]);
    individual = new User(userRepo.returnSpecificUser(id));
    getUserInfo(id);
    compareAverageStepGoal();
    renderGreeting();
    updateHydration(data[2]);
    updateSleep(data[1]);
    updateActivity(data[3])
  })
  .catch(error => {
    console.log(error)
    catchError.innerText = 'We have encountered an error retrieving your data.'
  });
}

getData()

function updateHydration(data){
  hydrationData = data;
  hydrationRepo = new Hydration(hydrationData);
  individual.hydrationData.push(hydrationRepo.returnSpecificUser(id));
  individual.getHydrationData(hydrationRepo);
  weeklyConsumption = individual.returnWeeklyOuncesConsumed();
  dailyConsumption = individual.returnDailyOuncesConsumed(weeklyConsumption[0].date);
  renderWeeklyWaterConsumption(weeklyConsumption);
  totalDailyOunces.innerText = `${dailyConsumption} oz. consumed today!`;
}

function updateSleep(data) {
  sleepData = data;
  sleepRepo = new Sleep(sleepData);
  individual.getSleepData(sleepRepo);
  let latestWeekSleepData = individual.returnLatestWeekSleepData();
  let myDate = latestWeekSleepData[0].date;
  dailyHoursSlept.innerText = `Daily Hours Slept for ${myDate}: ${individual.returnDailyHoursSlept(myDate)}`;
  dailySleepQuality.innerText = `Daily Sleep Quality for ${myDate}: ${individual.returnDailySleepQuality(myDate)}`;
  individual.returnWeeklySleepData(myDate).forEach(data => {
      weeklySleepData.innerText +=  `Date ${data.date}: Hours Slept: ${data.hoursSlept} Sleep Quality: ${data.sleepQuality}\n`;
  });
  allTimeAverageHoursSlept.innerText = `Average Hours Slept All Time: ${individual.averageHoursSleptAllTime()}`;
  allTimeAverageSleepQuality.innerText = `Average Sleep Quality All Time: ${individual.averageSleepQualityAllTime()}`;
}

//
function updateActivity(data) {
  activityData = data;
  activityRepo = new Activity(activityData);
  individual.getActivityData(activityRepo);
  let latestWeekActivityData = individual.sortActivityData();
  let myDate = latestWeekActivityData[0].date;
  let dailyStepCount = individual.returnStepsByDay(myDate);
  totalDailySteps.innerText = `Daily Step Count: ${dailyStepCount}`;
  dailyMinutesActive.innerText = `Daily Minutes Active: ${individual.returnMinutesActive(myDate)}`;
  dailyFlights.innerText = `Daily Flights Climbed: ${individual.returnStairsByDay(myDate)}`;
  dailyMiles.innerText = `Daily Miles Walked: ${individual.returnUserMilesWalked(myDate)}`;
  stepsCompared.innerText = `Average Steps: ${activityRepo.averageAllUsersStepsByDate(myDate)}`;
  minutesCompared.innerText = `Average Minutes: ${activityRepo.averageAllUsersMinutesByDate(myDate)}`;
  flightsCompared.innerText = `Average Flights: ${activityRepo.averageAllUsersStairsByDate(myDate)}`;
  weeklyActivityData.innerText = `Weekly Activity \n ${gatherWeeklyActivityData(myDate)}`;
}

function gatherWeeklyActivityData(date) {
  let index = individual.sortedActivityData.findIndex(e => e.date === date);
  let dailyActivity = individual.sortedActivityData.slice(index, index + 7);

  let output = '';

  dailyActivity.forEach( activityDay => {
    output += `Date: ${activityDay.date}: Steps: ${activityDay.numSteps} Flights: ${activityDay.flightsOfStairs} Minutes: ${activityDay.minutesActive} \n`;
  });

  return output;
}


function getUserInfo(id) {
    var currentUser = userRepo.returnSpecificUser(id);
    userFullName.innerText = `Name: ${currentUser[0].name}`;
    userAddress.innerText = `Address: ${currentUser[0].address}`;
    userEmail.innerText = `Email: ${currentUser[0].email}`;
    userStrideLength.innerText = `Stride Length: ${currentUser[0].strideLength}ft`;
    userStepGoal.innerText = `Your Step Goal: ${currentUser[0].dailyStepGoal}`;
    return currentUser;
}

function renderGreeting() {
   userFirstName.innerText = `Hello, ${individual.returnUserFirstName()}!`;
}

function compareAverageStepGoal(){
   averageStepGoal.innerText = `All FitLit Users Average Step Goal: ${userRepo.averageStepGoalAllUsers()}`;
}

function renderWeeklyWaterConsumption(weeklyConsumption) {
  let chartOutput = weeklyConsumption.reduce((acc, dailyOunces) => {
    acc += `${dailyOunces.date}: ${dailyOunces.numOunces} oz.\n`;
    return acc;
  }, "");

  weeklyWaterConsumption.innerText = chartOutput;
}


function checkFields() {
  // function to check when all required fields of form are filled in.
  // Then enable save button.

  if (hydrationDate.value !== `` && hydrationOz.value !== '') {
    hydrationButton.classList.remove('disable');
    hydrationButton.disabled = false;
  } else {
    hydrationButton.classList.add('disable');
    hydrationButton.disabled = true;
  }
}



function saveNewHydrationInfo(event) {
  event.preventDefault();

  //check data & data validation.
  

  // look at date to ensure it doesn't already exist in the data.
  // confirm date is not a future date.
  // 
  let newDate = hydrationDate.value.split('-');
  newDate = newDate.join('/');

  // post information to local server.
  postNewHydration({userID: individual.user.id, date: newDate, numOunces: hydrationOz.value})
  .then(data => {
    
    individual.hydrationData.unshift(data);
    weeklyConsumption = individual.returnWeeklyOuncesConsumed();
    dailyConsumption = individual.returnDailyOuncesConsumed(weeklyConsumption[0].date);
    renderWeeklyWaterConsumption(weeklyConsumption);
    totalDailyOunces.innerText = `${dailyConsumption} oz. consumed today!`;  
    // message to user?
  })
  // refresh data showing on page

}


/*~~~~~~~~CONTINUE HERE LOOK AT THIS~~~~~~~*/