/*
 * Entry point for the watch app
 */
import document from "document";
import { geolocation } from "geolocation";
import { Accelerometer } from "accelerometer";

let start = document.getElementById("start");
let stop = document.getElementById("stop");

const range = 0.5;
const top = 4;
const bot = -4;
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
    reach_top = false;
    reach_bot = false;
  }
  console.log("accel: " + accelx)
  console.log(reps);
  // if (accelx > -0.1 && accelx < 0.1) accelx = 0
  // displacement += 0.5 * accelx * 0.01
  // console.log(displacement * 100)

  // Peek the current sensor values
  // console.log("ts:", accel.timestamp,
  //             "x:", accel.x,
  //             "y:", accel.y,
  //             "z:", accel.z);

}

// Begin monitoring the sensor
start.onclick = function(e) {
  console.log('start');
  accel.start();
  console.log('started');
}

stop.onclick = function(e) {
  console.log('stop');
  accel.stop();
}
