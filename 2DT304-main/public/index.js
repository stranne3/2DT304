import { test } from "./testing"

var a = {}
var x = document.getElementById('demo');
var y = document.getElementById('showMap')
const c = {}

var script = document.createElement('script')
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCDAsYZSff2DcSKB4OMcAqtxlK7B9ONhZw&callback=showPosition&libraries=&v=weekly'
script.async = true;

y.addEventListener('click', getLocation())

document.head.appendChild(script)
function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    c['lat'] = position.coords.latitude;
    c['lng'] = position.coords.longitude;
    console.log(c['lat'] +" : "+ c['lng'])
    //c = {lat: position.coords.latitude, lng: position.coords.longitude};
    var a = new google.maps.LatLng(c['lat'], c['lng'])
    var magProp = {
        zoom: 15,
        center: a
    };
    map = new google.maps.Map(document.getElementById('map'), magProp);
    new google.maps.Marker({
        position: {lat: c['lat'], lng: c['lng']},
        map
    });
    var d = new Date();
    time = d;
    var jsonmsg = {
        "id" : 1,
        "latitude" : c['lat'],
        "longitude" : c['lng'],
        "time" : time
    }

    test
}