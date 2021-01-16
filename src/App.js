import React, { Component } from 'react';
import PublishMessage from './components/PublishMessage';
import MessageBoard from './components/MessageBoard'
import SetUsername from './components/SetUsername'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Reaction</h2>
        <SetUsername/>
        <hr/>
        <PublishMessage/>
        <hr/>
        <MessageBoard/>
      </div>

    );
  }
}

export default App;
