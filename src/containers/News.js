import React from 'react'
import { WebView, StyleSheet, ActivityIndicator, View, TouchableOpacity } from 'react-native'
import {NavigationActions} from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import HTMLView from 'react-native-htmlview'

class News extends React.Component {

  static navigationOptions = {
    header: (navigation) => {
      
      return {
        style: { backgroundColor: navigation.state.params.color },
        right:
        <TouchableOpacity
          onPress={() => navigation.dispatch(NavigationActions.navigate({ routeName: 'comment', params: navigation.state.params }))}
          style={{ paddingRight: 10 }}
        >
          <Icon name='comment-o' size={30} color = 'white'/>
        </TouchableOpacity>,
        tintColor: 'white'

      }
    }
  }


componentWillMount(){
  this.props.navigation.setParams({ color: this.props.theme.color });
  this.props.dispatch({type: 'FETCH_PENDING'})
}

  render() {
    // console.log('item', this.props);
    const item = this.props.navigation.state.params;
    let url =  (item.type == 'story') ? item.url: item.text;
    return (
       (item.url != '')?

    <WebView
      source={{ uri: item.url }}
      startInLoadingState = {true}
      onLoadStart={() =>this.props.dispatch({type: 'FETCH_PENDING'}) }
    />
   : <HTMLView value={item.text} />

    ); 
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    flex: 1
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
})

const mapStateToProps = (state) => {
  
  return {
    theme: state.themeReducer,
  }
}
export default connect(mapStateToProps)(News);
