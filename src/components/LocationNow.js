import React, { Component } from "react";
import "../css/LocationNow.css";
import Moment from "react-moment";

class LocationNow extends Component {
  constructor() {
    super();
    this.state = {
      longitude: "",
      latitude: "",
      time: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json"
    )
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          longitude: response.iss_position.longitude,
          latitude: response.iss_position.latitude,
          time: response.timestamp,
        })
      );
  }

  render() {
    return (
      <div>
        <h2>Current Location</h2>
        <p className='location-data'>
          Longitude: {this.state.longitude} <br />
          Latitude: {this.state.latitude}
          <br />
          Time Loaded:{" "}
          <Moment unix format='MM/DD/YY HH:mm'>
            {this.state.time}
          </Moment>
          <br />
          Unix Time Stamp: {this.state.time}
        </p>
      </div>
    );
  }
}

export default LocationNow;
