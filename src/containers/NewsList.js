import React, { Component } from 'react';
import {
  View, Text, ListView, Platform,
  TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { NavigationActions } from 'react-navigation'

import { loadData, resetNews } from '../actions'
import Item from '../components/Item'

// import { DrawerButton } from '../components/DrawerButton'

class NewsList extends Component {

  static PAGE_SIZE = 30;

  static navigationOptions = {
    title: 'HN',
    header: (navigation) => {
      if (navigation.state.params != undefined)
        color = navigation.state.params.color;
      else color = 'yellow';
      // console.log('color', navigation)
      return ({
        left:
        < TouchableOpacity onPress={() => navigation.navigate('tabs')} style={{ paddingLeft: 10 }}>
          <Icon name='md-menu' size={30} color='white' />
        </TouchableOpacity >
        ,
        titleStyle: { paddingLeft: 100 },
        style: { backgroundColor: color },
        right: (< TouchableOpacity onPress={() => {
          navigation.dispatch(resetNews(navigation.state.params.category, NewsList.PAGE_SIZE))
        }} style={{ paddingRight: 10 }}>

          <FontAwesome name='refresh' size={30} style={{ paddingRight: 5 }} color='white' />

        </TouchableOpacity>),
        tintColor: 'white'

      });
    }
  }

  componentWillMount() {
    this.index = 0;
    this.props.navigation.setParams({ color: this.props.theme.color });
    if (this.props.navigation.state.params == undefined){
      this.props.navigation.setParams({ category: this.props.news.category});
      // console.log('navigation', this.props.navigation);
      // this.props.dispatch(NavigationActions.setParams({params:{category: this.props.news.category}, key: 'newsList'}));
      this.props.dispatch(loadData(this.props.news.category, 0, NewsList.PAGE_SIZE));
      
    }else
      this.props.dispatch(loadData(this.props.navigation.state.params.category, 0, 30));
    //  this.props.navigation.dispatch(loadData(this.props.navigation.state.params.category, 0, NewsList.PAGE_SIZE));
    
    this.createDataSource(this.props.news);

  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.news);
    // if (this.props.navigation.state.params != undefined) {
    //   if (this.props.navigation.state.params.color !== this.props.theme.color)
    //     this.props.navigation.setParams({ color: this.props.theme.color });
    // } else
    //   this.props.navigation.setParams({ color: this.props.theme.color });
    // console.log('navigation', this.props.navigation);
  }

//   shouldComponentUpdate(nextProps, nextState){
//     return this.props.news.done;
// }

  createDataSource({data} ) {
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(data);
  }

  render() {

    return (

      <ScrollView style={styles.container} >
        {
          this.props.error ?
            <View style={styles.error}>
              <Text>{this.props.error}</Text>
            </View> :
            null
        }
        {
          this.props.isFetching ?
            <View style={{flex: 1}}>
              <ActivityIndicator
                animating={true}
                style={styles.centering}
                size="large"
              />
              <Text style={styles.loading}> Loading.... </Text>
            </View>
            :
            null
        }
        {
          (this.props.news.data.length > 0) ?
            <ListView

              enableEmptySections
              dataSource={this.dataSource}
              renderRow={(item) => {

                if (item)
                  return <Item item={item} />
                else return null;
              }}

            />
            : null

        }
        {(this.dataSource.getRowCount() == (this.index + 1) * NewsList.PAGE_SIZE) ?
          <TouchableOpacity onPress={() => {
            this.index++;
            this.props.dispatch(loadData(this.props.navigation.state.params.category, this.index, NewsList.PAGE_SIZE));
          }}
            style={styles.buttonMore} >
            <Text > LOAD MORE </Text>
          </TouchableOpacity>
          : null
        }
      </ScrollView>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonMore: {
    backgroundColor: '#E3E5E6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  }
})

const mapStateToProps = (state) => {
  return {
    news: state.newsReducer,
    isFetching: state.loadingReducer.isFetching,
    error: state.errorReducer.error,
    theme: state.themeReducer,
    nav: state.navigationReducer,
  };
}

const mapDispatchToProps = (dispatch) => {

  return {
    loadNews: (category, index, number) => dispatch(loadData(category, index, number))
  }
}

// export default connect(mapStateToProps, { loadData })(NewsList);
export default connect(mapStateToProps)(NewsList);
