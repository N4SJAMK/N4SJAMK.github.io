$(window).load(function() {
    initialize();

    function initialize() {
        var myLatlng = new google.maps.LatLng(62.2416223, 25.7597309);
        var mapOptions = {
            center: myLatlng,
            zoom: 13,
            draggable: false,
            scrollwheel: false,
            disableDefaultUI: true,
            disableDoubleClickZoom: true,
            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "road",
                "stylers": [{
                    "hue": "#5e00ff"
                }, {
                    "saturation": -79
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "saturation": -78
                }, {
                    "hue": "#6600ff"
                }, {
                    "lightness": -47
                }, {
                    "visibility": "off"
                }]
            }, {
                "featureType": "road.local",
                "stylers": [{
                    "lightness": 40
                }, {
                    "saturation": -40
                }]
            }, {
                "featureType": "landscape",
                "stylers": [{
                    "hue": "#6600ff"
                }, {
                    "saturation":10
                }, {
                    "lightness": -10
                }]
            }, {}, {}, {
                "featureType": "water",
                "stylers": [{
                    "saturation": 20
                }, {
                    "hue": "#1900ff"
                }, {
                    "lightness": 40               }]
            }, {
                "featureType": "road.local",
                "stylers": [{
                    "weight": 1.3
                }, {
                    "lightness": 30
                }]
            }, {
                "featureType": "transit",
                "stylers": [{
                    "visibility": "simplified"
                }, {
                    "hue": "#5e00ff"
                }, {
                    "saturation": -16
                }]
            }, {
                "featureType": "transit.line",
                "stylers": [{
                    "saturation": -72
                }]
            }, {}]
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
            });
            
    $(window).scroll(function() {
	   
		$('#map-canvas').each(function(){
		
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		var windowHeight = $(window).height();
	
			if (imagePos < topOfWindow+windowHeight-30 && imagePos > topOfWindow+windowHeight-200) {
				marker.setAnimation(google.maps.Animation.DROP);
			}
		})
	});
      //center marker if screen size changes
        google.maps.event.addDomListener(window, "resize", function() {
 var center = map.getCenter();
 google.maps.event.trigger(map, "resize");
 map.setCenter(myLatlng); 
});
       
       //bounce animation when mouse is over map
        google.maps.event.addListener(map, 'mouseover', function() {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        });
        google.maps.event.addListener(map, 'mouseout', function() {
        marker.setAnimation(null);
        });
    }
    
   google.maps.event.addDomListener(window, 'load', initialize); 
});
