export function fetchUsers() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
    .then(response => checkForErrors(response))
};

export function fetchSleep() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
    .then(response => checkForErrors(response))
};

export function fetchActivity() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
    .then(response => checkForErrors(response))
};

export function fetchHydration() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then(response => checkForErrors(response))
};

function checkForErrors(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error")
  }
};
