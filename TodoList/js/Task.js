'use strict';

import React from 'react';

import {
  Platform,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
}


const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  taskText: {
    fontFamily: 'Courier'
  }
});
