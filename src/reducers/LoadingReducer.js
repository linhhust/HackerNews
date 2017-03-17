import {FETCH_PENDING,FETCH_SUCCESS,FETCH_FAILURE, ADD_NEWS} from '../actions/types';

const INITIAL = {
  isFetching: false
};

export default loadingReducer = (state = INITIAL, action)=>{
  switch (action.type) {
  	case FETCH_PENDING:
  		return {...state, isFetching: true};
    default:
      return {...state, isFetching: false}
  }
}