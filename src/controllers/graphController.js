const t = require('../graphFunctions')

const getDay = async (req, res) => {
    var typeOfGraph = req.body.graphButton
    if(typeOfGraph == 'LAST DAY') {
        await t.gettingHere().then(data => {
            var fixedData = t.getDayData(data)
            res.render('home/chart', {
                viewData : {
                    t: JSON.stringify(['day']),
                    res : JSON.stringify(fixedData)
                }
            })
        })
    } else if(typeOfGraph == 'LAST 7 DAYS') {
        await t.gettingHere().then(data => {
            var fixedData = t.getWeekData(data)
            res.render('home/chart', {
                viewData : {
                    t: JSON.stringify(['week']),
                    res: JSON.stringify(fixedData)
                }
            })
        })
        res.render('home/chart')
    } else {
        res.render('home/chart')
    }
}

module.exports = {
    getDay,
}