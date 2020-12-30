import apiInfo from './apiInfo';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    apiInfo: apiInfo,
});

export default rootReducer;