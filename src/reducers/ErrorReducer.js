import {FETCH_PENDING,FETCH_SUCCESS,FETCH_FAILURE, ADD_NEWS} from '../actions/types';

const INITIAL = {
  error: null,
};

export default errorReducer = (state = INITIAL, action)=>{
  switch (action.type) {
    case FETCH_FAILURE:
      return {...state, error:action.error};
    default:
      return {...state, error: null};
  }
}