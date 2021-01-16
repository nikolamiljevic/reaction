import React from 'react'
import { useSelector } from 'react-redux'
import CreateReaction from './CreateReaction'

const MessageBoard = () => {
    const messages = useSelector(state => state.messages)

    return (
        <div>
            {
                messages.items.map(messageItem => {
                    const { id, text, timestamp, username } = messageItem;
                    return (
                        <div key={id}>
                            <h4>{new Date(timestamp).toLocaleDateString()}</h4>
                            <p>{text}</p>
                            <h4> - {username}</h4>
                            <CreateReaction messageId={id}/>
                            <hr/>
                        </div>
                    
                    )
                })
            }
        </div>
    )

}

export default MessageBoard