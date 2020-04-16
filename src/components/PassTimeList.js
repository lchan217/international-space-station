import React from "react";
import Moment from "react-moment";
import "../css/PassTimes.css";

const PassTimeList = (props) => {
  const { duration, risetime } = props.result;
  return (
    <div className='past-times-item'>
      <b>Duration:</b> {duration}s <br />
      <b>Rise Time: </b>
      <Moment unix format='MM/DD/YY HH:mm'>
        {risetime}
      </Moment>
    </div>
  );
};

export default PassTimeList;
