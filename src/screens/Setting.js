import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { changeColor } from '../actions/ThemeAction'

class Setting extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Setting',
        header: (navigation) => {
            console.log('navigation', navigation)
        return {
            titleStyle: { paddingLeft: 100 },
            style: { backgroundColor: navigation.state.params.theme.color },
            tintColor: 'white'
        }
    }
    }

    componentWillReceiveProps(nextProps) {
       let { params } = nextProps.navigation.state;
        if (this.props.navigation.state.params.theme.color != nextProps.theme.color) {
            this.props.navigation.setParams({  theme: nextProps.theme })
        }
    }

    render() {
        return <View>
            <Text> Content Setting </Text>

            <TouchableOpacity onPress={() => {
                console.log('press')
                this.props.navigation.dispatch(changeColor('green'))}}>
            <View 
                style={{ height: 30, width: 30, backgroundColor: 'green' }} />
                </TouchableOpacity>
        </View>
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.themeReducer
    }
}

export default connect(mapStateToProps)(Setting);