import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			markers: []
			// lat: 0,
			// long: 0
		}

		this.mapClicked = this.mapClicked.bind(this);
	}


  mapClicked(mapProps, map, clickEvent) {
  	let newMarker = { lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng() };
  	// let state = this.state.markers.push(newMarker);
  	this.setState({
  		markers: [...this.state.markers, newMarker]
  	})

  	console.log(this.state)

  	// this.setState(prevState => {
  	// 	Object.assign(
  	// 		{},
  	// 		this.state,
  	// 		{ markers: [...prevState.markers, newMarker ] }
  	// 	  )
  	// 	})
  	// 	console.log(this.state)
  	// this.setState({
  	// 	lat: clickEvent.latLng.lat(),
  	// 	long: clickEvent.latLng.lng(),
  	// })
  }


  render() {
  	const markers = this.state.markers.map((marker, idx) => {
  		return <Marker name={idx} position={marker} />
  	})

    return (
      <Map google={this.props.google} zoom={14} onClick={this.mapClicked}>
			{markers}
		  <InfoWindow />
      </Map>
    );
  }
}

export default GoogleApiWrapper( { apiKey: (process.env.REACT_APP_GOOGLE_MAPS_KEY) } )( MapContainer )


	  // <Marker
		 //    name={'New Click'}
		 //    position={{lat: this.state.lat, lng: this.state.long}}
		 //  />