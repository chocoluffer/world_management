import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  setMethod = (method) => {
    console.log(method)
    // set into state
    // navigate to proper container
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.setMethod('city')}>By City</Text>
        <Text onPress={() => this.setMethod('industry')}>By Industry</Text>
        <Text>test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
