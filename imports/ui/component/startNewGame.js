import React from 'react'

export default class StartNewGame extends React.Component {
    constructor(){
        super()
        var today = new Date
        var dayNumber = today.getDate()
        var dayfully = today.getDay()

        if(dayfully == 0){
            dayfully = 'SUNDAY'
        }else if (dayfully == 1){
            dayfully = 'MONDAY'
        }else if (dayfully == 2){
            dayfully = 'TUESDAY'
        }else if (dayfully == 3){
            dayfully = 'WEDNESDAY'
        }else if (dayfully == 4){
            dayfully = 'THURSDAY'
        }else if (dayfully == 5){
            dayfully = 'FRIDAY'
        }else if (dayfully == 6){
            dayfully = 'SATURDAY'
        }
        this.state = {
            dayfully,
            dayNumber
        }
    }
    render() {
        return (
            <div className="calendar-day block">
                <div className="arrow-btn-container">
                    <h2 className="titular">{this.state.dayfully}</h2>
                </div>
                <p className="the-day">{this.state.dayNumber}</p>
                <a className="add-event button" href="./">START NEW GAME</a>
            </div>
        )
    }
}