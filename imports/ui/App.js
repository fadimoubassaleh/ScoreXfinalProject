import React, { Component } from 'react';
import Header from './component/nav.js';
import MenuBox from './component/menuBox.js';
import CircleChart from './component/circleChart.js';
import BarChart from './component/barChart.js';
import MediaAnalytics from  './component-backup/mediaAnalytics.js';
import VideoBox from        './component-backup/videoBox.js';
import ProfileBlock from    './component-backup/profileBlock.js';
import WeekBlock from       './component-backup/weekBlock.js';
import TweetsBlock from     './component-backup/tweetsBlock.js';
import ShareBlock from      './component-backup/shareBlock.js';
import EmailSubscrib from   './component-backup/emailSubscrib.js';
import SignInForm from      './component-backup/signInForm.js';
import ProgresBar from      './component-backup/progresBar.js';
import DayCalendar from     './component-backup/dayCalendar.js';
import MonthCalendar from   './component-backup/monthCalendar.js';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Start from './Start.js'
// import RunGame from './runGame.js'
// import Others from './others.js'
// import 'semantic-ui-css/semantic.min.css';

export default class App extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>

        <div className="main-container">
          <Header />
          <div className="left-container container">
            <MenuBox />
            <CircleChart/>
            <BarChart/>
            <VideoBox/>
            <MediaAnalytics/>
          </div>

          <div className="middle-container container">
            <ProfileBlock/>
            <WeekBlock/>
            <TweetsBlock/>
            <ShareBlock/>
          </div>

          <div className="right-container container">
            <EmailSubscrib/>
            <SignInForm/>
            <ProgresBar/>
            <DayCalendar/>
            <MonthCalendar/>
          </div>
        </div>
      </div>
    )
  }
}