import React from 'react'

export default () =>
    <header className="block">
        <ul className="header-menu horizontal-list">
            <li>
                <a className="header-menu-tab" href="#1"><span className="icon entypo-cog scnd-font-color"></span>Settings</a>
            </li>
            <li>
                <a className="header-menu-tab" href="#2"><span className="icon fontawesome-user scnd-font-color"></span>Account</a>
            </li>
            <li>
                <a className="header-menu-tab" href="#3"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages</a>
                <a className="header-menu-number" href="#4">5</a>
            </li>
            <li>
                <a className="header-menu-tab" href="#5"><span className="icon fontawesome-star-empty scnd-font-color"></span>Favorites</a>
            </li>
        </ul>
        <div className="profile-menu">
            <p>Me <a href="#26"><span className="entypo-down-open scnd-font-color"></span></a></p>
            <div className="profile-picture small-profile-picture">
                <img width="40px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg" />
            </div>
        </div>
    </header>