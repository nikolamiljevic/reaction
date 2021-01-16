import React, { Component } from 'react'
import { REACTIONS_OBJECTS } from '../actions/types';
import  {createReaction} from '../actions/reactions'
import { PubSubContext } from '../pubsub'
import { connect } from 'react-redux'

class CreateReaction extends Component {
    
    publishReaction = ({ type, emoji }) => {
        const { username, messageId } = this.props;
        this.context.pubsub.publish(createReaction({ type, emoji, username, messageId }));
    }

    render() { 
        return ( 
            <div>
                {
                    REACTIONS_OBJECTS.map(REACTION_OBJECT => {
                        const { type, emoji } = REACTION_OBJECT;

                        return <span 
                            key={type} 
                            style={{margin:5,cursor:'pointer'}}
                            onClick={() => this.publishReaction({type,emoji})}
                        >
                           {emoji}
                        </span>
                    })
                }
            </div>
        );
    }

    static contextType = PubSubContext;
}

const mapStateToProps = state => ({
    username: state.username
})
 
export default connect(mapStateToProps)(CreateReaction);