import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {

  mapClicked(mapProps, map, clickEvent) {
  	console.log(mapProps)
  	console.log(clickEvent.latLng.lat())
  	console.log(clickEvent.latLng.lng())
  }


  render() {
    return (
      <Map google={this.props.google} zoom={14} onClick={this.mapClicked}>
		  <Marker
		    name={'Dolores park'}
		    position={{lat: 37.759703, lng: -122.428093}} 
		  />
      </Map>
    );
  }
}

export default GoogleApiWrapper( { apiKey: (process.env.REACT_APP_GOOGLE_MAPS_KEY) } )( MapContainer )