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
                title='HN'
                navigationBarStyle={style.navigationBarStyle}
              />

                <Scene
                  key="news"
                  component={News}
                  title='News'
                  navigationBarStyle={style.navigationBarStyle}
                />

                <Scene
                  key="comment"
                  component={Comments}
                  title='Comments'
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

/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import NewsList from './containers/NewsList'
import News from './containers/News'
import Comments from './containers/Comments'
import Icon from 'react-native-vector-icons/Ionicons';

const RouterWithRedux = connect()(Router);

import {Text} from 'react-native'
const TabIcon = ({selected, title}) =>{
  return <Text> {title}</Text>
}
class RouterComponent extends Component {
  render() {
    return (
      <RouterWithRedux>
        <Scene key='root' hideNavBar={true}>
          <Scene key='tabbar' tabs={true}>
            <Scene key='tab1' title='Tab1' icon={TabIcon}
            tabBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
              <Scene
                key="list"
                component={NewsList}
                title='component'
                leftButtonImage ={<Icon name ='md-list' size ={30}/>}
                onLeft ={()=> console.log('press')}
              />
            </Scene>
            <Scene key='tab2' title='Tab2' icon={TabIcon}>
              <Scene
                key="news"
                component={News}
                title='component'
                
              />
            </Scene>
            <Scene key='tab3' title='Tab3' icon={TabIcon}>
              <Scene
                key="comment"
                component={Comments}
                title='component'
                
              />
            </Scene>



          </Scene>
        </Scene>
      </RouterWithRedux>
    );
  }
}

const style = {
  navigationBarStyle: {
    backgroundColor: 'green'
  }
}
export default RouterComponent;*/
