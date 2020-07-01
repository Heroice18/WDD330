import {makeRequest} from "./authHelpers.js";

 makeRequest('login', 'POST', {
     password: 'user1',
     email: 'user1@email.com'
     });

function getJSON(url) {
    return fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

// Server Address
const baseURL = 'http://127.0.0.1:3000/';
// helper function to make an http request with fetch.
// returns a json object




