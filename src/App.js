import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import LocationNow from "./components/LocationNow";
import PassTimes from "./components/PassTimes";
import People from "./components/People";

function App() {
  return (
    <div className='App'>
      <h1> International Space Station Project</h1>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/location' component={LocationNow} />
        <Route exact path='/times' component={PassTimes} />
        <Route exact path='/people' component={People} />
      </Router>
    </div>
  );
}

export default App;
