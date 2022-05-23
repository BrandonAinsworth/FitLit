export function fetchData(type) {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${type}`)
    .then(response => checkForErrors(response))
}

let promise = Promise.all([fetchData('users'), fetchData('sleep'), fetchData('hydration')]);

function checkForErrors(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error");
    // Give user feedback when error exists.
  }
};

export {
  promise
}