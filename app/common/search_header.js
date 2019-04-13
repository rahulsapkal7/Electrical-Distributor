import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {  Icon } from 'native-base';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: (Platform.OS === 'ios')
      ? 70
      : 50,
    width: '100%',
    backgroundColor: '#7dca20',
    // backgroundColor: 'skyblue',
    alignItems: 'center',
    // borderColor : "yellow",     borderWidth : 1,
  },
  Titlecontainer: {
    width: '70%',
   // marginLeft: '15%',
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

class search_header extends Component {

  constructor(props) {
    super(props);
    this.state = {
     

  };
  }

  render() {
  return (
    <View style={styles.container}>
    {this.props.hideBack == "true" ? 
    <View style={styles.Backcontainer}></View>
    : 
      <TouchableOpacity style={styles.Backcontainer} onPress={this.props.back}>
      <Icon name='arrow-back' style={{ color: "black" }} />
      {/* <Image source={require('../assets/images/back.png')} style={styles.image_style}/> */}
      </TouchableOpacity>
    }
     

      <View style={styles.Titlecontainer}>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
        
      </View>     
    </View>
  );
}
}


export default (search_header);


