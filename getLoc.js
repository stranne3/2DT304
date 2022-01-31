var x = document.getElementById('demo');

var y = document.getElementById('getIt')
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
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude;
}