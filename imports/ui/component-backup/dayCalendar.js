import React from 'react'

export default () =>
    <div className="calendar-day block">
        <div className="arrow-btn-container">
            <a className="arrow-btn left" href="#200"><span className="icon fontawesome-angle-left"></span></a>
            <h2 className="titular">WEDNESDAY</h2>
            <a className="arrow-btn right" href="#201"><span className="icon fontawesome-angle-right"></span></a>
        </div>
        <p className="the-day">26</p>
        <a className="add-event button" href="#27">ADD EVENT</a>
    </div>