/*
 * Entry point for the companion app
*/
import * as messaging from "messaging";
import { settingsStorage } from "settings";
//import firebase from "../node_modules/firebase/dist/index.node.cjs.js";


console.log("Companion code started");

var config = {
  apiKey: "AIzaSyDKYfH1vuQjqq41yMNTGXIK3mNjzhks5ts",
  authDomain: "lift-3e738.firebaseapp.com",
  databaseURL: "https://lift-3e738.firebaseio.com",
  storageBucket: "lift-3e738.appspot.com",
};
//firebase.initializeApp(config);

//var database = firebase.database();
//console.log(database);

function sendData() {
  fetch('https://lift-3e738.firebaseio.com/test/tester.json', {
    method: "POST",
    body: JSON.stringify({ "first": "Jack", "last": "Sparrow" })
    // headers: {
    //   "Authorization": Bearer ${accessToken}
    // }
  })
  .then(function(res){
    return res.text()
  })
  .then(function(res) {
    console.log(res);
    return res;
  })
  // .then(function(data) {
  //   let myData = {
  //     totalMinutesAsleep: data.summary.totalMinutesAsleep
  //   }
  //   if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
  //     messaging.peerSocket.send(myData);
  //   }
  // })
  .catch(err => console.log('[FETCH]: ' + err));
}

sendData();



messaging.peerSocket.onmessage = evt => {
  console.log("Reps");
  console.log(evt.data.reps);
}