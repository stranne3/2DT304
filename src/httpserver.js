import {createRequire} from 'module'

const require = createRequire(import.meta.url)

const http = require('http');
const fs = require('fs');
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    if(req.url === "/") {
        console.log("vill ha index")
        console.log(req)
    }
    res.writeHead(200);
    res.end("200");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log("Lyssnar")
});