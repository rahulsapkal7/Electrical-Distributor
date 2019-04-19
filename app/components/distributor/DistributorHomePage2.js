/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,ImageBackground, Text, View,ScrollView,Button,Image,TouchableOpacity} from 'react-native'; 
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
      <ImageBackground source={require('../../assets/images/backgroundImg.jpeg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.parentcontainer}>
          <View style={styles.menuTextContainer}>
            <Text style={{fontSize: 16,
    color:'white'}}>
              PROTON ENTERPRISE
            </Text>
          </View>

      <View style={styles.verticalContainer}>

      
           <TouchableOpacity style={styles.containerStyle}  onPress = {()=> this.props.navigation.navigate('PendingOrdersDistributor')}>
      <Text style={styles.txtMain}>
      Registrations
      </Text>
      </TouchableOpacity>  
  
      <TouchableOpacity style={styles.containerStyle}  onPress = {()=> this.props.navigation.navigate('PendingOrdersDistributor')}>
      <Text style={styles.txtMain}>
      Add Product Images
      </Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.containerStyle}  onPress = {()=> this.props.navigation.navigate('PendingOrdersDistributor')}>
      <Text style={styles.txtMain}>
      Product Display
      </Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.containerStyle}  onPress = {()=> this.props.navigation.navigate('PendingOrdersDistributor')}>
      <Text style={styles.txtMain}>
      Orders
      </Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.containerStyle}  onPress = {()=> this.props.navigation.navigate('PendingOrdersDistributor')}>
      <Text style={styles.txtMain}>
      Upload  Offer Images
      </Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.containerStyle}  onPress = {()=> this.props.navigation.navigate('PendingOrdersDistributor')}>
      <Text style={styles.txtMain}>
      Upload  scroller Images
      </Text>
      </TouchableOpacity>  

  </View>


      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  parentcontainer: { 
    flexDirection: 'column', 
       
    height: '100%',  
  },container: { 
    flexDirection: 'row', 
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTextContainer: {   
    height: '7%', 
    backgroundColor:'#7dca20',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor:'#000', 
        shadowOpacity: 0.5,
        // shadowRadius: 5,
        elevation: 5,
        //  borderRadius:2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
  },
  verticalContainer: { 
    flexDirection: 'column', 
    // height: '90%',
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
    color:'#7dca20'
  },
  image_style:{
    width:40,
    height:40
  },
  containerStyle: {
    // borderWidth:1,
    borderRadius:2,
    borderColor: 'white',
    // borderBottomWidth: 0,
    shadowColor:'#000', 
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    // marginLeft: 15,
    padding : 5,
    backgroundColor:'white',
    // flex: 1,        
    // marginRight: 5, 
    marginTop: 20,
    flexDirection:'column',
    alignSelf: 'flex-start' ,
justifyContent: 'center', 
alignItems: 'center',
height: '7%',
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