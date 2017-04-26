import React from 'react'
import {
  TouchableOpacity,
  Text, View, StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import {NavigationActions} from 'react-navigation'
import { convertTime } from '../Utilities'

class Item extends React.Component {
  render() {
    //  console.log('dispatch',this.props);
    const {item} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>this.props.dispatch(NavigationActions.navigate({routeName: 'news', params: {item, theme: this.props.theme}}))}
          underlayColor={"#E8E8E8"}
          style={styles.containerLeft}
        >
          <Text style={[styles.title, {fontSize: this.props.theme.size}]} numberOfLines={2}> {item.title}</Text>
          <Text style={[styles.common, {fontSize: this.props.theme.size}]} numberOfLines={1}>{item.by}, {convertTime(item.time)}</Text>
          <Text style={[styles.common, {fontSize: this.props.theme.size}]} numberOfLines={1}> {item.url} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerRight}
          onPress={() => {
            this.props.dispatch({type: 'RESET_COMMENT'});
            this.props.dispatch(NavigationActions.navigate({routeName: 'comment', params: {item, theme: this.props.theme}}))
            }}>
          <View style={styles.comment}>
            <Text style={{ color: this.props.theme.color, fontSize: this.props.theme.size }}>{item.kids ? item.kids.length : 0}</Text>
          </View>
          <View style={styles.score}>
            <Text style = {{color: '#D4D6D6', fontSize: this.props.theme.size}}>{item.score}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
    
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 150,
    borderBottomWidth: 1,
    borderColor: '#F4F6F7',
    paddingLeft: 15,
    backgroundColor: '#FCFEFF',
    
  },
  containerLeft: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'space-around',
        alignItems: 'flex-start',
    // paddingTop: 8,
    
  },
  containerRight: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F9FBFC'
  },
  title: {
    fontSize: 13,
    color: '#525353',


  },
  common: {
    fontSize: 10,
    color: '#D3D5D5',
    paddingTop: 10
  },
  comment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }

})

Item.propTypes = {
  item: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  // console.log('state',state);
  return {
      theme: state.themeReducer
  }
}

export default connect(mapStateToProps)(Item);
