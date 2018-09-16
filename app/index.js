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
let quickstart = document.getElementById("quickstart");
let arms = document.getElementById("arms");
let legs = document.getElementById("legs");
let settings = document.getElementById("settings");
let arms_rep = document.getElementById("arms_rep");
let arms_list = document.getElementById("arms_title");
let legs_list = document.getElementById("legs_list");
let arms_biceps = document.getElementById("arms_biceps");
let btnBR = document.getElementById("btn-br");
let btnwrap = document.getElementById("btnwrap");
let stop = document.getElementById("btn-br-stop");
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


btnBR.onclick = function(e) {
  count();
}

stop.onclick = function(e) {
  count();
}

document.onkeypress = function(e) {
  console.log("Key pressed: " + e.key);
  if (e.key == 'up') count();
  if (e.key == 'back'){
  }
}

function toggle(ele) {
  ele.style.display = (ele.style.display === "inline") ? "none" : "inline";
}

quickstart.onclick = function(e) {
  toggle(container)
  // toggle(quickstart)
}

arms.onclick = function(e) {
  toggle(container)
  toggle(arms_list)
}

arms_biceps.onclick = function(e) {
  toggle(arms_list)
}

legs.onclick = function(e) {
  console.log("click");
}

function count() {
  if (!counting) {
    console.log('start')
    toggle(btnwrap)
    accel.start();
    counting = true;
    if (peerSocket.readyState === peerSocket.OPEN) {
        console.log('open')
       peerSocket.send({weight: 10, reps:reps});
    }
    
  } else {
    console.log('stop')
    toggle(btnwrap)
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



