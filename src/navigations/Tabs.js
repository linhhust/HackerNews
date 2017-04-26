import { TabNavigator, StackNavigator } from 'react-navigation'
import React from 'react'
import { connect } from 'react-redux'


import Setting from '../screens/Setting'
import Menu from '../screens/Menu'

const Tabs = TabNavigator({
    menu: { screen: Menu },
    setting: { screen: Setting },
});


Tabs.navigationOptions = {
    title: "HN",
    
}

const mapStateToProps = (state) => {
    return {
        theme: state.themeReducer
    }
}
export default connect(mapStateToProps)(Tabs)