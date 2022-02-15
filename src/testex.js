import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";

const require = createRequire(import.meta.url)

const express = require("express");
const app = express();
const bp = require('body-parser')

app.use(express.static('src'));
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
    console.log(__dirname + '/index.html')
})

app.post('/send', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(req.body)
    res.redirect("/")
})

app.listen(3000, function () {
    console.log("Server is running on port 3000")
})