import PubNub from 'pubnub'
import pubnubConfig from './pubnub.config.json';
import { createContext } from 'react';

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL'


class PubSub {
    constructor() {
        this.pubnub = new PubNub(pubnubConfig)
        this.pubnub.subscribe({ channels: [MESSAGE_CHANNEL]})
    }

    addListener = (listenerConfig) => {
        this.pubnub.addListener(listenerConfig)
    }

    publish = message => {
        console.log('publish message',message);
        this.pubnub.publish({message, channel: MESSAGE_CHANNEL })
    }
}

export const PubSubContext = createContext();

export default PubSub


