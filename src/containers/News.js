import React from 'react'
import {WebView, StyleSheet, ActivityIndicator, Text} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'

 class News extends React.Component{
  render(){
    // console.log('item', this.procs.item.text);
    return (
        <WebView
          source={{uri: this.props.item.url}}
          style={{marginTop: 20}}
          onLoadStart = {() => <ActivityIndicator
                                  animating={true}
                                  style={[styles.centering, {height: 80}]}
                                  size="large"
                                />
                      }
        />
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    flex:1
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
export default News;
