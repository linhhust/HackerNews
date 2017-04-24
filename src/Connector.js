import React from 'react'
import { connect } from 'react-redux'

import { LOAD_LIST, LOAD_NEWS, FETCH_PENDING, FETCH_SUCCESS, FETCH_FAILURE } from './actions/types';
import { fetchFailure } from './actions/index'
import API from './api'
import { addNews } from './actions/NewsAction'

class Connector extends React.Component {

    componentWillMount() {
        let { action } = this.props;
        this.loadNews(action.category, action.index, action.number)
    }

    componentWillReceiveProps(nextProps) {
        // console.log('connector', this.props.action.type);
        let { action } = nextProps;
        switch (action.type) {
            case 'LOAD_DATA':
                if (action.index != 0)
                    this.loadNews(action.category, action.index, action.number)
                break;
            case 'RESET_NEWS':
                // console.log('reset', action)
                this.loadNews(action.category, 0, action.number)
        }
    }

    loadNews(category, index, number) {
        let api = new API();
        // console.log('loadNews', this.props);
        let { dispatch } = this.props;
        {
            dispatch({ type: FETCH_PENDING });
            api.getList(category)
                .then((response) => {
                    if (response.error) {
                        // console.log('error load list', response.error);
                        dispatch({
                            type: FETCH_FAILURE,
                            error: response.error
                        })
                    } else {

                        for (let i = index * number; i < response.length && number > 0; i++) {
                            // console.log('i', i)
                            number--;
                            dispatch({ type: FETCH_PENDING });
                            let b = api.getItem(response[i]);
                            b.then((data) => {
                                // console.log('data', data);
                                if (data.error) {
                                    // console.log('error load news', data.error);
                                    dispatch({
                                        type: FETCH_FAILURE,
                                        error: response.error
                                    })
                                }
                                else
                                    dispatch(addNews(data));
                            })
                                .catch(error => {
                                    // console.log('error load new catch', data.error);
                                    dispatch({
                                        type: FETCH_FAILURE,
                                        error: response.error
                                    })
                                });
                        }
                        
                    }
                })
                .catch(error => {
                    // console.log('error', error);
                    // console.log('error load list catch', response.error);
                    dispatch({
                        type: FETCH_FAILURE,
                        error: response.error
                    })
                });
               
        }
    }

    render() {
        return null;
    }
}



const mapStateToProps = (state) => {
    // console.log('map', state.action.type)
    return {
        action: state.action
    }
}
export default connect(mapStateToProps)(Connector)