'use strict';

import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Keyboard,
  Button
} from 'react-native';

import Task from './js/Task'

const isAndroid = Platform.OS == "android";

export default class App extends React.Component {
  constructor() {
    super();

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.saveTask = this.saveTask.bind(this);

    this.state = {
      tasks: [{ key: 'now' }, { key: 'it' }, { key: 'works' }]
    };
  }

  addTask(task) {
    this.setState({ tasks: this.state.tasks.concat([task]) });
  }

  removeTask(index) {
    this.setState({ tasks: this.state.tasks.filter((_, i) => index !== i) });
  }

  saveTask(text, id) {
    this.setState({ tasks: this.state.tasks.map(
      (task, i) => i === id ? { key: text } : task
    )});
  }

  renderTask(task, id) {
    return (
      <Task
        text={ task.key }
        id={ id }
        removeTaskCB={ this.removeTask }
        saveTaskCB={ this.saveTask } />
    );
  }

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          data={ this.state.tasks }
          renderItem={ ({ item, index }) => this.renderTask(item, index) } />

        <View style={ styles.addButton }>
          <Text
            style={ styles.addButtonText }
            onPress={ () => null }>
            +
          </Text>
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

  addButton: {
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    justifyContent: 'center'
  },

  addButtonText: {
    color: 'green',
    backgroundColor: 'yellow',
    fontSize: 50,
    padding: 15,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 20
  }
});
