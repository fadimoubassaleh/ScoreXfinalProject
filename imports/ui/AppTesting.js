import React, { Component } from 'react';
import '../styleSheets/profile-page.css';
import ProfileBlock from './component/profileBlock.js';
import CircleChart from './component/circleChart.js';
import BestPartner from './component/bestPartner.js';
import LastGames from './component/LastGames.js';
import StartNewGame from './component/startNewGame.js';


export default class App extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className='user-profile'>
        <div className="main-container">
          <div className='first-container'>
            <ProfileBlock/>
            <BestPartner/>
            <CircleChart/>
          </div>
          <div className='second-container'>
            <StartNewGame/>
            <LastGames/>
          </div>
        </div>
      </div>
    )
  }
}