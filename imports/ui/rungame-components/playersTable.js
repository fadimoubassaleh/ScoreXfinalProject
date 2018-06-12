import React from 'react'
import { Icon, Popup, Grid, Button } from 'semantic-ui-react'
import FriendsInputSelect from '../extentions/friendsInputSelect'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './playersTable.css'

// import 'semantic-ui-css/semantic.min.css';

const people = [
    {
        first: 'Charlie',
        last: 'Brown',
        twitter: 'dancounsell'
    },
    {
        first: 'Charlotte',
        last: 'White',
        twitter: 'mtnmissy'
    },
    {
        first: 'Chloe',
        last: 'Jones',
        twitter: 'ladylexy'
    },
    {
        first: 'Cooper',
        last: 'King',
        twitter: 'steveodom'
    }
];
const peoplePhotos = [
    {
        first: 'Charlie',
        last: 'Brown',
        twitter: 'dancounsell',
        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg'
    },
    {
        first: 'Charlotte',
        last: 'White',
        twitter: 'mtnmissy',
        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/mtnmissy/128.jpg'
    },
    {
        first: 'Chloe',
        last: 'Jones',
        twitter: 'ladylexy',
        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        first: 'Cooper',
        last: 'King',
        twitter: 'steveodom',
        photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/steveodom/128.jpg'
    }
]


export default class PlayersTable extends React.Component {
    constructor(props) {
        super(props)
        this.player2Selected = this.player2Selected.bind(this)
        this.player3Selected = this.player3Selected.bind(this)
        this.player4Selected = this.player4Selected.bind(this)
        this.state = {
            copied: false,
            playersValues: {
                admin: false,
                player2: false,
                player3: false,
                player4: false,
            },
            players: {
                player2: { chosen: false, name: '' },
                player3: { chosen: false, name: 'Cooper' },
                player4: { chosen: false, name: '' },
            }
        }
    }
    onCopy = () => {
        this.setState({ copied: true });
    };
    player2Selected(value) {
        this.setState({
            playersValues: {
                admin: this.state.playersValues.admin,
                player2: value,
                player3: this.state.playersValues.player3,
                player4: this.state.playersValues.player4,
            }
        })
    }
    player3Selected(value) {
        this.setState({
            playersValues: {
                admin: this.state.playersValues.admin,
                player2: this.state.playersValues.player2,
                player3: value,
                player4: this.state.playersValues.player4,
            }
        })
    }
    player4Selected(value) {
        this.setState({
            playersValues: {
                admin: this.state.playersValues.admin,
                player2: this.state.playersValues.player2,
                player3: this.state.playersValues.player3,
                player4: value,
            }
        })
    }
    renderPlayer(number) {
        let player = false
        switch (number) {
            case 2: player = this.state.players.player2; break;
            case 3: player = this.state.players.player3; break;
            case 4: player = this.state.players.player4; break;
        }
        if (player.chosen) {
            return (
                <div className="player first">
                    <div className='profile-picture'>
                        <img src={peoplePhotos.find((people) => {
                            return people.first == player.name
                        }).photo} />
                    </div>
                    <div className='details'>
                        <a className='player-link' href='./profile'>{player.name}</a>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="player first">
                    <div className='addAfriend'>
                        <FriendsInputSelect people={people} selectedPlayer={this.player3Selected} />
                        <a onClick={() => console.log(this.state.players)}><i className='entypo-plus'></i></a>
                    </div>
                    <a className='anonymous-player'>set anonymous player</a>
                    <Popup trigger={
                        <div>
                            <CopyToClipboard text='hello'>
                                <a className='anonymous-player'>send the link to player</a>
                            </CopyToClipboard>
                        </div>
                    } content='Link copied to clipboard' on='click' hideOnScroll />
                </div>
            )
        }
    }
    render() {

        return (
            <div className='playersTable block clear'>
                <div className="players block" >
                    <h2 className="titular"><span className="icon maki-minefield"></span>ADMIN</h2>
                    <div className="player first">
                        <div className='profile-picture'>
                            <img src='http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg' />
                        </div>
                        <div className='details'>
                            <a className='player-link' href='./profile'>Anne Hathaway</a>
                        </div>
                    </div>
                </div >
                <div className="players block" >
                    <h2 className="titular">PLAYER 3</h2>
                    {this.renderPlayer(3)}
                </div >
                <div className="players block second" >
                    {this.renderPlayer(2)}
                    <h2 className="titular">PLAYER 2</h2>
                </div >
                <div className="players block second" >
                    {this.renderPlayer(4)}
                    <h2 className="titular">PLAYER 4</h2>
                </div >
                <div className='group1'><p>GROUP 1</p></div>
                <div className='group2'><p>GROUP 2</p></div>
            </div>
        )
    }
}