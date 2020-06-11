const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const cheerioTableParser = require('cheerio-tableparser');

const helper = require('./helper')

app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(express.static("express"));

app.post('/parse', function (req, res) {

    var htmlContent = req.body.htmlbox;
    const $ = cheerio.load(htmlContent);
    cheerioTableParser($);
    const exam_type = $("center").find('b').text();    
    var tableData = $("table").parsetable(true, true, true);
    console.log(tableData);

    // function to handle table structure
    var jsonResponse = [];

    if (exam_type.includes("Internal") === true)
        jsonResponse = helper.parseDataForInternal(tableData);
    else
        jsonResponse = helper.parseDataForExternal(tableData);

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