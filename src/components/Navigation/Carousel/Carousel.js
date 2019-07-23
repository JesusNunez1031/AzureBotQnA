import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../Content/Friend_Car1.jpg';
import slide2 from '../../../Content/Friends_Car2.jpeg';
import slide3 from '../../../Content/Friends_Car3.png';
import classes from './Carousel.module.css';



class CarouselComp extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;
        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>This is supposed to be the description of whatever this first slide is destined to do</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second Slide label</h3>
                        <p>This is supposed to be the description of whatever #2 is destined for</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>This is the FINAL slide and therefore the thing people will see last...on no</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        );
    }
}

export default CarouselComp;