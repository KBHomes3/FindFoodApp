import * as ActionTypes from './ActionTypes';
import { RESTAURANTS } from '../shared/restaurants';

export const addComment = (restaurantId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        restaurantId,
        rating,
        author,
        text
    }
});

export const fetchRestaurants = () => dispatch => {
    dispatch(restaurantsLoading());
    
    setTimeout(() => {
        dispatch(addRestaurants(RESTAURANTS));
    }, 2000);
};

export const restaurantsLoading = () => ({
    type: ActionTypes.RESTAURANTS_LOADING
});

export const restaurantsFailed = errMess => ({
    type: ActionTypes.RESTAURANTS_FAILED,
    payload: errMess
});

export const addRestaurants = restaurants => ({
    type: ActionTypes.ADD_RESTAURANTS,
    payload: restaurants
});


