import React from 'react';
import { Image } from 'semantic-ui-react';
import '../../styleSheets/bestPartner.css'

// const bestPartner =  { name: 'Jad Sarout', percentage='50'}

export default class BestPartner extends React.Component {
    state = {
        partnerName: 'Jad Sarout',
        partnerPercentage: '50'
    }
    render() {
        return (
            <div className="partners block" >
                <h2 className="titular"><span className="icon maki-minefield"></span>BEST PARTNER</h2>
                <div className="partner first">
                    <div className='profile-picture'>
                        <img src='./random.png' />
                    </div>
                    <div className='details'>
                        <a className='partner-link'>{this.state.partnerName}</a>
                        <p>win togather </p>
                        <div className='percentage'>
                            <div className="os-percentage">{this.state.partnerPercentage}<sup>%</sup></div>
                            <p>of there games</p>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}