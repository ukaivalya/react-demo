import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

function RenderComments({ comment }) {
    return (
        <div className='container'>
            <Row>
                <Col className='col-md-5'>
                    <Card>
                        <Card.Body>
                            <Card.Title>{comment.rating}</Card.Title>
                            <Card.Text>{comment.yourname}</Card.Text>
                            <Card.Text>{comment.comment}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
const RenderComments = ({ comments }) => {
    const comment = comments.map((c) => {
        return (
            <ul className='list-unstyled'>
                <li>{c.rating}</li>
                <li>{c.yourname}</li>
                <li>{c.comment}</li>
            </ul>
        );
    });
    return comment;
};

export default function CommentComponent({ dish, comments }) {
    console.log(comments);
    if (dish != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to='/menu'>Menu</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{dish.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={dish} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderComments comments={comments} />
                    </div>
                    <CommentForm />
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
}
