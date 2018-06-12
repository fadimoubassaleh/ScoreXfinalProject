import React from 'react'
import './first-screen.css'
import { Link } from "react-router-dom";

export default class FirstScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            step: 1
        }
    }
    renderStep() {
        const step1 =
            <div className="start-buttom-game block">
                <h2 className="titular">START NEW GAME</h2>
                <a className="start-new-game button" onClick={()=>this.changeStep(2)}>Calculate <span>X</span></a>
            </div>
        const step2 =
            <div className="chose-game block">
                <h2 className="titular">CHOOSE YOUR GAME</h2>
                <a className="game-start button" onClick={()=>this.changeStep(3)}>Tarnib</a>
                <a className="game-start button" onClick={()=>this.changeStep(3)}>Trex</a>
                <a className="game-start button" onClick={()=>this.changeStep(3)}>Likha</a>
            </div>
        const step3 =
            <div className="game-type block">
                <h2 className="titular">TYPE OF YOUR GAME</h2>
                <Link className='types button' to="/rungame">GROUPS</Link>
                <Link className='types button' to="/rungame">SINGLE</Link>
                
                
            </div>
        if (this.state.step === 1) {
            return step1
        } else if (this.state.step === 2) {
            return step2
        } else if (this.state.step === 3) {
            return step3
        }
    }
    changeStep(step) {
        this.setState({ step })
    }
    render() {
        return (
            <div className='first-screen'>
                <div className='first-screen-main-container'>
                    {this.renderStep()}
                </div>
            </div>
        )
    }
}