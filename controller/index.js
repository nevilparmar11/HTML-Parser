const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const cheerio = require('cheerio');
const cheerioTableParser = require('cheerio-tableparser');
const helper = require('./helper')

app.use(express.urlencoded());
app.use(express.static("express"));

app.post('/parse', function (req, res) {

    var htmlContent = req.body.htmlbox;
    const $ = cheerio.load(htmlContent);
    cheerioTableParser($);
    const temp = $("center").find('b').text();    
    var tableData = $("table").parsetable(true, true, true);

    // function to handle table structure
    // var exam_type = req.body.exam_type;
    var jsonResponse = [];

    if (temp.includes("External") === true)
        jsonResponse = helper.parseDataForExternal(tableData);
    else
        jsonResponse = helper.parseDataForInternal(tableData);

    // parsing successfully completed
    res.send(
        jsonResponse
    );
});

app.get('/parse', function (req, res) {
    res.send('Cant Use Get Method for this endpoint');
});

app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port);

console.debug('Server listening on port ' + port);