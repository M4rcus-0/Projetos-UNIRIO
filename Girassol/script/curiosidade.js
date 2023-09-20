function haversine(lat1, lon1, lat2, lon2) {
    let dLat = (lat2 - lat1) * Math.PI / 180.0;
    let dLon = (lon2 - lon1) * Math.PI / 180.0;
    lat1 = (lat1) * Math.PI / 180.0;
    lat2 = (lat2) * Math.PI / 180.0;
    let a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    let rad = 6371;
    let c = 2 * Math.asin(Math.sqrt(a));
    let dist = rad * c;
    return dist;
}

let distanceInKm;
var x = document.getElementById("demo");
function pegarLocalizacao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            distanceInKm = haversine(position.coords.latitude, position.coords.longitude, -22.483452687081463, -43.626037318026874, "K");
            x.innerHTML = "Distância: " + distanceInKm + " km";
        });
    }
    else { x.innerHTML = "O seu navegador não suporta Geolocalização."; }
}
