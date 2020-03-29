import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import dataset from '../../../utilities/nyc-data-sets'
import Async from 'react-async';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapView extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };



  render() {
    dataset.getFoodScrapDropOff().then(data => console.log(data));
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyBztgrmtSAqAHkfV42Y81XaZb_2qDQCXbM"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}


export default MapView;
