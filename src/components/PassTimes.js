import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import PassTimeList from "./PassTimeList";

class PassTimes extends Component {
  constructor() {
    super();
    this.state = {
      longitude: "",
      latitude: "",
      results: [],
      showList: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  fetchData = (event) => {
    event.preventDefault();
    if (this.state.longitude < -180 || this.state.longitude > 180) {
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
            showList: true,
          })
        )
        .catch(function() {
          alert("Internal service error - please try again");
        });
    }
  };

  showList = () => {
    if (this.state.showList) {
      return this.state.results.map((result, index) => (
        <PassTimeList result={result} key={index} />
      ));
    }
  };
  render() {
    const { fetchData, handleChange } = this;
    const { longitude, latitude } = this.state;
    return (
      <div>
        <Form>
          <Form.Input
            label='Longitude'
            value={longitude}
            onChange={handleChange}
          >
            <input placeholder='Between -180 and 180' name='longitude' />
          </Form.Input>

          <Form.Input label='Latitude' value={latitude} onChange={handleChange}>
            <input placeholder='Between -80 and 80' name='latitude' />
          </Form.Input>

          <Button onClick={fetchData} type='submit'>
            Submit
          </Button>
        </Form>
        {this.showList()}
      </div>
    );
  }
}

export default PassTimes;
