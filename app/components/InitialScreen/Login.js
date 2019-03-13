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
  this.setState({loading: true});
                  this.props.navigation.navigate('DistributorHomePage');
  


                // if (this.state.mobile === '') {
                //     Alert.alert('Login', 'Enter a valid mobile number');
                // } else if (this.state.password === undefined || this.state.password === '') { //(!validators.RegularExpressionPassword(this.state.password))) {
                //     Alert.alert('Login', "Your password should contain Minimum 8 characters & One Upper Case");
                // } else {
                //   console.log("valid",this.state);
                //   const url = api() + 'CustLogin.php';
                  
                //         var data = new FormData()
                //         // data.append('MobileNumber', this.state.mobile ),
                //         // data.append('Password', this.state.password),
                //         // data.append('UserType', "Customer"),
                //         data.append('MobileNumber', "0123456789"),
                //         data.append('Password', "pass1"),
                //         data.append('UserType', "Customer"),
                //         console.log("Data is --> ",JSON.stringify(data));
                        
                //         fetch(url, {
                //             method: 'POST',
                //                 body: data
                           
                //             })
                //             .then(res => res.json())
                //             // .then(function(response){
                //             .then(function (response) {
                //               console.log('resp -->'+response);
                //                console.log('resp -->'+JSON.stringify(response));
                //               console.log('resp -->'+response._bodyInit);
                //               // alert('first then',JSON.stringify(response._bodyInit) );
                //               if(response.status == '200'){
                //                   // this.setState({loading: false});
                //                   this.props.navigation.navigate('DistributorHomePage');
                //               //   alert(response._bodyInit.message);
                //               }else{
                //                   console.log("status code not 200");
                //               }
                //             })
                //             .catch(error => {
                //               // this.setState({loading: false});
                //               console.log('error:' + (error));
                              
                //           });
                // // }


    //                  const url = api() + 'CustLogin.php';

    //   var data = new FormData()
    //   data.append('MobileNumber', "0123456789"),
    //   data.append('Password', "pass1"),
    //   data.append('UserType', "Customer"),
    //   console.log("Data is --> ",JSON.stringify(data));
      
    //   fetch(url, {
    //       method: 'POST',
    //           body: data
            
         
    //       })
    //       .then(function (response) {
    //         console.log('resp -->'+response);
    //          console.log('resp -->'+JSON.stringify(response));
    //         console.log('resp -->'+response._bodyInit);
    //         // alert('first then',JSON.stringify(response._bodyInit) );
    //         if(response.status == '200'){
    //             this.setState({loading: false});
    //             this.props.navigation.navigate('DistributorHomePage');
    //         //   alert(response._bodyInit.message);
    //         }else{

    //         }
    //       })
    //       .catch(error => {
    //         this.setState({loading: false});
    //         console.log('error:' + (error));
            
    //     });
        //   .then(response => response.json())
        // .then(function(response){
        //     return response;
        //   })
        //   .then(function(data){
        //     console.log('reult' + data);  
        //     console.log('reult' + JSON.stringify(data));  
            
        //     return {
        //     //   true
        //     }
        // });
        // .then(result => {
        //  return result.json()
        // })
        // .then(res => {
        //    console.log('reult' + res);
        //     res.result.map((status)=>{
        //         console.log('error:' + status);
        //     })
        //       console.log('reult' + JSON.stringify(res));
        //       this.setState({loading: false});
        //        if (res.status === true) {
        //         //   this.getUserId(res.access_token);
        //         this.setState({loading: false});
        //         // this.props.navigation.navigate('DistributorHomePage');
        //       } else {
        //           this.setState({loading: false});
        //         //   this.props.navigation.navigate('DistributorHomePage');
        //         //   Alert.alert('Login', "You Entered wrong mobile number or password");
        //       }

        //   })
        //   .catch(error => {
        //       this.setState({loading: false});
        //       console.log('error:' + (error));
              
        //   });
  
    // Alert.alert('Login', this.state.mobile);
    // this.props.navigation.navigate('ShopkeeperHomePage');
    // if (this.state.mobile == 1 || this.state.mobile == '1' ) {
    //         this.props.navigation.navigate('ShopkeeperHomePage');
    //       } else{
    //         this.props.navigation.navigate('DistributorHomePage');
            
    //       } 
