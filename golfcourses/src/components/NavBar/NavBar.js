import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginButton from "../LoginButton/LoginButton";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
        this.onLoginChange = this.onLoginChange.bind(this);
        this.renderAuth = this.renderAuth.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        const isLoggedIn = (sessionStorage.getItem('session')) ? true : false;
        this.setState({
            isLoggedIn: isLoggedIn,
        })
    }
    onLoginChange(e) {
        this.setState({
            isLoggedIn: e.target.value
        })
    }
    renderAuth() {
        const { isLoggedIn } = this.state;
        if (isLoggedIn) {
            return (
                <>
                    <Nav.Link href="/account">Account</Nav.Link>
                    <Nav.Link href="/" onClick={this.logout}>Logout</Nav.Link>
                </>

            );
        } else {
            return (
                <>
                    <LoginButton />
                </>
            );
        }
    }
    render() {
        return (

            // new and improved working NavBar
            <Navbar collapseOnSelect expand="lg" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">CourseBuddy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/search">Search</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>                          
                        {this.renderAuth()}            
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;