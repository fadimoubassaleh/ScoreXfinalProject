import React from 'react';
import PieChart from "react-svg-piechart"

export default class CircleChart extends React.Component {
    state = {
        data: [
            { title: "win", value: 60, color: "#11A8AB" },
            { title: "lose", value: 40, color: "#E64C65" },
        ],
        games: [
            { name: 'tarnib 41', winRating: '50' },
            { name: 'likha', winRating: '68' },
            { name: 'trex', winRating: '38' }
        ]
    }
    render() {
        return (
            <div className="donut-chart-block block">
                <h2 className="titular"><span className='win'>Win</span> / <span className='lose'>Lose</span> for All Games </h2>
                <div className="donut-chart">
                    <PieChart
                        data={this.state.data}
                        expandOnHover
                        onSectorHover={(d, i, e) => {
                            if (d) {
                                console.log("Mouse enter")
                            } else {
                                console.log("Mouse leave")
                            }
                        }
                        }
                        strokeColor='#394264'
                    />
                    <p className="center-date">Last<br /><span className="scnd-font-color">12</span><br />Months</p>
                </div>
                <ul className="os-percentages">
                    <li>
                        <p className="ios os scnd-font-color">{this.state.games[0].name}</p>
                        <p className="os-percentage">{this.state.games[0].winRating}<sup>%</sup></p>
                    </li>
                    <li>
                        <p className="mac os scnd-font-color">{this.state.games[1].name}</p>
                        <p className="os-percentage">{this.state.games[1].winRating}<sup>%</sup></p>
                    </li>
                    <li>
                        <p className="linux os scnd-font-color">{this.state.games[2].name}</p>
                        <p className="os-percentage">{this.state.games[2].winRating}<sup>%</sup></p>
                    </li>
                </ul>
            </div>
        )
    }
}