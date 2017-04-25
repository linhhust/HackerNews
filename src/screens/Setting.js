import React from 'react'
import { Text } from 'react-native'
import {connect} from 'react-redux'

class Setting extends React.Component {
    static navigationOptions = {
        
        tabBarLabel: 'Setting',
        header: (navigation) => {
            if (navigation.state.params != undefined)
                color = navigation.state.params.color;
            else color = 'blue';
            // console.log('color', navigation)
            return ({
                titleStyle: { paddingLeft: 100 },
                style: { backgroundColor: color },
                tintColor: 'white'
            });
        },
    }
    render() {
        return <Text> Content Setting </Text>
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.themeReducer.color
    }
}

export default connect(mapStateToProps)(Setting);