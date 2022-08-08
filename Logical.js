var saturDay = false;
var sunDay = true;
var freeTime = true;

var weekend = saturDay || sunDay;
var visitParl = weekend && freeTime;
// var Date = new Date();
// var currentDay = Date.getDay();


// console.log( saturDay, " " , sunDay, " " , currentDay , Date );

console.log("Is today weekend ? ", weekend);
console.log("Will i go to park", visitParl);