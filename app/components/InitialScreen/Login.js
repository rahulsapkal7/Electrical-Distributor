/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 test comment 1
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
        email: '',
        token :'',
        password: '',
        loading: false,
        login1: {}
    }
}
loginCall() {
  // this.setState({loading: true});
//   if (this.state.email === '') {
//       Alert.alert('Login', 'Enter a valid mail or number');
//   } else if (this.state.password === undefined || this.state.password === '') { //(!validators.RegularExpressionPassword(this.state.password))) {
//       Alert.alert('Login', "Your password should contain Minimum 8 characters & One Upper Case");
//   } else {
    console.log("valid",this.state);
    // Alert.alert('Login', this.state.email);
    // this.props.navigation.navigate('ShopkeeperHomePage');
    if (this.state.email == 1 || this.state.email == '1' ) {
            this.props.navigation.navigate('ShopkeeperHomePage');
          } else{
            this.props.navigation.navigate('DistributorHomePage');
            
          } 
      // this.setState({loading: true});
      // const url = api() + 'authenticate';

      // fetch(url, {
      //     method: 'POST',
      //     headers: {
      //         'Accept': 'application/json',
      //         'Content-Type': 'application/json'
      //     },
      //         body: JSON.stringify({emailAddressUsername: this.state.email, password: this.state.password})
      //     })
      //     .then(response => response.json())
      //     .then(res => {

      //         //console.log('reult' + JSON.stringify(res));
      //          if (res.message === undefined) {
      //              Globals.AccessToken = res.access_token;
      //             AsyncStorage.setItem('@AccessToken:key', res.access_token);
      //             AsyncStorage.setItem('@ExpireDate:key', res.expires_on);
      //             this.getUserId(res.access_token);
                     

      //         } else {
      //             this.setState({loading: false});
             
      //             Alert.alert('Login', res.message);
      //         }

      //     })
      //     .catch(error => {
      //         this.setState({loading: false});
      //         console.log('error:' + (error));

      //     });

//   }

}

OpenRegister() {
  console.log("on click register1");
  // this
  // .props
  // .navigation
  // .goBack(null);
  this.props.navigation.navigate('Register');
      
      
      
}


  render() {
    // const {navigate} = this.props.navigation;
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
      
                             
                              <TextInput style={commonStyles.editbox} placeholder="Email or Mobile Number" 
                                    placeholderTextColor="white" ref="email"  onSubmitEditing=
                                      {() => this.refs['password'].focus()}
                                      onChangeText={(text) => this.setState({email: text})}
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