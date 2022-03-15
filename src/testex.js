import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";
import req from "express/lib/request.js";

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

app.get("/css/index.css", function(req, res) {
    res.sendFile(__dirname + "/css/index.css")

})

app.get("/images/chartIcon.jpeg", function(req, res) {
    res.sendFile(__dirname + "/images/chartIcon.jpeg")
})

app.get("/images/invChartIcon.jpeg", function(req, res) {
    res.sendFile(__dirname + "/images/invChartIcon.jpeg")
})

app.get("/images/mapIcon.jpg", function(req, res) {
    res.sendFile(__dirname + "/images/mapIcon.jpg")
})

app.get("/images/invMapIcon.jpg", function(req, res) {
    res.sendFile(__dirname + "/images/invMapIcon.jpg")
})

app.get("/images/hus.jpg", function(req, res) {
    res.sendFile(__dirname + "/images/hus.jpg")
})

app.get("/images/invHus.jpg", function(req, res) {
    res.sendFile(__dirname + "/images/invHus.jpg")
})

app.get("/images/stockholm.jpg", function(req, res) {
    res.sendFile(__dirname + "/images/stockholm.jpg")
})

app.get("/images/bakgrund.jpg", function(req, res) {
    res.sendFile(__dirname + "/images/bakgrund.jpg")
})

app.get("/map", function(req, res) {
    res.sendFile(__dirname + "/map.html")
})

app.get("/charts", function(req, res) {
    console.log(req.url)
    res.sendFile(__dirname + "/charts.html")
})

app.get("/getdata.js", function(req, res){
    console.log(req.url)
    res.sendFile
})

app.get("getDayData", function(req, res) {
    console.log("kommer hit")
})

app.post('/', (req, res) => {
    const click = {clickTime: new Date()};
    res.status(204).send();
    console.log(req.body)
    //res.redirect("/")
})

app.listen(3000, function () {
    console.log("Server is running on port 3000")
})