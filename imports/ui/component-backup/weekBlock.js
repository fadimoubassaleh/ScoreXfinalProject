import React from 'react'

export default () =>
    <div className="weather block clear">
        <h2 className="titular"><span className="icon entypo-location"></span><strong>CLUJ-NAPOCA</strong>/RO</h2>
        <div className="current-day">
            <p className="current-day-date">FRI 29/06</p>
            <p className="current-day-temperature">24º<span className="icon-cloudy"></span></p>
        </div>
        <ul className="next-days">
            <li>
                <a href="#43">
                    <p className="next-days-date"><span className="day">SAT</span> <span className="scnd-font-color">29/06</span></p>
                    <p className="next-days-temperature">25º<span className="icon icon-cloudy scnd-font-color"></span></p>
                </a>
            </li>
            <li>
                <a href="#44">
                    <p className="next-days-date"><span className="day">SUN</span> <span className="scnd-font-color">30/06</span></p>
                    <p className="next-days-temperature">22º<span className="icon icon-cloudy2 scnd-font-color"></span></p>
                </a>
            </li>
            <li>
                <a href="#45">
                    <p className="next-days-date"><span className="day">MON</span> <span className="scnd-font-color">01/07</span></p>
                    <p className="next-days-temperature">24º<span className="icon icon-cloudy2 scnd-font-color"></span></p>
                </a>
            </li>
            <li>
                <a href="#46">
                    <p className="next-days-date"><span className="day">TUE</span> <span className="scnd-font-color">02/07</span></p>
                    <p className="next-days-temperature">26º<span className="icon icon-cloudy scnd-font-color"></span></p>
                </a>
            </li>
            <li>
                <a href="">
                    <p className="next-days-date"><span className="day">WED</span> <span className="scnd-font-color">03/07</span></p>
                    <p className="next-days-temperature">27º<span className="icon icon-sun scnd-font-color"></span></p>
                </a>
            </li>
            <li>
                <a href="">
                    <p className="next-days-date"><span className="day">THU</span> <span className="scnd-font-color">04/07</span></p>
                    <p className="next-days-temperature">29º<span className="icon icon-sun scnd-font-color"></span></p>
                </a>
            </li>
        </ul>
    </div>