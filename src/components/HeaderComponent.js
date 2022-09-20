import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    render() {
        return (
            <div>
                <Navbar expand='md'>
                    <Container>
                        <Navbar.Toggle onClick={this.toggleNav} />
                        <Navbar.Brand className='mr-auto' href='/'>
                            <img
                                src='assets/images/logo.png'
                                height='30'
                                width='41'
                                alt='Ristorante Con Fusion'
                            />
                        </Navbar.Brand>
                        <Navbar.Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <Nav.Item>
                                    <Nav.Link className='nav-link' href='/home'>
                                        <span className='fa fa-home fa-lg'></span>
                                        Home
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link
                                        className='nav-link'
                                        href='/aboutus'>
                                        <span className='fa fa-info fa-lg'></span>{' '}
                                        About Us
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link className='nav-link' href='/menu'>
                                        <span className='fa fa-list fa-lg'></span>{' '}
                                        Menu
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link
                                        className='nav-link'
                                        href='/contactus'>
                                        <span className='fa fa-address-card fa-lg'></span>{' '}
                                        Contact Us
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='jumbotron'>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Ristorante con Fusion</h1>
                                <p>
                                    We take inspiration from the World's best
                                    cuisines, and create a unique fusion
                                    experience. Our lipsmacking creations will
                                    tickle your culinary senses!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
