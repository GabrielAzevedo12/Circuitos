var
http = require('http'),
config = require('./config'),
fileHandler = require('./filehandler'),
parse = require('url').parse,
types = config.types,
rootFolder = config.rootFolder,
defaultIndex = config.defaultIndex,
server;

module.exports = server = http.createServer();

let onResquest = (req,res) => {
    var
    filename = parse(req.url).pathname,
    parseReqUrl = parse(req.url),
    fullPath,
    extension;

    console.log(parse("Este é o objeto req.url : "))
    console.log(req.url)
    console.log("Este é o objeto parse(req.url) : " + parse(req.url))
    console.log("Este é o objeto parse(req.url).pathname : " + parseReqUrl.pathname)

    if (filename === '/') {

        filename = defaultIndex;
        console.log("Este é o filename : " + filename)

    }

    fullPath = rootFolder + filename;
    extension = filename.substr(filename.lastIndexOf('.') + 1) ;
    console.log("Este é o fullPath : " + fullPath);
    console.log("Este é extension : " + extension);

    fileHandler(
    fullPath,
    function(data) {

        res.writeHead(200, {

            'Content-Type': types[extension] || 'text/plain',
            'Content-Length': data.length

            })

        res.end(data);

    },
    function(err) {

        res.writeHead(404);
        res.end();

    }
    )

}

server.on('request', onResquest);
