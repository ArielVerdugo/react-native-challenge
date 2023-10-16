import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {soundBarReducer} from './Reducer';

const rootReducer = combineReducers({soundBarReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
