/*
 * Entry point for the watch app
 */
import document from "document";
import { geolocation } from "geolocation";
import { Accelerometer } from "accelerometer";
import { peerSocket } from "messaging";

let repsCount = document.getElementById("reps");
let counting = false;
let container = document.getElementById("panorama");

const range = 0.8;
const top = 2.5;
const bot = -2.5;
let reach_top = false;
let reach_bot = false;
var velocity = 0
var displacement = 0
var accel = new Accelerometer({ frequency: 10 });
var reps = 0;
accel.onreading = function() {
//  console.log(accel.x - 9.81);
//  velocity += (accel.x - 9.81) / 100
//  console.log(velocity)
  
  let accelx = accel.x;
  if (accelx > top) reach_top = true;
  if (accelx < bot) reach_bot = true;
  if (reach_top && reach_bot && Math.abs(accelx) < range) {
    reps++;
    repsCount.text = reps;
    reach_top = false;
    reach_bot = false;
  }
  console.log("accel: " + accelx)
  console.log(reps);
}

document.getElementById('button').onclick = function(e) {
  console.log("Key pressed: ");
  count();
}

function count() {
  if (!counting) {
    console.log('start')
    accel.start();
    counting = true;
    if (peerSocket.readyState === peerSocket.OPEN) {
        console.log('open')
       peerSocket.send({weight: 10, reps:reps});
    }
    
  } else {
    console.log('stop')
    accel.stop();
    counting = false;
    if (peerSocket.readyState === peerSocket.OPEN) {
        console.log('open')
       peerSocket.send({weight: 10, reps:reps});
    }
    reps = 0;
    repsCount.text = reps;
  }
}



