var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
    res.send('Hello Chai Aijun from Cisco Shipped!');
=======
    res.send('Hello Chai 888888 Aijun from Cisco Shipped!');
>>>>>>> origin/master
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
