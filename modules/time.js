var os = require('os');
function getTime() {
var uptime = os.uptime();
var days = Math.floor(uptime / (3600*24));
var dRest = (uptime % (3600*24));
var hours = Math.floor(dRest / 3600);
var hRest = (uptime % 3600);
var minutes = Math.floor(hRest / 60);
var seconds = hRest % 60;
if (minutes < 10) {
    minutes = '0' + minutes;
}
if (seconds < 10) {
    seconds = '0' + seconds;
}
var time = "Uptime: " + days + " dni " + hours + " godz. " + minutes + " min. " + seconds +" sek."; 
console.log(time);
}
exports.print = getTime;
