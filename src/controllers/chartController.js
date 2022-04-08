const a = require('../graphFunctions')

const index = (req, res) => {
    res.render('home/chart')
}

module.exports = {
    index,
}