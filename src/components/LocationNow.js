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
    fetch("http://api.open-notify.org/iss-now.json")
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
        <h2>Location Now</h2>
        <p className='location-data'>
          <div>Longitude: {this.state.longitude}</div>
          <div>Latitude: {this.state.latitude}</div>
          <div>
            Time Loaded:{" "}
            <Moment unix format='MM/DD/YY HH:mm'>
              {this.state.time}
            </Moment>
          </div>
        </p>
      </div>
    );
  }
}

export default LocationNow;
