import React from 'react'
import {
  Text, ActivityIndicator, StyleSheet,
  Platform, ListView, View, WebView, TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions } from 'react-navigation'

import { loadComments } from '../actions'
import { ItemComment } from '../components/ItemComment'
import  {CommentItem}  from '../components/CommentItem'


class Comments extends React.Component {
  static navigationOptions = {
    header: (navigation) => {
      let color = (navigation.state.params.color != undefined)? navigation.state.params.color: 'yellow'
      return ({
        style: { backgroundColor: color },
        right:
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => console.log('press')}
            style={{ paddingRight: 15 }}
          >
            <Icon name='share-alt' size={30} color='white' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.dispatch(NavigationActions.navigate({ routeName: 'news', params: navigation.state.params }))}
            style={{ paddingRight: 15 }}
          >
            <Icon name='newspaper-o' size={30} color='white' />
          </TouchableOpacity>
        </View>,
        tintColor: 'white'
      });
    }
  }

  componentWillMount() {
    // console.log('comment will mount', this.props);
    this.props.navigation.setParams({ color: this.props.theme.color });
    const kids = this.props.navigation.state.params.kids;
    this.props.dispatch(loadComments([], kids));
    // console.log('comment will mount', this.props);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.navigation.state.params != undefined) {
    //   if (this.props.navigation.state.params.color !== this.props.theme.color)
    //     this.props.navigation.setParams({ color: this.props.theme.color });
    // } else
    //   this.props.navigation.setParams({ color: this.props.theme.color });
    this.createDataSource(nextProps);
  }

  createDataSource({ data }) {

    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(data);
  }

  shouldComponentUpdate(nextProps, nextState){
    // return a boolean value
    return true;
}
  render() {
    // console.log('Comment', this.props)
    return (
      <View style={styles.container} >
        {
          this.props.error ?
            <View style={styles.error}>
              <Text>{this.props.error}</Text>
            </View> :
            null
        }
        {
          this.props.isFetching ?
            <View style = {{flex:1}}>
              <ActivityIndicator
                animating={true}
                style={styles.centering}
                size="large"
              />
              <Text style={styles.loading}> Loading.... </Text>
            </View>
            :
            null
        }

        {
          (this.props.data.length > 0) ?
            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={(item, sectionID, rowID, highlightRow) => <CommentItem 
              item={item} 
              size = {this.props.theme.size} 
              color = {this.props.theme.color}/>}
            />
            : null
        }

      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})



const mapStateToProps = (state) => {
  // console.log('map', state)
  return {
    action: state.action,
    data: state.commentReducer.data,
    theme: state.themeReducer,
    isFetching: state.loadingReducer.isFetching,
    error: state.errorReducer.error,
  }
}
export default connect(mapStateToProps)(Comments);