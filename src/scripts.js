// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';

/*~~~~~~~~QUERY SELECTORS~~~~~~~*/

var userFirstName = document.querySelector(".greeting");
var userFullName = document.querySelector(".user-full-name");
var userAddress = document.querySelector(".user-address");
var userEmail = document.querySelector(".user-email");
var userStepGoal = document.querySelector(".step-goal");
var userStrideLength = document.querySelector(".stride-length");
var averageStepGoal = document.querySelector(".average-step-goal")
/*~~~~~~~~GLOBAL VARIABLES~~~~~~~*/

var userRepo = new UserRepository(userData);
var userDetail = getUserInfo(1);
var individual = new User(userDetail);

/*~~~~~~~~FUNCTIONS~~~~~~~*/
function getUserInfo(id) {
    var currentUser = userRepo.returnSpecificUser(id);
    console.log('currentuser',currentUser[0].name);
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
compareAverageStepGoal()
getUserInfo(1)
renderGreeting()