import React from 'react'
import { Text, ListView, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

class Menu extends React.Component {

    static navigationOptions = {
        // title: 'HN',
        tabBarLabel: 'Menu',
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

    static theme = 'yellow' ;

    createDataSource(data) {
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(data);
    }

    componentWillMount() {
        this.props.navigation.setParams({ color: this.props.color })
        let data = ['Ask', 'Job', 'Show', 'New', 'Top', 'Best'];
        this.createDataSource(data);
        theme = this.props.color;
        console.log(theme)
    }

    componentWillReceiveProp(nextProps){
        theme = this.props.color;
    }

    render() {
        
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
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'newsList', params: { category: category } }))
                            }} >
                            <Text> {item} </Text>
                        </TouchableOpacity>)
                }
                }
                renderSeparator={(sectionID, rowID) => <View key={rowID} style={{ height: 1, backgroundColor: 'black' }} />}
            />
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: this.props.color }}> YC </Text>
                <View style={{ height: 2, backgroundColor: this.props.color }} />
                <Text > Login </Text>
                <Text style={{ color: this.props.color }}> READ LATER </Text>
                <View style={{ height: 2, backgroundColor: this.props.color }} />
                <Text > Poket </Text>
                <Text > Readability </Text>
            </View>
        </View>

    }
}

const mapStateToProps = (state) => {
    return {
        color: state.themeReducer.color
    }
}

export default connect(mapStateToProps)(Menu);