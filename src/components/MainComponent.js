import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    };
};

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) =>
        dispatch(addComment(dishId, rating, author, comment)),
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    getSelectedDishDetails() {
        return this.state.dishes.filter(
            (dish) => dish.id === this.state.selectedDish
        )[0];
    }

    render() {
        const HomePage = () => {
            return (
                // <Home
                //     dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                //     promotion={
                //         this.state.promotions.filter(
                //             (promo) => promo.featured
                //         )[0]
                //     }
                //     leader={
                //         this.state.leaders.filter(
                //             (leader) => leader.featured
                //         )[0]
                //     }
                // />
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={
                        this.props.promotions.filter(
                            (promo) => promo.featured
                        )[0]
                    }
                    leader={
                        this.props.leaders.filter(
                            (leader) => leader.featured
                        )[0]
                    }
                />
            );
        };

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={
                        this.props.dishes.filter(
                            (dish) =>
                                dish.id === parseInt(match.params.dishId, 10)
                        )[0]
                    }
                    comments={this.props.comments.filter(
                        (comment) =>
                            comment.dishId === parseInt(match.params.dishId, 10)
                    )}
                    addComment={this.props.addComment}
                />
            );
        };
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route exact path='/home' component={HomePage} />
                        <Route
                            exact
                            path='/menu'
                            component={() => (
                                <Menu
                                    dishes={this.props.dishes}
                                    onClick={(dishId) =>
                                        this.onDishSelect(dishId)
                                    }
                                />
                            )}
                        />
                        <Route exact path='/contactus' component={Contact} />
                        <Route path='/menu/:dishId' component={DishWithId} />
                        <Route
                            path='/aboutus'
                            component={() => (
                                <About leaders={this.props.leaders} />
                            )}
                        />
                        <Redirect to='/home' />
                    </Switch>
                </div>

                {/* <Menu
                    dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)}
                />*/}

                <DishDetail dish={this.getSelectedDishDetails()} />

                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
