import React from 'react'
import { Text } from 'react-native'

export default class Menu extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Menu',
    };
    render() {
        return <Text> Content Menu </Text>
    }
}