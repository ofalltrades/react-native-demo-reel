'use strict';

import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  TextInput,
  Keyboard
} from 'react-native';

import Task from './js/Task'

const isAndroid = Platform.OS == "android";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.list }>
          <FlatList
            data={[{ key: 'dsa' }, { key: 'bar' }]}
            renderItem={ ({ item }) => <Task text={ item.key } /> } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10
  },

  list: {
  }
});
