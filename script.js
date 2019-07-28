var http = require("http");
var fs = require("fs");

var server = http.createServer();
server.on("request", function(request, response) {
  if (request.method === "GET" && request.url === "/") {
    fs.readFile("index.html", function(err, data) {
      if (err) throw err;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.write(data);
      response.end();
    });
  } else {
    fs.readFile("404.jpg", function(err, data) {
      if (err) throw err;
      response.setHeader("Content-Type", "image/jpeg");
      response.statusCode = 404;
      response.write(data);
      response.end();
    });
  }
});
server.listen(8080);
