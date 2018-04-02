import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';

import CoreStyles from './../../styles';

class SelectNpcSort extends Component {
  setMethod = (method) => {
    console.log(method)
    // set into state
    // navigate to proper container
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.button} onPress={() => this.setMethod('city')}>By City</Text>
        <Text style={styles.button} onPress={() => this.setMethod('industry')}>By Industry</Text>
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
  button: {
    height: 60,
    fontSize: 18,
    backgroundColor: CoreStyles.colors.primary,
    color: CoreStyles.colors.text.light,
  }
});

const mapStateToProps = state => {
  // const thing = Selectors.getThing(state);

  return ({
    // thing,
  });
};

const mapDispatchToProps = dispatch => ({
  // set method
});

const SelectNpcSortContainer = connect(mapStateToProps, mapDispatchToProps)(SelectNpcSort);
export default SelectNpcSortContainer;
