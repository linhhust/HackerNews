import { LOAD_LIST, LOAD_NEWS, FETCH_PENDING, FETCH_SUCCESS, FETCH_FAILURE } from './types';
import { fetchFailure } from './index'

import API from '../api';
const api = new API();

// export const loadData = (category, index, number) => {
//   return (dispatch) => {
//     dispatch({ type: FETCH_PENDING });
//     api.getList(category)
//       .then((response) => {
//         if (response.error) {
//           // console.log('error', response.error);
//           dispatch(fetchFailure(response.error))
//         } else {

//           for (let i = index * number; i < response.length && number > 0; i++) {
//             number --;
//             dispatch({ type: FETCH_PENDING });
//             let b = api.getItem(response[i]);
//             b.then((data) => {
//               if (data.error)
//                 dispatch(fetchFailure(response.error))
//               else
//                 dispatch(addNews(data));
//             })
//               .catch(error => {
//                 dispatch(fetchFailure(error));
//               });
//           }
//         }
//       })
//       .catch(error => {
//         // console.log('error', error);
//         dispatch(fetchFailure(error));
//       });
//   }
// };

export const changeCategory = (category) => {
  return {
    type: "CHANGE_CATEGORY",
    category
  }
}

export const loadData = (category, index, number) => {
  return {
    type: 'LOAD_DATA',
    category,
    index,
    number
  }
}

export const resetNews = (category, number) => {
  return {
    type: 'RESET_NEWS',
    category,
    number
  }
}

export const addNews = (item) => {
  return {
    type: "ADD_NEWS",
    data: item
  }
}

export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  }
}


