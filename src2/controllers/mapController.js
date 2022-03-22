const index = (req, res) => {
    res.render('home/map')
}
const getMap = (req, res) => {
    res.render('home/map', {
        viewData : {
            res : "hej"
        }
    })
}

module.exports = { 
    index,
    getMap
}