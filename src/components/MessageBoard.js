import React from 'react'
import { useSelector } from 'react-redux'
import CreateReaction from './CreateReaction'

const MessageReactions = ({ messageReactions }) => {
    if(!messageReactions) return null;

    return (
        messageReactions.map((reaction,index) => {
            const { id, emoji, username} = reaction;
            return (
                <span key={id}>
                    <em>{username}:</em>
                    {emoji}
                    {index !== messageReactions.length - 1 ? ', ' : null}
                </span>
            )
        })
    )
}

const MessageBoard = () => {
    const messages = useSelector(state => state.messages)
    const reactions = useSelector(state => state.reactions)

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
                            <MessageReactions messageReactions= {reactions[id]} />
                            <hr/>
                        </div>
                    
                    )
                })
            }
        </div>
    )

}

export default MessageBoard