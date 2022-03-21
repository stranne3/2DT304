const index = (req, res) => {
    console.log("Här")
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
    console.log(req.body.Enida)
    console.log("===================================HÄR")
    print(req.body.Enida)
    res.render('home/index', {
        viewData : {
            lat : req.body.latitude,
            long  : req.body.longitude
        }
    })
}

function print(data){
    console.log("DATA: ", data)
}

module.exports = { 
    index,
    indexPost,
    postPos
}