import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';

// import Selectors from './../../selectors';
import CoreStyles from './../../styles';

class ShiftActivityLog extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    shiftEntries: PropTypes.array,
    expectedTotal: PropTypes.number,
  };
  static defaultProps = {
    isFetching: true,
    shiftEntries: [],
    expectedTotal: 0,
  };

  renderActivity({ item }) {
    return (
      <TransactionItem item={item} />
    );
  }

  render() {
    const { isFetching, shiftEntries, expectedTotal } = this.props;

    return (
      <View style={styles.container}>
        <Header
          text="Shift Activity Log"
          backgroundColor={CoreStyles.colors.primaryDark}
        />
        <FlatList
          display={(!isFetching) ? 'flex' : 'none'}
          data={shiftEntries}
          keyExtractor={entry => entry.id}
          renderItem={this.renderActivity}
          style={styles.list}
        />
        <ActivityIndicator
          display={isFetching ? 'flex' : 'none'}
          size={100}
          style={styles.spinner}
          color={CoreStyles.colors.primaryDark}
        />
        <View style={styles.footer}>
          <Text style={[styles.footerText, styles.totalTitle]}>Expected Drawer Total</Text>
          <Text style={[styles.footerText, styles.totalAmount]}>{formatMoney(expectedTotal)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CoreStyles.colors.text.light,
  },
  list: {
    height: '100%',
    marginBottom: CoreStyles.layout.gutter.height * 5,
  },
  spinner: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  footer: {
    flex: 1,
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
    flexDirection: 'row',
    height: CoreStyles.layout.gutter.height * 5,
    bottom: 0,
    backgroundColor: CoreStyles.colors.greyLightest,
  },
  footerText: {
    paddingTop: CoreStyles.layout.gutter.height * 1.5,
    color: CoreStyles.colors.greyMid,
  },
  totalTitle: {
    fontSize: 24,
    paddingLeft: CoreStyles.layout.gutter.width * 2.5,
  },
  totalAmount: {
    fontSize: 24,
    paddingRight: CoreStyles.layout.gutter.width * 2.5,
  },
});

const mapStateToProps = (state) => {
  const isFetching = Selectors.getIsShiftReportFetching(state);
  const entries = isFetching ? [] : ManageShiftSelectors.getFormulatedShiftLogEntries(state);
  const total = sumExpectedDrawerTotal(entries);

  return ({
    isFetching,
    shiftEntries: entries,
    expectedTotal: total,
  });
};

const mapDispatchToProps = () => ({});

const ShiftActivityLogContainer = connect(mapStateToProps, mapDispatchToProps)(ShiftActivityLog);
export default ShiftActivityLogContainer;