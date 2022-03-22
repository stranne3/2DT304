'use strict'

const express = require('express')
const app = express()
const hbs = require('express-hbs')
const path = require('path')

// engine setup
//app.engine('hbs', hbs.express4({
//    defaultLayout: path.join(__dirname, 'views')
//}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// additional middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))

// routes
app.use('/', require('./routes/homeRouter'))
app.use('/charts', require('./routes/chartRouter'))
app.use('/getWeekData', require('./routes/graphRouter'))
app.use('/about', require('./routes/aboutRouter'))
app.use('/map', require('./routes/mapRouter'))
app.use('/postPos', require('./routes/homeRouter'))

app.listen(3000, () => console.log("Server2 running on port 3000"))