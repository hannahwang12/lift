/*
 * Entry point for the companion app
 */
import { peerSocket } from "messaging";

console.log("Companion code started");

peerSocket.onmessage = evt => {
  console.log("Reps");
  console.log(evt.data.reps);
}
