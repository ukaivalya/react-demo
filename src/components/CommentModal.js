// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import { Col, Row } from 'react-bootstrap';
// import { Control, LocalForm, Errors } from 'react-redux-form';

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !val || val.length <= len;
// const minLength = (len) => (val) => val && val.length >= len;

// function CommentModal() {
//     const [isShow, invokeModal] = React.useState(false);
//     const initModal = () => {
//         return invokeModal(!false);
//     };

//     // handleSubmit(values) {
//     //     console.log('Current State is: ' + JSON.stringify(values));
//     //     alert('Current State is: ' + JSON.stringify(values));
//     // }

//     return (
//         <>
//             <Button type='submit' value='submit' onClick={initModal}>
//                 Submit Comment
//             </Button>
//             <Modal show={isShow}>
//                 <Modal.Header closeButton onClick={initModal}>
//                     <Modal.Title>Submit Comment</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
//                         <Row className='form-group'>
//                             <Form.Label htmlFor='.rating' md={2}>
//                                 Rating
//                             </Form.Label>
//                             <Col md={10}>
//                                 <Control.text
//                                     required
//                                     model='.rating'
//                                     id='rating'
//                                     name='rating'
//                                     placeholder='Rating'
//                                     className='form-control'
//                                 />
//                             </Col>
//                         </Row>
//                         <Row className='form-group'>
//                             <Form.Label htmlFor='yourname' md={2}>
//                                 Your Name
//                             </Form.Label>
//                             <Col md={10}>
//                                 <Control.text
//                                     model='.yourname'
//                                     type='text'
//                                     id='yourname'
//                                     name='yourname'
//                                     placeholder='Your Name'
//                                     className='form-control'
//                                     validators={{
//                                         required,
//                                         minLength: minLength(3),
//                                         maxLength: maxLength(15),
//                                     }}
//                                 />
//                                 <Errors
//                                     className='text-danger'
//                                     model='.yourname'
//                                     show='touched'
//                                     messages={{
//                                         required: 'Required',
//                                         minLength:
//                                             'Must be greater than 2 characters',
//                                         maxLength:
//                                             'Must be 15 characters or less',
//                                     }}
//                                 />
//                             </Col>
//                         </Row>
//                         <Row className='form-group'>
//                             <Form.Label htmlFor='message' md={2}>
//                                 Comment
//                             </Form.Label>
//                             <Col md={10}>
//                                 <Control.textarea
//                                     model='.message'
//                                     id='message'
//                                     name='message'
//                                     rows='12'
//                                     className='form-control'
//                                 />
//                             </Col>
//                         </Row>
//                     </LocalForm>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Row className='form-group'>
//                         <Col md={{ size: 10, offset: 2 }}>
//                             <Button type='submit' color='primary'>
//                                 Submit
//                             </Button>
//                         </Col>
//                     </Row>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }
// export default CommentModal;
