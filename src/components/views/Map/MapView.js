import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-maps-react'
import dataset from '../../../utilities/nyc-data-sets'
import Async from 'react-async';
import pngss from './mainmarker.png'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapView extends Component {

  static defaultProps = {
    center: {
      lat: 40.7128,
      lng: -73.93
    },
    zoom: 11
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


    this.state.names.map((item,i) => {
    let marker = new maps.Marker({
      position: {lat:parseFloat(this.state.names[i].latitude),
       lng:parseFloat(this.state.names[i].longitude)},
       map,
      title: this.state.names[i].name,
    });
    })

    //LIVE ICON & MARKER
    var logoIMG = {
     url:pngss, // url
     scaledSize: new window.google.maps.Size(30, 40), // scaled size
   };

    let marker = new maps.Marker({
      position: {lat:parseFloat(this.state.livelatitude),
       lng:parseFloat(this.state.livelongitude)},
       map,
      title: "MY LOCATION",
      icon: logoIMG
    });

  }
}


  render() {
    if(this.state.names.length !== 0) {
      return (

        <div id = "GoogleMap" style={{ height: '500px', width: '100%' }}>

          <GoogleMapReact
            bootstrapURLKeys={{ key:"AIzaSyBztgrmtSAqAHkfV42Y81XaZb_2qDQCXbM"}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
            yesIWantToUseGoogleMapApiInternals
          >

            {this.state.names.map((item,i) => <AnyReactComponent
            lat={this.state.names[i].latitude}
            lng={this.state.names[i].longitude}
            text={this.state.names[i].name}
            />)}

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
