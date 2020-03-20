import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { foodTypes } from './foodtypes';
import { quickServices } from './quickservices';
import { recepies } from './recepies';
import { restaurants } from './restaurants';
import { Comments } from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            foodTypes: foodTypes,
            quickServices: quickServices,
            recepies: recepies,
            restaurants: restaurants,
            comments: Comments
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}