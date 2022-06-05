export function fetchData(type) {
  return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => checkForErrors(response));
}

let promise = Promise.all([fetchData('users'), fetchData('sleep'), fetchData('hydration'), fetchData('activity')]);

function checkForErrors(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error");
    window.alert('Error: Please refresh the page.');
  }
}

export function postNewHydration(userDetails){
  return fetch('http://localhost:3001/api/v1/hydration' , {
    method: 'POST',
    body: JSON.stringify({userID: userDetails.userID,
      date: userDetails.date , numOunces: userDetails.numOunces}),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())

    .catch(error => console.log('Error'))
}

export function postNewActivity(userDetails){
  return fetch('http://localhost:3001/api/v1/activity' , {
    method: 'POST',
    body: JSON.stringify({
      userID: userDetails.userID,
      date: userDetails.date,
      flightsOfStairs: userDetails.flightsOfStairs,
      minutesActive: userDetails.minutesActive,
      numSteps: userDetails.numSteps
    }),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())

    .catch(error => console.log('Error'))
}

export function postNewSleep(userDetails){
  return fetch('http://localhost:3001/api/v1/sleep' , {
    method: 'POST',
    body: JSON.stringify({
      userID: userDetails.userID,
      date: userDetails.date,
      hoursSlept: userDetails.hoursSlept,
      sleepQuality: userDetails.quality,
    }),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())

    .catch(error => console.log('Error'))
}

export {
  promise
}