import { TabNavigator, StackNavigator } from 'react-navigation'

import Tabs from './Tabs'

export default TabsScreen = StackNavigator({
    tabs: {
        screen: Tabs,
        
    }
}, {navigationOptions: ({navigation}) => ({
            title: 'HN',
        }),
    });
