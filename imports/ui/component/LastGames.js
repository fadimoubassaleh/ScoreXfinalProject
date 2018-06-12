import React from 'react'

export default class LastGames extends React.Component {
    constructor() {
        super()
        this.state = {
            games: [
                { date: { name: 'WEN', number: 26, month: 5 }, type: 'Tarnib', score: { high: 31, low: 28 }, win: true },
                { date: { name: 'FRI', number: 10, month: 5 }, type: 'Tarnib', score: { high: 37, low: -1 }, win: true },
                { date: { name: 'SUT', number: 28, month: 4 }, type: 'Tarnib', score: { high: 34, low: 14 }, win: false },
                { date: { name: 'SUN', number: 20, month: 4 }, type: 'Likha', score: { high: 39, low: 28 }, win: true },
                { date: { name: 'WEN', number: '06', month: 4 }, type: 'Tarnib', score: { high: 31, low: 16 }, win: false },
                { date: { name: 'WEN', number: 10, month: 3 }, type: 'trex', score: { high: 40, low: -15 }, win: false },
                { date: { name: 'WEN', number: '06', month: 3 }, type: 'Tarnib', score: { high: 38, low: 30 }, win: false },
            ]
        }
    }
    background_color(win, oldClass) {
        if (win) {
            return results = oldClass + ' green'
        } else {
            return results = oldClass + ' red'
        }
    }
    renderHeader() {
        if (this.state.games[0]) {
            return (
                <div className={this.background_color(this.state.games[0].win, "last-day")} >
                    <div>
                        <p className="last-day-type">{this.state.games[0].type}</p>
                        <p className="last-day-score">{this.state.games[0].score.high}/<span>{this.state.games[0].score.low}</span></p>
                    </div>
                    <p className="last-day-date">{this.state.games[0].date.name}<br />{this.state.games[0].date.number}</p>
                </div>
            )
        } else {
            return (
                <div className="last-day green no-games" >
                    <p className="last-day-score">There is no games yet</p>
                </div>
            )
        }
    }
    renderBody() {
        const games = this.state.games;
        if (games[1]) {
            let renderLI = []
            for (i = 1; i < games.length; i++) {
                renderLI.push(
                    <li>
                        <a>
                            <p className="next-days-date"><span className={this.background_color(this.state.games[i].win, "day")}>{games[i].date.name}</span> <span className="scnd-font-color">{games[i].date.number}/{games[i].date.month}</span></p>
                            <p className="next-days-temperature">{games[i].score.high}/<span>{games[i].score.low}</span></p>
                            <p className='type'>{games[i].type}<span></span></p>
                        </a>
                    </li>
                )
            }
            console.log(renderLI)
            return renderLI
        } else {
            return
        }
    }
    render() {
        return (
            <div className="last-game block clear">
                {this.renderHeader()}
                <ul className="next-games">
                    {this.renderBody()}
                </ul>
            </div>
        )
    }
}