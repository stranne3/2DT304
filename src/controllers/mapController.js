const t = require('../addMap')

const index = (req, res) => {
    res.render('home/map')
}
const getMap = async (req, res) => {
    await t.gettingHere().then(da => {
        res.render('home/map', {
            viewData : {
                res : JSON.stringify(da)
            }
        })
    })
}

module.exports = { 
    index,
    getMap
}