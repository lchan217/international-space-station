import React, { Component } from "react";
import PeopleList from "./PeopleList";

class People extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
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
        });
      });
  }
  render() {
    return (
      <div className='people-list'>
        {this.state.people.map((person) => {
          return <PeopleList person={person} />;
        })}
      </div>
    );
  }
}

export default People;
