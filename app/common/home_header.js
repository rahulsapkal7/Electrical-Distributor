import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet,Image, TouchableOpacity,ToolbarAndroid} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import OptionsMenu from "react-native-options-menu";
import {  Icon } from 'native-base';

// const MoreIcon =;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: (Platform.OS === 'ios')
      ? 70
      : 50,
    width: '100%',
    backgroundColor: '#7dca20',
    alignItems: 'center',
    // borderColor : "yellow",     borderWidth : 1,
  },
  Titlecontainer: {
    width: '70%',
   // marginLeft: '15%',
    alignItems: 'center'
  },
  Menucontainer:{
    width: '20%',
    alignItems: 'center'
  },
  Backcontainer: {
    width: '15%',
    alignItems: 'center'
    
  },
  text: {
    alignItems: 'center',
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'white'
    // color: '#0094d8'
  },
  TxtIP: {
    fontSize: 20,
    marginTop: 5,
    //top : 3,
    alignItems: 'center',
    // fontWeight: 'bold', top:10,
    color: '#818285'
  },
  image_style:{
    width:30,
    height:30
  }
});

class Home_header extends Component {

  constructor(props) {
    super(props);
    this.state = {
     

  };
  }
  
  render() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Backcontainer} onPress={this.props.menu}>
      {/* <Icon name='notifications'  style={{ color: "black" }} /> */}
      <Icon name='menu'  style={{ color: "black" }} />
      
      </TouchableOpacity>
      <View style={styles.Titlecontainer}>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
        
      </View>    
      <View style={styles.Menucontainer}>
      <Icon name='cart'  style={{ color: "black" }} />
      
      {/* <OptionsMenu
  button={ require("../assets/images/Menu-Circles.png")}
  buttonStyle={{ width: "30%", height: "80%", margin: 7.5, resizeMode: "contain" }}
  destructiveIndex={1}
  options={["Setting", "My Profile", "Logout"]}
  actions={[this.props.goToSetting, this.props.goToMyProfile, this.props.Logout]}/> */}
    </View>
    </View>
  );
}
}


export default (Home_header);


