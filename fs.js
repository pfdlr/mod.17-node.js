var fs = require('fs');
var colors = require('colors');
var dir = __dirname;
var file = './text.txt';

fs.readdir(dir, function (err, data) {
    if (err) throw err;
    console.log('Pobrano zawartosc katalogu:', dir.red);
    console.log(data);
    var str = data.join();
    str = str.replace(/,/g, '\n');
    str = str + '\n\n';

    if (fs.existsSync(file)) {
        fs.appendFile(file, str, function (err) {
            if (err) throw err;
            console.log('Dodano do pliku:', file.red);
        });
    }
    else {
        fs.writeFile(file, str, function (err) {
            if (err) throw err;
            console.log('Zapisano do pliku:', file.red);
        });
    }
    fs.readFile(file, 'utf-8', function (err, data) {
        console.log('Odczytano zawartosc pliku:', file.red)
        console.log(data.blue);
    });
});