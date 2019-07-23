import React, { Component } from 'react';
import {Navbar, Nav, Form, Button, FormControl, NavDropdown} from 'react-bootstrap';
import classes from './NavigationBar.module.css';
import WarnerBros from '../../../Content/WB_Logo.png';

class NavigationBar extends Component {
    render() {
        return (
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt="Warner"
                        src={WarnerBros}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />
                    {' Warner Bros.'}
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Features" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Bot</NavDropdown.Item>
                        <NavDropdown.Item href="action/3.2">Browse Episodes</NavDropdown.Item>
                        <NavDropdown.Item href="action/3.3">Friends Facts</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="https://www.wbshop.com/collections/friends">Shop</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-warning">Search</Button>
                </Form>
            </Navbar>
            </>
        );
    }
}

export default NavigationBar;