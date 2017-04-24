import {FETCH_FAILURE} from './types'

export * from './NewsAction';
export * from './CommentAction'


export const fetchFailure=  (error) => {
    return {
            type: FETCH_FAILURE,
            error: error
          }
  }