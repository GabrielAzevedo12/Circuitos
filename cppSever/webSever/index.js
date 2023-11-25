process.title = 'MyWebSever';

var args = process.argv,
    port = args[2] || 7070,
    webSever = require('./server');


webSever.listen(port, function() {
    console.log('Sever started at port ' + port);

    })    
 