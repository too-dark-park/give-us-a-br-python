var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var cssUtility = require('./css-coverage');

app.get('/getCssCoverage', function (req, res) {

    if (typeof req.query.url !== 'undefined' && req.query.url)
    {
        (async() => {
            var t = await cssUtility.cssCoverage(req.query.url).catch(e => { return e; });
            res.json(t)
        })()
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