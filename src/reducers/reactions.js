import { REACTIONS_OBJECTS } from '../actions/types'

const REACTION_TYPES = REACTIONS_OBJECTS.map(
    REACTIONS_OBJECT => REACTIONS_OBJECT.type
);

const reactionsReducer = (state = {}, action) => {
    if(REACTION_TYPES.includes(action.type)) {
        const {messageId} = action.item;
        const messageReactions = state[messageId]

        if(messageReactions) {
            return {
                ...state,
                [messageId] : [...messageReactions, action.item]
            }
        }

        return { ...state, [messageId]: [action.item]}

    }

    return state;
}

export default reactionsReducer