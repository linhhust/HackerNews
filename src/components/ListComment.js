import React from 'react'
import { ListView, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { CommentItem } from './CommentItem'

class ListComment extends React.Component {
    componentWillMount() {
        // console.log('HOC', this.props)
        const { data } = this.props
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(data)
    }

    componentWillReceiveProps(nextProps) {
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(nextProps.data)
        // console.log('update', nextProps.data);
    }
    render() {
        return <ListView
            dataSource={this.dataSource}
            renderRow={(item) => {

                if (item) {
                    {/*console.log('item list', item)*/ }
                    return <CommentItem item={item} size={this.props.size} color={this.props.color} />
                }
                else return null;
            }}
        />
    }
}

ListComment.propsType = {
    data: React.PropTypes.object.isRequired,
    color: React.PropTypes.string.isRequired,
    size: React.PropTypes.number.isRequired
}
{/*<WrappedComponent data={data} {...this.props} />*/ }

const mapStateToProps = (state) => {
    return {
        theme: state.themeReducer
    }
}

export default (ListComment);
