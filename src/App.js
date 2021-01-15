import React, { Component } from 'react';
import PublishMessage from './components/PublishMessage';
import MessageBoard from './components/MessageBoard'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Reaction</h2>
        <hr/>
        <PublishMessage/>
        <hr/>
        <MessageBoard/>
      </div>

    );
  }
}

export default App;
