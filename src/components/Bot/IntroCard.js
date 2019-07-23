import React, { Component } from 'react';
import AdaptiveCard from 'adaptivecards';


//Created card 
var card = {
        "type": "AdaptiveCard",
        "body": [
            {
                "type": "TextBlock",
                "size": "Medium",
                "weight": "Bolder",
                "text": "Friends Bot"
            },
            {
                "type": "Image",
                "url": "http://freelogovectors.net/photo4/friends-logo.jpg",
                "size": "Large",
                "spacing": "None",
                "horizontalAlignment": "Center"
            },
            {
                "type": "RichTextBlock",
                "inlines": [
                    {
                        "type": "TextRun",
                        "text": "Welcome to the Friends Bot! I can help by looking for desired episodes or just ask me some simple questions about the show."
                    }
                ]
            },
            {
                "type": "ActionSet",
                "actions": [
                    {
                        "type": "Action.Submit",
                        "title": "Trivia",
                        "style": "destructive"
                    },
                    {
                        "type": "Action.Submit",
                        "title": "QnA",
                        "style": "positive"
                    }
                ]
            }
        ],
        "actions": [
            {
                "type": "Action.OpenUrl",
                "title": "Watch",
                "url": "http://adaptivecards.io",
                "style": "positive"
            }
        ],
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.0"
}


class IntroCard extends Component {
    render() { 
        return (  
            <AdaptiveCard payload={card}/>
        );
    }
}
 
export default IntroCard;