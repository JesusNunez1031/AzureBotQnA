import React, { Component } from 'react';
import { Chat, HeroCard } from '@progress/kendo-react-conversational-ui';
import { DirectLine } from 'botframework-directlinejs';
import './Bot.css';
//import * as AdaptiveCards from "AdaptiveCards";
import IntroCard from './IntroCard';
import user_avatar from '../../Content/user_avatar.png';

class Bot extends Component {

    constructor(props) {
        super(props);
        this.client = new DirectLine({
            secret: "your secret here"

        });
        this.client.activity$.subscribe(
            activity => this.onResponse(activity)
        );
        this.user = {
            id: 'User',
            name: "Jesus",
            avatarUrl: user_avatar
        };

        this.bot = {
            id: 'friendanv-bot',
            name: 'Friend Bot',
            avatarUrl: 'https://pbs.twimg.com/profile_images/1853664095/image.jpg',
        };
        this.attachments = [{
            content: 'Name of TV Episode 1',
            contentType: 'Episode'
        }, {
            content: 'Name of the TV Episode 2',
            contentType: 'Episode'
        }, {
            content: 'Name of the TV Episode 3',
            contentType: 'Episode'
        }];
        this.state = {
            messages: [
                {
                    author: this.bot,
                    suggestedActions: [
                        {
                            type: 'reply',
                            value: 'Hello!'
                        }, {
                            type: 'reply',
                            value: 'What can you do?'
                        }, {
                            title: 'Shop Friends',
                            value: 'https://www.wbshop.com/collections/friends',
                            type: 'openUrl'
                        }, 
                    ],
                    timestamp: new Date(),
                    text: "Hello there " + this.user.name + ", welcome to the Friends bot!",
                }
            ]
        };
        this.addNewMessage = this.addNewMessage.bind(this);
    }

    onAction = (event) => {
        if (event.action.type === 'alert') {
            this.setState((prevState) => {
                return {
                };
            });
        }
    }

    //[[[[[[[[[[[[[[[[[[[This code is for when the bot triggers the event for the use of a adaptive card]]]]]]]]]]]]]]]]
    // attachmentTemplate = (props) => {
    //     let attachment = props.item;
    //     if (attachment.contentType === "application/vnd.microsoft.card.hero") {
    //         return <HeroCard
    //             title={attachment.content.title || attachment.content.text}
    //             subtitle={attachment.content.subtitle}
    //             imageUrl={attachment.content.images ? attachment.content.images[0].url : ""}
    //             imageMaxWidth="300px"
    //             actions={attachment.content.buttons}
    //             onActionExecute={this.addNewMessage} />;
    //     }
    //     else if (attachment.contentType === "application/vnd.microsoft.card.adaptive") {
    //         //let adaptiveCard = new AdaptiveCards.AdaptiveCard();
    //         //adaptiveCard.parse(attachment.content);
    //         //let renderedCard = adaptiveCard.render();
    //         //let htmlToinsert = {__html: renderedCard.innerHTML};
    //         //return <div dangerouslySetInnerHTML={htmlToinsert} />;
    //     } else {
    //         return (
    //             <div className="k-card">
    //                 {attachment.content}
    //             </div>
    //         );
    //     }
    // }

    parseActions = (actions) => {
        if (actions !== undefined) {
            actions.actions.map(action => {
                if (action.type === 'imBack') {
                    action.type = 'reply';
                }
            });
            return actions.actions;
        }
        return [];
    }

    parseText = (event) => {
        if (event.actions !== undefined) {
            return event.action.value;
        } else if (event.value) {
            return event.value;
        } else {
            return event.message.text;
        }
    }

    onResponse = (activity) => {
        let newMsg;
        if (activity.from.id === this.bot.id) {
            newMsg = {
                text: activity.text,
                author: this.bot,
                typing: activity.type === "typing",
                timestamp: new Date(activity.timestamp),
                suggestedActions: this.parseActions(activity.suggestedActions),
                attachments: activity.attachment ? activity.attachment : []
            };

            this.setState((prevState) => {
                return { messages: [...prevState.messages, newMsg] };
            });
        }
    }

    addNewMessage = (event) => {
        let value = this.parseText(event);
        this.client.postActivity({
            from: { id: this.user.id, name: this.user.name },
            type: 'message',
            text: value
        }).subscribe(
            id => console.log("Posted activity, assigned ID ", id),
            error => console.log("Error posting activity", error)
        );
        if (!event.value) {
            this.setState((prevState) => {
                return { messages: [...prevState.messages, { author: this.user, text: value, timestamp: new Date() }] };
            });
        }
    };

    render() {
        return (
            <Chat
                messages={this.state.messages}
                user={this.user}
                onMessageSend={this.addNewMessage}
                placeholder={"Type a message..."}
            />
        );
    }
}

export default Bot;
