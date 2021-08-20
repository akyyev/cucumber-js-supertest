var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer( (request, response) => {
    var filePath = request.url;
    if (filePath == '/')
        filePath = '/index.html';

    var extname = path.extname(filePath);
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
        '.doc': 'application/msword',
        '.webmanifest': 'application/manifest+json'
    };

    fs.readFile(__dirname + filePath, (error, content) => {
        if (error) {
            console.error(error);
        }
        else {
            response.writeHead(200, { 'Content-Type': map[extname] });
            response.end(content, 'utf-8');
        }
    });

}).listen(process.env.PORT || 3000);

// To run on specific port you can use port flag
// PORT=8080 node server.js
// if it is not set then default port will be used (3000)
console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
