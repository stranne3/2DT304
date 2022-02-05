'use strict'
var mongoURL = "mongodb+srv://motion:spår@cluster0.8ao4o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const mongoose = require('mongoose');
const db = mongoURL

mongoose
.connect(db)
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));

