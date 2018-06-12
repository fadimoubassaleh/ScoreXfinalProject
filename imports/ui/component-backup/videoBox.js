import React from 'react';

export default () =>
    <div className="media block">
        <div id="media-display">
            <a className="media-btn play" href="#23"><span className="fontawesome-play"></span></a>
        </div>
        <div className="media-control-bar">
            <a className="media-btn play" href="#23"><span className="fontawesome-play scnd-font-color"></span></a>
            <p className="time-passed">4:15 <span className="time-duration scnd-font-color">/ 9:23</span></p>
            <a className="media-btn volume" href="#24"><span className="fontawesome-volume-up scnd-font-color"></span></a>
            <a className="media-btn resize" href="#25"><span className="fontawesome-resize-full scnd-font-color"></span></a>
        </div>
    </div>