import React from 'react';

export default class ProfileBlock extends React.Component {
    state = {
        gamer: { 
            name: 'Anne Hathaway', 
            description: 'Lorem ipsum dolor sit amet consectetuer adipiscing', 
            photo: 'http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg',
            friends: '841', 
            games: '49' }
    }

    render() {
        return (
            <div className="profile block">
                <a className="add-button"><span className="icon entypo-plus scnd-font-color"></span></a>
                <div className="profile-picture big-profile-picture clear">
                    <img width="150px" alt="Anne Hathaway picture" src={this.state.gamer.photo} />
                </div>
                <h1 className="user-name">{this.state.gamer.name}</h1>
                <div className="profile-description">
                    <p className="scnd-font-color">{this.state.gamer.description}</p>
                </div>
                <ul className="profile-options">
                    <li><a className="views-friends" ><p title='Friends'><span className="icon entypo-users scnd-font-color"></span>{this.state.gamer.friends}</p></a></li>
                    <li><a className="views-games" ><p title='Games'><span className="icon maki-embassy scnd-font-color"></span>{this.state.gamer.games}</p></a></li>
                </ul>
            </div>
        )
    }
}