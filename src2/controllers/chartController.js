const index = (req, res) => {
    res.render('home/chart')
}

const weekData = (req, res) => {
    res.render('home/test')
    console.log("JAPPHAPP")
}

module.exports = {
    index,
    weekData
}