var express = require('express');
var app = express();

app.get('/', function (req, res) {
    //res.send('Hello Chai Aijun from Cisco Shipped!');
    res.send('Coding from Eclipse!!! - 20160513');
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
