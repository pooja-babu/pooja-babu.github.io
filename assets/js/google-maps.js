function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 43.84552209436665, lng: -79.23966591732383};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Markham, Ontario' // Title Location
    });
}