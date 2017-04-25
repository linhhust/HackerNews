import { TabNavigator, StackNavigator } from 'react-navigation'

import Setting from '../screens/Setting'
import Menu from '../screens/Menu'

export default Tabs = TabNavigator({
    menu: { screen: Menu },
    setting: { screen: Setting },
}
// }, {
//     tabBarOptions: {
//             activeTintColor: 'blue',
//             labelStyle: {
//                 fontSize: 18,
//             },
//             style: {
//                 backgroundColor: Menu.theme ? Menu.theme: 'yellow',
//             },
//         }
// });

Tabs.navigationOptions = {
    title: "HN"
}