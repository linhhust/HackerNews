import React from 'react'
import {
  TouchableOpacity,
  Text, View, StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'

const Item = ({ item }) => {
  // console.log(item._65 );
  // console.log('item', item);
  // console.log('size', item);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Actions.news({ item })}
        style={styles.containerLeft}
      >
        <Text style={styles.title} numberOfLines={2}> {item.title}</Text>
        <Text style={styles.common} numberOfLines={1}>{item.by}, {timestamp(item.time)}</Text>
        <Text style={styles.common} numberOfLines={1}> {item.url} </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.containerRight}
        onPress={() => Actions.comment({ item })}>
        <View style={styles.comment}>
          <Text style={{ color: 'orange' }}>{item.kids ? item.kids.length : 0}</Text>
        </View>
        <View style={styles.score}>
          <Text>{item.score}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    paddingLeft: 15,

  },
  containerLeft: {
    flex: 7,
    flexDirection: 'column',
    paddingTop: 8,
  },
  containerRight: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F6F8FA'
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',


  },
  common: {
    fontSize: 10,
    color: '#CCCCCC',
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

var timestamp = (timepost) => {
  const time = Date.now() / 1000 - timepost
  //console.log('Time:', time)
  if (Math.floor(time / 43200) != 0) {
    return Math.floor(time / 43200) + ' day'
  } else if (Math.floor(time / 3600) != 0) {
    return Math.floor(time / 3600) + ' hour'
  } else {
    return Math.floor(time / 60) + ' minute'
  }
}

export { Item };
