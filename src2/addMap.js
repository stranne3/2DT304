let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('karta'), {
        zoom: 2,
        center: new google.maps.LatLng(14.83, 56.86),
        mapTypeId: "terrain",
    });
}