import React, {Component} from 'react';
import {PubSubContext} from '../pubsub'
import { newMessage } from '../actions/messages'

class  PublishMessage extends React.Component {

   state = {
       text: ''
   }
   
   updateText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    publishMessage = (e) => {
        e.preventDefault();
        this.context.pubsub.publish(newMessage(this.state.text))
    }

    render (){
        console.log('this',this);
        return (
            <div>
                <h3>Got something to say?</h3>
                <input type="text" onChange={this.updateText}/>
                {' '}
                <button onClick={this.publishMessage}>Publish it</button>
            </div>
        )
    }
    static contextType = PubSubContext;
}

export default PublishMessage
