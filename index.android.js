/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {AppRegistry, Text} from 'react-native';
import App from './src/App'

import React from 'react'
import {
  ActivityIndicator
}from 'react-native'


class A extends React.Component{
  render (){
    return <ActivityIndicator color ='blue' size = 'large' style ={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', flex: 1}}/>
  }
}


AppRegistry.registerComponent('HackerNews', () => App);
