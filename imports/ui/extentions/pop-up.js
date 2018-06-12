import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import './pop-up.css';


export default class Popup extends React.Component {
    constructor(props){
        super(props)
        // PROPS:
        //      open
        //      header
        //      content
        //          clickRedFunction
        //          contentRedButton
        //      
        //          clickGreenFunction
        //          contentGreenButton
    }
    render() {
        return (
            <Modal size='tiny' open={this.props.open} >
                <Modal.Header><i className='fontawesome-bullhorn'></i>{this.props.header}</Modal.Header>
                <Modal.Content>
                    <p>{this.props.content}</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={()=>this.props.contentRedFunction()} ><i className='entypo-cancel'></i>{this.props.contentRedButton}</Button>
                    <Button positive onClick={()=>this.props.contentGreenFunction()}><i className='entypo-check'></i>{this.props.contentGreenButton}</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}