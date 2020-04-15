import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  return (
    <div className='home-page'>
      <h2>What Would You Like To See?</h2>
      <div className='home-button-group'>
        <Button className='home-button' primary as={Link} to='/location'>
          Location Now
        </Button>
        <Button className='home-button' primary as={Link} to='/times'>
          Pass Times
        </Button>
        <Button className='home-button' primary as={Link} to='/people'>
          People in Space
        </Button>
      </div>
    </div>
  );
};

export default Home;
