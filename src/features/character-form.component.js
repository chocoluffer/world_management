import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

// import Selectors from './../../selectors';
import CoreStyles from './../styles';

import EYE_COLORS from './../resources/eye-colors';
import OCCUPATIONS from './../resources/occupations';
import SNIPPET_DATA from './../resources/snippet-data';

export default class CharacterForm extends Component {
  // static propTypes = {
  //   isFetching: PropTypes.bool,
  //   shiftEntries: PropTypes.array,
  //   expectedTotal: PropTypes.number,
  // };
  // static defaultProps = {
  //   isFetching: true,
  //   shiftEntries: [],
  //   expectedTotal: 0,
  // };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genName: '',
      age: '',
      genAge: '',
      eye: '',
      genEye: '',
      height: '',
      genHeight: '',
      snippet: '',
    };
  }

  onChangeName = name => this.setState({ name });
  onChangeAge = age => this.setState({ age });
  onChangeEye = eye => this.setState({ eye });
  onChangeHeight = height => this.setState({ height });

  setGeneratedDetails = (name, age, eye, height) => {
    this.setState({
      genName: name,
      genAge: age,
      genEye: eye,
      genHeight: height,
    })
  }

  generateNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  generate = () => {
    console.log('ay lmeao');
    let name = this.state.name;
    let age = this.state.age;
    let eye = this.state.eye;
    let height = this.state.height;

    if (!this.state.age) {
      // age = (Math.floor(Math.random() * Math.floor(120))).toString();
      age = this.generateNumber(120).toString();
    }
    if (!this.state.eye) {
      // eye = EYE_COLORS[Math.floor(Math.random() * Math.floor(EYE_COLORS.length))];
      eye = EYE_COLORS[this.generateNumber(EYE_COLORS.length)];
    }

    this.generateSnippet();
    this.setGeneratedDetails(name, age, eye, height);
  }

  generateSnippet = () => {
    const { ADJECTIVES, AUX_VERB, INFINITIVE, NOUN } = SNIPPET_DATA;
    // adjective / noun(boy/girl etc?) / 'who' / aux verb + participle  / infinitive / noun
    // angry boy who is motivated to discover his past
    const str =
      ADJECTIVES[this.generateNumber(ADJECTIVES.length)]
      + ' girl who '
      + AUX_VERB[this.generateNumber(AUX_VERB.length)] + ' '
      + INFINITIVE[this.generateNumber(INFINITIVE.length)] + ' '
      + NOUN[this.generateNumber(NOUN.length)];

    this.setState({ snippet: str });
  }

  reset = () => {
    this.setState({
      name: '',
      age: '',
      eye: '',
      height: '',
    });
  }

  // randomly generate from 0 to max index in the database table
  // GET from table, return

  render() {
    // const {  } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Text>Character Details</Text>
          <Text>Enter as many or as few fields as desired.</Text>
          <TextInput
            style={{height: 40, borderWidth: 1, borderColor: 'gray'}}
            onChangeText={this.onChangeName}
            value={this.state.name}
            placeholder={'Name'}
          />
          <TextInput
            style={{height: 40, borderWidth: 1, borderColor: 'gray'}}
            onChangeText={this.onChangeAge}
            value={this.state.age}
            placeholder={'Age'}
          />
          <TextInput
            style={{height: 40, borderWidth: 1, borderColor: 'gray'}}
            onChangeText={this.onChangeEye}
            value={this.state.eye}
            placeholder={'Eye Color'}
          />
          <Button
            style={styles.button}
            onPress={this.reset}
            title='RESET PROVIDED DETAILS'
            color='red'
          />
          <Button
            style={styles.button}
            onPress={this.generate}
            title='Generate Character'
            color='blue'
          />
        </View>
        <View>
          <Text>Generated Character:</Text>
          <Text>Name:</Text>
          <Text>Age:</Text>
          <Text>{this.state.genAge}</Text>
          <Text>Eye Color:</Text>
          <Text>{this.state.genEye}</Text>
          <Text>Basic Personality:</Text>
          <Text>{this.state.snippet}</Text>
        </View>
      </View>
    );
  }
}

// <TextInput
//             style={{height: 40, borderWidth: 1, borderColor: 'gray'}}
//             onChangeText={this.onChangeHeight}
//             value={this.state.height}
//             placeholder={'Height'}
//           />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: CoreStyles.colors.text.light,
  },
  button: {
    padding: 10,
  },
});