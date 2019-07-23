import {DirectLine } from 'botframework-directlinejs';
import React, {Component} from 'react';
import ReactWebChat from 'botframework-webchat';


class BotWebChat extends Component {
    constructor(props) {
        super(props);
        this.directLine = new DirectLine({
            token: 'L1SOy_0QAkE.wi9TzvfOJezpFp_sax7wF5tcESCKbI-w1SgoP2LwU5I'
        });
    }
    render() { 
        return (  
            <ReactWebChat
                directLine={ this.directLine }
                user={{id:'Jesus', name: 'Jesus Nunez'}}
                botAvatarInitials='FB'
                userAvatarInitials='JN'
                resize='detect'
                />
        );
    }
}
 
export default BotWebChat;