var express = require('express');
var redis = require('redis');

var app = express();
var db  = redis.createClient();

db.set('visitors', 0);

app.get('/', function (req, res) {
    db.incr('visitors', function(err, visitors) {
        res.send('<h1>Hallaien Bergen!</h1>' +
                 '<h2>Besøkende: ' + visitors + '</h2>');
    });
});

app.listen(4000, function () {
    console.log('Hallaien kjører på http://localhost:4000/');
});
