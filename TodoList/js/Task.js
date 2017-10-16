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
      text: "foowy"
    };
  }

  renderTask() {
    return (
      <View style={ styles.task }>
        <Text style={ styles.taskText }>
          { this.props.text }
        </Text>

        <Button
          title={ '\u2717' }
          onPress={ () => this.props.removeTaskCB(this.props.id) } />
      </View>
    );
  }

  renderInput() {
    return (
      <View>
        <TextInput
          selectTextOnFocus={ true }
          style={ styles.input }
          onChangeText={ text => this.setState({ text }) }
          onEndEditing={ () => this.props.saveTaskCB(this.state.text, this.props.id) }
          value={ this.state.text } />
      </View>
    );
  }

  render() {
    return this.renderInput();
  }
}


const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  taskText: {
    fontFamily: 'Courier'
  },

  input: {
    height: 40,
    borderColor: 'transparent',
    borderWidth: 1,
    fontFamily: 'Courier'
  }
});
