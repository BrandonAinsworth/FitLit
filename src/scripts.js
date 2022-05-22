import './css/styles.css';
import './images/turing-logo.png'
import {
  fetchUsers,
  fetchSleep,
  fetchActivity,
  fetchHydration
 } from './apiCalls'
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';

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


/*~~~~~~~~GLOBAL VARIABLES~~~~~~~*/
var userRepo;
var individual;
var sleepData;
var sleepRepo;
var activityData;
var hydrationData;
var hydrationRepo;
var weeklyConsumption;
var dailyConsumption;
var date;
var startDate;
var endDate;


const getRandomID = () => {
  return Math.floor(Math.random() * 50);
};

const getRandomDate = ((start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
});

const id = getRandomID();

function getUsers(){
    fetchUsers()
        .then(data => {
            userRepo = new UserRepository(data);
            individual = new User(userRepo.returnSpecificUser(id));
            getUserInfo(id);
            compareAverageStepGoal();
            renderGreeting();
        });
}

getUsers()

function formatDate(startDate, endDate) {

    let randomDate = getRandomDate(new Date(startDate), new Date(endDate));
    let year = randomDate.getFullYear();
    let month = randomDate.getMonth();
    if (month < 10) {
      month = `0${month}`;
    }
    let day = randomDate.getDate();
    if (day < 10) {
      day = `0${day}`
    }
    return `${year}/${month}/${day}`
}

fetchSleep()
  .then(data => {
    sleepData = data;
    sleepRepo = new Sleep(sleepData);
    individual.getSleepData(sleepRepo);
    startDate = sleepRepo.allUsersSleepData[0].date;
    endDate = sleepRepo.allUsersSleepData[sleepRepo.allUsersSleepData.length - 1].date;
    let myDate = formatDate(startDate, endDate);
    dailyHoursSlept.innerText = `Daily Hours Slept for ${myDate}: ${individual.returnDailyHoursSlept(myDate)}`;
    dailySleepQuality.innerText = `Daily Sleep Quality for ${myDate}: ${individual.returnDailySleepQuality(myDate)}`;
    individual.returnWeeklySleepData(myDate).forEach(data => {
        weeklySleepData.innerText +=  `Date ${data.date}: Hours Slept: ${data.hoursSlept} Sleep Quality: ${data.sleepQuality}\n`
    })
    allTimeAverageHoursSlept.innerText = `Average Hours Slept All Time: ${individual.averageHoursSleptAllTime()}`
    allTimeAverageSleepQuality.innerText = `Average Sleep Quality All Time: ${individual.averageSleepQualityAllTime()}`
  });

// fetchActivity()
//   .then(data => {
//     activityData = data;
//     // console.log(activityData);
//   });

fetchHydration()
  .then(data => {
    hydrationData = data;
    hydrationRepo = new Hydration(hydrationData);
    individual.hydrationData.push(hydrationRepo.returnSpecificUser(id));
    individual.getHydrationData(hydrationRepo);
    weeklyConsumption = individual.returnWeeklyOuncesConsumed();
    dailyConsumption = individual.returnDailyOuncesConsumed(weeklyConsumption[0].date);
    renderWeeklyWaterConsumption(weeklyConsumption);
    totalDailyOunces.innerText = dailyConsumption;
  });

/*~~~~~~~~FUNCTIONS~~~~~~~*/
function getUserInfo(id) {
    var currentUser = userRepo.returnSpecificUser(id);
    userFullName.innerText = `Name: ${currentUser[0].name}`;
    userAddress.innerText = `Address: ${currentUser[0].address}`;
    userEmail.innerText = `Email: ${currentUser[0].email}`;
    userStrideLength.innerText = `Stride Length: ${currentUser[0].strideLength}ft`;
    userStepGoal.innerText = `Your Step Goal: ${currentUser[0].dailyStepGoal}`;
    return currentUser;
};

function renderGreeting() {
   userFirstName.innerText = `Hello, ${individual.returnUserFirstName()}!`
};

function compareAverageStepGoal(){
   averageStepGoal.innerText = `All FitLit Users Average Step Goal: ${userRepo.averageStepGoalAllUsers()}`;
};

function renderWeeklyWaterConsumption(weeklyConsumption) {
  let chartOutput = weeklyConsumption.reduce((acc, dailyOunces) => {
    acc += `${dailyOunces.date}: ${dailyOunces.numOunces} oz.\n`
    return acc;
  }, "");

  weeklyWaterConsumption.innerText = chartOutput
};
