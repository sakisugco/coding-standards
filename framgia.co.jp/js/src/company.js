var marker = {};
var map = {};
var office = {
  "shibuya": new google.maps.LatLng(35.6578504, 139.704909),
  "shimane": new google.maps.LatLng(35.193246, 132.819111),
  "hanoi": new google.maps.LatLng(21.017323, 105.783896),
  "singapore": new google.maps.LatLng(1.289214, 103.846753)
}
var image = 'http://framgia.com/jp/images/icon_marker.png';
var style = [
  {
    "stylers": [
      { "saturation": -90 },
      { "lightness": 20 },
      { "gamma": 0.8 }
    ]
  }
];

function initialize() {

  var mapType = new google.maps.StyledMapType(style);

  var options = {
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true, 
    scrollwheel: false
  };

  for (var place in office) {
    if (office.hasOwnProperty(place)) {
      options.center = office[place];
      map[place] = new google.maps.Map(document.getElementById("map_" + place), options);
      map[place].mapTypes.set('simple', mapType);
      map[place].setMapTypeId('simple');
      marker[place] = new google.maps.Marker({
        map:map[place],
        animation: google.maps.Animation.DROP,
        position: office[place],
        icon: image
      });
    }
  }

}

function toggleBounce() {

  for (var place in office) {
    if (office.hasOwnProperty(place)) {

      if (marker[place].getAnimation() != null) {
        marker[place].setAnimation(null);
      } else {
        marker[place].setAnimation(google.maps.Animation.DROP);
      }
    }
  }
}