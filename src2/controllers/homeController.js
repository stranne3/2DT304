const index = (req, res) => {
    res.render('home/index')
}

const indexPost = (req, res) => {
    res.render('home/index', {
        viewData: {
            viewData : "<p> här är jag </p>"
        }
    })
}

const postPos = (req, res) => {
    console.log("===================================HÄR")
    res.render('home/index', {
        viewData : {
            lat : req.body.latitude,
            long  : req.body.longitude
        }
    })
}

module.exports = { 
    index,
    indexPost,
    postPos
}