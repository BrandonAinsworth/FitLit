import './css/styles.css';
import { postNewHydration, postNewActivity,
  postNewSleep, promise } from './apiCalls'
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import Activity from './Activity';

/*~~~~~~~~QUERY SELECTORS~~~~~~~*/
var userFirstName = document.querySelector(".greeting");
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
var activityDate = document.getElementById("activity-date");
var activityFlights = document.getElementById("activity-flights");
var activityMinutes = document.getElementById("activity-minutes");
var activitySteps = document.getElementById("activity-steps");
var activityButton = document.getElementById("activity-button");
var sleepDate = document.getElementById("sleep-date");
var sleepHours = document.getElementById("sleep-hours");
var sleepQuality = document.getElementById("sleep-quality");
var sleepButton = document.getElementById("sleep-button");

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
hydrationDate.addEventListener('keyup', checkFieldsHydration);
hydrationOz.addEventListener('keyup', checkFieldsHydration);
activityDate.addEventListener('keyup', checkFieldsActivity);
activityFlights.addEventListener('keyup', checkFieldsActivity);
activityMinutes.addEventListener('keyup', checkFieldsActivity);
activitySteps.addEventListener('keyup', checkFieldsActivity);
activityButton.addEventListener("click", saveNewActivity);
sleepDate.addEventListener('keyup', checkFieldsSleep);
sleepHours.addEventListener('keyup', checkFieldsSleep);
sleepQuality.addEventListener('keyup', checkFieldsSleep);
sleepButton.addEventListener('click', saveNewSleep);

const getRandomID = () => {
  return Math.floor(Math.random() * 50);
}

const id = getRandomID();

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
  dailyHoursSlept.innerText = `Hours Slept for ${myDate}: ${individual.returnDailyHoursSlept(myDate)}`;
  dailySleepQuality.innerText = `Sleep Quality for ${myDate}: ${individual.returnDailySleepQuality(myDate)}`;
  individual.returnWeeklySleepData(myDate).forEach(data => {
      weeklySleepData.innerText +=  `Date ${data.date}: Hours Slept: ${data.hoursSlept} Sleep Quality: ${data.sleepQuality}\n`;
  });
  allTimeAverageHoursSlept.innerText = `Average Hours Slept All Time: ${individual.averageHoursSleptAllTime()}`;
  allTimeAverageSleepQuality.innerText = `Average Sleep Quality All Time: ${individual.averageSleepQualityAllTime()}`;
}

