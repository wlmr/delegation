var http = require('http');  
http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>Helenas hemsida</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h1>testing testing</h1>\n' + 
    '\n\n');
  res.end();
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');
