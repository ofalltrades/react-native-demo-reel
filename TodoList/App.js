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
      tasks: [
        { key: 'now', new: false },
        { key: 'it', new: false },
        { key: 'works', new: false }
      ]
    };
  }

  addTask(task) {
    this.setState({ tasks: this.state.tasks.concat([task]) });
  }

  removeTask(id) {
    this.setState({ tasks: this.state.tasks.filter((_, i) => id !== i) });
  }

  saveTask(newTask, id) {
    if (newTask.key !== '') {
      this.setState({ tasks: this.state.tasks.map(
        (task, i) => i === id ? { key: newTask.key, new: newTask.new } : task
      )});
    } else {
      this.removeTask(id);
    }
  }

  renderTask(task, id) {
    return (
      <Task
        task={ task }
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
            onPress={ () => this.addTask({ key: '', new: true }) }>
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
    justifyContent: 'center'
  },

  addButtonText: {
    color: 'green',
    fontSize: 75,
    padding: 15,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 20
  }
});
