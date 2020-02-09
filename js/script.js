// Initialize and add the map
function initMap() {
  // The location of Bouddha
  var stupa = { lat: 27.7222921, lng: 85.3552028 };
  // The map, centered at Bouddha
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 14, center: stupa });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: stupa, map: map });
}