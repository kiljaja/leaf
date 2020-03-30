import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-maps-react'
import dataset from '../../../utilities/nyc-data-sets'
import Async from 'react-async';
import liveicon from './mainmarker.png'
import center from './center.png'
import InfoWindow from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const mapStyles = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]

class MapView extends Component {

  static defaultProps = {

    center: {
      lat: 40.739312,
      lng: -73.819562
    },
    zoom: 12
  };

  constructor(props) {
    super(props);
    this.state = {
      names: [],
      livelatitude: null,
      livelongitude: null,
    }
  }

  componentDidMount() {
    dataset.getDropInCenters().then(list => {

      this.setState({
        names:list
      });

    //  console.log(this.state)
    });

    navigator.geolocation.getCurrentPosition(
    position => {
      var crd = position.coords;

      this.setState({
        livelatitude: position.coords.latitude,
        livelongitude: position.coords.longitude
      });

      //console.log(this.state.livelatitude, this.state.livelongitude)
    },
    error => console.warn(`ERROR(${error.code}): ${error.message}`),
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  );

  }

renderMarkers(map, maps) {

  if(this.state.names.length !== 0) {

    var centerIMG = {
     url:center, // url
     scaledSize: new window.google.maps.Size(40, 40), // scaled size
   };
    this.state.names.map((item,i) => {
    let marker = new maps.Marker({
      position: {lat:parseFloat(this.state.names[i].latitude),
       lng:parseFloat(this.state.names[i].longitude)},
       map,
      title: this.state.names[i].name,
      icon:centerIMG,

      animation: maps.Animation.DROP
    });
    })

    //LIVE ICON & MARKER
    var logoIMG = {
     url:liveicon, // url
     scaledSize: new window.google.maps.Size(30, 40), // scaled size
   };

    let marker = new maps.Marker({
      position: {lat:parseFloat(this.state.livelatitude),
       lng:parseFloat(this.state.livelongitude)},
       map,
      title: "MY LOCATION",
      icon: logoIMG,
      animation: maps.Animation.DROP
    });

    marker.addListener('click', function() {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
  });

  }
}


  render() {
    if(this.state.names.length !== 0) {
      return (

        <div id = "GoogleMap" style={{ height: '500px', width: '100%' }}>

          <GoogleMapReact
            bootstrapURLKeys={{ key:"AIzaSyBztgrmtSAqAHkfV42Y81XaZb_2qDQCXbM"}}


            center={this.props.center}
            zoom={this.props.zoom}

            onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
            yesIWantToUseGoogleMapApiInternals
            options={{styles: mapStyles}}
          >
            {this.state.names.map((item,i) => <AnyReactComponent
            lat={this.state.names[i].latitude}
            lng={this.state.names[i].longitude}
            text={this.state.names[i].name}
            />)}
            <AnyReactComponent
            lat={this.state.livelatitude}
            lng={this.state.livelongitude}
            text={"YOU ARE HERE"}
            />

          </GoogleMapReact>
        </div>
      );
    } else {

      return ( //empty
      <div>
      </div>
    );

    }

  }
}

export default MapView;
