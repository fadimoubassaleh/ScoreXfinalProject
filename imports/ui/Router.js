import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App.js'
import AppTesting from './AppTesting.js'
import AppTesting_1 from './AppTesting.1.js'
import ImgTesting from './imgTesting.js'
import RunGame from './runGame.js'
import FirstScreen from './first-screen/first-screen'

export default () => (
    <Router>
      <div>
        <Route exact path="/" component={FirstScreen}/>
        <Route exact path="/template" component={App}/>
        <Route path="/profile" component={AppTesting}/>
        <Route path="/test" component={AppTesting_1}/>
        <Route path="/img" component={ImgTesting}/>
        <Route path="/rungame" component={RunGame}/>
      </div>
    </Router>
  
  );