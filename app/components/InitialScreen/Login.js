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
    TouchableOpacity
} from 'react-native';
import Header from '../../common/header';
import commonStyles from '../../common/commonStyle';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import {api} from '../../common/api';


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
        login1: {}
    }
}
loginCall() {
    const {navigate} = this.props.navigation;
    this.setState({loading: true});
                // if (this.state.mobile === '') {
                //     Alert.alert('Login', 'Enter a valid mobile number');
                // } else if (this.state.password === undefined || this.state.password === '') { //(!validators.RegularExpressionPassword(this.state.password))) {
                //     Alert.alert('Login', "Your password should contain Minimum 8 characters & One Upper Case");
                // } else {
                //   console.log("valid",this.state);
                  const url = api() + 'CustLogin.php';
                        var data = new FormData()
                        // data.append('MobileNumber', this.state.mobile ),
                        // data.append('Password', this.state.password),
                        // data.append('UserType', "Customer"),
                        data.append('MobileNumber', "0123456789"),
                        data.append('Password', "pass1"),
                        data.append('UserType', "Customer"),
                        console.log("Data is --> ",JSON.stringify(data));
                        fetch(url, {
                            method: 'POST',
                                body: data
                            })
                            .then(res => res.json())
                            .then(function (response) {
                              console.log('resp -->'+response);
                               console.log('resp -->'+JSON.stringify(response));
                              if(response.status == true){
                                  navigate('DistributorHomePage');
                              }else{
                                  console.log("status code not 200");
                              }
                            })
                            .catch(error => {
                              // this.setState({loading: false});
                              console.log('error:' + (error));
                          });

}

OpenRegister() {
  console.log("on click register1");
  this.props.navigation.navigate('Register');
      
}


  render() {
   
    return (
      <View style={commonStyles.VWcontainer}>
                      <ScrollView
                          contentContainerStyle={{
                          width: window.width
                      }}>
                          <View style={commonStyles.SWcontainer}>
                              <View style={styles.logoBg}>
                                  <Text style={styles.bigWhite}>Electrical</Text>
                              </View>
      
                             
                              <TextInput style={commonStyles.editbox} placeholder="Enter Mobile Number" 
                                    placeholderTextColor="white" ref="mobile"  onSubmitEditing=
                                      {() => this.refs['password'].focus()}
                                      onChangeText={(text) => this.setState({mobile: text})}
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                
                              <TextInput style={commonStyles.editbox} placeholder="Password" 
                                    placeholderTextColor="white" ref="password"  onSubmitEditing=
                                      {() => this.refs['password'].focus()}
                                      onChangeText={(text) => this.setState({password: text})}
                                      underlineColorAndroid={'transparent'} ></TextInput>
      
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
      



});
const mapStateToProps = (state, ownProps) => {
    // console.log('state:' + JSON.stringify(state));
    return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Login);