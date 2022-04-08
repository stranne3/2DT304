const express = require('express')
const app = express()
const hbs = require('express-hbs')
const path = require('path')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// additional middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))

// routes
app.use('/', require('./routes/homeRouter'))
app.use('/charts', require('./routes/chartRouter'))
app.use('/getDayData', require('./routes/graphRouter'))
app.use('/getWeekData', require('./routes/graphRouter'))
app.use('/getMonthData', require('./routes/graphRouter'))
app.use('/about', require('./routes/aboutRouter'))
app.use('/map', require('./routes/mapRouter'))
app.use('/getMap', require('./routes/mapRouter'))
app.use('/postPos', require('./routes/homeRouter'))

app.listen(3000, () => console.log("Server2 running on port 3000"))