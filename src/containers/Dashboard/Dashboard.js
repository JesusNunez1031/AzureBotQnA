import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import Bot from '../../components/Bot/Bot';
import BotWebChat from '../../components/Bot/BotWebChat';
import CarouselComp from '../../components/Navigation/Carousel/Carousel';
import { Jumbotron, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import FriendLogo from '../../Content/friends_logo.png';

class Dashboard extends Component {

    render() {

        const popover = (
            <Popover id="popover-basic" title="Friends 25th Year Running">
                Friends turns <strong>25</strong> this September... Thats alot of years!
            </Popover>
        );

        const AnniversaryButton = () => (
            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                <Button variant="danger" className={classes.AnvBt}>25th Anniversary!</Button>
            </OverlayTrigger>
        );

        return (
            <>
                <div className={classes.Car}>
                    <CarouselComp />
                </div>
                <div style={{ margin: "20px" }}>
                    <Jumbotron style={{ background: "white" }}>
                        <AnniversaryButton />
                        <p />
                        <h1>About Friends</h1>
                        <p>
                            This is a show about love and sex and careers and a time in life when everything is
                            possible... about the search for commitment and security... and the fear of commitment
                            and security. Most of all, it's about friendship--for when you're young and single in the city,
                            your friends are your family. With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow,
                            Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six friends in their 20s and 30s
                            who live in Manhattan, New York City.
                        </p>
                        <p>
                            <Button variant="outline-primary" size="lg">Learn more</Button>
                        </p>
                    </Jumbotron>
                </div>
                <div className={classes.Wrapper}>
                    <div className={classes.Box}>
                        <div className={classes.ImgCont}>
                            <img
                                src={FriendLogo}
                                alt="Friends"
                                className={classes.FLogo}
                            />
                        </div>
                        {/* <BotWebChat/> */}
                        <Bot />
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;

