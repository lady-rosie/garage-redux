// TODO: add and export your own actions
const FETCH_CARS = 'FETCH_CARS';
const ADD_CAR = 'ADD_CAR';
const ROOT_URL = 'https://wagon-garage-api.herokuapp.com';

export default function fetchCars(garage) {
  const promise = fetch(`${ROOT_URL}/${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function addCar(garage, body, callback) {
  const request = fetch(`${ROOT_URL}/${garage}/cars`, {
    method: 'POST',
    header: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: ADD_CAR,
    payload: request
  };
}
export function removeCar(history, car) {
  const url = `${ROOT_URL}/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(""));

  return {
    type: 'REMOVE_CAR',
    payload: car
  };
}
