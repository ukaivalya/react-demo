import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { addComment } from '../redux/ActionCreators';

function RenderDish({ dish }) {
    return (
        <div className='container'>
            <Row>
                <Col className='col-md-5'>
                    <Card>
                        <Card.Img top src={dish.image} alt={dish.name} />
                        <Card.Body>
                            <Card.Title>{dish.name}</Card.Title>
                            <Card.Text>{dish.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
const RenderComments = ({ comments, addComment, dishId }) => {
    const comment = comments.map((c) => {
        return (
            <ul className='list-unstyled'>
                <li>{c.comment}</li>
                <li>
                    --{c.author},{' '}
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                    }).format(new Date(Date.parse(c.date)))}
                </li>
            </ul>
        );
    });
    return comment;
};

export default function DishDetail({ dish, comments }) {
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
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderComments
                            comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id}
                        />
                    </div>
                    <CommentForm dishId={dishId} addComment={addComment} />
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
}
