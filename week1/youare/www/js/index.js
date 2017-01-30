var map;

document.addEventListener("deviceready", function() {

  var div = document.getElementById("map_canvas");

  // Initialize the map view
  map = plugin.google.maps.Map.getMap(div);

  // Wait until the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
  map.setMapTypeId(plugin.google.maps.MapTypeId.SATELLITE);

}, false);

function onMapReady() {
  var button = document.getElementById("button");
  button.addEventListener("click", onBtnClicked, false);
}

function onBtnClicked() {

  // Show FUll Screen
  map.showDialog();
  var userLat, userLng;

  map.getMyLocation(function(location) {
    userLat = location.latLng.lat;
    userLng = location.latLng.lng;


  // Move to the position with animation
  map.animateCamera({
    target: {lat: userLat, lng: userLng},
    zoom: 18,
    tilt: 80,
    bearing: 30,
    duration: 20000
  }, function() {

    // Add a maker
    map.addMarker({
      position: {lat: userLat, lng: userLng},
      title: "Well... Here!",
      animation: plugin.google.maps.Animation.BOUNCE
    }, function(marker) {
      // Show the info window
      marker.showInfoWindow();

      // Catch the click event
      marker.on(plugin.google.maps.event.INFO_CLICK, function() {

        // To do something...
        alert("📍 Be somewhere else!");

      });
    });
  });
});
}
