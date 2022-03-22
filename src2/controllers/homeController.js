const t = require('../getLocationFromPage')

const index = (req, res) => {
    res.render('home/index')
}

const postPos = async (req, res) => {
    t.write(req.body.latitude, req.body.longitude).then(response => {
        res.render('home/index', {
            viewData : {
                res : response
            }
        })
    })
}

module.exports = { 
    index,
    postPos
}