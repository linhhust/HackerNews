import React from 'react'
import { View } from 'react-native'

import NewConnector from './NewsConnector';


export default class RootConnector extends React.Component {
    render() {
        return (<View style={{ flex: 1 }}>
            <NewConnector />
        </View>);
    }
}