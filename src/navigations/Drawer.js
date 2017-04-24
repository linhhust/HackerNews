import {DrawerNavigator} from 'react-navigation'

import Menu from './Menu'
import Setting from './Setting'
import List from '../containers/NewsList'

export default Drawer = DrawerNavigator({
    newsList: {screen: List},
    menuD: {screen: Menu},
    setting: {screen: Setting}
},{
    drawerPosition: 'right',

})