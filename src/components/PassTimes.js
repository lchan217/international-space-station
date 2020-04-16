import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import PassTimeList from "./PassTimeList";
import "../css/PassTimes.css";

class PassTimes extends Component {
  constructor() {
    super();
    this.state = {
      longitude: "",
      latitude: "",
      results: [],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  fetchData = (event) => {
    event.preventDefault();
    if (this.state.longitude === "" || this.state.latitude === "") {
      alert("Please try again! Longitude and latitude must be filled out");
    } else if (this.state.longitude < -180 || this.state.longitude > 180) {
      alert("Please try again! Longitude must be between -180 and 180");
    } else if (this.state.latitude < -80 || this.state.latitude > 80) {
      alert("Please try again! Latitude must be between -80 and 80");
    } else {
      let long = parseFloat(this.state.longitude).toFixed(1);
      let lat = parseFloat(this.state.latitude).toFixed(1);
      fetch(
        `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`
      )
        .then((response) => response.json())
        .then((response) =>
          this.setState({
            results: response.response,
          })
        )
        .catch(function() {
          alert("Internal service error - please try again");
        });
    }
  };

  render() {
    const { fetchData, handleChange } = this;
    const { longitude, latitude } = this.state;
    return (
      <div>
        <div className='form-wrapper'>
          <Form className='time-form'>
            <Form.Input
              label='Longitude'
              value={longitude}
              onChange={handleChange}
            >
              <input placeholder='Between -180 and 180' name='longitude' />
            </Form.Input>

            <Form.Input
              label='Latitude'
              value={latitude}
              onChange={handleChange}
            >
              <input placeholder='Between -80 and 80' name='latitude' />
            </Form.Input>

            <Button onClick={fetchData} type='submit'>
              Submit
            </Button>
          </Form>
        </div>
        <div className='pass-times-list'>
          {this.state.results.map((result, index) => {
            return <PassTimeList result={result} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default PassTimes;
