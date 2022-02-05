'use strict'
var mongoURL = "mongodb+srv://motion:spår@cluster0.8ao4o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

import { connect } from './node_modules/mongoose';
const db = mongoURL

connect(db)
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));

const button2 = document.getElementById('showMap')
button2.addEventListener('click', function() {
    console.log("CLICKED FROM DATABASE")  
})
