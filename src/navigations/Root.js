import React from 'react'
import { StackNavigator } from 'react-navigation'

import TabsScreen from './Tabs'

import NewsListScreen from '../containers/NewsList'
import Comments from '../containers/Comments'
import News from '../containers/News'


export default Root = StackNavigator({
    newsList: {screen: NewsListScreen},
    comment: {screen: Comments},
    news: {screen: News},
    tabs: {screen: TabsScreen},
    
});

