import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import {createStore as _createStore, applyMiddleware} from 'redux';

/**
 * Creates and returns store, configured with reducers and middleware
 */
export const createStore = () =>
    _createStore(reducers, applyMiddleware(thunkMiddleware));

export default createStore();
