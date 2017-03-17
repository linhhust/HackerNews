import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Scene} from 'react-native-router-flux';

import NewsList from './containers/NewsList'
import News from './containers/News'
import  Comments from './containers/Comments'

const RouterWithRedux = connect()(Router);
class RouterComponent extends Component{
  render(){
      return (
        <RouterWithRedux>
              <Scene
                key="list"
                component={NewsList}
                title='component'
                navigationBarStyle={style.navigationBarStyle}
              />

                <Scene
                  key="news"
                  component={News}
                  title='component'
                  navigationBarStyle={style.navigationBarStyle}
                />

                <Scene
                  key="comment"
                  component={Comments}
                  title='component'
                  navigationBarStyle={style.navigationBarStyle}
                />
        </RouterWithRedux>
      );
  }
}

const style = {
	navigationBarStyle:{
		backgroundColor:'green'
	}
}
export default RouterComponent;
