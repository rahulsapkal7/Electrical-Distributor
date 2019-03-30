/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 test comment 12
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    Alert,
    TextInput,
    AsyncStorage,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,Picker
} from 'react-native';
import Header from '../../common/header';
import commonStyles from '../../common/commonStyle';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import {api} from '../../common/api';
import Loader from '../../common/Loader.js';
var validators = require('../../lib/validators').validators();


 class Login extends Component {
  constructor(props) {
    super(props);
    this.loginCall = this
        .loginCall
        .bind(this);

        this.OpenRegister = this
        .OpenRegister
        .bind(this);
        
        
    this.state = {
        mobile: '',
        token :'',
        password: '',
        loading: false,
        userType: "select",
        login1: {}
    }
}
loginCall() {
    const {navigate} = this.props.navigation;
    // AsyncStorage.setItem('@UserId:key', "2");
    // this
    // .props
    // .UserData(2);
    // navigate('ShopkeeperHomePage');
    
                if (this.state.mobile === '' || this.state.mobile === undefined || (!validators.RegularExpressionMobileNumber(this.state.mobile))) {
                    Alert.alert('Login', 'Please Enter a register mobile number');
                } else if (this.state.password === undefined || this.state.password === '') { //(!validators.RegularExpressionPassword(this.state.password))) {
                    Alert.alert('Login', "Please enter password");
                }  else if (this.state.userType === undefined || this.state.userType === 'select') { //(!validators.RegularExpressionPassword(this.state.password))) {
                    Alert.alert('Login', "Please select user type.");
                } 
                else {
                //   console.log("valid",this.state);
                var url = ""
                if (this.state.userType == "Customer") {
                    url = api() + 'CustLogin.php';
                } else {
                    url = api() + 'AdminLogin.php';
                }
                //   const url = api() + 'CustLogin.php';
                        var data = new FormData()
                        data.append('PrimaryMobileNo', this.state.mobile ),
                        data.append('Password', this.state.password),
                        data.append('UserType', this.state.userType),
                        // data.append('MobileNumber', "0123456789"),
                        // data.append('Password', "pass1"),
                        // data.append('UserType', "Customer"),
                        // data.append('MobileNumber', "1234567890"),
                        // data.append('Password', "password"),
                        // data.append('UserType', "Admin"),
                        console.log("Data is --> ",JSON.stringify(data));
                        this.setState({loading: true});
                        var ThisView = this;
                        fetch(url, {
                            method: 'POST',
                                body: data
                            })
                            .then(res => res.json())
                            .then(function (response) {
                                ThisView.setState({loading: false});
                              console.log('resp -->'+response);
                               console.log('resp -->'+JSON.stringify(response));
                              if(response.status == true){
                                // this.setState({
                                //     mobile : "",
                                //     password :"",
                                //     userType : ""
                                // })
                                if (ThisView.state.userType == "Customer") {
                                    ThisView.props.UserData(response.data[0].UserID);
                                    AsyncStorage.setItem('@shopkeeperId:key', response.data[0].UserID); 
                                    navigate('ShopkeeperHomePage2');
                                } else {
                                    
                                    navigate('DistributorHomePage');
                                    // navigate('ShopkeeperHomePage');
                                    
                                }
                                 
                              }else{
                                  console.log("status code not 200");
                                  Alert.alert('Login Failed', response.message);
                              }
                            })
                            .catch(error => {
                                ThisView.setState({loading: false});
                              console.log('error:' + (error));
                          });
                        }
}

OpenRegister() {
  console.log("on click register1");
  this.props.navigation.navigate('Register');
      
}


  render() {
   
    return (
      <View style={commonStyles.VWcontainer}>
          <Loader visible={this.state.loading}/>
                      <ScrollView
                          contentContainerStyle={{
                          width: window.width
                      }}>
                      
                          <View style={commonStyles.SWcontainer}>
                              <View style={styles.logoBg}>
                                  <Text style={styles.bigWhite}>PROTON</Text>
                              </View>
      
                             
                              <TextInput style={commonStyles.editbox} placeholder="Enter Mobile Number" 
                                    placeholderTextColor="white" ref="mobile"   keyboardType="numeric"
                                      onChangeText={(text) => this.setState({mobile: text})}
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                
                              <TextInput style={commonStyles.editbox} secureTextEntry={true} placeholder="Password" 
                                    placeholderTextColor="white" ref="password"  onSubmitEditing=
                                      {() => this.refs['password'].focus()}
                                      onChangeText={(text) => this.setState({password: text})}
                                      underlineColorAndroid={'transparent'} ></TextInput>
      
      <Picker
  selectedValue={this.state.userType}
  mode="dropdown"
  style={commonStyles.editbox}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({userType: itemValue})
  }>
  <Picker.Item label="Please select type" value="select" />
  <Picker.Item label="Customer" value="Customer" />
  <Picker.Item label="Distributor" value="Admin" />
</Picker>
                              <TouchableOpacity
                                  style={{
                                  alignItems: 'center',
                                  height: 25
                                     }}>
                                  <Text style={commonStyles.TxtFont}>Forgot Password ?</Text>
                              </TouchableOpacity>
      
                              <TouchableOpacity onPress= {()=> this.loginCall()} style={commonStyles.btnBackground}>
                                  <Text style={commonStyles.textbtn}>LOGIN</Text>
                              </TouchableOpacity>
      
                              <TouchableOpacity
                                  onPress=
                                  {()=> this.OpenRegister()}
                                  style={{
                                  alignItems: 'center',
                                  height: 25,
                                  marginTop: 15
                              }}>
                                  <Text style={commonStyles.TxtFont}>Register</Text>
                              </TouchableOpacity>
      
                          </View>
      
                      </ScrollView>
                  </View>
      
    );
  }
}

const styles = StyleSheet.create({

    logoBg : {
        height : 100,
        marginTop:10,   
        marginBottom: 20,     
        alignItems :'center',
      },
      bigWhite: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 45,  
          marginTop : 40,      
      },
      dropdownbox: {
        width: 300,
        height: 40, 
        borderRadius: 5,
        borderColor: 'white',
        borderWidth:1,
        paddingHorizontal: 10,
        color: 'white',
        marginVertical: 10,
        marginBottom:30
    },



});
const mapStateToProps = (state, ownProps) => {
    console.log('mapStateToProps login:' + JSON.stringify(state));
    return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Login);