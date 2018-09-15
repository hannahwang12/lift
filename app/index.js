/*
 * Entry point for the watch app
 */
import document from "document";
import { geolocation } from "geolocation";
import { Accelerometer } from "accelerometer";

let start = document.getElementById("start");
let stop = document.getElementById("stop");
// demotext.text = "Fitbit Studio rocks!";

var accel = new Accelerometer({ frequency: 10 });
accel.onreading = function() {
  console.log(JSON.stringify(accel));
  console.log(accel);

  // Peek the current sensor values
  console.log("ts:", accel.timestamp,
              "x:", accel.x,
              "y:", accel.y,
              "z:", accel.z);

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
