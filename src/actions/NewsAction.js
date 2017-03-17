import {LOAD_LIST, LOAD_NEWS,FETCH_PENDING,FETCH_SUCCESS,FETCH_FAILURE } from './types';
import API from '../api';
const api = new API();
export const loadData = (category) => {
    return (dispatch) => {
      dispatch({type: FETCH_PENDING});
        api.getList(category)
        .then((response) => {
                              if (response.error){
                                // console.log('error', response.error);
                                dispatch(fetchFailure(response.error))
                              }else{
                                // console.log('success');
                                const listNews =
                                        response.map(item=> {
                                                              dispatch({type: FETCH_PENDING});
                                                              let b = api.getNews(item);
                                                               b.then((data) => {
                                                                  //data = response.json();
                                                                  //console.log('data', data);
                                                                  dispatch(addNews(data));
                                                               })
                                                          });

                                //dispatch(fetchSuccess(listNews));
                              }
        })
        .catch(error =>{
          // console.log('error', error);
          dispatch(fetchFailure(error));
        });
    }
};

export const addNews = (item) =>{
  return {
    type: "ADD_NEWS",
    payload: item
  }
}

export const loadNews = (id) =>{
  return dispatch =>{
    new API().getNews(id)
      .then((response) => {
          if (response.error){
              console.log('error', response.error);
              dispatch(fetchFailure(response.error));
          }else{
            dispatch(fetchSuccess(response));
          }
      })
      .catch(error => {
        console.log('error', error);
        dispatch(fetchFailure(error));
      })
    };
  };

export const fetchSuccess = (data) => {
    return {
              type: FETCH_SUCCESS,
              payload: data
          }
  }

export const fetchFailure=  (error) => {
    return {
            type: FETCH_FAILURE,
            error: error
          }
  }
