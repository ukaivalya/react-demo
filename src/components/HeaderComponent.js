import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import Collapse from 'react-bootstrap/Collapse';
// import { Jumbotron, Input, Label } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert(
            'Username: ' +
                this.username.value +
                ' Password: ' +
                this.password.value +
                ' Remember: ' +
                this.remember.checked
        );
        event.preventDefault();
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
                            <Nav className='ml-auto' navbar>
                                <Nav.Item>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className='fa fa-sign-in fa-lg'></span>{' '}
                                        Login
                                    </Button>
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
                <Modal show={this.state.isModalOpen} onHide={this.toggleModal}>
                    <Modal.Header toggle={this.toggleModal}>Login</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleLogin}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type='username'
                                    placeholder='Enter username'
                                />
                                <Form.Text
                                    type='text'
                                    id='username'
                                    name='username'
                                    innerRef={(input) =>
                                        (this.username = input)
                                    }
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter password'
                                />
                                <Form.Text
                                    type='password'
                                    id='password'
                                    name='password'
                                    innerRef={(input) =>
                                        (this.password = input)
                                    }
                                />
                            </Form.Group>

                            <Form.Group check controlId='formBasicCheckbox'>
                                <Form.Label check>
                                    <Form.Check
                                        type='checkbox'
                                        innerRef={(input) =>
                                            (this.remember = input)
                                        }
                                    />
                                    Remember me
                                </Form.Label>
                            </Form.Group>
                            <Button
                                type='submit'
                                value='submit'
                                color='primary'>
                                Login
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
export default Header;
