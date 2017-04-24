import React from 'react'
import { StackNavigator } from 'react-navigation'

import Tab from './Tabs'

import NewsListScreen from '../containers/NewsList'
import Comments from '../containers/Comments'
import News from '../containers/News'

import Drawer from './Drawer'

export default Root = StackNavigator({
    newsList: {screen: NewsListScreen},
    comment: {screen: Comments},
    news: {screen: News},
    tabs: {screen: Tabs},
    
});
// , {
//     headerMode: 'screen',
//     navigationOptions: {
//             header: {
//                 visible: true
//             }
//         }
// });

