import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class PassTimes extends Component {
  constructor() {
    super();
    this.state = {
      longitude: "",
      latitude: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  fetchData = (event) => {
    event.preventDefault();
    let long = parseFloat(this.state.longitude).toFixed(1);

    let lat = parseFloat(this.state.latitude).toFixed(1);

    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
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
            <input placeholder='Between -80 and 80' name='longitude' />
          </Form.Input>

          <Form.Input label='Latitude' value={latitude} onChange={handleChange}>
            <input placeholder='Between -180 and 180' name='latitude' />
          </Form.Input>

          <Button onClick={fetchData} type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default PassTimes;
