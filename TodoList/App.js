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

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);

    this.state = {
      tasks: [{ key: 'now' }, { key: 'it' }, { key: 'works' }]
    };
  }

  addTask(task) {
    this.setState({ tasks: this.state.tasks.concat([task]) });
  }

  removeTask(index) {
    this.setState({ tasks: this.state.tasks.filter((_, i) => index != i) });
  }

  renderTask(item, index) {
    return <Task text={ item.key } id={ index } removeTaskCB={ this.removeTask } />;
  }

  render() {
    return (
      <View style={ styles.container }>
          <FlatList
            data={ this.state.tasks }
            renderItem={ ({ item, index }) => this.renderTask(item, index) } />
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
  }
});