function updateActivity(data) {
  activityData = data;
  activityRepo = new Activity(activityData);
  individual.getActivityData(activityRepo);
  let latestWeekActivityData = individual.sortActivityData();
  let myDate = latestWeekActivityData[0].date;
  let dailyStepCount = individual.returnStepsByDay(myDate);
  totalDailySteps.innerText = `Step Count: ${dailyStepCount}`;
  dailyMinutesActive.innerText = `Minutes Active: ${individual.returnMinutesActive(myDate)}`;
  dailyFlights.innerText = `Flights Climbed: ${individual.returnStairsByDay(myDate)}`;
  dailyMiles.innerText = `Miles Walked: ${individual.returnUserMilesWalked(myDate)}`;
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


function checkFieldsHydration() {
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

function checkFieldsActivity() {
  if (activityDate.value !== "" && activityFlights.value !== "" &&
    activityMinutes.value !== "" && activitySteps.value !== "") {
    activityButton.classList.remove('disable');
    activityButton.disabled = false;
  } else {
    activityButton.classList.add('disable');
    activityButton.disabled = true;
  }
}

function checkFieldsSleep() {
  if (sleepDate.value !== "" && sleepHours.value !== "" && sleepQuality.value !== "" ) {
    sleepButton.classList.remove('disable');
    sleepButton.disabled = false;
  } else {
    sleepButton.classList.add('disable');
    sleepButton.disabled = true;
  }
}

function saveNewHydrationInfo(event) {
  event.preventDefault();

  let newDate = hydrationDate.value.split('-');
  newDate = newDate.join('/');

  let ounces = parseInt(hydrationOz.value);
  postNewHydration({userID: individual.user.id, date: newDate, numOunces: ounces})
  .then(data => {

    individual.hydrationData.unshift(data);
    weeklyConsumption = individual.returnWeeklyOuncesConsumed();
    dailyConsumption = individual.returnDailyOuncesConsumed(weeklyConsumption[0].date);
    renderWeeklyWaterConsumption(weeklyConsumption);
    totalDailyOunces.innerText = `${dailyConsumption} oz. consumed today!`;

    hydrationOz.value = "";
    hydrationDate.value = "";
    checkFieldsHydration();
  });
}

function saveNewActivity(event) {
  event.preventDefault();

  let newDate = activityDate.value.split('-');
  newDate = newDate.join('/');

  let flights = parseInt(activityFlights.value);
  let minutes = parseInt(activityMinutes.value);
  let steps = parseInt(activitySteps.value);

  postNewActivity({userID: individual.user.id, date: newDate, flightsOfStairs: flights, minutesActive: minutes, numSteps: steps})
    .then(data => {
      activityRepo.allUsersActivityData.unshift(data);
      individual.activityData.unshift(data);

      let latestWeekActivityData = individual.sortActivityData();
      let myDate = latestWeekActivityData[0].date;
      let dailyStepCount = individual.returnStepsByDay(myDate);
      totalDailySteps.innerText = `Step Count: ${dailyStepCount}`;
      dailyMinutesActive.innerText = `Minutes Active: ${individual.returnMinutesActive(myDate)}`;
      dailyFlights.innerText = `Flights Climbed: ${individual.returnStairsByDay(myDate)}`;
      dailyMiles.innerText = `Miles Walked: ${individual.returnUserMilesWalked(myDate)}`;
      stepsCompared.innerText = `Average Steps: ${activityRepo.averageAllUsersStepsByDate(myDate)}`;
      minutesCompared.innerText = `Average Minutes: ${activityRepo.averageAllUsersMinutesByDate(myDate)}`;
      flightsCompared.innerText = `Average Flights: ${activityRepo.averageAllUsersStairsByDate(myDate)}`;
      weeklyActivityData.innerText = `Weekly Activity \n ${gatherWeeklyActivityData(myDate)}`;

      activityFlights.value = "";
      activityMinutes.value = "";
      activitySteps.value = ""
      activityDate.value = "";
      checkFieldsActivity();
  });
}

function saveNewSleep(event) {
  event.preventDefault();

  let newDate = sleepDate.value.split('-');
  newDate = newDate.join('/');
 
  let hours = parseFloat(sleepHours.value);
  let qual = parseFloat(sleepQuality.value);

  postNewSleep({userID: individual.user.id, date: newDate, hoursSlept: hours, quality: qual})
    .then(data => {
      individual.sortedSleepData.unshift(data);

      let latestWeekSleepData = individual.returnLatestWeekSleepData();
      let myDate = latestWeekSleepData[0].date;
      dailyHoursSlept.innerText = `Daily Hours Slept for ${myDate}: ${individual.returnDailyHoursSlept(myDate)}`;
      dailySleepQuality.innerText = `Daily Sleep Quality for ${myDate}: ${individual.returnDailySleepQuality(myDate)}`;
      weeklySleepData.innerText = "Weekly Sleep Data:\n";
      latestWeekSleepData.forEach(data => {
        weeklySleepData.innerText +=  `Date ${data.date}: Hours Slept: ${data.hoursSlept} Sleep Quality: ${data.sleepQuality}\n`;
      })
      allTimeAverageHoursSlept.innerText = `Average Hours Slept All Time: ${individual.averageHoursSleptAllTime()}`;
      allTimeAverageSleepQuality.innerText = `Average Sleep Quality All Time: ${individual.averageSleepQualityAllTime()}`;

      sleepHours.value = "";
      sleepQuality.value = "";
      sleepDate.value = "";
      checkFieldsSleep();
  });
}