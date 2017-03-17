import {combineReducers} from 'redux';
import newsReducer from './NewsReducer';
import loadingReducer from './LoadingReducer';
import errorReducer from './ErrorReducer';

 const reducers= combineReducers({
     newsReducer,
     loadingReducer,
     errorReducer,
    });

 export default reducers;
