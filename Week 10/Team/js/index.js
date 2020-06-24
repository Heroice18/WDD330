import QuakesController from './QuakesController.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();

// import { getJSON, getLocation } from './utilities.js';

// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// async function appendLocation() {
//     const myLocation = await getLocation();
//     console.log(myLocation.coords.latitude)
//     console.log(myLocation.coords.longitude)

//     getJSON(`${baseUrl}&latitude=${myLocation.coords.latitude}&longitude=${myLocation.coords.longitude}&maxradiuskm=100`)
// }
// appendLocation();
//console.log(getLocation())
//getLocation().then
// const myLocation = new getLocation();
// console.log(myLocation.then(function(response) { return response.json}))
//getJSON(baseUrl);