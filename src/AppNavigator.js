import React from 'react'
import { View } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

import Connector from './Connector'
import Root from './navigations/Root'

class AppNavigator extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Root
                    navigation={addNavigationHelpers({
                        dispatch: this.props.dispatch,
                        state: this.props.nav
                    })}
                />
                <Connector />
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        nav: state.navigationReducer
    }
}
export default connect(mapStateToProps)(AppNavigator);