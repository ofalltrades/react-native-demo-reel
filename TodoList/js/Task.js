'use strict';

import React from 'react';

import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

export default class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { key: '', new: props.task.new }
    };
  }

  editTask() {
    this.setState({ task: { key: this.props.task.key, new: true } });
    this.props.saveTaskCB(this.state.task, this.props.id);
  }

  renderTask() {
    return (
      <View style={ styles.task }>
        <Text
          style={ styles.taskText }
          numberOfLines={ 1 }
          ellipsizeMode='tail'
          onLongPress={ () => this.editTask() }>
          { this.props.task.key }
        </Text>

        <Button
          title={ '\u2717' }
          color='black'
          onPress={ () => this.props.removeTaskCB(this.props.id) } />
      </View>
    );
  }

  renderInput() {
    return (
      <View>
        <TextInput
          selectTextOnFocus={ true }
          autoFocus={ this.props.task.new }
          style={ styles.input }
          onChangeText={ text => this.setState({ task: { key: text, new: false } }) }
          onEndEditing={ () => this.props.saveTaskCB(this.state.task, this.props.id) }
          onBlur={ () => this.props.saveTaskCB({ key: this.props.task.key, new: false }, this.props.id) }
          value={ this.state.task.key } />
      </View>
    );
  }

  render() {
    return this.props.task.new ? this.renderInput() : this.renderTask();
  }
}


const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  taskText: {
    fontFamily: 'Courier',
    fontSize: 20,
    width: '90%'
  },

  input: {
    height: 40,
    borderColor: 'transparent',
    borderWidth: 1,
    fontFamily: 'Courier'
  }
});
