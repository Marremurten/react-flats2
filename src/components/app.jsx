import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


import Flatlist from './flatlist.jsx';
import Marker from './marker'
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

 selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  };

  render(){
    return(
      <div>
        <Flatlist
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />


      </div>



    );
  }

}

export default App;
