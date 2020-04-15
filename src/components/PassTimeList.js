import React from "react";
import Moment from "react-moment";

const PassTimeList = (props) => {
  const { duration, risetime } = props.result;
  return (
    <p>
      <b>Duration:</b> {duration} S <b>Rise Time: </b>
      <Moment unix format='MM/DD/YY HH:mm'>
        {risetime}
      </Moment>
    </p>
  );
};

export default PassTimeList;
