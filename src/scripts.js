// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './UserRepository';
import User from './User';

/*~~~~~~~~GLOBAL VARIABLES~~~~~~~*/
var userRepo = new UserRepository(userData);



/*~~~~~~~~QUERY SELECTORS~~~~~~~*/
var userFirstName = document.querySelector(".greeting");
var userFullName = document.querySelector(".user-full-name");
var userAddress = document.querySelector(".user-address");
var userEmail = document.querySelector(".user-email");
var userStepGoal = document.querySelector(".step-goal");
var userStrideLength = document.querySelector(".stride-length");

/*~~~~~~~~FUNCTIONS~~~~~~~*/
function getUserInfo(id) {
    var currentUser = userRepo.returnSpecificUser(id);
    userFullName.innerText = `Name: ${currentUser.name}`;
    userAddress.innerText = `Address: ${currentUser.address}`;
    userEmail.innerText = `Email: ${currentUser.email}`;
    userStrideLength.innerText = `Stride Length: ${currentUser.strideLength}ft`;
    userStepGoal.innerText = `Step Goal: ${currentUser.dailyStepGoal}`;
    return currentUser;
};

// function renderGreeting() {

// };

var individual = new User(getUserInfo(3));
console.log('individual', individual);