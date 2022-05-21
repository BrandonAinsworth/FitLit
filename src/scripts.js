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

/*~~~~~~~~GLOBAL VARIABLES~~~~~~~*/
var userRepo;
var individual;
var sleepData;
var activityData;
var hydrationData;
var hydrationRepo;
var weeklyConsumption;
var dailyConsumption;


const getRandomID = () => {
  return Math.floor(Math.random() * 50);
};

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

fetchSleep()
  .then(data => {
    sleepData = data;
    // console.log(sleepData);
  });

fetchActivity()
  .then(data => {
    activityData = data;
    // console.log(activityData);
  });

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
