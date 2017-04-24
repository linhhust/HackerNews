import { StackNavigator } from 'react-navigation'

import MenuScreen from '../screens/Menu'

export default Menu = StackNavigator({
    setting: { screen: MenuScreen }
},
    {
        navigationOptions: {
            title: 'Menu',
            drawer: {
                label: 'Menu',

            }
        }

    })