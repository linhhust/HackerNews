import {TabNavigator} from 'react-navigation'

import Setting from '../screens/Setting'
import Menu from '../screens/Menu'

export default Tabs = TabNavigator({
    menu: {screen: Menu},
    setting: {screen: Setting},
},{
    
});