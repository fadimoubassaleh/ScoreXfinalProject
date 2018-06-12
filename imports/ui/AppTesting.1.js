import React, { Component } from 'react';
import './AppTesting.1.css';
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
      <div className='user-profile_1'>
        <div className="main-container_1">
          <div className='container_0'>
            <LastGames />
          </div>
          <div className='container_1'>
            <ProfileBlock />
            <BestPartner />
          </div>
          <div className='container_2'>
            <StartNewGame />
            <CircleChart />
          </div>
        </div>
      </div>
    )
  }
}