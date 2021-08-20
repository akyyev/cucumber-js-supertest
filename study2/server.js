var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    var filePath = request.url;
    if (filePath == '/')
        filePath = '/index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    const map = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.wav': 'audio/wav',
        '.mp3': 'audio/mpeg',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword'
    };
    

    fs.readFile(__dirname + filePath, function(error, content) {
        if (error) {
            console.error(error);
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': map[extname] });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end(); 
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': map[extname] });
            response.end(content, 'utf-8');
        }
    });

}).listen(process.env.PORT || 3000);
console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);