var OSinfo = require('../modules/task_17_4_getOSinfo');

process.stdin.setEncoding("utf-8");
var lang = process.env.LANG;
var ver = process.versions.node;
var release = process.release.lts;
process.stdout.write("Possibilities: /ver, /lang, /release, /getOSinfo, /exit\n");

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
                process.stdout.write("Wrong instruction!\n Use: /ver, /lang, /release, /getOSinfo, /exit\n");
        }
        process.stdin.resume();
    }
});
