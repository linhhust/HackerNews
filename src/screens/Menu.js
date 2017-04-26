import React from 'react'
import { Text, ListView, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'


import { changeColor } from '../actions/ThemeAction'

class Menu extends React.Component {

    static navigationOptions = {
        // title: 'HN',
        tabBarLabel: 'Menu',
        header: (navigation) => {
            // console.log('navigation menu', navigation)
        return {
            titleStyle: { paddingLeft: 100 },
            style: { backgroundColor: navigation.state.params.theme.color },
            tintColor: 'white'
        }
    }
        
    }

    static theme = 'yellow' ;

    createDataSource(data) {
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(data);
    }

    componentWillMount() {
        // this.props.navigation.setParams({ theme: this.props.theme })
        let data = ['Ask', 'Job', 'Show', 'New', 'Top', 'Best'];
        this.createDataSource(data);

    }

    componentWillReceiveProps(nextProps) {
        let { params } = nextProps.navigation.state;
        if (this.props.navigation.state.params.theme.color != nextProps.theme.color) {
            this.props.navigation.setParams({  theme: nextProps.theme })
        }
    }

    render() {
        console.log('render', this.props.navigation.state.params.theme)
        return <View>
            <ListView
                dataSource={this.dataSource}
                renderRow={(item, id) => {
                    let category = item.toLowerCase();
                    category = category.concat('stories');
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                {/*this.props.dispatch({ type: 'RESET' });*/ }
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'newsList', params: { category: category, theme: this.props.theme } }))
                            }} >
                            <Text> {item} </Text>
                        </TouchableOpacity>)
                }
                }
                renderSeparator={(sectionID, rowID) => <View key={rowID} style={{ height: 1, backgroundColor: 'black' }} />}
            />
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: this.props.theme.color }}> YC </Text>
                <View style={{ height: 2, backgroundColor: this.props.theme.color }} />
                <Text > Login </Text>
                <Text style={{ color: this.props.theme.color }}> READ LATER </Text>
                <View style={{ height: 2, backgroundColor: this.props.theme.color }} />
                <Text > Poket </Text>
                <Text > Readability </Text>
            </View>
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

export default connect(mapStateToProps)(Menu);