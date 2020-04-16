import React from "react";
import "../css/People.css";

const PeopleList = (props) => {
  const { name } = props.person;
  return <div className='people-list-item'>{name}</div>;
};

export default PeopleList;
