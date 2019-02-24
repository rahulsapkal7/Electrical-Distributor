/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Button,Image,TouchableOpacity} from 'react-native'; 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';

 class DistributorHomePage extends Component {
  constructor(props) {
    super(props);
   

    this.state = {
     
      firstname: '',
      lastname: '',
      
     
    }
  }
  render() {
    return ( 

      <View style={styles.parentcontainer}>
          <View style={styles.menuTextContainer}>
            <Text style={styles.txtMain}>
              Distributor
            </Text>
          </View>

      <View style={styles.verticalContainer}>

       <View style={styles.container}>
           <TouchableOpacity style={styles.containerStyle} >

     <Image source={require('../../assets/images/default-profile.png')} style={styles.image_style}/>

      <Text style={styles.txtMain}>
      Registrations
      </Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.containerStyle} onPress = {()=> this.props.navigation.navigate('PendingOrdersDistributor')}>

      <Image source={require('../../assets/images/default-profile.png')} style={styles.image_style}/>

      <Text style={styles.txtMain}>
      Pending orders
      </Text>
      </TouchableOpacity> 
  </View>


       <View style={styles.container}>
           <TouchableOpacity style={styles.containerStyle} >

     <Image source={require('../../assets/images/default-profile.png')} style={styles.image_style}/>

      <Text style={styles.txtMain}>
      Pending dispatch
      </Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.containerStyle} onPress = {()=> this.props.navigation.navigate('VerifiedCustomers')}>
<Image source={require('../../assets/images/default-profile.png')} style={styles.image_style}/>
      <Text style={styles.txtMain}>
      Verified customers
      </Text>
      </TouchableOpacity> 
  </View>


       <View style={styles.container}>
           <TouchableOpacity style={styles.containerStyle} >
<Image source={require('../../assets/images/default-profile.png')} style={styles.image_style}/>
      <Text style={styles.txtMain}>
      Completed orders
      </Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.containerStyle} >
<Image source={require('../../assets/images/default-profile.png')} style={styles.image_style}/>
      <Text style={styles.txtMain}>
      Send alerts
      </Text>
      </TouchableOpacity> 
  </View>


       <View style={styles.container}>
           <TouchableOpacity style={styles.containerStyle} >
<Image source={require('../../assets/images/default-profile.png')} style={styles.image_style}/>
      <Text style={styles.txtMain}>
      Settings
      </Text>
      </TouchableOpacity>  
     
  </View>


  </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentcontainer: { 
    flexDirection: 'column', 
        backgroundColor: '#ddd',
    height: '100%',  
  },container: { 
    flexDirection: 'row', 
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTextContainer: {   
    height: '7%', 
    backgroundColor:'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor:'#000', 
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
         borderRadius:2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
  },
  verticalContainer: { 
    flexDirection: 'column', 
    height: '90%',
    flex: 1,
  }, 
  contentContainer: {
    padding: 20,
     flex: 1,
  }, 
  insideHorizontalView:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtMain:{
    fontSize: 16,
    color:'white'
  },
  image_style:{
    width:40,
    height:40
  },
  containerStyle: {
    borderWidth:1,
    borderRadius:2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor:'#000', 
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginLeft: 5,
    backgroundColor:'skyblue',
    flex: 1,        
    marginRight: 5, 
    marginTop: 10,
    flexDirection:'column',
    height: '80%',
justifyContent: 'center', 
alignItems: 'center',
}
});

const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(DistributorHomePage);