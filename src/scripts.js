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
var userData = new UserRepository
var luisa = new User(luisa);

/*~~~~~~~~QUERY SELECTORS~~~~~~~*/
var userFirstName = document.querySelector(".greeting");
var userFullName = document.querySelector(".user-full-name");
var userAddress = document.querySelector(".user-address");
var userEmail = document.querySelector(".user-email");

/*~~~~~~~~FUNCTIONS~~~~~~~*/



function renderGreeting(individual) {
//
};

renderGreeting(currentUser);
