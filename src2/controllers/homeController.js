const t = require('../getLocationFromPage')

const index = (req, res) => {
    res.render('home/index')
}

const postPos = (req, res) => {
    t.write(req.body.latitude, req.body.longitude)
    res.render('home/index', {
        viewData : {
            lat : req.body.latitude,
            long  : req.body.longitude
        }
    })
}

module.exports = { 
    index,
    postPos
}