//       this.setState({loading: true});


//    var data = new FormData();
//               data.append('email', this.state.username);
//               data.append('password', this.state.password);
//                             console.log('data is -->'+JSON.stringify(data));
//          fetch('http://180.149.245.182:8844/trainingapp/api/users/login', {
//             method: "POST",
//             body: data,
//             })
//             .then(function(response) {
//                 console.log('resp -->'+response._bodyInit);
//                 // alert('first then',JSON.stringify(response._bodyInit) );
//                 if(response._bodyInit.status == '200'){
//                   alert(response._bodyInit.message);
//                 }
                
//             })
//             // .then((responseData) => {
//             //     console.log('Checker -->',JSON.stringify(responseData));
//             //     alert('Checker -->',JSON.stringify(responseData));
                
//             // })
//             .catch(function(error) {
               
//                 console.log('error ' + JSON.stringify(error));
//                 console.error(error);
//                 alert('Something went wrong. Please try again.');
//             });                     


    //   const url = api() + 'CustLogin.php';

    //   var data = new FormData()
    //   data.append('MobileNumber', "0123456789"),
    //   data.append('Password', "pass1"),
    //   data.append('UserType', "Customer"),
    //   console.log("Data is --> ",JSON.stringify(data));
      
    //   fetch(url, {
    //       method: 'POST',
    //           body: data
            
         
    //       })
        //   .then(function (response) {
        //     console.log('resp -->'+response);
        //      console.log('resp -->'+JSON.stringify(response));
        //     console.log('resp -->'+response._bodyInit);
        //     // alert('first then',JSON.stringify(response._bodyInit) );
        //     if(response._bodyInit.status == '200'){
        //         this.setState({loading: false});
        //         // this.props.navigation.navigate('DistributorHomePage');
        //     //   alert(response._bodyInit.message);
        //     }
        //   })
        //   .then(response => response.json())
        // .then(function(response){
        //     return response;
        //   })
        //   .then(function(data){
        //     console.log('reult' + data);  
        //     console.log('reult' + JSON.stringify(data));  
            
            // return {
            // //   true
            // }
        // });
        // .then(result => {
        //  return result.json()
        // }).then(res => {
           // console.log('reult' + res);
            // res.result.map((status)=>{
            //     console.log('error:' + status);
            // })
            //   console.log('reult' + JSON.stringify(res));
            //   this.setState({loading: false});
            //    if (res.status === true) {
            //     //   this.getUserId(res.access_token);
            //     this.setState({loading: false});
            //     // this.props.navigation.navigate('DistributorHomePage');
            //   } else {
            //       this.setState({loading: false});
            //     //   this.props.navigation.navigate('DistributorHomePage');
            //     //   Alert.alert('Login', "You Entered wrong mobile number or password");
            //   }

        //   })
        //   .catch(error => {
        //       this.setState({loading: false});
        //       console.log('error:' + (error));
              
        //   });

    //   const url = api() + 'CustLogin.php';

    // const formData = new FormData();
    // formData.append('MobileNumber', "0123456789"),
    //   formData.append('Password', "pass1"),
    //   formData.append('UserType', "Customer"),
    // //  formData.append("MobileNumber", {}); //text data in key value pair form
    //  fetch(
    //     url, 
    //  {
    //  method: 'POST',
    //  headers: {
    //  'Accept': 'application/json',
    //  'Content-Type': 'multipart/form-data'
    //  },
    //  body: formData,
    //  }) 
    //  .then((serviceResponse) => { return serviceResponse.json() } ) 
    //  .catch((error) => console.warn("fetch error:", error))
    //  .then((serviceResponse) => {
    // console.log(JSON.stringify(serviceResponse));
    // });

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