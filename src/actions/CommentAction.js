import {
    ADD_COMMENT, FETCH_PENDING, FETCH_SUCCESS, FETCH_FAILURE, ADD_CHILD_COMMENT
} from './types';


import { fetchFailure } from './index'
import API from '../api';
const api = new API();

export const loadComments = (index, items) => {
    // console.log('index', index);
    return (dispatch) => {
        if (items === undefined) {
            dispatch({ type: 'undefined' });
        }
        else {
            if (index.length > 3) {
                dispatch({ type: 'length' });
            } else {
                for (let i = 0; i <  4 && i < items.length; i++) {
                    // dispatch({ type: FETCH_PENDING });
                    api.getItem(items[i]).then((response) => {
                        if (response.error) {
                            dispatch(fetchFailure(error));
                        } else {
                            let indexTemp = index.map((item) => item);
                            indexTemp = [...indexTemp, i];
                            dispatch(addComment(indexTemp, response));
                            dispatch(loadComments(indexTemp, response.kids));
                        }
                    })
                        .catch((error) => {
                            fetchFailure(error);
                        })
                }
            }
        }
    }
}

export const addComment = (index, data) => {
    return {
        type: ADD_COMMENT,
        data,
        index
    };
}
