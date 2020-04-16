import React, { Component } from "react";
import PeopleList from "./PeopleList";
import { Dimmer, Loader } from "semantic-ui-react";

class People extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch(
      "https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json"
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          people: response.people,
          isLoading: false,
        });
      });
  }
  render() {
    let data;
    if (this.state.isLoading) {
      data = (
        <Dimmer active inverted>
          <Loader inline='centered'>Loading</Loader>
        </Dimmer>
      );
    } else {
      data = (
        <div>
          {this.state.people.map((person) => {
            return <PeopleList person={person} />;
          })}
        </div>
      );
    }
    return <div className='people-list'>{data}</div>;
  }
}

export default People;
