import {StackNavigator} from 'react-navigation'

import NewsListScreen from '../containers/NewsList'
import Comments from '../containers/Comments'
import News from '../containers/News'

export default Screen = StackNavigator({
    newsList: {screen: NewsListScreen},
    comment: {screen: Comments},
    news: {screen: News}
})