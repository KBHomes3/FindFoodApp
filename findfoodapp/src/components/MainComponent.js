import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import Contact from './ContactComponent';
import RestaurantList from './RestaurantsComponent';
import RestaurantInfo from './RestaurantInfoComponent';
import RecepiesList from './RecepiesComponent';
import QuickServiceList from './QuickServiceComponent';
import MexicanFoodList from './MexicanFoodComponent';
import ItalianFoodList from './ItalianFoodComponent';
import AmericanFoodList from './AmericanFoodComponent';
import AsianFoodList from './AsianFoodComponent';
import About from './AboutUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchRestaurants } from '../redux/ActionCreators'

const mapStateToProps = state => {
    return {
        foodTypes: state.foodTypes,
        recepies: state.recepies,
        restaurants: state.restaurants,
        comments: state.comments,
        quickServices: state.quickServices
    }
}

const mapDispatchToProps = {
    addComment: (restaurantId, rating, author, text) => (addComment(restaurantId, rating, author, text)),
    fetchRestaurants: () => (fetchRestaurants())
};


class Main extends Component {

    componentDidMount(){
        this.props.fetchRestaurants();
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                recepie={this.props.recepies.filter(recepie => recepie.featured)[0]}
                restaurant={this.props.restaurants.restaurants.filter(restaurant => restaurant.featured)[0]}
                quickservice={this.props.quickServices.filter(quickService => quickService.featured)[0]} />
            );
        }

        const RestaurantWithId = ({match}) => {
            return (
                <RestaurantInfo
                restaurant={this.props.restaurants.restaurants.filter(restaurant => restaurant.id === +match.params.restaurantId)[0]}
                isLoading={this.props.restaurants.isLoading} 
                errMess={this.props.restaurants.errMess}
                comments={this.props.comments.filter(comment => comment.restaurantId === +match.params.restaurantId)}
                addComment={this.props.addComment}
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory foodTypes={this.props.foodTypes} />} />
                    <Route exact path='/restaurants' render={() => <RestaurantList restaurants={this.props.restaurants} /> } />
                    <Route path='/restaurants/:restaurantId' component={RestaurantWithId} />
                    <Route exact path='/quickservice' render={() => <QuickServiceList quickServices={this.props.quickServices} /> } />
                    <Route exact path='/recepies' render={() => <RecepiesList recepies={this.props.recepies} /> } />
                    <Route exact path='/mexicanFood' render={() => <MexicanFoodList allFoodItems={this.props} /> } />
                    <Route exact path='/italianFood' render={() => <ItalianFoodList allFoodItems={this.props} /> } />
                    <Route exact path='/americanFood' render={() => <AmericanFoodList allFoodItems={this.props} /> } />
                    <Route exact path='/asianFood' render={() => <AsianFoodList allFoodItems={this.props} /> } />
                    <Route exact path='/aboutus' component={About} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));