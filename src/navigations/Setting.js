import React from 'react'
import { Text } from 'react-native'

export default class Setting extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Setting',
    };
    render() {
        return <Text> Content Setting </Text>
    }
}