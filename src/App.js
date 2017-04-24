import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import AppNavigator from './AppNavigator';

class App extends Component{
  render(){
    return (
      <Provider store = {store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
