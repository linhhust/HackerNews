import { FETCH_PENDING, FETCH_SUCCESS, FETCH_FAILURE, ADD_NEWS } from '../actions/types';

const INITIAL = {

  data: [],
  category: 'beststories',
};

export default newsReducer = (state = INITIAL, action) => {
  // console.log('reducer')
  switch (action.type) {
    case ADD_NEWS: {
      //console.log(state);
      let data = [...state.data, action.data];
      return { ...state, data: data }
    }
    case 'CHANGE_CATEGORY':
    return {...state, data: [], category: action.category}
    case 'RESET_NEWS':
      console.log('reducer')
      return INITIAL;
    default:
      return state;
  }
}
