var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/getCssCoverage', function (req, res) {

    if (typeof req.query.url !== 'undefined' && req.query.url)
    {
        res.send('url:' + req.query.url);
    }
    else
    {
        res.end("Please supply URL")
    }
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})