<<<<<<< Updated upstream
var x = document.getElementById('demo');

=======
var a = {}
var x = document.getElementById('button');
>>>>>>> Stashed changes
var y = document.getElementById('getIt')
var script = document.createElement("script")


y.addEventListener('click', getLocation())
function getLocation() {
    console.log("JAPP")
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
<<<<<<< Updated upstream
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude;
}
=======
    //x.innerHTML = "Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude;
    //a['lat'] = position.coords.latitude;
    //a['lng'] = position.coords.longitude;
    //console.log(a)
    const c = {lat: position.coords.latitude, lng: position.coords.longitude};
    var a = new google.maps.LatLng(c['lat'], c['lng'])
    var magProp = {
        zoom: 15,
        center: a
    };
    map = new google.maps.Map(document.getElementById('map'), magProp);
}

google.maps.event.addDomListener(outer, 'click', function(){
    map.setCenter(a)
});
>>>>>>> Stashed changes
