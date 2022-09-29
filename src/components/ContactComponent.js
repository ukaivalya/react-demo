import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
            },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    };

    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if (
            this.state.touched.email &&
            email.split('').filter((x) => x === '@').length !== 1
        )
            errors.email = 'Email should contain a @';

        return errors;
    }

    render() {
        const errors = this.validate(
            this.state.firstname,
            this.state.lastname,
            this.state.telnum,
            this.state.email
        );
        {
            console.log(errors);
        }
        return (
            <div className='container'>
                <div className='row row-content'>
                    <div className='row'>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to='/home'>Home</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='col-12'>
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                    <div className='col-sm-8'>
                        <h3>Location Information</h3>
                    </div>
                    <div className='col-12 col-sm-4 offset-sm-1'>
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road
                            <br />
                            Clear Water Bay, Kowloon
                            <br />
                            HONG KONG
                            <br />
                            <i className='fa fa-phone'></i>: +852 1234 5678
                            <br />
                            <i className='fa fa-fax'></i>: +852 8765 4321
                            <br />
                            <i className='fa fa-envelope'></i>:{' '}
                            <a href='mailto:confusion@food.net'>
                                confusion@food.net
                            </a>
                        </address>
                    </div>
                    <div className='col-12 col-sm-6 offset-sm-1'>
                        <h5>Map of our Location</h5>
                    </div>
                    <div className='col-12 col-sm-11 offset-sm-1'>
                        <div className='btn-group' role='group'>
                            <a
                                role='button'
                                className='btn btn-primary'
                                href='tel:+85212345678'>
                                <i className='fa fa-phone'></i> Call
                            </a>
                            <a role='button' className='btn btn-info'>
                                <i className='fa fa-skype'></i> Skype
                            </a>
                            <a
                                role='button'
                                className='btn btn-success'
                                href='mailto:confusion@food.net'>
                                <i className='fa fa-envelope-o'></i> Email
                            </a>
                        </div>
                    </div>
                </div>

                <div className='col-12'>
                    <h3>Send us your Feedback</h3>
                </div>
                <div className='col-12'>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group row>
                            <Form.Label htmlFor='firstname'>
                                First Name
                            </Form.Label>
                            <Col md={10} er={errors}>
                                <Form.Control
                                    required
                                    type='text'
                                    id='firstname'
                                    name='firstname'
                                    placeholder='First Name'
                                    value={this.state.firstname}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange}
                                    isInvalid={errors.firstname}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.firstname}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group row>
                            <Form.Label htmlFor='lastname' md={2}>
                                Last Name
                            </Form.Label>
                            <Col md={10}>
                                <Form.Control
                                    type='text'
                                    id='lastname'
                                    name='lastname'
                                    placeholder='Last Name'
                                    value={this.state.lastname}
                                    isInvalid={errors.lastname}
                                    onBlur={this.handleBlur('lastname')}
                                    onChange={this.handleInputChange}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.lastname}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group row>
                            <Form.Label htmlFor='telnum' md={2}>
                                Contact Tel.
                            </Form.Label>
                            <Col md={10}>
                                <Form.Control
                                    type='tel'
                                    id='telnum'
                                    name='telnum'
                                    placeholder='Tel. number'
                                    value={this.state.telnum}
                                    isInvalid={errors.telnum}
                                    onBlur={this.handleBlur('telnum')}
                                    onChange={this.handleInputChange}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.telnum}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group row>
                            <Form.Label htmlFor='email' md={2}>
                                Email
                            </Form.Label>
                            <Col md={10}>
                                <Form.Control
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                    value={this.state.email}
                                    isInvalid={errors.email}
                                    onBlur={this.handleBlur('email')}
                                    onChange={this.handleInputChange}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group className='row'>
                            <Col md={6}>
                                <Form.Check
                                    type='checkbox'
                                    name='agree'
                                    checked={this.state.agree}
                                    onChange={this.handleInputChange}
                                />
                                <Form.Label check>
                                    <strong>May we contact you?</strong>
                                </Form.Label>
                            </Col>
                            <Col md={6}>
                                <Form.Select
                                    type='select'
                                    name='contactType'
                                    value={this.state.contactType}
                                    onChange={this.handleInputChange}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group row>
                            <Form.Label htmlFor='message' md={2}>
                                Your Feedback
                            </Form.Label>
                            <Col md={10}>
                                <Form.Control
                                    type='textarea'
                                    id='message'
                                    name='message'
                                    rows='12'
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group row>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type='submit' color='primary'>
                                    Send Feedback
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Contact;
