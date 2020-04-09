// TODO: add and export your own actions
const FETCH_CARS = 'FETCH_CARS';
const ROOT_URL = 'https://wagon-garage-api.herokuapp.com';

export default function fetchCars(garage) {
  const promise = fetch(`${ROOT_URL}/${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}
