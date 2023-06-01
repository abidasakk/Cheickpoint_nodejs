
//test1
 console.log("hello word")
//test2
 var http = require("http");
http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello Node!!!!</h1>');
 }).listen("3000");
 console.log('Server running at http://127.0.0.1:3000/');
test3
 var fs = require("fs");
 fs.writeFile('welcom.txt', 'hello word!', function(err) {
   if (err) {
      return console.error(err);
    }
   
    console.log("hello node");

     })


