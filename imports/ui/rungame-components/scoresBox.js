import React from 'react'
import CardTypes from '../extentions/cardTypes.js'
import './scoresBox.css'
import '../../API/cookies.js'
import { Cookies } from 'meteor/ostrio:cookies';
import { Flag } from 'semantic-ui-react';
const cookies = new Cookies();


export default class ScoreBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            generalScoreHeader: { g1: true, g2: false },

            ordering: { type: false, group: false, choice: '', run: false },
            roundResult: { win: '', score: '' },
            getUncompletedGameBefore: false,
            the_game: {
                general_info: {
                    type: 'Tarnib',
                    players: {
                        group1: { admin: 'fadi', player2: 'adam' },
                        group1: { player3: 'jad', player4: 'amer' }
                    },
                    final_scores: ''
                },
                rounds: [
                    { round: 0, choice: { group: '', number: 0, type: '' }, score: { g1: 0, g2: 0 }, win: true }
                ]
            },
            worningMessageInfo: { show: false, message: '' },
        }
    }
    componentDidUpdate() {
        if (this.props.unfinishedGame) {
            if (!this.state.getUncompletedGameBefore) {
                this.setState({ the_game: JSON.parse(this.props.unfinishedGame), getUncompletedGameBefore: true })
            }
        }
    }
    choiceClickHndler(e) {
        if (!isNaN(e.target.value)) {
            if (e.target.value < 14 || e.target.value === '') {
                this.setState({
                    ordering: { type: this.state.ordering.type, group: this.state.ordering.group, choice: e.target.value, run: this.state.ordering.run },
                    worningMessageInfo: { show: false, message: '' }
                })
            } else {
                this.setState({ worningMessageInfo: { show: true, message: 'You can chose only between 7 and 13' } })
            }
        } else {
            this.setState({ worningMessageInfo: { show: true, message: "You can input numbers only & between 7 and 13" } })
        }
    }
    groupClick(click, group, groupTester) {
        if (click) {
            this.setState({
                ordering: { type: this.state.ordering.type, group, choice: this.state.ordering.choice, run: this.state.ordering.run },
                worningMessageInfo: { show: false, message: '' }
            })
        } else {
            let renderClass
            if (this.state.ordering.group === groupTester) {
                renderClass = group + ' chosen'
            } else {
                renderClass = group
            }
            return renderClass
        }
    }
    typeClick(click, type, typeTester) {
        if (click) {
            this.setState({
                ordering: { type, group: this.state.ordering.group, choice: this.state.ordering.choice, run: this.state.ordering.run },
                worningMessageInfo: { show: false, message: '' }
            })
        } else {
            let renderClass
            if (this.state.ordering.type === typeTester) {
                renderClass = type + ' chosen'
            } else {
                renderClass = type
            }
            return renderClass
        }
    }
    winLoseButton(logic, win, oldClass) {
        if (logic === 'click') {
            this.setState({ roundResult: { win, score: this.state.roundResult.score } })
        } else if (logic === 'class') {
            if (win === this.state.roundResult.win) {
                const renderClass = oldClass + ' chosen'
                return renderClass
            } else {
                const renderClass = oldClass
                return renderClass
            }
        }
    }
    scoreClickHndler(e) {
        if (!isNaN(e.target.value)) {
            if ((e.target.value < 37 && e.target.value > 0) || e.target.value === '') {
                this.setState({
                    roundResult: { win: this.state.roundResult.win, score: e.target.value },
                    worningMessageInfo: { show: false, message: '' }
                })
            } else {
                this.setState({ worningMessageInfo: { show: true, message: "You can only put a nubmer between 1 and 36" } })
            }
        } else {
            this.setState({ worningMessageInfo: { show: true, message: "You can only put a nubmers in score field" } })
        }
    }
    background_color(win, oldClass) {
        if (win) {
            return results = oldClass + ' green'
        } else {
            return results = oldClass + ' red'
        }
    }
    renderBody() {
        let bodyList = this.state.the_game.rounds
        bodyList = bodyList.map((r, key) =>
            <li key={key}>
                <a className='list-body'>
                    <p className="round"><span className='day red' className={this.classForRoundInBody(r.win, 'day')}>round</span> <span className="scnd-font-color">{r.round}</span></p>
                    <p className='choice'>{r.choice.group}<span>{r.choice.number}</span><CardTypes type={r.choice.type} /></p>
                    <p className="score">{r.score.g1}/<span>{r.score.g2}</span></p>
                </a>
            </li>
        )
        return bodyList
    }
    renderHeader() {
        const holding =
            <div className='startRound'>
                <div className='choice start'>
                    <a className="" onClick={() => this.runRound()}>RUN</a>
                    <input type="text" placeholder="Choice" onChange={(e) => this.choiceClickHndler(e)} value={this.state.ordering.choice} />
                </div>
                <div className='groups'>
                    <a onClick={() => this.groupClick(true, 'group1')} className={this.groupClick(false, '', 'group1')}>Group1</a>
                    <a onClick={() => this.groupClick(true, 'group2')} className={this.groupClick(false, '', 'group2')}>Group2</a>
                </div>
                <ul>
                    <li>
                        <a onClick={() => this.typeClick(true, 'spades')} className={this.typeClick(false, 'black', 'spades')}><p className=""><CardTypes type='spades' /></p></a>
                    </li>
                    <li>
                        <a onClick={() => this.typeClick(true, 'clover')} className={this.typeClick(false, 'black', 'clover')}><p className=""><CardTypes type='clover' /></p></a>
                    </li>
                    <li>
                        <a onClick={() => this.typeClick(true, 'shapes')} className={this.typeClick(false, 'red', 'shapes')}><p className=""><CardTypes type='shapes' /></p></a>
                    </li>
                    <li>
                        <a onClick={() => this.typeClick(true, 'heart')} className={this.typeClick(false, 'red', 'heart')}><p className=""><CardTypes type='heart' /></p></a>
                    </li>
                </ul>
            </div>

        const running =
            <div className='runRound'>
                <p className='choice'>{this.state.ordering.group}<span className='number'>{this.state.ordering.choice}</span><CardTypes type={this.state.ordering.type} /></p>
                <div>
                    <a className={this.winLoseButton('class', true, 'win')} onClick={() => this.winLoseButton('click', true)}>WIN</a>
                    <a className={this.winLoseButton('class', false, 'lose')} onClick={() => this.winLoseButton('click', false)}>LOSE</a>
                    <input autoFocus type="text" placeholder="score" onChange={(e) => this.scoreClickHndler(e)} value={this.state.roundResult.score} />
                    <a className="done " onClick={() => this.endRound()}>DONE</a>
                </div>
            </div>
        const theEnd =
            <div className='theEnd'>
                <p>Congratulations for the winer</p>
                <a className="">Play again</a>
            </div>
        const group1Score = this.state.the_game.rounds[0].score.g1
        const group2Score = this.state.the_game.rounds[0].score.g2

        if (group1Score > 30 || group2Score > 30) {
            if (!this.state.the_game.general_info.final_scores.finish) {
                const final_scores = { group1: group1Score, group2: group2Score, winner: this.state.the_game.general_info.final_scores.winner, finish: true }
                this.setState({
                    the_game: {
                        general_info: {
                            type: this.state.the_game.general_info.type,
                            players: this.state.the_game.general_info.players,
                            final_scores: final_scores
                        },
                        rounds: this.state.the_game.rounds
                    }
                })
                this.props.endTheGamePopup()
                cookies.set('old-game', JSON.stringify(this.state.the_game), { maxAge: 31536e3 })
                cookies.remove('run-game')
            }
            return theEnd
        } else {
            if (this.state.ordering.run) {
                return running
            } else {
                return holding
            }
        }
    }
    classForRoundInBody(win, oldClass) {
        if (win) {
            const newClass = oldClass + ' green'
            return newClass
        } else {
            const newClass = oldClass + ' red'
            return newClass
        }
    }
    classForWinnerGeneralScore(winner) {
        if (winner) {
            return 'winner'
        } else {
            return
        }
    }
    renderGeneralScore() {
        let bodyList_1 = this.state.the_game.rounds
        return (
            <div>
                <p className="last-day-type">{this.state.the_game.general_info.type}</p>
                <p className="last-day-score"><span className={this.classForWinnerGeneralScore(this.state.generalScoreHeader.g1)}>{bodyList_1[0].score.g1}</span>/<span className={this.classForWinnerGeneralScore(this.state.generalScoreHeader.g2)}>{bodyList_1[0].score.g2}</span></p>
            </div>
        )
    }
    worningMessage() {
        if (this.state.worningMessageInfo.show) {
            return (
                <div className='worning-message'><i className='fontawesome-exclamation-sign'></i>{this.state.worningMessageInfo.message}</div>
            )
        } else {
            return
        }
    }
    runRound() {
        const ordering = this.state.ordering
        if (ordering.choice && ordering.choice > 6) {
            if (ordering.type) {
                if (ordering.group) {
                    this.setState({
                        worningMessageInfo: { show: false, message: '' },
                        ordering: { type: this.state.ordering.type, group: this.state.ordering.group, choice: this.state.ordering.choice, run: true },
                    })
                } else {
                    this.setState({ worningMessageInfo: { show: true, message: 'Please chose the group' } })
                }
            } else {
                this.setState({ worningMessageInfo: { show: true, message: 'Please chose the type and group' } })
            }
        } else {
            this.setState({ worningMessageInfo: { show: true, message: 'Please put your choice between 7 and 13' } })
        }
    }
    endRound() {
        const roundResult = this.state.roundResult
        if (roundResult.win === '') {
            this.setState({ worningMessageInfo: { show: true, message: 'please put if the group win or lose' } })
        } else {
            if (roundResult.win) {
                if (parseInt(roundResult.score) >= parseInt(this.state.ordering.choice)) {
                    // all checkes are true
                    this.setState({ worningMessageInfo: { show: false, message: '' } })
                    // prepare and add new round to the list in state
                    const round = this.state.the_game.rounds[0].round + 1
                    const choice = { group: this.state.ordering.group, number: this.state.ordering.choice, type: this.state.ordering.type }
                    let score = ''
                    if (this.state.ordering.group === 'group1') {
                        score = { g1: (parseInt(this.state.the_game.rounds[0].score.g1) + parseInt(roundResult.score)), g2: this.state.the_game.rounds[0].score.g2 }
                    } else if (this.state.ordering.group === 'group2') {
                        score = { g1: this.state.the_game.rounds[0].score.g1, g2: (parseInt(this.state.the_game.rounds[0].score.g2) + parseInt(roundResult.score)) }
                    }
                    const lastRound = { round, choice, score, win: true }
                    let newRoundsList = this.state.the_game.rounds
                    newRoundsList.unshift(lastRound) // add the new round above of the list
                    // prepare for general_info 
                    let winner = ''
                    if (parseInt(lastRound.score.g1) < parseInt(lastRound.score.g2)) {
                        winner = 'group2'
                        this.setState({ generalScoreHeader: { g1: false, g2: true } })
                    } else {
                        winner = 'group1'
                        this.setState({ generalScoreHeader: { g1: true, g2: false } })
                    }
                    let general_info = {
                        type: this.state.the_game.general_info.type,
                        players: this.state.the_game.general_info.players,
                        final_scores: { group1: lastRound.score.g1, group2: lastRound.score.g2, winner }
                    }
                    // add the 2 parts to the_game in state
                    this.setState({
                        the_game: { general_info: general_info, rounds: newRoundsList },
                        worningMessageInfo: { show: false, message: '' },
                        ordering: { type: false, group: false, choice: '', run: false },
                        roundResult: { win: '', score: '' }
                    })
                    cookies.set('run-game', JSON.stringify(this.state.the_game), { maxAge: 86400 })
                } else {
                    const test = roundResult.score + this.state.ordering.choice
                    this.setState({ worningMessageInfo: { show: true, message: `You can't win if your score less than your choice` } })
                }
            } else {
                if (roundResult.score && parseInt(roundResult.score) > 0) {
                    this.setState({ worningMessageInfo: { show: false, message: '' } })
                    // prepare and add new round to the list in state
                    const round = this.state.the_game.rounds[0].round + 1
                    const choice = { group: this.state.ordering.group, number: this.state.ordering.choice, type: this.state.ordering.type }
                    let score = ''
                    if (this.state.ordering.group === 'group1') {
                        score = { g1: (parseInt(this.state.the_game.rounds[0].score.g1) - parseInt(choice.number)), g2: this.state.the_game.rounds[0].score.g2 + parseInt(roundResult.score) }
                    } else if (this.state.ordering.group === 'group2') {
                        score = { g1: (parseInt(this.state.the_game.rounds[0].score.g1) + parseInt(roundResult.score)), g2: this.state.the_game.rounds[0].score.g2 - parseInt(choice.number) }
                    }
                    const lastRound = { round, choice, score, win: false }
                    let newRoundsList = this.state.the_game.rounds
                    newRoundsList.unshift(lastRound) // add the new round above of the list
                    // prepare for general_info 
                    let winner = ''
                    if (parseInt(lastRound.score.g1) < parseInt(lastRound.score.g2)) {
                        winner = 'group2'
                    } else {
                        winner = 'group1'
                    }
                    let general_info = {
                        type: this.state.the_game.general_info.type,
                        players: this.state.the_game.general_info.players,
                        final_scores: { group1: lastRound.score.g1, group2: lastRound.score.g2, winner }
                    }
                    // add the 2 parts to the_game in state
                    this.setState({
                        the_game: { general_info: general_info, rounds: newRoundsList },
                        worningMessageInfo: { show: false, message: '' },
                        ordering: { type: false, group: false, choice: '', run: false },
                        roundResult: { win: '', score: '' }
                    })
                    cookies.set('run-game', JSON.stringify(this.state.the_game), { maxAge: 86400 })
                } else {
                    this.setState({ worningMessageInfo: { show: true, message: 'please put the score between 1 and 36' } })
                }
            }
        }
    }
    render() {
        return (
            <div className="scores-box block clear">
                {this.worningMessage()}
                <div className="header-box" >
                    {this.renderGeneralScore()}
                    {this.renderHeader()}
                </div>
                <ul className="next-games">
                    <li>
                        <a className='list-header yellow-back'>
                            <p className="list-header-1"><span className='day red'>ROUNDS</span> <span className="scnd-font-color"></span></p>
                            <p className="list-header-2">CHOICE<span></span></p>
                            <p className='list-header-3'>Group1/Group2<span></span></p>
                        </a>
                    </li>
                    {this.renderBody()}
                </ul>
            </div>
        )
    }
}