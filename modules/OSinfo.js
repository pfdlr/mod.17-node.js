var os = require('os');
var colors = require('colors');
var time = require('./time');

function getOSinfo() {
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log(colors.green('System:'), type);
    console.log(colors.magenta('Release:'), release);
    console.log(colors.america('CPU model:'), cpu);
    time.print();
    console.log(colors.cyan('User name:'), userInfo.username);
    console.log(colors.bgBlue('Home dir:'), userInfo.homedir);
}
exports.print = getOSinfo;