import React, {Component} from 'react';
import { connect } from 'react-redux';
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
        const { text } = this.state;
        const { username } = this.props;
        this.context.pubsub.publish(newMessage( {text, username} ))
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

const mapStateToProps = state => ({
    username: state.username
})

export default connect(mapStateToProps)(PublishMessage)
