import React from 'react'
import { useSelector } from 'react-redux'

const MessageBoard = () => {
    const messages = useSelector(state => state.messages)

    return (
        <div>
            {
                messages.items.map(messageItem => {
                    const { id, text, timestamp } = messageItem;
                    return (
                        <div key={id}>
                            <h4>{new Date(timestamp).toLocaleDateString()}</h4>
                            <p>{text}</p>
                            <hr/>
                        </div>
                    
                    )
                })
            }
        </div>
    )

}

export default MessageBoard