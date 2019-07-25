var figlet = require('figlet');
var colors = require('colors');
var OSinfo = require('./modules/OSinfo');
process.stdin.setEncoding("utf-8");
var lang = process.env.LANG;
var ver = process.versions.node;
var release = process.release.lts;
figlet('| OS INFO |', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(colors.rainbow(data));
});
process.stdout.write(colors.yellow("Possibilities: /ver, /lang, /release, /getOSinfo, /exit\n"));

process.stdin.on("readable", function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case "/exit":
                process.stdout.write("Quitting app!\n");
                process.exit();
            case "/ver":
                process.stdout.write("NODE version: " + ver + "\n");
                break;
            case "/lang":
                process.stdout.write("System language: " + lang + "\n");
                break;
            case "/release":
                process.stdout.write("NOD release: " + release + "\n");
                break;
            case "/getOSinfo":
                    OSinfo.print();
                break;
            default:
                process.stdout.write(colors.red("Wrong instruction!\nUse: /ver, /lang, /release, /getOSinfo, /exit\n"));
        }
        process.stdin.resume();
    }
});
