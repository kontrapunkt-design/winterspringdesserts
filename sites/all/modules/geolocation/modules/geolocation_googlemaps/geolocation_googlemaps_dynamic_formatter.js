/**
 * @file
 * Javascript for Goole Map Dynamic API Formatter javascript code.
 * 
 * Many thanks to Lukasz Klimek http://www.klimek.ws for the help
 */

(function($) {

  Drupal.geolocationGooglemaps = Drupal.geolocationGooglemaps || {};
  Drupal.geolocationGooglemaps.maps = Drupal.geolocationGooglemaps.maps || {};
  Drupal.geolocationGooglemaps.markers = Drupal.geolocationGooglemaps.markers || {};

  Drupal.behaviors.geolocationGooglemapsDynamicFormatter = {

    attach : function(context, settings) {

      var fields = settings.geolocationGooglemaps.formatters;

      // Work on each map
      $.each(fields, function(instance, data) {
        var instanceSettings = data.settings;
        $.each(data.deltas, function(d, delta) {

          id = instance + "-" + d;

          // Only make this once ;)
          $("#geolocation-googlemaps-dynamic-" + id).once('geolocation-googlemaps-dynamic-formatter', function() {

            var map_type;
            var mapOptions;

            var lat = delta.lat;
            var lng = delta.lng;
            var latLng = new google.maps.LatLng(lat, lng);

            switch (instanceSettings.map_maptype) {
              case 'satellite':
                map_type = google.maps.MapTypeId.SATELLITE;
                break;

              case 'terrain':
                map_type = google.maps.MapTypeId.TERRAIN;
                break;

              case 'hybrid':
                map_type = google.maps.MapTypeId.HYBRID;
                break;

              default:
                map_type = google.maps.MapTypeId.ROADMAP;
                break;
            }

            // Create an array of styles. not from original module
            var styles = 
            [
              {
                "featureType": "landscape",
                "stylers": [
                  { "visibility": "simplified" },
                  { "color": "#ffffff" }
                ]
              },{
                "featureType": "poi",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
                "featureType": "road.local",
                "stylers": [
                  { "visibility": "simplified" },
                  { "color": "#929497" }
                ]
              },{
                "featureType": "road.highway",
                "stylers": [
                  { "color": "#666666" },
                  { "visibility": "simplified" }
                ]
              },{
                "featureType": "road.arterial",
                "stylers": [
                  { "visibility": "simplified" },
                  { "color": "#808080" }
                ]
              },{
                "featureType": "water",
                "stylers": [
                  { "visibility": "simplified" },
                  { "color": "#dbdcde" }
                ]
              },{
                "elementType": "labels.text.fill",
                "stylers": [
                  { "visibility": "on" },
                  { "color": "#333333" },
                  { "weight": 0.1 }
                ]
              },{
                "elementType": "labels.text.stroke",
                "stylers": [
                  { "visibility": "on" },
                  { "color": "#ffffff" },
                  { "weight": 6.6 }
                ]
              },{
                "featureType": "transit",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
              }
            ];            

            // Create a new StyledMapType object, passing it the array of styles,
            // as well as the name to be displayed on the map type control. not from original module
            var styledMap = new google.maps.StyledMapType(styles,
              {name: "Winterspring Map"});
            var markerIcon = "sites/all/themes/winterspringdesserts/gfx/icon-google-marker.png"

            mapOptions = {
              zoom : parseInt(instanceSettings.map_zoomlevel),
              center : latLng,

              // not from original module
              mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
              }
              // mapTypeId : map_type,
              // scrollwheel : instanceSettings.map_scrollwheel
            };

            // Create map
            Drupal.geolocationGooglemaps.maps[id] = new google.maps.Map(this, mapOptions);

            //Associate the styled map with the MapTypeId and set it to display. not from original module
            Drupal.geolocationGooglemaps.maps[id].mapTypes.set('map_style', styledMap);
            Drupal.geolocationGooglemaps.maps[id].setMapTypeId('map_style');


            // Create and place marker
            Drupal.geolocationGooglemaps.markers[id] = new google.maps.Marker({
              map : Drupal.geolocationGooglemaps.maps[id],
              draggable : false,
              animation: google.maps.Animation.DROP,
              icon : markerIcon,
              scrollwheel: false,
              position : latLng
            });
          });
        });
      });
    }
  };
}(jQuery));
