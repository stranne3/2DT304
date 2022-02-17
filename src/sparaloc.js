function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Funkar ej")
    }
}

function showPosition(position) {
    c['lat'] = position.coords.latitude;
    c['lng'] = position.coords.longitude;
    console.log(c['lat'] +" : "+ c['lng'])

    var d = new Date();
    let time = d.today() + "@" + d.timeNow()
    var jsonmsg = {
        "id" : 1,
        "latitude" : c['lat'],
        "longitude" : c['lng'],
        "time" : time
    }

    getTime(jsonmsg)
}

export { getLocation }