/*
 * Entry point for the companion app
*/
import me from "companion";
console.log("Companion code started");
import { peerSocket } from "messaging";
import { settingsStorage } from "settings";

// console.log(me.wakeInterval)
// me.wakeInterval = 1;
// console.log('me')
console.log(JSON.stringify(me))


var config = {
  apiKey: "AIzaSyDKYfH1vuQjqq41yMNTGXIK3mNjzhks5ts",
  authDomain: "lift-3e738.firebaseapp.com",
  databaseURL: "https://lift-3e738.firebaseio.com",
  storageBucket: "lift-3e738.appspot.com",
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getData() {
  fetch(`https://lift-3e738.firebaseio.com/users.json`, {
    method: "GET",
    headers: {
      Accept: 'application/json',
    },
  })
  .then(function(res) {
    return res.text();
  })
  .then(function(res) {
    console.log(res);
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

getData();

function sendData(data) {
  let d = new Date();
  let month = months[d.getMonth()];
  let day = d.getDate();
  let year = d.getFullYear();
  let date = `${month} ${day} ${year}`;
  console.log(date);
    
  fetch('https://lift-3e738.firebaseio.com/users/hannah/bench.json', {
    method: "POST",
    body: JSON.stringify({ "date": date, "weight": data.weight, "reps":data.reps })
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



peerSocket.onmessage = evt => {
  console.log('asdfsa');
  console.log(evt);
  sendData(evt.data);
}




