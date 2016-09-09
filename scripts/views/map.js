(function(module) {

  var mapView = {};
  mapView.allTweetsWithGeo = [];
  mapView.allMarkers = [];

  var stylesArray = [
    {
      featureType: 'all',
      stylers: [
        { hue: '#00ffe6' },
        { saturation: -20 }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { lightness: 100 },
        { visibility: 'simplified' }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 15,
    styles: stylesArray,
    center: new google.maps.LatLng(47.618217, -122.351832),
    mapTypeId: google.maps.MapTypeId.STREET,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });

  var marker = new google.maps.Marker({
    position: {lat: 47.618217, lng: -122.351832},
    map: map
  });


  mapView.getTheStuff = function () {
    mapView.allTweetsWithGeo = tweetObj.all.statuses.filter(function (tweet) {
      console.log(tweet.geo);
      return tweet.geo;
    });
  };

  mapView.showTheStuff = function () {
    mapView.allTweetsWithGeo.forEach(function (geoTweet){
      var marker = new google.maps.Marker({
        position: {lat: geoTweet.geo.coordinates[0], lng: geoTweet.geo.coordinates[1]},
        map: map
      });
      mapView.allMarkers.push(marker);
    });
    console.log(mapView.allMarkers);

    if (mapView.allMarkers.length >= 1) {
      $('.map-section').fadeIn();
      google.maps.event.trigger(map, 'resize');
    };
  };

  module.mapView = mapView;

})(window);
