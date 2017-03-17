import {FETCH_PENDING,FETCH_SUCCESS,FETCH_FAILURE, ADD_NEWS} from '../actions/types';

const INITIAL = {
  
  data: []
};

export default newsReducer = (state = INITIAL, action)=>{
  switch (action.type) {
    case ADD_NEWS: {
      //console.log(state);
      let data = [...state.data, action.payload];
      return {...state, data: data}
    }
    default:
      return state;
  }
}
