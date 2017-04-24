import { StackNavigator } from 'react-navigation'

import SettingScreen from '../screens/Setting'

export default Setting = StackNavigator({
    setting: { screen: SettingScreen }
},
    {
        navigationOptions: {
            header: {
                visible: true
            }
        }

    })