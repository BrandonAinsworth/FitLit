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
    window.alert('Error: Please refresh the page.');
  }
};

export {
  promise
}