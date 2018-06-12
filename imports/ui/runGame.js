import React, { Component } from 'react';
import '../styleSheets/profile-page.css';
import { Cookies } from 'meteor/ostrio:cookies';

import ScoresBox from './rungame-components/scoresBox.js'
import PlayerTable from './rungame-components/playersTable.js'
import './runGame.css'
import Popup from './extentions/pop-up'

const cookies = new Cookies();

const popupInfo = {
  open: false,
  header: "Save Your Game",
  content: "there is a game",
  contentRedButton: "Don't Save",
  contentGreenButton: "Save"
}
export default class App extends Component {
  constructor() {
    super()
    this.redFunction = this.redFunction.bind(this)
    this.greenFunction = this.greenFunction.bind(this)
    this.showPopupEndGame = this.showPopupEndGame.bind(this)
    this.state = {
      open: false,
      popupInfo: {
        header: "Save Your Game",
        content: "there is a game",
        contentRedButton: "Don't Save",
        contentGreenButton: "Save"
      },
      oldGames: false,
      unfinishedGame: false
    }
  }
  componentDidMount() {
    if (cookies.has('old-game')) {
      this.setState({ oldGames: true })
    }
    if (cookies.has('run-game')) {
      const popupInfo = {
        header: 'Uncompleted Game',
        content: "We find uncompleted game, do you want to complete it?",
        contentRedButton: "No",
        contentGreenButton: "Continue",
        red: {
          remove: { cookie: 'run-game' }
        },
        green: {
          runUnfinishedGame: true
        }
      }
      setTimeout(() => {
        this.setState({ open: true, popupInfo })
      }, 1500);
    }
  }
  showPopupEndGame() {
    if (this.state.oldGames) {
      const popupInfo = {
        header: 'Save Your Games',
        content: "We have an old game, You will lose them if you didn't save",
        contentRedButton: "Don't Save",
        contentGreenButton: "Save",
        red: false,
        green: false,
      }
      setTimeout(() => {
        this.setState({ open: true, popupInfo })
      }, 1500);
    } else {
      const popupInfo = {
        header: 'Save Your Game',
        content: "You can lose your game score if you didn't save",
        contentRedButton: "Don't Save",
        contentGreenButton: "Save",
        red: false,
        green: false,
      }
      setTimeout(() => {
        this.setState({ open: true, popupInfo })
      }, 1500);
    }
  }
  redFunction() {
    if (this.state.popupInfo.red) {
      if (this.state.popupInfo.red.remove){
        cookies.remove(this.state.popupInfo.red.remove.cookie)
      }
    }
    this.setState({ open: false })
  }
  greenFunction(){
    if(this.state.popupInfo.green){
      if (this.state.popupInfo.green.runUnfinishedGame){
        this.setState({unfinishedGame: cookies.get('run-game')})
      }
    }
    this.setState({ open: false })
  }
  renderPopup() {
    return <Popup
      open={this.state.open}
      header={this.state.popupInfo.header}
      content={this.state.popupInfo.content}
      contentRedButton={this.state.popupInfo.contentRedButton}
      contentGreenButton={this.state.popupInfo.contentGreenButton}
      contentRedFunction={this.redFunction}
      contentGreenFunction={this.greenFunction}
    />
  }

  render() {
    return (
      <div className='run-game'>
        {this.renderPopup()}
        <div className="run-main-container">
          <div className='first-run-container'>
            <PlayerTable />
            <ScoresBox endTheGamePopup={this.showPopupEndGame} unfinishedGame={this.state.unfinishedGame} />
          </div>
          <div className='second-run-container'>
          </div>
        </div>
      </div>
    )
  }
}