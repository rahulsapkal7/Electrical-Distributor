import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Text,
  Image,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from '../InitialScreen/Login';
import {UserData} from '../../redux/actions/UserData_action';

 class Main extends Component {


  render() {
      return <Login />
  }
}



const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Main);
