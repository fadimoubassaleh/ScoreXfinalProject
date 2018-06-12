import React from 'react';

export default () =>
    <div className="menu-box block">
        <h2 className="titular">MENU BOX</h2>
        <ul className="menu-box-menu">
            <li>
                <a className="menu-box-tab" href="#6"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages<div className="menu-box-number">24</div></a>
            </li>
            <li>
                <a className="menu-box-tab" href="#8"><span className="icon entypo-paper-plane scnd-font-color"></span>Invites<div className="menu-box-number">3</div></a>
            </li>
            <li>
                <a className="menu-box-tab" href="#10"><span className="icon entypo-calendar scnd-font-color"></span>Events<div className="menu-box-number">5</div></a>
            </li>
            <li>
                <a className="menu-box-tab" href="#12"><span className="icon entypo-cog scnd-font-color"></span>Account Settings</a>
            </li>
            <li>
                <a className="menu-box-tab" href="#13"><span className="icon entypo-chart-line scnd-font-color"></span>Statistics</a>
            </li>
        </ul>
    </div>