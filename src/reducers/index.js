import {combineReducers} from 'redux';

import newsReducer from './NewsReducer';
import loadingReducer from './LoadingReducer';
import errorReducer from './ErrorReducer';
import commentReducer from './CommentReducer';
import navigationReducer from './NavigationReducer';
import themeReducer from './ThemeReducer';
import action from './actionReducer';

 const reducers= combineReducers({
     action,
     navigationReducer,
     newsReducer,
     loadingReducer,
     errorReducer,
     commentReducer,
     themeReducer
    });

 export default reducers;
