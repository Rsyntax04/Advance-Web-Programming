var http = require('http');
var fileSys = require('fs');
var url = require('url');

var server = http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let path = q.query;
    let Filelocation;
    switch (path.menu){
        case '/':
            Filelocation = 'pages/index.html'
            break;
        case 'Home':
            Filelocation = 'pages/index.html'
            break;
        case'KK':
            Filelocation = 'pages/KartuKeluarga.html'
            break;
        default:
            Filelocation = 'pages/index.html'
    }
    fileSys.readFile(Filelocation, function (err, data){
        if(err){
            res.writeHead(404, {'Content-type' : 'text/html'});
            return res.end('404 Not Found')
        }
        res.writeHead(200,{'Content-type' : 'text/html'});
        res.write(data);
        return res.end();

    })
});
server.listen(8000);