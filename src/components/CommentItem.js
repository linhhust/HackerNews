import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HTMLView from 'react-native-htmlview'
import { connect } from 'react-redux'

import { convertTime } from '../Utilities'
import ListComment from './ListComment'

class CommentItem extends React.Component {

  constructor(props) {
    super(props);
    let child = props.item.data.child != undefined ? props.item.data.child : [];
    this.state = { child };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ child: nextProps.item.data.child })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(nextProps);
  //   return true;
  // }

  render() {

    let item = this.props.item.data.root ? this.props.item.data.root : this.props.item.data;
    // console.log('comment item',  this.props.item.index, 'child', this.state.child)
    let level = this.props.item.level;
    return (

      (!item.deleted) ?
        <View style={[styles.container, { borderLeftWidth: (level != 0) ? 15 : 0 }]}>
          <View style={{ padding: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.header}>
                <Ionicon name="ios-person" color={this.props.color} size={this.props.size} />
                <Text style={{ color: this.props.color, fontSize: this.props.size }}> {item.by} </Text>

              </View>

              <View style={styles.header}>
                <FontAwesome name='hourglass-o' size={this.props.size} />
                <Text style={{
                  color: '#8D8C8C',
                  fontSize: this.props.size
                }}> {convertTime(item.time)}</Text>
                <Text> {level} </Text>
              </View>
            </View>
            <HTMLView value={"<p>" +  item.text + "</p>"} stylesheet={StyleSheet.create({
              p: {
                
                fontSize: this.props.size
              },
              i: {
                
                fontSize: this.props.size
              },
              a: {
                fontSize: this.props.size,
                color: 'blue'
              }
            })} />

          </View>
          <View >
            {(this.props.item.data.child != undefined) ? <ListComment 
            data={this.state.child} 
            color = {this.props.color}
            size = {this.props.size}/>
              : null}
          </View>
        </View>
        : null
    );
  }
}

CommentItem.PropTypes = {
  item: React.PropTypes.object.isRequired,
  color: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 2,
    backgroundColor: '#FCFFFF',
    borderTopWidth: 2,
    borderColor: '#F0F2F3'
  },
  header: {
    flexDirection: 'row',
    paddingRight: 25,
    alignItems: 'center',
  }
});


export { CommentItem }