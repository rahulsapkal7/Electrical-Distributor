/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,AsyncStorage,
  View,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserData} from '../../redux/actions/UserData_action';
import Header from '../../common/header';
import commonStyles from '../../common/commonStyle';



 class Register extends Component {
  constructor(props) {
    super(props);
    this.registerCall = this
      .registerCall
      .bind(this);

    this.state = {
     
      firstname: '',
      lastname: '',
      email: '',
      mobile_No: '',
      password: '',
      gender: '',
      ConfirmPassword :'',
      terms_condition: false,
      loading: false,
     
    }
  }
  registerCall() {
    console.log("on click registerCall");
    // this
    // .props
    // .navigation
    // .goBack(null);
    this.props.navigation.navigate('OtpScreen');
  }
  render() {

    return (
      <View style={commonStyles.VWcontainer}>
      
              <Header
                title={'REGISTER'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
      
                        <ActivityIndicator
                            ref='loader'
                            animating={this.state.loading}
                            style={{position : 'absolute',alignSelf : 'center',justifyContent :'center',marginTop : '40%',zIndex : 10}}
                            size="large"/>
      
              <ScrollView contentContainerStyle={{
                width: window.width
              }}>
                <View style={styles.SWcontainer}>
                <TextInput style={commonStyles.editbox} placeholder="Shop Name" 
                                    placeholderTextColor="white" ref="shopName" 
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                
                              <TextInput style={commonStyles.editbox} placeholder="Firm type" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                              <TextInput style={commonStyles.editbox} placeholder="Firm type" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                              <TextInput style={commonStyles.editbox} placeholder="Address1" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                             <TextInput style={commonStyles.editbox} placeholder="Address2" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                              <TextInput style={commonStyles.editbox} placeholder="Landmark" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                              <TextInput style={commonStyles.editbox} placeholder="Timming" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                              <TextInput style={commonStyles.editbox} placeholder="Email Id" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                              <TextInput style={commonStyles.editbox} placeholder="Turnover" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                      <TextInput style={commonStyles.editbox} placeholder="GST No" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                      <TextInput style={commonStyles.editbox} placeholder="PAN No" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                      <TextInput style={commonStyles.editbox} placeholder="Aadhar No" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                      <TextInput style={commonStyles.editbox} placeholder="Password" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                      
                              <TouchableOpacity onPress= {()=> this.registerCall()} style={commonStyles.btnBackground}>
                                  <Text style={commonStyles.textbtn}>Register</Text>
                              </TouchableOpacity>
              </View>
               
      
            
              
      
              </ScrollView>
            </View>
    );
  }
}

const styles = StyleSheet.create({

SWcontainer: {
  alignItems: 'center',
  width:'100%',
  flex :1,
  marginVertical: 50,
},


});
const mapStateToProps = (state, ownProps) => {
    // console.log('state:' + JSON.stringify(state));
    return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Register);