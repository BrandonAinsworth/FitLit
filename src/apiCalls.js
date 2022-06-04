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
  fetch('http://localhost:3001/api/v1/hydration' , {
    method: 'POST',
    body: JSON.stringify({id: userDetails.id, date: userDetails.date , numOunces: userDetails.ounces}),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error'))
}

export {
  promise
}
