import React from 'react'
import {
    View, Text, StyleSheet
} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HTMLView from 'react-native-htmlview'
import {connect} from 'react-redux'

import { convertTime } from '../Utilities'


class ItemComment extends React.Component {

    render() {
        // console.log('item', this.props.item);
        const item = this.props.item.data.root ? this.props.item.data.root : this.props.item.data;
        // console.log(item);
        return (

            <View style={[styles.container, {paddingLeft: this.props.item.level * 10}]}>
                
                    

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.header}>
                                    <Ionicon name="ios-person" color = 'blue'/>
                                    <Text style ={{color: 'blue'}}> {item.by} </Text>

                                </View>

                                <View style={styles.header}>
                                    <FontAwesome name='hourglass-o' />
                                    <Text> {convertTime(item.time)}</Text>

                                </View>
                            </View>
                            <HTMLView value={item.text} />

                        </View>
                  
                
            </View>
        );
    }
}

ItemComment.PropTypes = {
    item: React.PropTypes.object.isRequired
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        paddingLeft: 5,
        backgroundColor: '#F3F0EE'
    },
    header: {
        flexDirection: 'row',
        paddingRight: 25,
        alignItems: 'center',
    }
});



export {ItemComment}