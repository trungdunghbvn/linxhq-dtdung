import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { addCount } from '../actions';
import Button from 'react-native-button';

class Account extends Component {
  test=()=>{
    this.props.addCounts();
  }
  render() {
    return (
      <View>
          <Text>Test1</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  searchReducer: state.searchReducer
});
const mapDispatchToProps = dispatch => ({
  addCounts: () => dispatch(addCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
